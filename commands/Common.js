
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

function alert( msg )
{
	moi.ui.commandUI.alert( msg );
}

function calculateSFM(diameter, rpm) {
    var pi = Math.PI; // Pi constant
    return (pi * diameter * rpm) / 12;
}

// Example usage:
//var diameter = 4; // Diameter of tool or workpiece in inches
//var rpm = 500;    // Rotational speed in RPM
//
//alert(calculateSFM(diameter, rpm)); // Outputs the SFM value


function calculateIPM(flutes, ipt, rpm) {
	var ipm = flutes * ipt * rpm;
    return ipm
}

// Example usage:
//var flutes = 4; 	// number of flutes
//var ipt = .003;   // inches per tooth
//var rpm = 4000;	// revs per minute
//
//alert(calculateIPM(teeth, ipt, rpm)); // Outputs the IPM value


function calculateRPM(sfm, diameter) {
    var pi = Math.PI; // Pi constant
    return (12 * sfm) / (pi * diameter);
}

// Example usage:
//var sfm = 400;       // Surface feet per minute
//var diameter = 2;    // Diameter of the tool or workpiece in inches

//alert(calculateRPM(sfm, diameter)); // Outputs the RPM value


function find_angle(p0,p1,c) {
	//alert(p0 + "\n" + p1 + "\n" + c);
    var p0c = Math.sqrt(Math.pow(c.x-p0.x,2) + Math.pow(c.y-p0.y,2)); // p0->c (b)   
    var p1c = Math.sqrt(Math.pow(c.x-p1.x,2) + Math.pow(c.y-p1.y,2)); // p1->c (a)
    var p0p1 = Math.sqrt(Math.pow(p1.x-p0.x,2) + Math.pow(p1.y-p0.y,2)); // p0->p1 (c)
    var radians = Math.acos((p1c*p1c+p0c*p0c-p0p1*p0p1)/(2*p1c*p0c));
	return radians;
}

function findRadians(centerX, centerY, pointX, pointY) {
    var deltaX = pointX - centerX;
    var deltaY = pointY - centerY;
    // Calculate the angle in radians using Math.atan2()
    var radians = Math.atan2(deltaY, deltaX);
    return radians;
}

// Example usage:
//var centerX = 0;
//var centerY = 0;
//var pointX = 1;
//var pointY = 1;
//var radians = findRadians(centerX, centerY, pointX, pointY);
//console.log("Angle in radians:", radians); // Outputs: 0.7853981633974483 (which is π/4 or 45 degrees)


function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function toInteger(value) {
    var number = Number(value); // Convert the value to a number
	//alert(number);

    // Check if the result is NaN or Infinity/-Infinity
    if (isNaN(number) || !isFinite(number)) {
        return 0; // Return 0 for NaN and Infinity
    }

    // Use Math.floor for positive numbers and Math.ceil for negative numbers
    return (number < 0 ? Math.ceil(number) : Math.floor(number));
}

function trimTrailingZeros(value) {
    // Convert number to a string
    var str = value.toString();
    
    // Check if it contains a decimal point
    if (str.indexOf('.') > -1) {
        // Remove trailing zeros
        str = str.replace(/\.?0+$/, '');
    }
    
    return str;
}

function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function isClockwise(k,l,m)
{
	var XLK = l.x - k.x;
	var XMK = m.x - k.x;
	var YLK = l.y - k.y;
	var YMK = m.y - k.y;

	signed_area = 0.5 * (( XLK*YMK ) - ( XMK*YLK ));
	if( signed_area > 0)
		return 'ccw';
	else if( signed_area < 0)
		return 'cw';
	else 
		return 0;
}

function round( x, n )
{
	var a = Math.pow( 10, n );
	return (Math.round( x * a ) / a).toFixed(n);
	//return Math.round((n + Number.EPSILON) * 100) / 100
}

function limitToUniqueValues(arr) {
    var uniqueValues = {}; // Object to track unique values
    var result = []; // Array to store unique values

    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        // Check if the value is not already in the uniqueValues object
        if (!uniqueValues[value]) {
            uniqueValues[value] = true; // Mark the value as seen
            result.push(value); // Add the unique value to the result array
        }
    }
    
    return result; // Return the array of unique values
}

// Function to calculate opposite and adjacent from the new hypotenuse and angle
function calculateOppositeAdjacent(hypotenuse, angleRadians) {
    var opposite = hypotenuse * Math.sin(angleRadians);
    var adjacent = hypotenuse * Math.cos(angleRadians);

    return {
        opposite: opposite,
        adjacent: adjacent
    };
}

// Example usage:
//var hypotenuse = 10;  // New hypotenuse length
//var angle = Math.PI / 4;  // Example angle in radians (45 degrees)
//var result = calculateOppositeAdjacent(hypotenuse, angle);
//console.log("Opposite: " + result.opposite);  // Output: Opposite side length
//console.log("Adjacent: " + result.adjacent);  // Output: Adjacent side length


// Function to calculate the angle from the hypotenuse and opposite side
function calculateAngleFromOppositeAndHypotenuse(opposite, hypotenuse) {
    // Use Math.asin to get the angle in radians
    var angleRadians = Math.asin(opposite / hypotenuse);
	//alert( opposite + " -------- " + hypotenuse);
	//alert(angleRadians);
    return angleRadians;
}

// Example usage:
//var opposite = 5;
//var hypotenuse = 10;
//var angle = calculateAngleFromOppositeAndHypotenuse(opposite, hypotenuse);
//console.log("Angle in radians: " + angle.radians);  // Output: Angle in radians

// Function to compute the tangent vector at a point on a circle
function getTangentVector(centerX, centerY, radius, angle) {
    // Compute the tangent vector components
    var tangentX = -radius * Math.sin(angle);
    var tangentY = radius * Math.cos(angle);
    
    return { x: tangentX, y: tangentY };
}

// Example usage:
//var centerX = 0;
//var centerY = 0;
//var radius = 10;
//var angle = Math.PI / 4; // 45 degrees in radians
//
//var tangent = getTangentVector(centerX, centerY, radius, angle);
//console.log("Tangent vector:", tangent); // Output: Tangent vector at 45 degrees


function getTangentVector(centerX, centerY, radius, angle) {
    // Compute the tangent vector components
    var tangentX = -radius * Math.sin(angle);
    var tangentY = radius * Math.cos(angle);
    
    return { x: tangentX, y: tangentY };
}

function getReversedTangentVector(centerX, centerY, radius, angle) {
    // Compute the tangent vector components
    var tangentX = -radius * Math.sin(angle);
    var tangentY = radius * Math.cos(angle);
    
    // Reverse the tangent vector components
    var reversedTangentX = -tangentX;
    var reversedTangentY = -tangentY;
    
    return { x: reversedTangentX, y: reversedTangentY };
}







// Function to find a point on an arc a specific distance from the start point
function findPointOnArc(centerX, centerY, radius, startAngle, arcDistance) {
    // Calculate the angle corresponding to the arc length
    var angle = arcDistance / radius;
    
    // Calculate the new point coordinates on the arc
    var newX = centerX + radius * Math.cos(startAngle + angle);
    var newY = centerY + radius * Math.sin(startAngle + angle);
    
    return { x: newX, y: newY };
}

// Example usage:
//var center = { x: 0, y: 0 };  // Center of the arc (circle)
//var radius = 10;  // Radius of the circle
//var startAngle = 0;  // Start angle in radians (0 radians corresponds to the positive x-axis)
//var arcDistance = 5;  // Distance along the arc from the start point
//var pointOnArc = findPointOnArc(center.x, center.y, radius, startAngle, arcDistance);
//console.log("Point on Arc:", pointOnArc);  // Output: coordinates of the point on the arc



function calculateOutsidePerpendicular(tangentX, tangentY, startX, startY, length, direction) {
    // Normalize the tangent vector
    var tangentLength = Math.sqrt(tangentX * tangentX + tangentY * tangentY);
    var normTangentX = tangentX / tangentLength;
    var normTangentY = tangentY / tangentLength;

    var perpX, perpY;

    // Calculate the perpendicular vector based on the direction
    if (direction === 'cw') {
        perpX = normTangentY * length;  // Rotate 90 degrees clockwise
        perpY = -normTangentX * length;
    } else { // counterclockwise
        perpX = -normTangentY * length; // Rotate 90 degrees counterclockwise
        perpY = normTangentX * length;
    }

    // Calculate the endpoint of the perpendicular line
    var endX = startX + perpX;
    var endY = startY + perpY;

    return { x: endX, y: endY };
}

// Example usage
//var tangentX = 1; // Example tangent vector x-component
//var tangentY = 0; // Example tangent vector y-component
//var startX = 0;   // Start point x-coordinate
//var startY = 0;   // Start point y-coordinate
//var length = 5;   // Length of the perpendicular line
//var direction = 'cw'; // Direction for the perpendicular line
//var result = calculateOutsidePerpendicular(tangentX, tangentY, startX, startY, length, direction);
//console.log("Endpoint of the outside perpendicular line:", result); // Output the endpoint



function calculateOutsidePerpendicularClockwise(tangentX, tangentY, startX, startY, length) {
    // Normalize the tangent vector
    var tangentLength = Math.sqrt(tangentX * tangentX + tangentY * tangentY);
    var normTangentX = tangentX / tangentLength;
    var normTangentY = tangentY / tangentLength;

    // Calculate the perpendicular vector for a clockwise arc (90 degrees rotation)
    var perpX = normTangentY * length;   // Clockwise perpendicular
    var perpY = -normTangentX * length;  // Clockwise perpendicular

    // Calculate the endpoint of the perpendicular line
    var endX = startX + perpX;
    var endY = startY + perpY;

    return { x: endX, y: endY };
}

// Example usage:
//var tangentX = 1; // Example tangent vector x-component
//var tangentY = 0; // Example tangent vector y-component
//var startX = 0;   // Start point x-coordinate
//var startY = 0;   // Start point y-coordinate
//var length = 5;   // Length of the perpendicular line
//var result = calculateOutsidePerpendicularClockwise(tangentX, tangentY, startX, startY, length);
//console.log("Endpoint of the outside perpendicular line:", result); // Output the endpoint





function calculatePerpendicularLine_old(start_point, endPoint, length, dir) {
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
		
	var endPerpendicular = [x1 + deltaX, y1 + deltaY];
	
    // Return the start and end points of the perpendicular line
    return {
        start: start_point,
        end: endPerpendicular
    };
}

function normalize_angle( angle )
{
		return angle % (2 * Math.PI);
}

function calculatePerpendicularPoint(startPoint, endPoint, length, offset) {
    // Step 1: Calculate the tangent vector (from start to end point)
    var tangentX = endPoint.x - startPoint.x;
    var tangentY = endPoint.y - startPoint.y;

    // Step 2: Normalize the tangent vector
    var tangentLength = Math.sqrt(tangentX * tangentX + tangentY * tangentY);
    var normTangentX = tangentX / tangentLength;
    var normTangentY = tangentY / tangentLength;

	if( offset == 'left')
	{
		// Step 3: Calculate the perpendicular vector to the left (counterclockwise 90 degrees rotation)
		var perpX = -normTangentY * length;
		var perpY = normTangentX * length;
	}
	else if( offset == 'right')
	{
		// Step 3: Calculate the perpendicular vector to the right (clockwise 90 degrees rotation)
		var perpX = normTangentY * length;
		var perpY = -normTangentX * length;
	}
	
    // Step 4: Calculate the endpoint of the perpendicular line to the left of the start point
    var endX = startPoint.x + perpX;
    var endY = startPoint.y + perpY;

    // Return the result as an object containing the endpoint coordinates of the perpendicular line
    return { x: endX, y: endY };
}

// Example usage:
//var startPoint = { x: 0, y: 0 };
//var endPoint = { x: 4, y: 3 };
//var length = 5;
//var result = calculatePerpendicularLine(startPoint, endPoint, length);
//console.log("Perpendicular line to the left endpoint:", result);


function findPointOnLine(startX, startY, endX, endY, distance) {
    // Step 1: Calculate the direction vector from the start point to the end point
    var dirX = endX - startX;
    var dirY = endY - startY;

    // Step 2: Calculate the length of the direction vector (magnitude)
    var length = Math.sqrt(dirX * dirX + dirY * dirY);
	
    // Step 3: Normalize the direction vector
    var normX = dirX / length;
    var normY = dirY / length;

    // Step 4: Scale the normalized vector by the desired distance
    var scaledX = normX * distance;
    var scaledY = normY * distance;

    // Step 5: Find the point at the desired distance from the start point
    var newX = startX + scaledX;
    var newY = startY + scaledY;

    // Return the new point as an object
    return { x: newX, y: newY };
}

// Example usage:
//var startX = 0, startY = 0;
//var endX = 4, endY = 3;
//var distance = 5;
//var result = findPointOnLine(startX, startY, endX, endY, distance);
//console.log("Point on line at distance:", result);


function CombineLists( targetlist, fromlist )
{
	for ( var i = 0; i < fromlist.length; ++i )
	targetlist.addObject( fromlist.item(i) );
}


function WrapWithObjectList( obj )
{
	var list = moi.geometryDatabase.createObjectList();
	list.addObject( obj );
	return list;
}

