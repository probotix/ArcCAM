
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
		return -1;
	else if( signed_area < 0)
		return 1;
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

