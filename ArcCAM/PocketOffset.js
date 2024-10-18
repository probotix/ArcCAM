// config: norepeat

#include "GetObjects.js"
#include "GetDistance.js"
#include "Common.js"
#include "WaitForDialogDone.js"

const DEBUG = false;

filename = '/Users/lensh/Documents/log.txt';
f2 = moi.filesystem.openFileStream( filename, 'w' );

function debug( msg )
{
	moi.log( msg + "\n" );
	f2.writeLine( "--------------------------------\n" + msg + "\n" );
}


function DoOffset()
{
	if ( !WaitForDialogDone() )
		return;
	
	moi.ui.beginUIUpdate();
	moi.ui.hideUI( 'FirstSelectPrompt' );
	moi.ui.showUI( 'SecondSelectPrompt' );
	moi.ui.endUIUpdate();
	
	var objectpicker = moi.ui.createObjectPicker();
	objectpicker.allowCurves();
	
	if ( !GetObjects( objectpicker ) )
		return;

	var curves = objectpicker.objects;
	//debug( dump( curves ) );
	//debug( calcArea( curves ) );
	OffsetCurves( curves );
}

function calcArea( object )
{
	var factory = moi.command.createFactory('calcArea');
	factory.setInput(0, object);
	factory.update();
	factory.waitForAsyncUpdate();

	return factory.getInput(1).getValue();	
}

function OffsetCurves( objects )
{
	var object = objects.item(0);
	var frame = objects.item(0).planarFrame;

	
	var toleave = moi.ui.commandUI.toleave.value;
	var num = moi.ui.commandUI.num.value;
	var tool_diameter = moi.ui.commandUI.tool_diameter.value;
	
	var output_collector = moi.geometryDatabase.createObjectList(); // list to store the leadin objects
	
	// Calculating the first offset of line amt to leave
	var factory = moi.command.createFactory( 'offset' );
	factory.setInput( 0, objects );
	factory.setInput( 1, toleave );
	factory.setInput( 2, frame );
	factory.setInput( 3, 'round' ); // round or sharp
	factory.setInput( 4, true ); //trim
	factory.setInput( 6, false ); //bothsides
	
	var output_list = factory.calculate();
	debug( dump( output_list ) );
	output_collector.addObject( output_list.item(0) );
	newcrv = output_list.item(0);
	
	debug( dump( output_list.item(0) ) );
	frame = output_list.item(0).planarFrame;
	debug( dump( frame ) );

	
	var distance = moi.ui.commandUI.stepover.value;
	

	if(DEBUG)
	{
		var factory = moi.command.createFactory( "point" );
		factory.setInput( 0, frame.origin );
		var point_list = factory.calculate();
		moi.geometryDatabase.addObjects(point_list); 
		point_list.setProperty( 'styleIndex', 3 );
	}
	
	// first tool offset
	var factory = moi.command.createFactory( 'offset' );
	factory.setInput( 0, output_list );
	factory.setInput( 1, tool_diameter/2 );
	factory.setInput( 2, frame );
	factory.setInput( 3, 'round' ); // round or sharp
	factory.setInput( 4, true ); //trim
	factory.setInput( 6, false ); //curvebothsides	
	output_list = factory.calculate();
	output_collector.addObject( output_list.item(0) );
	frame = output_list.item(0).planarFrame;
	
	if(DEBUG)
	{
		var factory = moi.command.createFactory( "point" );
		factory.setInput( 0, frame.origin );
		var point_list = factory.calculate();
		moi.geometryDatabase.addObjects(point_list); 
		point_list.setProperty( 'styleIndex', 3 );
	}
	
	// loop through remaining offsets at offset width
	for ( var i = 1; i < num; i++ )
	{
		if(DEBUG)
		{
			var factory = moi.command.createFactory( "point" );
			factory.setInput( 0, frame.origin );
			var point_list = factory.calculate();
			moi.geometryDatabase.addObjects(point_list); 
			point_list.setProperty( 'styleIndex', 3 );
		}
		
		// Calculating the offset of line
		var factory = moi.command.createFactory( 'offset' );
		factory.setInput( 0, WrapWithObjectList( output_list.item(0) ) );
		factory.setInput( 1, distance );
		factory.setInput( 2, frame );
		factory.setInput( 3, 'round' ); // round or sharp
		factory.setInput( 4, true ); //trim
		factory.setInput( 6, false ); //curvebothsides

		
		var output_list = factory.calculate();
		
		if( output_list.length < 1 )
			break;
			
		debug( dump( output_list ) );
		output_collector.addObject( output_list.item(0) );
		frame = output_list.item(0).planarFrame;
		
	}

	
	moi.geometryDatabase.addObjects( output_collector );
	factory.commit();
	output_collector.setProperty( 'styleIndex', 8 );

}



DoOffset();
f2.close();