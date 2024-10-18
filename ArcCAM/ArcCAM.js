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

var ini_file = "moi://appdata/ArcCAM.ini";

//config_filename = "ArcCAM.ini";
//config_path = "C:\Users\lensh\AppData\Roaming\Moi\ArcCAM";



var dir = moi.filesystem.getAppDataDir();
config_filename = "ArcCam/ArcCAM.ini";

var ini = "";
var file = moi.filesystem.openFileStream( dir + config_filename, 'r' );

while ( !file.AtEOF )
{
	ini = ini + file.readLine() + "\n";;
	//alert( ini );
}
file.close();

var ini2 = parseINI(ini);

ini = [];
for (section in ini2)
{
	var value = ini2[section];
	for( key in value )
	{
		ini[section] = value;
		moi.command.setOption( 'ArcCAM_' + section + "_" + key, value[key] );
		//alert( 'ArcCAM_' + section + "_" + key, value[key] );
	}
}


//alert( ini['workspace']['origin_offset'] ); 
//alert( moi.command.getOption( 'ArcCAM_workspace_origin_offset' ) );
//alert( moi.command.getOption( 'ArcCAM_defaults_tool_path_type' ) );

// initialize globals
gcode = "";
tool_section = "";
sub_program = "";









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
	tool_section += "(" + comment.toUpperCase() + ")\n";
	return;
}

function addBlock( block )
{
	tool_section += formatGcode( block ) + "\n";
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

function addToolSection()
{
	gcode += tool_section; //+ "\nG0 Z1.0\nM1\n\n\n";
	tool_section = ""; //clear the tool_section container
	return;
}

//function addToolSection()
//{
//	sub_program += tool_section + "\nG0 Z1.0\nM1\n\n\n";
//	sub_program = ""; //clear the tool_section container
//	return;
//}


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
			
			if( ini['workspace']['origin_offset'] )
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
	}
	addToolSection();
}



function ToolPathOffsetProfile( curves, origin, offset, tool_offset_start, tool_data )
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
			
			if( ini['workspace']['origin_offset'] )
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
				addBlock( "G1 X" + startx  + " Y" + starty + " Z" + startz + g_offset + " D" + tool_data.d_value );
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
		
		addBlock( "G1 X" + tool_offset_start.x  + " Y" + tool_offset_start.y + " Z" + tool_offset_start.z + "G40");
	}
	addToolSection();
}




function ToolPathHaasPocket( curves, origin, offset, tool_data, haas_pocket_options )
{

	if( haas_pocket_options.dir == 'left' )
	{
		g_offset = 'G41';
	}
	else if ( haas_pocket_options.dir == 'right' )
	{
		g_offset = 'G42';
	}
	
	var increment = haas_pocket_options.axis + haas_pocket_options.inc;
	
	for ( var i = 0; i < curves.length; i++ )
	{
		section_num = i + 1;
		addBlock( "N" + section_num);
		addCommentBlock( "Haas G150 Pocket" );
		addBlock( "T" + tool_data.number + " M6" );
		addBlock( origin.coordinate_system + " G90 G17 G0 X0 Y0" );
		addBlock( "M3 S" + tool_data.rpm );
		addBlock( "G43 H" + tool_data.number +  " Z1.0" );
		addBlock( "/M8" );
		addBlock( "" );
	
	
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
			
			if( ini['workspace']['origin_offset'] )
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
				//addBlock( "G1 X" + tool_offset_start.x  + " Y" + tool_offset_start.y + " Z" + tool_offset_start.z );
				
				pocket_block = "G150 X" + startx + 
								" Y" + starty + 
								g_offset + 
								" D" + tool_data.d_value + 
								increment + 
								" Z" + haas_pocket_options.z + 
								" K" + haas_pocket_options.k + 
								" R" + haas_pocket_options.r + 
								" Q" + haas_pocket_options.q + 
								" P" + haas_pocket_options.p + 
								" F" + tool_data.ipm;
				pocket_definition_start_block = "X" + startx + " Y" + starty;
				addBlock( pocket_block );
				addBlock( "" );
				addBlock( "G40" );
				addBlock( "" );
				addBlock( "G00 G80 Z1. M09" );
				addBlock( "G28 G91 Z0 M05" );
				addBlock( "G28 Y0" );
				addBlock( "M01" );
				addBlock( "" );

				addSubProgramBlock("POCKET DEFINITION", true);
				addSubProgramBlock("N" + haas_pocket_options.p );
				addSubProgramBlock( pocket_definition_start_block );
				
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
					
				var arcRadius = "";
				var clockwise = "";
				var radians = "";
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
				var arcRadius = round(segment.conicRadius, decimals);
				//find_angle(p0,p1,c);
				var radians = find_angle( arcstart, arcend, segment.conicFrame.origin );
				var angle = radiansToDegrees( calculateSubtendedAngle( segment.conicFrame.origin, arcstart, arcend ) );
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

			debug( "Seg " + j + "\nType: " + type + "\nStart: " + segment.getStartPt() + "\nEnd: " + segment.getEndPt() + 
					"\nArcCenter: " + segment.conicFrame.origin + "\narcRadius: " + arcRadius + "\nradians: " + radians + "\nangle: " + angle + "\n: " + clockwise );
			
			//note += "Start: " + segment.getStartPt() + " End: " + segment.getEndPt() + " ArcCenter: " + 
			//		segment.conicFrame.origin;
			
			addSubProgramBlock( block );
			//if (DEBUG)
				//gcode += " (Segment " + j + " => " + type + ")";
		}	
		
		//addBlock( "G1 X" + tool_offset_start.x  + " Y" + tool_offset_start.y + " Z" + tool_offset_start.z + "G40");
		addSubProgramBlock( "M99" );
		addSubProgramBlock( "" );
		addSubProgramBlock( "" );
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
	
	var tool_path_type = moi.ui.commandUI.tool_path_type.value;
	
	// select toolpath type
	
	moi.ui.beginUIUpdate();
	moi.ui.hideUI( 'tool_path_typeSelectPrompt' );     ////////////// 1
	moi.ui.showUI( 'ToolOptionsSelectPrompt' );      ////////////// 2
	moi.ui.endUIUpdate();
	
	// tool options
	
	if ( !WaitForDialogDone() )
		return;
		    
	var tool_data = [];
	tool_data.number = moi.ui.commandUI.tool_number.value;
	tool_data.diameter = moi.ui.commandUI.tool_diameter.value;
	tool_data.flutes = moi.ui.commandUI.tool_flutes.value;
	tool_data.ipt = moi.ui.commandUI.tool_ipt.value;
	tool_data.sfm = moi.ui.commandUI.tool_sfm.value; 
	tool_data.ipm = moi.ui.commandUI.tool_ipm.value;
	tool_data.rpm = moi.ui.commandUI.tool_rpm.value;
	tool_data.stepover = moi.ui.commandUI.tool_stepover.value;
	tool_data.d_value = moi.ui.commandUI.tool_d_value.value;
	
	debug(dump(tool_data));
	
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
	
	
	

	switch( tool_path_type )
	{
		case "Profile":
			break;
		case "Haas Pocket":
			moi.ui.beginUIUpdate();
			moi.ui.hideUI( 'CurveSelectPrompt' );
			moi.ui.showUI( 'HaasPocketOptionsPrompt' );
			moi.ui.endUIUpdate();
			if ( !WaitForDialogDone() )
				return;
				
			var haas_pocket_options = {};
			haas_pocket_options.q = moi.ui.commandUI.haas_pocket_depth_per_pass.value;
			haas_pocket_options.z = moi.ui.commandUI.haas_pocket_z_depth.value;
			haas_pocket_options.axis = moi.ui.commandUI.haas_pocket_increment_axis.value;
			haas_pocket_options.inc = moi.ui.commandUI.haas_pocket_increment.value;
			haas_pocket_options.k = moi.ui.commandUI.haas_pocket_finish.value;
			haas_pocket_options.r = moi.ui.commandUI.haas_pocket_retract.value;
			haas_pocket_options.p = moi.ui.commandUI.haas_pocket_subprogram.value;
			haas_pocket_options.dir = moi.ui.commandUI.haas_pocket_offset_dir.value;

			break;
		case "Offset Profile":
			moi.ui.beginUIUpdate();
			moi.ui.hideUI( 'CurveSelectPrompt' ); 	     		////////////// 3
			moi.ui.showUI( 'OffsetProfileSelectPrompt' );       ////////////// 4
			moi.ui.endUIUpdate();
			if ( !WaitForDialogDone() )
				return;
			
			
			moi.ui.beginUIUpdate();
			moi.ui.hideUI( 'OffsetProfileSelectPrompt' );       ////////////// 4
			moi.ui.showUI( 'ToolOffsetStartSelectPrompt' );     ////////////// 5
			moi.ui.endUIUpdate();
			
			var offset = moi.ui.commandUI.offset_dir.value;
			
			
				//left (G41)</option>
				//right (G42)</option>
				
			var pointpicker = moi.ui.createPointPicker();
			if ( !GetPoint( pointpicker ) )
				return;
			var g92_offset = moi.ui.commandUI.g92_offset.value;
			
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
	
	
	
	
	
	
	if( ini['workspace']['origin_offset'] )
	{
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
	
		if( tool_offset_start )
		{
			tool_offset_start.x = round( tool_offset_start.x - origin.x, decimals );
			tool_offset_start.y = round( tool_offset_start.y - origin.y, decimals );
			tool_offset_start.z = round( tool_offset_start.z - origin.z, decimals );
		}
		//const origin = {x:round( PickedPt.X, decimals ), y:round( PickedPt.Y, decimals ), z:round( PickedPt.Z, decimals )};
		//alert( "tool_offset_start:\n" + dump( tool_offset_start ) );
 	}
	
	
		
	switch( tool_path_type )
	{
		case "Profile":
			ToolPathProfile( curves, origin );
			break;
		case "Haas Pocket":
			ToolPathHaasPocket( curves, origin, offset, tool_data, haas_pocket_options );
			break;
		case "Offset Profile":
			ToolPathOffsetProfile( curves, origin, offset, tool_offset_start, tool_data );
			break;
		case "Center Drill":
		case "Drill":
		case "Peck Drill":
		case "Tap":
			ToolPathCannedCycle( tool_path_type, curves, origin );
			break;
		default:
			//alert('default');
	}
	
	
	//file_name = "o69022";
	var file_name = moi.ui.commandUI.file_name.value;
	var file_comment = moi.ui.commandUI.file_comment.value.toUpperCase();
	var file_ext = ".nc";
	
	var file_path = '/Users/lensh/Documents/'; // will not prompt for save file in debug mode
	//getFileNameFromPath
	
	
	var startcode = "o" + file_name + "\n(" + file_comment + ")\n\n";	
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

function launch_window()
{
	var dialog = moi.ui.createDialog( 'moi://AppData/ArcCAMToolTable.htm', 'resizeable,defaultWidth:500,defaultHeight:520' );

	var result = dialog.window.doModal();
	if ( result == -1 ) // Canceled
		return;
}

//launch_window();



//launch_window();

PickCurves();
//ArcCAM();
