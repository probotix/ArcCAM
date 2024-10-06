#include "GetObjects.js"

/* 
- version: 1.0 (march 15, 2023)

- nimble nudge allows you to easily move selected objects and editing points by using the arrow keys aligned to the view you're in

- in 2d view (top/bottom, left/right, front/back) : up, down, left, right will move the selected objects according to your screen view

- in 3d view (3d/split): up/down is the y-axis, left/right is the x-axis and raise/lower (pgup/pgdn keys) is the z-axis
- (!) raising and lowering only works in the 3d/split view

- all movement also works with the current active c-plane in the same manner

- optionally, modifier keys can be used : "ctrl+up" will move by a small amount, "up" will move by a normal amount and "shift+up" will move by a large amount
- the three distance values are configured below with SMALL_DISTANCE, NORMAL_DISTANCE and LARGE_DISTANCE
- (!) distance values must be a valid number
- suggested distances for working in "mm" : 0.01 / 0.1 / 1.0, "inches" : 0.015625 / 0.125 / 1.0, "feet" (still use inches in moi) : 0.125 / 1.0 / 12.0

- to quickly configure this script, copy the block of text below and paste it in the "moi.ini" file under the "[Shortcut Keys]" header
- (!) check for conflicting shortcut keys
- optionally, you can configure the shortcut keys (one at a time) within in the moi "options" window

RightArrow=_NimbleNudge Right
Ctrl+RightArrow=_NimbleNudge Right Small
Shift+RightArrow=_NimbleNudge Right Large
LeftArrow=_NimbleNudge Left
Ctrl+LeftArrow=_NimbleNudge Left Small
Shift+LeftArrow=_NimbleNudge Left Large
UpArrow=_NimbleNudge Up
Ctrl+UpArrow=_NimbleNudge Up Small
Shift+UpArrow=_NimbleNudge Up Large
DownArrow=_NimbleNudge Down
Ctrl+DownArrow=_NimbleNudge Down Small
Shift+DownArrow=_NimbleNudge Down Large
PageUp=_NimbleNudge Raise
Ctrl+PageUp=_NimbleNudge Raise Small
Shift+PageUp=_NimbleNudge Raise Large
Ctrl+PageDown=_NimbleNudge Lower Small
PageDown=_NimbleNudge Lower
Shift+PageDown=_NimbleNudge Lower Large

*/

/* ----------------( distance configuration )----------------- */
	
const SMALL_DISTANCE = 0.01; // small amount (ctrl key)
const NORMAL_DISTANCE = 0.1; // normal amount
const LARGE_DISTANCE = 1.0; // large amount (shift key)
	
/* ----------------------------------------------------------- */

function DoNimbleNudge()
{
	var params = moi.command.getCommandLineParams(); // get the parameters that were included when this command was executed
	
	if ( params.length == 0 ) // show the configuration alert (called without parameters -- possibly from "extended scripts" mod)
	{
		moi.ui.alert("Nimble Nudge works with directional shortcut keys. To configure this, open \"_NimbleNudge.js\" in your MoI commands folder with a text editor and follow the instructions.");
	}
	else // assume the command was called with a configured key press (with parameters)
	{ 
		var objectpicker = moi.ui.createObjectPicker();
		objectpicker.allowEditPoints();
		objectpicker.done();
		
		var objects = objectpicker.objects;
		if ( objects.length == 0 )
		{
			return;
		}
		
		var factory = moi.command.createFactory( "move" );
		factory.setInput( 0, objects );
		
		var axis = "xaxis"; // default axis
		
		var dist = NORMAL_DISTANCE; // (!) default distance
		
		var dir = 0; // positive (1), negative (-1), ignore movement (0) [*** see if statement near bottom of code]
		
		var view_name = moi.ui.getActiveViewport().Name; // last active viewport (or view port mouse cursor is over -- incase of split view mode)
		
		var view_mode = moi.ui.mainWindow.viewpanel.mode; // (!) returns "split" or "3d" (other modes are not labelled correctly -- bottom returns "top")
		
		var force_3axis = false;
		if ( view_mode == "split" || view_mode == "3d" )
		{
			force_3axis = true;
		}

		if ( params.search( /right/i ) != -1 ) // parameters contain "right" (not case sensitive)
		{
			if ( force_3axis )
			{
				axis = "xaxis";  dir = 1;
			}
			else 
			{
				switch ( view_name ) // "3D" is excluded due to being handled under "force_3axis"
				{
					case  "Top"     :  axis = "xaxis";  dir = 1;   break;
					case  "Bottom"  :  axis = "xaxis";  dir = 1;   break;
					case  "Front"   :  axis = "xaxis";  dir = 1;   break;
					case  "Back"    :  axis = "xaxis";  dir = -1;  break;
					case  "Right"   :  axis = "yaxis";  dir = 1;   break;
					case  "Left"    :  axis = "yaxis";  dir = -1;  break;
				}
			}
		}
		else if ( params.search( /left/i ) != -1 ) // "left"
		{
			if ( force_3axis )
			{
				axis = "xaxis";  dir = -1;
			}
			else 
			{
				switch ( view_name )
				{
					case  "Top"     :  axis = "xaxis";  dir = -1;  break;
					case  "Bottom"  :  axis = "xaxis";  dir = -1;  break;
					case  "Front"   :  axis = "xaxis";  dir = -1;  break;
					case  "Back"    :  axis = "xaxis";  dir = 1;   break;
					case  "Right"   :  axis = "yaxis";  dir = -1;  break;
					case  "Left"    :  axis = "yaxis";  dir = 1;   break;
				}
			}
		}
		else if ( params.search( /up/i ) != -1 ) // "up"
		{
			if ( force_3axis )
			{
				axis = "yaxis";  dir = 1;
			}
			else 
			{
				switch ( view_name )
				{
					case  "Top"     :  axis = "yaxis";  dir = 1;   break;
					case  "Bottom"  :  axis = "yaxis";  dir = -1;  break;
					case  "Front"   :  axis = "zaxis";  dir = 1;   break;
					case  "Back"    :  axis = "zaxis";  dir = 1;   break;
					case  "Right"   :  axis = "zaxis";  dir = 1;   break;
					case  "Left"    :  axis = "zaxis";  dir = 1;   break;
				}
			}
		}
		else if ( params.search( /down/i ) != -1 ) // "down"
		{
			if ( force_3axis )
			{
				axis = "yaxis";  dir = -1;
			}
			else 
			{
				switch ( view_name )
				{
					case  "Top"     :  axis = "yaxis";  dir = -1;  break;
					case  "Bottom"  :  axis = "yaxis";  dir = 1;   break;
					case  "Front"   :  axis = "zaxis";  dir = -1;  break;
					case  "Back"    :  axis = "zaxis";  dir = -1;  break;
					case  "Right"   :  axis = "zaxis";  dir = -1;  break;
					case  "Left"    :  axis = "zaxis";  dir = -1;  break;
				}
			}
		}
		else if ( params.search( /raise/i ) != -1 ) // "raise"
		{
			if ( force_3axis )
			{
				axis = "zaxis";  dir = 1;
			}
		}
		else if ( params.search( /lower/i ) != -1 ) // "lower"
		{
			if ( force_3axis  )
			{
				axis = "zaxis";  dir = -1;
			}
		}
		// (!) direction and axis is confirmed now
		
		if ( dir != 0 ) // [***] 0 dir occurs when raise or lower is called when "3d" or "split" view mode is not active
		{
			if ( params.search( /large/i ) != -1 ) // "large"
			{
				dist = LARGE_DISTANCE;
			}
			else if ( params.search( /small/i ) != -1 ) // "small"
			{
				dist = SMALL_DISTANCE;
			}
			// (!) distance is confirmed now
				
			// create 2 points, these will default to 0,0,0
			var basept = moi.vectorMath.createPoint();
			var offsetpt = moi.vectorMath.createPoint();
			
			// set up the offset point
			var cplanedir = moi.view.getCPlane()[axis]; // align desired axis direction to the c-plane
			cplanedir.scale( dist * dir ); // apply distance with either positive or negative direction
			offsetpt.add( cplanedir );
		
			factory.setInput( 1, basept );
			factory.setInput( 2, offsetpt );
			factory.commit();
		}
	}
}

DoNimbleNudge();