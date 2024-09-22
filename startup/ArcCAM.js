// config: norepeat

// simple toolpath generator

#include "GetObjects.js"
#include "GetPoint.js"

const DEBUG = false;
const ORIGIN_OFFSET = true;

function dump(obj) {

    var text = obj.toString();

    for (propname in obj) {

        try {
            var value = obj[propname];
            var valString;
            
            // no .toString() on null object
            if (value === null) {
                valString = 'null';
            }
    
            else {
                valString = value.toString();
            }
            
            text += '\n' + propname + '=' + valString;
        
        } catch (error) { // in case property undefined
            text += '\n' + propname + '=';
        }
    }
    return text;
}

function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function alert( msg )
{
	moi.ui.commandUI.alert( msg );
}

var filename = '/Users/lensh/Documents/log.txt';
var f2 = moi.filesystem.openFileStream( filename, 'w' );	
	
function debug( msg )
{
	moi.log( msg + "\n" );
	f2.writeLine( "--------------------------------\n" + msg + "\n" );
}

function find_angle(p0,p1,c) {
	//alert(p0 + "\n" + p1 + "\n" + c);
    var p0c = Math.sqrt(Math.pow(c.x-p0.x,2) + Math.pow(c.y-p0.y,2)); // p0->c (b)   
    var p1c = Math.sqrt(Math.pow(c.x-p1.x,2) + Math.pow(c.y-p1.y,2)); // p1->c (a)
    var p0p1 = Math.sqrt(Math.pow(p1.x-p0.x,2) + Math.pow(p1.y-p0.y,2)); // p0->p1 (c)
    var radians = Math.acos((p1c*p1c+p0c*p0c-p0p1*p0p1)/(2*p1c*p0c));
	return radians;
}

function isClockwise(k,l,m)
{
	var XLK = l.x - k.x;
	var XMK = m.x - k.x;
	var YLK = l.y - k.y;
	var YMK = m.y - k.y;

	signed_area = 0.5 * (( XLK*YMK ) - ( XMK*YLK ));
	if( signed_area > 0)
		return -1;
	else if( signed_area < 0)
		return 1;
	else 
		return 0;
}

function round( x, n )
{
	var a = Math.pow( 10, n );
	return (Math.round( x * a ) / a).toFixed(3);
	//return Math.round((n + Number.EPSILON) * 100) / 100
}

function ArcCAM()
{
	var objectpicker = moi.ui.createObjectPicker();
	objectpicker.allowBReps();
	objectpicker.allowCurves();
	
	if ( !GetObjects( objectpicker ) )
		return;

	var curves = objectpicker.objects;
	
	if(ORIGIN_OFFSET)
	{
		moi.ui.beginUIUpdate();
		moi.ui.hideUI( 'FirstSelectPrompt' );
		moi.ui.showUI( 'SecondSelectPrompt' );
		moi.ui.endUIUpdate();
		
		var pointpicker = moi.ui.createPointPicker();
		if ( !GetPoint( pointpicker ) )
			return;

		var PickedPt = pointpicker.pt;	
		var originx = round( PickedPt.X, 3 )
		var originy = round( PickedPt.Y, 3 )
		var originz = round( PickedPt.Z, 3 )

		//alert( "Origin Offset\nX: " + originx + "\nY: " + originy + "\nZ: " + originz );
 	}
	var gcode = "";	
	var preamble = "%\no69022\n(ArcCAM)\n\nG0 G54 G90 G20 G17 G0 X0\n\nF100.\n";
	
	if( !DEBUG )
		//var dir = moi.filesystem.getDirName( 'Dialog caption', 'c:\\initpath' );
		var filename = moi.filesystem.getSaveFileName( 'Export G-code File', 'G-Code Files (*.nc)|*.nc' );
	else
		var filename = '/Users/lensh/Documents/test.nc';
	
	if ( filename == '' )
		return;
	
	var startblock = "";
	var endblock = "%";
	
	var styles = moi.geometryDatabase.getObjectStyles();
	//debug(dump(styles));
	//styles.item(i).name.length > 25 )

	for ( var i = 0; i < curves.length; i++ )
	{
		var segments = curves.item(i).getSubObjects();

		var style = curves.item(i).styleIndex;
		debug( style );

		usertext = curves.item(i).getAllUserText();
		for ( var u = 0; u < usertext.length; u++ )
		{
			debug( usertext.item(u).key + " => " + usertext.item(u).value + "\n");
			gcode += "(" + usertext.item(u).key + " => " + usertext.item(u).value + ")\n"
		}		
	
		for ( var j = 0; j < segments.length; j++ ) 
		{
			var block = "";
			var note = "";
			var gx = "G0";
	
			var segment = segments.item(j);
			var min = segment.domainMin;
			var max = segment.domainMax;
			var len = max - min;
			
			var type = "Line";
			var startx = round(segment.getStartPt().x, 3);
			var starty = round(segment.getStartPt().y, 3);
			var endx = round(segment.getEndPt().x, 3);
			var endy = round(segment.getEndPt().y, 3);
			
			if(ORIGIN_OFFSET)
			{
				startx = round( startx - originx, 3 );
				starty = round( starty - originy, 3 );
				endx = round( endx - originx, 3 );
				endy = round( endy - originy, 3 );
			}
			
			if( j == 0 )
			{
				gcode += "G1 X" + startx  + " Y" + starty + "\n";
			}
			if( segment.isLine || segment.isSimpleLine )
			{
				type = "Line";
				gx = "G1";
				block = gx + " X" + endx + " Y" + endy;		
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
				arcI = round(endx - startx, 3);
				arcJ = round(endy - starty, 3);
				arcRadius = round(segment.conicRadius, 3);
								
				if( clockwise > 0)
					gx = "G2"; 
				else
					gx = "G3";

				block = gx + " X" + endx + " Y" + endy + " R" + arcRadius;
			}
			else if( segment.isCircle )
			{
				type = "Circle";
			}
			else if(segment.isEllipse)
			{
				type = "Ellipse";
			}
			else
			{
				type = "Unknown";	
			}
			//debug( "Seg " + j + "\nType: " + type + "\nStart: " + startx + "\nEnd: " + starty + "\nArcCenter: " + segment.conicFrame.origin + "\narcAngle: " + arcAngle + "\narcTangent: " + arcTangent + "\narcCurve: " + arcCurve + "\nisClockwise2: " + clockwise );
			
			//note += "Start: " + segment.getStartPt() + " End: " + segment.getEndPt() + " ArcCenter: " + 
			//		segment.conicFrame.origin;
			
			gcode += block;
			if (DEBUG)
				gcode += " (Segment " + j + " => " + type + ") (" + note + ")";
			gcode += "\n";
		}	
	}
	
	var f = moi.filesystem.openFileStream( filename, 'w' );	
	f.writeLine( preamble + startblock + gcode + endblock);
	f.close();
	f2.close();
	
}


ArcCAM();
