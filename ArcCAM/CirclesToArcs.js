
#include "GetObjects.js"
#include "WaitForDialogDone.js"
#include "GetCircle.js"

function ReplaceObject( obj )
{

    var box = obj.getBoundingBox();
	
	if ( obj.isCircle )
	{
		var radius = obj.conicRadius

		var center = box.center;
		var dist = box.diagonalLength;

		var plane = moi.view.getCPlane();
		var circcenter=moi.vectorMath.createFrame(center,plane.xaxis,plane.yaxis);
		//var min = box.min;
		//var max = box.max;
		var list = moi.geometryDatabase.createObjectList();
		list.addObject( obj );

	//	var factory = moi.command.createFactory( 'circle' );
	//	factory.setInput( 0,true);
	//	factory.setInput( 1, circcenter );
	//	factory.setInput( 2,  center );
	//	factory.setInput( 3, (Math.sqrt(dist*dist/2)/2));
	//	factory.setInput( 4,  false );
	//	factory.update();
	//	factory.commit();
		
		var output_collector = moi.geometryDatabase.createObjectList(); // list to store the new arc objects
		
		var factory = moi.command.createFactory( 'arccenter' );
		factory.setInput( 0, moi.vectorMath.createFrame( center ) ); 				// center
		factory.setInput( 1, moi.vectorMath.createPoint( center.x, center.y + radius, 0 ) );   //start
		factory.setInput( 2, moi.vectorMath.createPoint( center.x + radius, center.y, 0 ) );	//end
		factory.setInput( 3, -90 );													//angle
		factory.setInput( 4, false );
		//factory.commit();
		var output_list = factory.calculate();
		output_collector.addObject(output_list.item(0));	
		
		var factory = moi.command.createFactory( 'arccenter' );
		factory.setInput( 0, moi.vectorMath.createFrame( center ) ); 				// center
		factory.setInput( 1, moi.vectorMath.createPoint( center.x + radius, center.y, 0 ) );   //start
		factory.setInput( 2, moi.vectorMath.createPoint( center.x, center.y - radius, 0 ) );	//end
		factory.setInput( 3, -90 );													//angle
		factory.setInput( 4, false );
		//factory.commit();
		var output_list = factory.calculate();
		output_collector.addObject(output_list.item(0));
		
		var factory = moi.command.createFactory( 'arccenter' );
		factory.setInput( 0, moi.vectorMath.createFrame( center ) ); 				// center
		factory.setInput( 1, moi.vectorMath.createPoint( center.x, center.y - radius, 0 ) );   //start
		factory.setInput( 2, moi.vectorMath.createPoint( center.x - radius, center.y, 0 ) );	//end
		factory.setInput( 3, -90 );													//angle
		factory.setInput( 4, false );
		//factory.commit();
		var output_list = factory.calculate();
		output_collector.addObject(output_list.item(0));
		
		var factory = moi.command.createFactory( 'arccenter' );
		factory.setInput( 0, moi.vectorMath.createFrame( center ) ); 				// center
		factory.setInput( 1, moi.vectorMath.createPoint( center.x - radius, center.y, 0 ) );   //start
		factory.setInput( 2, moi.vectorMath.createPoint( center.x, center.y  + radius, 0 ) );	//end
		factory.setInput( 3, -90 );													//angle
		factory.setInput( 4, false );
		//factory.commit();
		var output_list = factory.calculate();
		output_collector.addObject(output_list.item(0));
		
		var factory = moi.command.createFactory('join');
		factory.setInput( 0, output_collector );
		//moi.geometryDatabase.addObjects( output_collector );
		//output_collector_leadin.setProperty( 'styleIndex', 6 );
		factory.commit();
		
		/*
		var factory = moi.command.createFactory( 'arccenter' );
		factory.setInput( 0, moi.vectorMath.createFrame( center ) ); 			// center
		factory.setInput( 1, moi.vectorMath.createPoint(radius, 0, 0) );   	//start
		factory.setInput( 2, moi.vectorMath.createPoint(0, radius * -1, 0) );	//end
		factory.setInput( 3, -90 );										//angle
		factory.setInput( 4, false );
		factory.commit();
		
		var factory = moi.command.createFactory( 'arccenter' );
		factory.setInput( 0, moi.vectorMath.createFrame( center ) ); 			// center
		factory.setInput( 1, moi.vectorMath.createPoint(0, radius, 0) );   	//start
		factory.setInput( 2, moi.vectorMath.createPoint(radius, 0, 0) );	//end
		factory.setInput( 3, 90 );										//angle
		factory.setInput( 4, false );
		factory.commit();
	*/
            
		//moi.geometryDatabase.addObjects( output_collector );

		var delfactory = moi.command.createFactory( 'delete' );
		delfactory.setInput( 0, list );
		
		delfactory.update();
		delfactory.commit();
	
	}
}

function CirclesToArcs()
{
	var objectpicker = moi.ui.createObjectPicker();
	if ( !GetObjects( objectpicker ) )
		return;
		
	var objects = objectpicker.objects;
		
	//moi.ui.beginUIUpdate();
	//moi.ui.hideUI( 'SelectPrompt' );
	//moi.ui.showUI( 'OptionsPrompt' );
	//moi.ui.showUI( 'options' );
	//moi.ui.endUIUpdate();
	
	//if ( !WaitForDialogDone() )
	//	return;
		

	for ( var i = 0; i < objects.length; ++i )
	{
		var obj = objects.item(i);
		ReplaceObject( obj );
	}
}

CirclesToArcs();
