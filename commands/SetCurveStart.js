#include "GetPointOsnappedOnCurve.js"
#include "Common.js"

//sets start of curve object, will also add a new point and split a sgenment if its not a point already

filename = '/Users/lensh/Documents/log.txt';
f2 = moi.filesystem.openFileStream( filename, 'w' );



function debug( msg )
{
	moi.log( msg + "\n" );
	f2.writeLine( "--------------------------------\n" + msg + "\n" );
}




function calculatePerpendicularLine(start_point, endPoint, length, dir) {
    var x1 = start_point.x;
    var y1 = start_point.y;
    var x2 = endPoint.x;
    var y2 = endPoint.y;
	//alert( y2);

    // Calculate the slope of the original line
    var slopeLine = (y2 - y1) / (x2 - x1);

    // Handle vertical line case
    if (x1 === x2) {
        // If the original line is vertical, the perpendicular line is horizontal
        return {
            start: start_point,
            end: [x1 + length, y1] // Horizontal line from (x1, y1)
        };
    }

    // Calculate the slope of the perpendicular line (negative reciprocal of the original slope)
    var slopePerpendicular = -1 / slopeLine;

    // Use the length to calculate the change in x and y
    var deltaX = length / Math.sqrt(1 + slopePerpendicular * slopePerpendicular);
    var deltaY = slopePerpendicular * deltaX;

    // Calculate the end point of the perpendicular line (starting from the start_point)
    if(dir == 1)
		var endPerpendicular = [x1 + deltaX, y1 + deltaY];
	else
		var endPerpendicular = [x1 - deltaX, y1 - deltaY];
    // Return the start and end points of the perpendicular line
    return {
        start: start_point,
        end: endPerpendicular
    };
}

// Function to find a point on a line a specific distance from the start point
function findPointOnLine(x1, y1, x2, y2, distance) {
    // Calculate the total distance between the two points
    var totalDistance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
    // Calculate the ratio of the desired distance to the total distance
    var t = distance / totalDistance;
    
    // Calculate the new point (x3, y3) using linear interpolation
    var x3 = x1 + t * (x2 - x1);
    var y3 = y1 + t * (y2 - y1);
    
	//alert(x3);
	//alert(y3);
    return { x: x3, y: y3 };
}

// Example usage:
//var startPoint = { x: 0, y: 0 }; // Start point (P1)
//var endPoint = { x: 10, y: 10 }; // End point (P2)
//var distance = 5; // Distance from the start point
//var pointOnLine = findPointOnLine(startPoint.x, startPoint.y, endPoint.x, endPoint.y, distance);
//console.log("Point on line:", pointOnLine); // Output: {x: 3.5355339059327378, y: 3.5355339059327378}



function createPerpendicular(curves)
{
	
	//var objectpicker = moi.ui.createObjectPicker();
	//objectpicker.allowCurves();
	
	//if ( !GetObjects( objectpicker ) )
	//	return;
	//
	//var curves = objectpicker.objects;
	//debug(dump(curves));
	debug(curves.length);
	
	segments = curves.getSubObjects();
	debug(dump(curves));
	
	//segments.length
	
	for ( var i = 0; i < 1; i++ )
	{
		debug(dump(segments));

		var segment = segments.item(i);

		var min = segment.domainMin;
		var max = segment.domainMax;

		var length = .3;
		var dir = 1;
		var len = max - min;
		var t = min + (1/2 * len); //midpoint
		t = min;

		var start_point = segment.evaluatePoint( t );
		var tangent_vector = segment.evaluateTangent( t ); 
		
		var tpoint = findPointOnLine(start_point.x, start_point.y, start_point.x + tangent_vector.x, start_point.y + tangent_vector.y, length );
		var tangent_point = moi.vectorMath.createPoint( tpoint.x, tpoint.y );
		
		//var tangent_point = moi.vectorMath.createPoint( start_point.x + tangent_vector.x, start_point.y + tangent_vector.y );
		var tangent_start = moi.vectorMath.createPoint( start_point.x, start_point.y );
			
		var factory = moi.command.createFactory( "line" );
		factory.setInput( 0, tangent_start );
		factory.setInput( 1, tangent_point );
		factory.update(); // displays the line
		factory.commit();
			
		var perpendicularLine = calculatePerpendicularLine(start_point, tangent_point, length , dir);
		var startpt = perpendicularLine.start;
		var endpt = perpendicularLine.end;
			
			
		var factory = moi.command.createFactory( "line" );
		factory.setInput( 0, startpt );
		factory.setInput( 1, moi.vectorMath.createPoint( endpt[0], endpt[1] ) );
		factory.update(); // displays the line
		factory.commit();

		
	}
}	

function DoChangeClosedCurveSeam()
{
	var pointpicker = moi.ui.createPointPicker();
	pointpicker.enableOnObjectSnap = true;

	if ( !GetPointOsnappedOnCurve( pointpicker ) )
		return;

	var pickedpt = pointpicker.pt;
	var crv = null;
	var param;
	
	// NEED TO CHECK FOR isClosedCurve
	
	//alert( pickedpt.numOsnaps );

	for ( var i = 0; i < pickedpt.numOsnaps; ++i )
	{
		if ( pickedpt.osnap(i).isOnCurve )
		{
			//alert( pickedpt.osnap(i).object );
			//alert( pickedpt.osnap(i).otherObject );
			var objA = pickedpt.osnap(i).object;
			var objB = pickedpt.osnap(i).otherObject;
			var paramA = pickedpt.osnap(i).parameter;
			var paramB = pickedpt.osnap(i).otherParameter;
			//alert( pickedpt.osnap(i).parameter );
			//alert( pickedpt.osnap(i).otherParameter );

			if ( objA && (objA.isCurve || objA.isCurveSegment) )
			{
				crv = objA;
				param = paramA;

				if ( crv.isCurveSegment )
					crv = crv.getParentObject();

				break;
			}
			else if ( objB && (objB.isCurve || objB.isCurveSegment) )
			{
				crv = objB;
				param = paramB;

				if ( crv.isCurveSegment )
					crv = crv.getParentObject();

				break;
			}
		}
	}

	if ( !crv )
		return;

	//changeClosedCurveSeam( new_start_parameter, rebuild_circles /*optional, default = true */ );
	var newcrv = crv.changeClosedCurveSeam( param );  // built-in moi function
	if ( newcrv )
	{
		moi.geometryDatabase.removeObject( crv );
		moi.geometryDatabase.addObject( newcrv );
	}
	createPerpendicular(newcrv);
	
	
	
}

DoChangeClosedCurveSeam();
f2.close();