// config: norepeat

// simple toolpath generator

#include "GetObjects.js"
#include "WaitForDialogDone.js"
#include "GetPoint.js"
#include "Common.js"

const DEBUG = true;
const decimals = 3;

debug_filename = '/Users/lensh/Documents/log.txt';
f2 = moi.filesystem.openFileStream( debug_filename, 'w' );
function debug( msg )
{
	moi.log( msg + "\n" );
	f2.writeLine( "--------------------------------\n" + msg + "\n" );
}



// initialize globals
gcode = "";
section = "";
sub_program = "";






function addCommentBlock( comment )
{
	section += "(" + comment.toUpperCase() + ")\n";
	return;
}

function addBlock( block )
{
	section += formatGcode( block ) + "\n";
	return;
}

function addSubProgramBlock( block, comment )
{
	comment = (typeof comment !== 'undefined') ? comment : false;
	if( comment == false )
	{
		sub_program += formatGcode( block ) + "\n";
	}
	else
	{
		sub_program += "(" + block.toUpperCase() + ")\n";
	}
	return;
}

function addSection()
{
	gcode += section; //+ "\nG0 Z1.0\nM1\n\n\n";
	section = ""; //clear the section container
	return;
}


function ToolPathPlasma( curves, origin, feedrate, start_delay )
{
	var gx = "G1";
	var zdepth = -1.01;
	var retract = 0.1;
	var feed = "20.";

	

	for ( var i = 0; i < curves.length; i++ )
	{	
	
		addCommentBlock( "OP" + i );
		addBlock('');
		
		var plasma_start = "M64 P1\nG4 P" + start_delay;
		var plasma_stop = "M65 P1";
		
	
		var segments = curves.item(i).getSubObjects();
		
		usertext = curves.item(i).getAllUserText();
		for ( var u = 0; u < usertext.length; u++ )
		{
			debug( usertext.item(u).key + " => " + usertext.item(u).value + "\n");
			gcode += "(" + usertext.item(u).key + " => " + usertext.item(u).value + ")\n"
		}		
	
		for ( var j = 0; j < segments.length; j++ ) 
		{
			var block = "";
	
			var segment = segments.item(j);
			var min = segment.domainMin;
			var max = segment.domainMax;
			var len = max - min;
			
			var type = "Line";
			var startx = round(segment.getStartPt().x, decimals);
			var starty = round(segment.getStartPt().y, decimals);
			var startz = round(segment.getStartPt().z, decimals);
			var endx = round(segment.getEndPt().x, decimals);
			var endy = round(segment.getEndPt().y, decimals);
			var endz = round(segment.getEndPt().z, decimals);
			
			startx = round( startx - origin.x, decimals );
			starty = round( starty - origin.y, decimals );
			startz = round( startz - origin.z, decimals );
			endx = round( endx - origin.x, decimals );
			endy = round( endy - origin.y, decimals );
			endz = round( endz - origin.z, decimals );
			
			if( j == 0 )
			{
				addBlock( "G0 X" + startx  + " Y" + starty );
				addBlock( "F" + feedrate );
				addBlock( plasma_start );
			}
			if( segment.isLine || segment.isSimpleLine )
			{
				type = "Line";
				block = "G1";
				//block = gx + " X" + endx + " Y" + endy;	
				if( startx != endx )
					block += " X" + endx;
				if( starty != endy )
					block += " Y" + endy;
				
			}
			else if ( segment.isArc )
			{
				type = "Arc";
				var t = min + (3/3 * len);
				var arcCurve = segment.evaluateCurvature( t );
				var arcTangent = segment.evaluateTangent( t );	
				var arcstart = segment.getStartPt();
				var arcmidpoint = segment.evaluatePoint( min + (0.5 * len) );
				var arcend = segment.getEndPt(); //cant use the endpoint for circles
				var clockwise = isClockwise( arcstart, arcmidpoint, arcend );
				debug( "clockwise: " + clockwise );
				arcI = round(endx - startx, decimals);
				arcJ = round(endy - starty, decimals);
				arcRadius = round(segment.conicRadius, decimals);
				var sign = '';
				if( clockwise == 'cw')
					gx = "G2"; 
				else if( clockwise == 'ccw')
					gx = "G3";

				var angle180 = isArcGreaterThan180( segment.conicFrame.origin, arcstart, arcend );
					//alert(angle);
					
				if( ( clockwise == 'cw' && angle180 == false ) || ( clockwise == 'ccw' && angle180 == true ) )
				{
					var sign = '-';
				}
				block = gx + "X" + endx + "Y" + endy + "R" + sign + arcRadius;
			}

			debug( "Seg " + j + "\nType: " + type + "\nStart: " + segment.getStartPt() + "\nEnd: " + segment.getEndPt() + "\nArcCenter: " + segment.conicFrame.origin + " " + clockwise );
			
			//note += "Start: " + segment.getStartPt() + " End: " + segment.getEndPt() + " ArcCenter: " + 
			//		segment.conicFrame.origin;
			
			addBlock( block );
			//if (DEBUG)
				//gcode += " (Segment " + j + " => " + type + ")";
		}	
		
		addBlock( plasma_stop );
		addBlock('');
	}
	addSection();
}





function PickCurves()
{
	if ( !WaitForDialogDone() )
		return;
	
	var objectpicker = moi.ui.createObjectPicker();
	objectpicker.allowCurves();
	
	if ( !GetObjects( objectpicker ) )
		return;

	var curves = objectpicker.objects;
	
	
	
	moi.ui.beginUIUpdate();
	moi.ui.hideUI( 'CurveSelectPrompt' );
	moi.ui.hideUI( 'OffsetProfileSelectPrompt' );
	moi.ui.hideUI( 'tool_path_typeSelectPrompt' );
	moi.ui.hideUI( 'ToolOffsetStartSelectPrompt' );
	moi.ui.hideUI( 'HaasPocketOptionsPrompt' );
	moi.ui.showUI( 'OriginSelectPrompt' );
	moi.ui.endUIUpdate();
	
	// pick origin
	
	var pointpicker = moi.ui.createPointPicker();
	if ( !GetPoint( pointpicker ) )
		return;

	var PickedPt = pointpicker.pt;	

	var origin = {};
	origin.x = round( PickedPt.X, decimals );
	origin.y = round( PickedPt.Y, decimals );
	origin.z = round( PickedPt.Z, decimals );
	origin.coordinate_system = moi.ui.commandUI.coordinate_system.value;

	
	var file_coordinate_system = moi.ui.commandUI.coordinate_system.value;
	
	var preamble = "G54 G90 G17 G0 X0 Y0\nM65 P1";
	addBlock( preamble );
	
	var feedrate = "30";
	var start_delay = "2";
	
	
	//alert(curves.length);	

	ToolPathPlasma( curves, origin, feedrate, start_delay );

	
	
	//file_name = "o69022";
	var file_name = moi.ui.commandUI.file_name.value;
	var file_comment = moi.ui.commandUI.file_comment.value.toUpperCase();
	var file_ext = ".ngc";
	
	var file_path = '/Users/lensh/Documents/'; // will not prompt for save file in debug mode
	//getFileNameFromPath
	
	
	var startcode = "(" + file_comment + ")\n\n";	
	var endcode = "M30\n\n\n";
	
	
	if( !DEBUG )
	{
		//var dir = moi.filesystem.getDirName( 'Dialog caption', 'c:\\initpath' );
		file_name = moi.filesystem.getSaveFileName( 'Export G-code File', 'G-Code Files (*.nc)|*.nc' );
		
		if ( file_name == '' )
			return;
	}

	

	var file = file_path + file_name + file_ext;
	var f = moi.filesystem.openFileStream( file, 'w' );	
	f.writeLine( "%\n" + startcode + gcode + endcode + sub_program + "%");


	f.close();
	f2.close();
	if( DEBUG )
		alert( file_name + file_ext + " Saved" );
	
}

function formatGcode( gcode )
{
	gcode = gcode.toUpperCase();
	//gcode = gcode.replace(/\([^)]*\)/g, ''); //remove comments
	gcode = gcode.replace(/ /g,''); // get rid of any whitespace
	gcode = gcode.replace(/([A-Z])/g, ' $1'); //insert whitespace between capital letters
	//var pattern = new RegExp('\n ', 'g');
	//gcode = gcode.replace(pattern, '\n'); //remove whitespace at beginning of lines
	gcode = gcode.replace(/^\s+/, '');
	gcode = gcode.replace(/\n\s*/g, '\n'); // Removes \n followed by any whitespace
	//undefined is not a constructor (evaluating 'gcode.replace(/^\s+/g,'')')
	
	gcode = gcode.replace( '/ ', '/' );  //remove space after block delete
	return gcode;
}


//alert('test');

PickCurves();
