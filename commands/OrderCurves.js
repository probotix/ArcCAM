// config: norepeat

#include "GetObjects.js"

//filename = '/Users/lensh/Documents/log.txt';
//f2 = moi.filesystem.openFileStream( filename, 'w' );


function debug( msg )
{
	moi.log( msg + "\n" );
	f2.writeLine( "--------------------------------\n" + msg + "\n" );
}


function findMidpoint(pointA, pointB) {
    // pointA and pointB should be arrays or objects with x and y properties
    var midX = (pointA[0] + pointB[0]) / 2;
    var midY = (pointA[1] + pointB[1]) / 2;
	var midZ = (pointA[2] + pointB[2]) / 2;

    // Return the midpoint as an array
    return [midX, midY, midZ];
}




function CreatePointObject( pt )
{
	var factory = moi.command.createFactory( 'point' );
	factory.setInput( 0, pt );
	var pt = factory.calculate().item(0);
	pt.setHitTest( false );
	factory.cancel();
	return pt;
}

function CreateArrow( base_pt, dir_pt )
{
	var factory = null;

	try {
		factory = moi.command.createFactory( 'arrow3d' );
	} catch(e) { }

	if ( !factory )
		return null;

	var end_pt = moi.vectorMath.createPoint( base_pt.x, base_pt.y, base_pt.z );
	//var end_pt = moi.vectorMath.createPoint( findMidpoint( base_pt, dir_pt ) );
	
	dir_pt.scale(.2);
	//debug( dir_pt.x + " " + dir_pt.y + " " + dir_pt.z );
	
	//debug( base_pt.x + " " + base_pt.y + " " + base_pt.z );
	//dir_pt.x = 1;
	//dir_pt.y = 1;
	//dir_pt.z = 1;
	end_pt.add( dir_pt );
	
	//debug( end_pt.x + " " + end_pt.y + " " + end_pt.z );

	factory.setInput( 0, base_pt );
	factory.setInput( 1, end_pt );
	var arrow = factory.calculate().item(0);
	arrow.setHitTest( false );
	factory.cancel();

	return arrow;
}

function Clear( list )
{
	while ( list.length > 0 )
		list.removeObjectAt( 0 );
}

function UpdateDecorations( curves, points, dirs )
{
	if ( points.length > 0 )
	{
		moi.geometryDatabase.removeObjects( points );
		Clear( points );
	}

	if ( dirs.length > 0 )
	{
		moi.geometryDatabase.removeObjects( dirs );
		Clear( dirs );
	}

	for ( var i = 0; i < curves.length; ++i )
	{
		var crv = curves.item(i);

		var pt = CreatePointObject( crv.getStartPt() );
		points.addObject( pt );

		var segs = crv.getSubObjects();
		for ( var j = 0; j < segs.length; ++j )
		{
			var seg = segs.item(j);
			var min = seg.domainMin;
			var max = seg.domainMax;
			var len = max - min;

			for ( var k = 0; k < 2; ++k ) // was 4
			{
				//var t = min + (k/3 * len);
				var t = min + (k/3 * len);
				var pt = seg.evaluatePoint( t );
				var dir = seg.evaluateTangent( t );
				//moi.ui.commandUI.alert( pt + "\n" + dir );
				
				var arrow = CreateArrow( pt, dir );
				if ( arrow )
				{
					arrow.setHitTest( false );
					dirs.addObject( arrow );
				}	
			}
		}
	}

	if ( points.length > 0 )
		moi.geometryDatabase.addObjects( points );

	if ( dirs.length > 0 )
		moi.geometryDatabase.addObjects( dirs );
}

function Flip( crv, curves )
{
	var list = moi.geometryDatabase.createObjectList();
	list.addObject( crv );
	var factory = moi.command.createFactory( 'flip' );
	factory.setInput( 0, list );

	var newcrv = factory.calculate().item(0);
	factory.cancel();

	var origcurves = moi.geometryDatabase.createObjectList();
	for ( var i = 0; i < curves.length; ++i )
		origcurves.addObject( curves.item(i) );

	Clear( curves );

	for ( var i = 0; i < origcurves.length; ++i )
	{
		var thiscrv = origcurves.item(i);
		if ( thiscrv.id == crv.id )
			curves.addObject( newcrv );
		else
			curves.addObject( thiscrv );
	}

	moi.geometryDatabase.addObject( newcrv );
	moi.geometryDatabase.removeObject( crv );
}

function DoOrderCurves()
{
	var objectpicker = moi.ui.createObjectPicker();
	objectpicker.allowStandaloneCurves();
	
	if ( !GetObjects( objectpicker ) )
		return;

	var curves = objectpicker.objects;
	var points = moi.geometryDatabase.createObjectList();
	var dirs = moi.geometryDatabase.createObjectList();

	curves.sortBySelectionOrder();
	curves.setProperty( 'selected', false );
	curves.unlockSelection();

	UpdateDecorations( curves, points, dirs );

	moi.ui.beginUIUpdate();
	moi.ui.hideUI( 'SelectPrompt' );
	moi.ui.showUI( 'FlipPrompt' );
	moi.ui.endUIUpdate();

	objectpicker.min = objectpicker.max = 1;
	objectpicker.disableWindowing();

	var canceled = false;

	while ( 1 )
	{
		if ( !objectpicker.waitForEvent() )
		{
			canceled = true;
			break;
		}
			
		if ( objectpicker.event == 'finished' )
		{
			var crv = objectpicker.objects.item(0);
			Flip( crv, curves );
			UpdateDecorations( curves, points, dirs );
		}

		if ( objectpicker.event == 'done' )
			break;
	}

	if ( !canceled )
	{
		// Remove existing curves and add in copies using the selection ordering.

		var ordered_objects = moi.geometryDatabase.createObjectList();

		for ( var i = 0; i < curves.length; ++i )
		{
			var newcrv = curves.item(i).clone();
			ordered_objects.addObject( newcrv );
		}

		moi.geometryDatabase.removeObjects( curves );
		moi.geometryDatabase.addObjects( ordered_objects );

		ordered_objects.setProperty( 'selected', true );
	}

	Clear( curves );
	UpdateDecorations( curves, points, dirs );
	//f2.close();
}

DoOrderCurves();
