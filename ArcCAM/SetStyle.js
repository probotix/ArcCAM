// config: norepeat

#include "GetObjects.js"

//filename = '/Users/lensh/Documents/log.txt';
//f2 = moi.filesystem.openFileStream( filename, 'w' );


function debug( msg )
{
	moi.log( msg + "\n" );
	f2.writeLine( "--------------------------------\n" + msg + "\n" );
}



function SetStyle()
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


}

SetStyle();
