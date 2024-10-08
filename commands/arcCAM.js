// config: norepeat

// simple toolpath generator

#include "GetObjects.js"
#include "WaitForDialogDone.js"
#include "GetPoint.js"
#include "Common.js"

const DEBUG = true;
const ORIGIN_OFFSET = true;
const decimals = 3;

debug_filename = '/Users/lensh/Documents/log.txt';
f2 = moi.filesystem.openFileStream( debug_filename, 'w' );

filename = '/Users/lensh/Documents/test.nc'; // will not prompt for save file in debug mode
//getFileNameFromPath
file_name = "o69022";
file_comment = "ArcCAM"

startcode = "%\n" + file_name + "\n(" + file_comment + ")\n\n";
endcode = "M30\n%";
preamble = "G0 G54 G90 G20 G17 G0 X0\n";
gcode = "";
tool_section = "";








function debug( msg )
{
	moi.log( msg + "\n" );
	f2.writeLine( "--------------------------------\n" + msg + "\n" );
}



function testScope( test ){
	alert( test );
}

function parseStyle()
{
	var style = curves.item(i).styleIndex;
		debug( style );

}

function userText(curve)
{
	//setUserText=[object Function]
	//getUserText=[object Function]
	//removeUserText=[object Function]
	//getAllUserText=[object Function]
	//clearAllUserText=[object Function]
}

function userStyles(curve)
{
	var styles = moi.geometryDatabase.getObjectStyles();
	//debug(dump(styles));
	//styles.item(i).name.length > 25 )
}

function OffsetVector( vector, origin )
{
	vector.x = vector.x - origin.x;
	vector.y = vector.y - origin.y;
	vector.z = vector.z - origin.z;
	return vector;
}

function SortObjects( object_list, sort_property )
{
	//object_list.sortBySelectionOrder()
}

function CircleRadiusSortFunc( crvA, crvB )
{
    if ( crvA.conicRadius < crvB.conicRadius )
        return -1;
    else if ( crvA.conicRadius > crvB.conicRadius )
        return 1;
    else
        return 0;
}

function extractComments(str) {
    var matches = str.match(/\([^)]*\)/g);
    return matches ? matches : [];  // Return the matches or an empty array if no matches are found
}

function addCommentBlock( comment )
{
	tool_section += "(" + comment + ")\n";
	return;
}

function addBlock( block )
{
	tool_section += formatGcode( block ) + "\n";
	return;
}

function addToolSection()
{
	gcode += tool_section + "\nG0 Z1.0\nM1\n\n\n";
	tool_section = ""; //clear the tool_section container
	return;
}

function ToolPathProfile( curves, origin )
{
	var gx = "G1";
	var zdepth = -1.01;
	var retract = 0.1;
	var feed = "20.";

	
	addCommentBlock( "Profile" );
	var tool_preamble = "T1 M6\nG54 G90 G17 G0 X0 Y0\nM3 S6000\nG43 H1 Z1.0\n/M8";
	addBlock( tool_preamble );
	
	for ( var i = 0; i < curves.length; i++ )
	{
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
			
			if(ORIGIN_OFFSET)
			{
				startx = round( startx - origin.x, decimals );
				starty = round( starty - origin.y, decimals );
				startz = round( startz - origin.z, decimals );
				endx = round( endx - origin.x, decimals );
				endy = round( endy - origin.y, decimals );
				endz = round( endz - origin.z, decimals );
			}
			
			if( j == 0 )
			{
				addBlock( "G1 X" + startx  + " Y" + starty + " Z" + startz );
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
				if( startz != endz )
					block += " Z" + endz;
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
								
				if( clockwise == 'cw')
					gx = "G2"; 
				else if( clockwise == 'ccw')
					gx = "G3";
				else
					return;
					
				block = gx + "X" + endx + "Y" + endy + "R" + arcRadius;
			}

			debug( "Seg " + j + "\nType: " + type + "\nStart: " + segment.getStartPt() + "\nEnd: " + segment.getEndPt() + "\nArcCenter: " + segment.conicFrame.origin + " " + clockwise );
			
			//note += "Start: " + segment.getStartPt() + " End: " + segment.getEndPt() + " ArcCenter: " + 
			//		segment.conicFrame.origin;
			
			addBlock( block );
			//if (DEBUG)
				//gcode += " (Segment " + j + " => " + type + ")";
		}	
	}
	addToolSection();
}



function ToolPathOffsetProfile( curves, origin, offset, tool_offset_start, d_value )
{
	var gx = "G1";
	var zdepth = -1.01;
	var retract = 0.1;
	var feed = "20.";
	
	//alert( dump ( tool_offset_start ) );
	//alert(offset);
	
	if( offset == 'left' )
	{
		g_offset = 'G41';
	}
	else if ( offset == 'right' )
	{
		g_offset = 'G42';
	}

	
	addCommentBlock( "Offset Profile" );
	var tool_preamble = "T1 M6\nG54 G90 G17 G0 X0 Y0\nM3 S6000\nG43 H1 Z1.0\n/M8";
	addBlock( tool_preamble );
	
	for ( var i = 0; i < curves.length; i++ )
	{
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
			
			if(ORIGIN_OFFSET)
			{
				startx = round( startx - origin.x, decimals );
				starty = round( starty - origin.y, decimals );
				startz = round( startz - origin.z, decimals );
				endx = round( endx - origin.x, decimals );
				endy = round( endy - origin.y, decimals );
				endz = round( endz - origin.z, decimals );
			}
			
			
			if( j == 0 )
			{
				addBlock( "G1 X" + tool_offset_start.x  + " Y" + tool_offset_start.y + " Z" + tool_offset_start.z );
				addBlock( "G1 X" + startx  + " Y" + starty + " Z" + startz + g_offset + " D" + d_value );
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
				if( startz != endz )
					block += " Z" + endz;
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
				arcI = round(endx - startx, decimals);
				arcJ = round(endy - starty, decimals);
				arcRadius = round(segment.conicRadius, decimals);
								
				if( clockwise == 'cw')
					gx = "G2"; 
				else if( clockwise == 'ccw')
					gx = "G3";
				else
					return;

				block = gx + "X" + endx + "Y" + endy + "R" + arcRadius;
			}

			debug( "Seg " + j + "\nType: " + type + "\nStart: " + segment.getStartPt() + "\nEnd: " + segment.getEndPt() + "\nArcCenter: " + segment.conicFrame.origin + " " + clockwise );
			
			//note += "Start: " + segment.getStartPt() + " End: " + segment.getEndPt() + " ArcCenter: " + 
			//		segment.conicFrame.origin;
			
			addBlock( block );
			//if (DEBUG)
				//gcode += " (Segment " + j + " => " + type + ")";
		}	
		
		addBlock( "G1 X" + tool_offset_start.x  + " Y" + tool_offset_start.y + " Z" + tool_offset_start.z + "G40" + " D50 ");
	}
	addToolSection();
}




function ToolPathHaasPocket( curves, origin, offset, tool_offset_start, d_value )
{
	var gx = "G1";
	var zdepth = -1.01;
	var retract = 0.1;
	var feed = "20.";
	
	//alert( dump ( tool_offset_start ) );
	//alert(offset);
	
	if( offset == 'left' )
	{
		g_offset = 'G41';
	}
	else if ( offset == 'right' )
	{
		g_offset = 'G42';
	}

	
	addCommentBlock( "Offset Profile" );
	var tool_preamble = "T1 M6\nG54 G90 G17 G0 X0 Y0\nM3 S6000\nG43 H1 Z1.0\n/M8";
	addBlock( tool_preamble );
	
	for ( var i = 0; i < curves.length; i++ )
	{
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
			
			if(ORIGIN_OFFSET)
			{
				startx = round( startx - origin.x, decimals );
				starty = round( starty - origin.y, decimals );
				startz = round( startz - origin.z, decimals );
				endx = round( endx - origin.x, decimals );
				endy = round( endy - origin.y, decimals );
				endz = round( endz - origin.z, decimals );
			}
			
			
			if( j == 0 )
			{
				addBlock( "G1 X" + tool_offset_start.x  + " Y" + tool_offset_start.y + " Z" + tool_offset_start.z );
				addBlock( "G1 X" + startx  + " Y" + starty + " Z" + startz + g_offset + " D" + d_value );
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
				if( startz != endz )
					block += " Z" + endz;
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
				arcI = round(endx - startx, decimals);
				arcJ = round(endy - starty, decimals);
				arcRadius = round(segment.conicRadius, decimals);
								
				if( clockwise == 'cw')
					gx = "G2"; 
				else if( clockwise == 'ccw')
					gx = "G3";
				else
					return;

				block = gx + "X" + endx + "Y" + endy + "R" + arcRadius;
			}

			debug( "Seg " + j + "\nType: " + type + "\nStart: " + segment.getStartPt() + "\nEnd: " + segment.getEndPt() + "\nArcCenter: " + segment.conicFrame.origin + " " + clockwise );
			
			//note += "Start: " + segment.getStartPt() + " End: " + segment.getEndPt() + " ArcCenter: " + 
			//		segment.conicFrame.origin;
			
			addBlock( block );
			//if (DEBUG)
				//gcode += " (Segment " + j + " => " + type + ")";
		}	
		
		addBlock( "G1 X" + tool_offset_start.x  + " Y" + tool_offset_start.y + " Z" + tool_offset_start.z + "G40" + " D50 ");
	}
	addToolSection();
}





function tooldata( diameter )
{
	var description = "";
	switch( diameter )
	{
		case "0.1575":
			description = "4MM DR";
				break;
			default:
				break;
			
	}
}



function ToolPathDrill( curves, origin )
{
	return;
}

function ToolPathCannedCycle( type, curves, origin )
{	
	var zdepth = -1.01;
	var retract = 0.1;
	var feed = "20.";
	var prevx = "";
	var prevy = "";
	var prevz = "";
	
	addCommentBlock( "Center Drill" );
	addBlock( "T1 M6" );
	addBlock( "G54 G90 G17 G0 X0 Y0" );
	addBlock( "M3 S6000" );
	addBlock( "G43 H1 Z1.0" );
	addBlock( "/M8" );
	
	switch( type )
	{
		case "Center Drill":
			var gx = "G81";
			break;
		case "Drill":
			var gx = "G81";
			break;
		case "Peck Drill":
			var gx = "G82";
			break;
		case "Tap":
			var gx = "G84";
			break;
		default:
			//alert('default');
	}
	
	debug( curves.length + " Curves Selected");
	const curves_array = [];
	for ( var i = 0; i < curves.length; i++ )
	{
		if( curves.item(i).isCircle )
			curves_array.push( curves.item(i) );
	}
	debug( curves_array.length + " Circles" );

	curves_array.sort( CircleRadiusSortFunc );
	
	const drills_array = [];
	for (var i = 0, len = curves_array.length; i < len; i++) 
	{
		diameter = round( curves_array[i].conicRadius * 2, decimals);	
		drills_array[i] = diameter;
	}
	
	drills_object = limitToUniqueValues(drills_array);	
	debug( drills_object.length );
	debug( drills_object );
	
	for (var i = 0, len = drills_object.length; i < len; i++) // for each unique drill size
	{
		var modalcode = "";
		var drill_size = drills_object[i];
		addBlock("");
		debug( "drill size in: " + drill_size );
		//alert(round( drill_size*25.4, 2 ));
		
		var drill_size_mm = Number( trimTrailingZeros(round( Number( drill_size )*25.4, 3 ) ) );
		debug( "drill size mm: " + drill_size_mm );
		debug( "isInteger: " + isInteger( drill_size_mm ) );
		
		if( isInteger( drill_size_mm ))
			addCommentBlock( drill_size_mm + "MM DR" );	
		else
			addCommentBlock( drill_size + "IN DR" );	
		
		
		var current_drill = drill_size;
		debug ("Drill " + drill_size);
		
		var k = 0;
		drills_object[i].item = [];
		drills_object[i] = {item: {}}; // Initialize item as an object, or use [] if it should be an array
    
		
		// loop through the curves and extract drills that match
		for ( var j = 0; j < curves_array.length; j++ )
		{
			var diameter = round( curves_array[j].conicRadius * 2, decimals);
			//debug(diameter);
			
			if( diameter == current_drill )
			{
				if( j==0 ) //fix me
				{
					var block = gx + " R" + retract + "F" + feed; 
				}
				
				debug( k + " => " + curves_array[j] );
				//debug("add " + diameter + " drill to " + current_drill);
				drills_object[i].item[k] = curves_array[j];
				k = k + 1;
				
				var centerx = round( curves_array[j].conicFrame.origin.x, decimals );
				var centery = round( curves_array[j].conicFrame.origin.y, decimals );
				var centerz = round( curves_array[j].conicFrame.origin.z, decimals );
				
				//origin offset
				centerx = round( centerx - origin.x, decimals );
				centery = round( centery - origin.y, decimals );
				centerz = round( centerz - origin.z, decimals );
				
				if( centerx != prevx )
					block += "X" + centerx;
				if( centery != prevy )
					block += "Y" + centery;
				if( centerz != prevz )
					block += "Z" + zdepth		
				
				
				prevx = centerx;
				prevy = centery;
				prevz = centerz;
				
				addBlock( block );
			}
		}	
	}
	addToolSection();
	return;
}

function calculateTool()
{

		
}

function PickCurves()
{
	if ( !WaitForDialogDone() )
		return;
	
	var ToolPathType = moi.ui.commandUI.ToolPathType.value;
	
	// select toolpath type
	
	moi.ui.beginUIUpdate();
	moi.ui.hideUI( 'ToolPathTypeSelectPrompt' );     ////////////// 1
	moi.ui.showUI( 'ToolOptionsSelectPrompt' );      ////////////// 2
	moi.ui.endUIUpdate();
	
	// tool options
	
	if ( !WaitForDialogDone() )
		return;
		    
	var diameter = moi.ui.commandUI.tool_diameter.value;
	var flutes = moi.ui.commandUI.tool_flutes.value;
	var ipt = moi.ui.commandUI.tool_ipt.value;
	var sfm = moi.ui.commandUI.tool_sfm.value; 
	var ipm = moi.ui.commandUI.tool_ipm.value;
	var rpm = moi.ui.commandUI.tool_rpm.value;
	var stepover = moi.ui.commandUI.tool_stepover.value;
	
	debug( "Diameter: " + diameter + "\nFlutes: " + flutes + "\nIPT: " + ipt + "\nSFM: " + sfm + "\nRPMs: " + rpm + "\nIPM: " + ipm + "\nRPM: " + rpm + "\nStepover: " + stepover);
	
	
	// pick curves
	moi.ui.beginUIUpdate();
	moi.ui.hideUI( 'ToolOptionsSelectPrompt' );     ////////////// 2
	moi.ui.showUI( 'CurveSelectPrompt' );           ////////////// 3
	moi.ui.endUIUpdate();
	
	var objectpicker = moi.ui.createObjectPicker();
	objectpicker.allowCurves();
	
	if ( !GetObjects( objectpicker ) )
		return;

	var curves = objectpicker.objects;
	
	
	

	switch( ToolPathType )
	{
		case "Profile":
			break;
		case "Haas Pocket":
		case "Offset Profile":
			moi.ui.beginUIUpdate();
			moi.ui.hideUI( 'CurveSelectPrompt' ); 	     		////////////// 3
			moi.ui.showUI( 'OffsetProfileSelectPrompt' );       ////////////// 4
			moi.ui.endUIUpdate();
			if ( !WaitForDialogDone() )
			
			
			moi.ui.beginUIUpdate();
			moi.ui.hideUI( 'OffsetProfileSelectPrompt' );       ////////////// 4
			moi.ui.showUI( 'ToolOffsetStartSelectPrompt' );     ////////////// 5
			moi.ui.endUIUpdate();
			
			var offset = moi.ui.commandUI.offset_dir.value;
			var tool_d_value = moi.ui.commandUI.tool_d_value.value;
				//left (G41)</option>
				//right (G42)</option>
				
			var pointpicker = moi.ui.createPointPicker();
			if ( !GetPoint( pointpicker ) )
				return;

			var PickedPt = pointpicker.pt;	
			var tool_offset_start = {};
			tool_offset_start.x = round( PickedPt.X, decimals );
			tool_offset_start.y = round( PickedPt.Y, decimals );
			tool_offset_start.z = round( PickedPt.Z, decimals );
			//alert( "tool_offset_start:\n" + dump( tool_offset_start ) );
			
			break;
		case "Center Drill":
		case "Drill":
		case "Peck Drill":
		case "Tap":
			break;
		default:
			//alert('default');
	}
	
	
	
	
	if(ORIGIN_OFFSET)
	{
		moi.ui.beginUIUpdate();
		moi.ui.hideUI( 'CurveSelectPrompt' );
		moi.ui.hideUI( 'OffsetProfileSelectPrompt' );
		moi.ui.hideUI( 'ToolPathTypeSelectPrompt' );
		moi.ui.hideUI( 'ToolOffsetStartSelectPrompt' );
		moi.ui.showUI( 'OriginSelectPrompt' );
		moi.ui.endUIUpdate();
		
		// pick origin
		
		var pointpicker = moi.ui.createPointPicker();
		if ( !GetPoint( pointpicker ) )
			return;

		var PickedPt = pointpicker.pt;	
		//var originx = round( PickedPt.X, decimals )
		//var originy = round( PickedPt.Y, decimals )
		//var originz = round( PickedPt.Z, decimals )
		var origin = {};
		origin.x = round( PickedPt.X, decimals );
		origin.y = round( PickedPt.Y, decimals );
		origin.z = round( PickedPt.Z, decimals );
		//alert( "origin:\n" + dump( origin ) );
	
		tool_offset_start.x = round( tool_offset_start.x - origin.x, decimals );
		tool_offset_start.y = round( tool_offset_start.y - origin.y, decimals );
		tool_offset_start.z = round( tool_offset_start.z - origin.z, decimals );
		//const origin = {x:round( PickedPt.X, decimals ), y:round( PickedPt.Y, decimals ), z:round( PickedPt.Z, decimals )};
		//alert( "tool_offset_start:\n" + dump( tool_offset_start ) );
 	}
	
	if( !DEBUG )
		//var dir = moi.filesystem.getDirName( 'Dialog caption', 'c:\\initpath' );
		filename = moi.filesystem.getSaveFileName( 'Export G-code File', 'G-Code Files (*.nc)|*.nc' );
	
	if ( filename == '' )
		return;
		
	switch( ToolPathType )
	{
		case "Profile":
			ToolPathProfile( curves, origin );
			break;
		case "Haas Pocket":
		case "Offset Profile":
			ToolPathOffsetProfile( curves, origin, offset, tool_offset_start, tool_d_value );
			break;
		case "Center Drill":
		case "Drill":
		case "Peck Drill":
		case "Tap":
			ToolPathCannedCycle( ToolPathType, curves, origin );
			break;
		default:
			//alert('default');
	}
	
	var f = moi.filesystem.openFileStream( filename, 'w' );	
	f.writeLine( startcode + gcode + endcode);
	startcode = "%\n" + file_name + "\n(" + file_comment + ")\n\n";

	f.close();
	f2.close();
	if( DEBUG )
		alert( filename + " Saved" );
	
}

function formatGcode( gcode )
{
	
	//gcode = gcode.replace(/\([^)]*\)/g, ''); //remove comments
	gcode = gcode.replace(/ /g,''); // get rid of any whitespace
	gcode = gcode.replace(/([A-Z])/g, ' $1'); //insert whitespace between capital letters
	//var pattern = new RegExp('\n ', 'g');
	//gcode = gcode.replace(pattern, '\n'); //remove whitespace at beginning of lines
	gcode = gcode.replace(/^\s+/, '');
	gcode = gcode.replace(/\n\s*/g, '\n'); // Removes \n followed by any whitespace
	//undefined is not a constructor (evaluating 'gcode.replace(/^\s+/g,'')')
	return gcode;
}



PickCurves();
//ArcCAM();
