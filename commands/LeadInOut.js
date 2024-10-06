#include "GetPointOsnappedOnCurve.js"


//sets start of curve object, will also add a new point and split a sgenment if its not a point already

function alert( msg )
{
	moi.ui.commandUI.alert( msg );
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
}

DoChangeClosedCurveSeam();
