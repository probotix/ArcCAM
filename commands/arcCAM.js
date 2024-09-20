// config: norepeat

// simple toolpath generator

#include "GetObjects.js"

const DEBUG = false;

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

function isClockwise( p0,p1,c )
{
		var pi = Math.PI;
        var angle = Math.atan2(p0.y - c.y, p0.x - c.x) - Math.atan2(p1.y - c.y, p1.x - c.x);

		if ( angle == 0 || angle == pi )
 			return 0;
		else if ( angle > 0 && angle < pi )
			return 1;
		else if ( angle > pi )
			return -1;
		else if ( angle < 0 && angle > (pi * -1))
			return -1;
		else if ( angle < (pi * -1))
			return 1;
}

function isClockwise2(k,l,m)
{
	var XLK = l.x - k.x;
	var XMK = m.x - k.x;
	var YLK = m.y - k.y;
	var YMK = m.y - k.y;

	signed_area = 0.5 * (( XLK*YMK ) - ( XMK*YLK ));
	if( signed_area > 0)
		return 1;
	else if( signed_area < 0)
		return -1;
	else 
		return 0;
}



function arcCAM()
{
	var ObjectPicker = moi.ui.createObjectPicker();
	ObjectPicker.allowCurves();
	ObjectPicker.allowStandaloneCurves();
	if ( !GetObjects( ObjectPicker ) )
		return;
		
	var curves = ObjectPicker.objects;
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
			startblock += "(" + usertext.item(u).key + " => " + usertext.item(u).value + ")\n"
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
			var StartX = round(segment.getStartPt().x, 3);
			var StartY = round(segment.getStartPt().y, 3);
			var arcEndX = round(segment.getEndPt().x, 3);
			var arcEndY = round(segment.getEndPt().y, 3);
			var arcCenter = segment.conicFrame.origin;
			var arcCenterX = round(segment.conicFrame.origin.x, 3);
			var arcCenterY = round(segment.conicFrame.origin.y, 3);
			var arcRadius = round(segment.conicRadius, 3);
			var arcEndAngle = round(segment.conicEndAngleRadians, 3);
			var arcI = 0;
			var arcJ = 0;
			
			var t = min + (3/3 * len);
			var arcCurve = segment.evaluateCurvature( t );
			var arcTangent = segment.evaluateTangent( t );	
			var start = segment.getStartPt();
			var midpoint = segment.evaluatePoint( min + (0.5 * len) );
			var end = segment.getEndPt();
			debug( start + "\n" + midpoint + "\n" + end );			
			var arcAngle = round(radians_to_degrees(find_angle( segment.getStartPt(),segment.getEndPt(), segment.conicFrame.origin )),1);
			//var arcAngle2 = round(find_angle2( segment.getStartPt(),segment.getEndPt(), segment.conicFrame.origin ),1);
			//var clockwise2 = isClockwise( find_angle2( segment.getStartPt(),segment.getEndPt(), segment.conicFrame.origin ));
			var clockwise = isClockwise( segment.getStartPt(),segment.getEndPt(), segment.conicFrame.origin );
			var clockwise = isClockwise2( start, midpoint, end );
			
			if( j == 0 )
			{
				gcode += "G1 X" + round(segment.getStartPt().x, 3)  + " Y" + round(segment.getStartPt().y, 3) + "\n";
				prevX = round(segments.item(j).getStartPt().x, 3);
				prevY = round(segments.item(j).getStartPt().y, 3);
			}
			else
			{
				prevX = round(segments.item(j-1).getEndPt().x, 3);
				prevY = round(segments.item(j-1).getEndPt().y, 3);
			}
			if ( segment.isCircle || segment.isArc )
			{
				type = "Arc";
				arcI = round(arcEndX - prevX, 3);
				arcJ = round(arcEndY - prevY, 3);
								
				if( clockwise > 0)
					gx = "G2"; 
				else
					gx = "G3";

				block = gx + " X" + arcEndX + " Y" + arcEndY + " R" + arcRadius;
			}
			else if(segment.isEllipse)
			{
					alert( 'elipse' );
			}
			else if(segment.isLine || segment.isSimpleLine)
			{
				type = "Line";
				gx = "G1";
				block = gx + " X" + arcEndX + " Y" + arcEndY;	
				//alert( "Seg " + j + "\nStart: " + segment.getStartPt() + "\nEnd: " + segment.getEndPt() + "\nArcCenter: " + segment.conicFrame.origin + "\narcAngle: " + arcAngle + "\narcTangent: " + arcTangent + "\narcCurve: " + arcCurve);	
			}
			else
			{
				type = "Unknown";
				gx = "G1";
				block = gx + " X" + arcEndX + " Y" + arcEndY  + " (FIX ME)";	
				//alert( "Seg " + j + "\nStart: " + segment.getStartPt() + "\nEnd: " + segment.getEndPt() + "\nArcCenter: " + segment.conicFrame.origin + "\narcAngle: " + arcAngle + "\narcTangent: " + arcTangent + "\narcCurve: " + arcCurve);		
			}
			debug( "Seg " + j + "\nType: " + type + "\nStart: " + segment.getStartPt() + "\nEnd: " + segment.getEndPt() + "\nArcCenter: " + segment.conicFrame.origin + "\narcAngle: " + arcAngle + "\narcTangent: " + arcTangent + "\narcCurve: " + arcCurve + "\nisClockwise2: " + clockwise );
			
			note += "Start: " + segment.getStartPt() + " End: " + segment.getEndPt() + " ArcCenter: " + 
					segment.conicFrame.origin;
			gcode += block + " (" + type + " " + j + ")";
			if (DEBUG)
				gcode += " (" + note + ")";
			gcode += "\n";
		}	
	}
	
	var f = moi.filesystem.openFileStream( filename, 'w' );	
	f.writeLine( preamble + startblock + gcode + endblock);
	f.close();
	f2.close();
	
}

function round( x, n )
{
	var a = Math.pow( 10, n );
	return (Math.round( x * a ) / a).toFixed(3);
	//return Math.round((n + Number.EPSILON) * 100) / 100
}

arcCAM();
