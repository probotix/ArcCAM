// config: norepeat

#include "GetPointOsnappedOnCurve.js"
#include "WaitForDialogDone.js"
#include "Common.js"

const DEBUG = false;


//sets start of curve object, will also add a new point and split a sgenment if its not a point already
// presently does not work at an arc/line transition


filename = '/Users/lensh/Documents/log.txt';
f2 = moi.filesystem.openFileStream( filename, 'w' );



function debug( msg )
{
	moi.log( msg + "\n" );
	f2.writeLine( "--------------------------------\n" + msg + "\n" );
}




function createLeadInOut( curve, arc_distance, overlap, offset )
{
	var overlap = overlap;
	var half_overlap = overlap/2;
	var lead_in_out_radius = arc_distance;
	
	segments = curve.getSubObjects();
	
	num_segments = segments.length;
	
	var area = 0;
	var array_of_points = [];
	for ( var i = 0; i < num_segments; i++ )
	{
		var segment_start = segments.item(i).getStartPt();
		array_of_points.push(segment_start);
	}	
	
	debug( dump( array_of_points ) );
	


	// determine if curve runs in the clockwise or counterclockwise dircetion
	var numpoints = array_of_points.length;

	for ( var i = 0; i < numpoints-1; i++ )
	{
		var this_pt = array_of_points[i];
		var next_pt = array_of_points[i+1];

		area += this_pt.x * next_pt.y;
		area -= this_pt.y * next_pt.x;
	}
	var this_pt = array_of_points[numpoints-1];
	var next_pt = array_of_points[0];

	area += this_pt.x * next_pt.y;
	area -= this_pt.y * next_pt.x;

	if( area < 0 )
	{
		direction = "cw";
	}
	else
	{
		direction = "ccw";
	}


	

	var first_segment = segments.item(0);
	var last_segment = segments.item(num_segments -1);
	
	if( first_segment.isLine !=  last_segment.isLine )
	{
		alert("script cannot currently be used on an arc/line transition"); 
		return;
	}
		
	var first_segment_length = first_segment.getLength();
	var last_segment_length = last_segment.getLength();
		
	var first_segment_start = first_segment.getStartPt();
	var first_segment_end = first_segment.getEndPt();
		
	var last_segment_start = last_segment.getStartPt();
	var last_segment_end = last_segment.getEndPt();
		
	var first_segment_midpoint = first_segment.evaluatePoint( min + (0.5 * len) ); // 0 is beginning, 0.5 is halfway, 1 is end
		
	if( first_segment_length < half_overlap || last_segment_length < half_overlap )
	{
		alert("Chosen segment too short for overlap");
		return;
	}
		
	var min = first_segment.domainMin;
	var max = first_segment.domainMax;
	var len = max - min;
			
	var first_segment_midpoint = first_segment.evaluatePoint( min + (0.5 * len) );
	var segment_clockwise = isClockwise( first_segment_start, first_segment_midpoint, first_segment_end );

						
	// G41 <D-> (left of programmed path)
	// G42 <D-> (right of programmed path)	
		
	if( direction == 'cw' && segment_clockwise == 'cw')
	{	
		var leadin_distance = half_overlap;
		var leadout_distance = -1 * half_overlap;
		var leadin_angle = offset == 'left' ? -90 : 90;
	}
	else if( direction == 'cw' && segment_clockwise == 'ccw' )
	{	
		var leadin_distance = -1 *half_overlap;
		var leadout_distance = half_overlap;
		var leadin_angle = offset == 'left' ? -90 : 90;
	}
	else if( direction == 'ccw' && segment_clockwise == 'cw' )
	{
		var leadin_distance = half_overlap;
		var leadout_distance = -1 * half_overlap;
		var leadin_angle = offset == 'left' ? -90 : 90;
	}
	else if( direction == 'ccw' && segment_clockwise == 'ccw' )
	{
		var leadin_distance = -1 * half_overlap;
		var leadout_distance = half_overlap;
		var leadin_angle = offset == 'left' ? -90 : 90;
	}
	else // must be a line
	{
		var leadin_distance = -1 * half_overlap;
		var leadout_distance = -1 * half_overlap;
		var leadin_angle = offset == 'left' ? -90 : 90;
	}
	
	//alert( "curve: " + direction + "\noffset: " + offset + "\nsegment: " + segment_clockwise + "\nleadin_angle: " + leadin_angle);

	var leadout_angle = -1 * leadin_angle; //leadout angle is opposite of lead-in
	
		
	
	// start first_segment and end first_segment must be greater than or equal to 1/2 overlap
	// if arc, arc radius must be greater than lean-in radius

	var min = first_segment.domainMin;
	//var max = first_segment.domainMax;

	//var len = max - min;
	//var t = min + (1/2 * len); //midpoint
	t = min;
	
	var start_point = first_segment.evaluatePoint( t );
	var tangent_vector = first_segment.evaluateTangent( t );
	
	
	// create a couple of object collector lists
	var output_collector_leadin = moi.geometryDatabase.createObjectList(); // list to store the leadin objects
	var output_collector_leadout = moi.geometryDatabase.createObjectList(); // list to store the leadout objects
		
	if(DEBUG)
	{
		// create direction arrow
		var arrow_end = first_segment.evaluateTangent(0);
		factory = moi.command.createFactory( 'arrow3d' );
		factory.setInput( 0, first_segment_start );
		factory.setInput( 1, moi.vectorMath.createPoint( first_segment_start.x + (arrow_end.x/100), first_segment_start.y + (arrow_end.y/100) ) );
		var arrow = factory.calculate();
		moi.geometryDatabase.addObjects(arrow);		
	}

	if( first_segment.isLine )
	{
		//alert('first_segment.isLine');
		
		// leadin_point
		var leadin_point =  findPointOnLine( first_segment_start.x, first_segment_start.y, first_segment_end.x, first_segment_end.y, leadin_distance );
		leadin_point = moi.vectorMath.createPoint( leadin_point.x, leadin_point.y ); 
		
		if(DEBUG)
		{
			var factory = moi.command.createFactory( "point" );  // create lead-in point
			factory.setInput( 0, leadin_point );
			var output_list = factory.calculate();
			moi.geometryDatabase.addObjects(output_list); 
			output_list.setProperty( 'styleIndex', 2 );
		}
		
		//start line
		var factory = moi.command.createFactory( 'line' ); // build in reverse order so that tangent leads correctly
		factory.setInput( 0, leadin_point );
		factory.setInput( 1, first_segment_end );
		var output_list = factory.calculate();
		output_collector_leadin.addObject(output_list.item(0));	
		
		//lead-in arc
			// find tangent at leadin point
			// tangent vector needs to point in direction of travel		
			var tangent_vector = output_list.item(0).evaluateTangent(0); // get tangent of the start of the first arc, 0 is the beginning, 1 is the end of the arc
			debug('tangent');
			debug(dump(output_list));
			//alert(tangent_vector);
			var tangent_point = findPointOnLine(leadin_point.x, leadin_point.y, leadin_point.x + tangent_vector.x, leadin_point.y + tangent_vector.y, lead_in_out_radius );
			
			if(DEBUG)
			{
				var factory = moi.command.createFactory( "point" ); 
				factory.setInput( 0, moi.vectorMath.createPoint( tangent_point.x, tangent_point.y ) );
				var output_list = factory.calculate();
				moi.geometryDatabase.addObjects(output_list); 
				output_list.setProperty( 'styleIndex', 2 );
			}
			
			var perpendicular_point = calculatePerpendicularPoint( leadin_point, tangent_point, lead_in_out_radius , offset );
			var arc_center = moi.vectorMath.createPoint( perpendicular_point.x, perpendicular_point.y )
			if(DEBUG)
			{
				var factory = moi.command.createFactory( "point" );  // create lead-in point
				factory.setInput( 0, arc_center );
				var output_list = factory.calculate();
				moi.geometryDatabase.addObjects(output_list); 
				output_list.setProperty( 'styleIndex', 2 );
			}
			
			var factory = moi.command.createFactory( 'arccenter' ); // creates an arc between the first radial vector and the start
			factory.setInput( 0, moi.vectorMath.createFrame(arc_center) );
			factory.setInput( 1, moi.vectorMath.createPoint( leadin_point.x, leadin_point.y ));
			factory.setInput( 3, leadin_angle );
			factory.setInput( 4, false );
			var output_list = factory.calculate();
			output_collector_leadin.addObject(output_list.item(0));
			
			
	}		
	if( last_segment.isLine )
	{			
		
		//alert('last_segment.isLine');
		
		// leadout_point
		var leadout_point =  findPointOnLine( last_segment_end.x, last_segment_end.y, last_segment_start.x, last_segment_start.y, leadout_distance );
		leadout_point = moi.vectorMath.createPoint( leadout_point.x, leadout_point.y ); 
		
		if(DEBUG)
		{
			var factory = moi.command.createFactory( "point" );  // create lead-in point
			factory.setInput( 0, leadout_point );
			var output_list = factory.calculate();
			moi.geometryDatabase.addObjects(output_list); 
			output_list.setProperty( 'styleIndex', 2 );
		}
		
		//end line
		var factory = moi.command.createFactory( 'line' ); // build in reverse order so that tangent leads correctly
		factory.setInput( 0, last_segment_start );
		factory.setInput( 1, leadout_point );
		var output_list = factory.calculate();
		output_collector_leadout.addObject(output_list.item(0));
		
		
		// lead-out arc
			// find tangent at leadout point
			// tangent vector needs to point in direction of travel	
			var tangent_vector = output_list.item(0).evaluateTangent(1); // get tangent of the end of the last arc, 0 is the beginning, 1 is the end of the arc
			debug('tangent');
			debug(dump(output_list));
			//alert(tangent_vector);
			var tangent_point = findPointOnLine(leadout_point.x, leadout_point.y, leadout_point.x + tangent_vector.x, leadout_point.y + tangent_vector.y, lead_in_out_radius );
			
			if(DEBUG)
			{
				var factory = moi.command.createFactory( "point" ); 
				factory.setInput( 0, moi.vectorMath.createPoint( tangent_point.x, tangent_point.y ) );
				var output_list = factory.calculate();
				moi.geometryDatabase.addObjects(output_list); 
				output_list.setProperty( 'styleIndex', 2 );
			}
			
			var perpendicular_point = calculatePerpendicularPoint( leadout_point, tangent_point, lead_in_out_radius , offset );
			var arc_center = moi.vectorMath.createPoint( perpendicular_point.x, perpendicular_point.y )
			if(DEBUG)
			{
				var factory = moi.command.createFactory( "point" );  // create lead-out point
				factory.setInput( 0, arc_center );
				var output_list = factory.calculate();
				moi.geometryDatabase.addObjects(output_list); 
				output_list.setProperty( 'styleIndex', 2 );
			}
			
			var factory = moi.command.createFactory( 'arccenter' ); // creates an arc between the first radial vector and the start
			factory.setInput( 0, moi.vectorMath.createFrame(arc_center) );
			factory.setInput( 1, moi.vectorMath.createPoint( leadout_point.x, leadout_point.y ));
			factory.setInput( 3, leadout_angle );
			factory.setInput( 4, false );
			var output_list = factory.calculate();
			output_collector_leadout.addObject(output_list.item(0));
			
			
	
	}
	
	if( first_segment.isArc )
	{
		//alert('first_segment.isArc');
		
		var origin = first_segment.conicFrame.origin;
		var radius = first_segment.conicRadius;
		var start_angle = findRadians(origin.x, origin.y, start_point.x, start_point.y);

		if( lead_in_out_radius >= radius )
		{
			alert("lead in radius too large for this segment");
			return;
		}
		
		
		//////////////////////////////////////// lead in ///////////////////////////////////////////////
		
		// leadin_point
		var arc_point = findPointOnArc( origin.x, origin.y, radius, start_angle, leadin_distance);
		var leadin_point = moi.vectorMath.createPoint( arc_point.x, arc_point.y );
		
		if(DEBUG)
		{
			var factory = moi.command.createFactory( "point" );  // create lead-in point
			factory.setInput( 0, leadin_point );
			var output_list = factory.calculate();
			moi.geometryDatabase.addObjects(output_list); 
			output_list.setProperty( 'styleIndex', 2 );
		}
		
		//start arc
		var factory = moi.command.createFactory( 'arccenter' ); // build in reverse order so that tangent leads correctly
		factory.setInput( 0, moi.vectorMath.createFrame(origin) );
		factory.setInput( 1, leadin_point );
		factory.setInput( 2, first_segment_end );
		factory.setInput( 4, false );
		var output_list = factory.calculate();
		output_collector_leadin.addObject(output_list.item(0));	

		//lead-in arc
			// find tangent at leadin point
			// tangent vector needs to point in direction of travel		
			var tangent_vector = output_list.item(0).evaluateTangent(0); // get tangent of the start of the first arc, 0 is the beginning, 1 is the end of the arc
			debug('tangent');
			debug(dump(output_list));
			//alert(tangent_vector);
			var tangent_point = findPointOnLine(leadin_point.x, leadin_point.y, leadin_point.x + tangent_vector.x, leadin_point.y + tangent_vector.y, lead_in_out_radius );
			if(DEBUG)
			{
				var factory = moi.command.createFactory( "point" ); 
				factory.setInput( 0, moi.vectorMath.createPoint( tangent_point.x, tangent_point.y ) );
				var output_list = factory.calculate();
				moi.geometryDatabase.addObjects(output_list); 
				output_list.setProperty( 'styleIndex', 2 );
			}

			var perpendicular_point = calculatePerpendicularPoint( leadin_point, tangent_point, lead_in_out_radius , offset );
			var arc_center = moi.vectorMath.createPoint( perpendicular_point.x, perpendicular_point.y )
			if(DEBUG)
			{
				var factory = moi.command.createFactory( "point" );  // create lead-in point
				factory.setInput( 0, arc_center );
				var output_list = factory.calculate();
				moi.geometryDatabase.addObjects(output_list); 
				output_list.setProperty( 'styleIndex', 2 );
			}
			
			var factory = moi.command.createFactory( 'arccenter' ); // creates an arc between the first radial vector and the start
			factory.setInput( 0, moi.vectorMath.createFrame(arc_center) );
			factory.setInput( 1, moi.vectorMath.createPoint( leadin_point.x, leadin_point.y ));
			factory.setInput( 3, leadin_angle );
			factory.setInput( 4, false );
			var output_list = factory.calculate();
			output_collector_leadin.addObject(output_list.item(0));

	}		
	if( last_segment.isArc )
	{
		//alert('last_segment.isArc');
		
		var origin = last_segment.conicFrame.origin;
		var radius = last_segment.conicRadius;
		var start_angle = findRadians(origin.x, origin.y, start_point.x, start_point.y);
		
		//////////////////////////////////////// lead out ///////////////////////////////////////////////
		
		// leadout_point
		var arc_point = findPointOnArc( origin.x, origin.y, radius, start_angle, leadout_distance);
		var leadout_point = moi.vectorMath.createPoint( arc_point.x, arc_point.y );
		
		if(DEBUG)
		{
			var factory = moi.command.createFactory( "point" );  // create lead-out point
			factory.setInput( 0, leadout_point );
			var output_list = factory.calculate();
			moi.geometryDatabase.addObjects(output_list); 
			output_list.setProperty( 'styleIndex', 3 );
		}
		
		// end arc 
		var factory = moi.command.createFactory( 'arccenter' ); // 
		factory.setInput( 0, moi.vectorMath.createFrame(origin) );
		factory.setInput( 1, last_segment_start );
		factory.setInput( 2, leadout_point );
		factory.setInput( 4, false );
		var output_list = factory.calculate();
		output_collector_leadout.addObject(output_list.item(0));
		
		// lead-out arc
			// find tangent at leadout point
			// tangent vector needs to point in direction of travel	
			var tangent_vector = output_list.item(0).evaluateTangent(1); // get tangent of the end of the last arc, 0 is the beginning, 1 is the end of the arc
			debug('tangent');
			debug(dump(output_list));
			//alert(tangent_vector);
			var tangent_point = findPointOnLine(leadout_point.x, leadout_point.y, leadout_point.x + tangent_vector.x, leadout_point.y + tangent_vector.y, lead_in_out_radius );
			
			if(DEBUG)
			{
				var factory = moi.command.createFactory( "point" ); 
				factory.setInput( 0, moi.vectorMath.createPoint( tangent_point.x, tangent_point.y ) );
				var output_list = factory.calculate();
				moi.geometryDatabase.addObjects(output_list); 
				output_list.setProperty( 'styleIndex', 2 );
			}
			
			var perpendicular_point = calculatePerpendicularPoint( leadout_point, tangent_point, lead_in_out_radius , offset );
			var arc_center = moi.vectorMath.createPoint( perpendicular_point.x, perpendicular_point.y )
			if(DEBUG)
			{
				var factory = moi.command.createFactory( "point" );  // create lead-out point
				factory.setInput( 0, arc_center );
				var output_list = factory.calculate();
				moi.geometryDatabase.addObjects(output_list); 
				output_list.setProperty( 'styleIndex', 2 );
			}
			
			var factory = moi.command.createFactory( 'arccenter' ); // creates an arc between the first radial vector and the start
			factory.setInput( 0, moi.vectorMath.createFrame(arc_center) );
			factory.setInput( 1, moi.vectorMath.createPoint( leadout_point.x, leadout_point.y ));
			factory.setInput( 3, leadout_angle );
			factory.setInput( 4, false );
			var output_list = factory.calculate();
			output_collector_leadout.addObject(output_list.item(0));
			
		
		//finished
		moi.geometryDatabase.addObjects( output_collector_leadin );
		output_collector_leadin.setProperty( 'styleIndex', 5 );
		
		moi.geometryDatabase.addObjects( output_collector_leadout );
		output_collector_leadout.setProperty( 'styleIndex', 6 );
			
	}
	
	

	if(!DEBUG)
	{
	
		//split the original curve into segments
		var factory = moi.command.createFactory( 'separate' );
		factory.setInput( 0, WrapWithObjectList( curve ) );
		var separate_output_list = factory.calculate();
		
		//remove first and last segment
		separate_output_list.removeObjectAt( num_segments -1 ); // remove last segment first
		separate_output_list.removeObjectAt(0); // remove first segment last		
		
		CombineLists( output_collector_leadin, separate_output_list );
		CombineLists( output_collector_leadin, output_collector_leadout );
		
		debug( dump( output_collector_leadin ) );

		var factory = moi.command.createFactory('join');
		factory.setInput( 0, output_collector_leadin );
		moi.geometryDatabase.addObjects( output_collector_leadin );
		output_collector_leadin.setProperty( 'styleIndex', 6 );
		factory.commit();
		
	}
	else
	{
		//moi.geometryDatabase.addObjects( output_collector1 );
		factory.commit();
	}

}	



function DoChangeClosedCurveSeam()
{
	if ( !WaitForDialogDone() )
		return;
	
	var arc_distance = moi.ui.commandUI.arc_distance.value;
	var overlap = moi.ui.commandUI.overlap.value;
	var offset = moi.ui.commandUI.offset.value;
	
	// options
	
	moi.ui.beginUIUpdate();
	moi.ui.hideUI( 'FirstSelectPrompt' );
	moi.ui.showUI( 'SecondSelectPrompt' );
	moi.ui.endUIUpdate();
	
	
	// point on a curve
	
	var pointpicker = moi.ui.createPointPicker();
	pointpicker.enableOnObjectSnap = true;

	if ( !GetPointOsnappedOnCurve( pointpicker ) )
		return;

	var pickedpt = pointpicker.pt;
	var crv = null;
	var param;
	
	

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

				if ( crv.isCurvesegment )
					crv = crv.getParentObject();

				break;
			}
			else if ( objB && (objB.isCurve || objB.isCurveSegment) )
			{
				crv = objB;
				param = paramB;

				if ( crv.isCurvefirst_segment )
					crv = crv.getParentObject();

				break;
			}
		}
	}

	if ( !crv )
		return;
	
	if ( !crv.isClosed ) // only do this on closed curves
	{
		alert("not a closed curve"); 
		return;
	}

	var newcrv = crv.changeClosedCurveSeam( param );  // built-in moi function
	if ( newcrv )
	{
		moi.geometryDatabase.removeObject( crv );
		moi.geometryDatabase.addObject( newcrv );
		curve = moi.geometryDatabase.getCreatedObjects;
	}
	
	createLeadInOut( newcrv, arc_distance, overlap, offset );
	
}

DoChangeClosedCurveSeam();
f2.close();