MoI v5 API Documentation ( unofficial )
=======================================

Javascript Classes
------------------

[Annotation](#_Annotation)

[EditableListView](#_EditableListView)

[List](#_List)

[PointPicker](#_PointPicker)

[UIControl](#_UIControl)

[AnnotationPreset](#_AnnotationPreset)

[Face](#_Face)

[MenuItem](#_MenuItem)

[PointStreamPicker](#_PointStreamPicker)

[UIProgressBar](#_UIProgressBar)

[BackgroundImage](#_BackgroundImage)

[FactoryInputEnum](#_FactoryInputEnum)

[MeshObject](#_MeshObject)

[PointTextInput](#_PointTextInput)

[UIRangeControl](#_UIRangeControl)

[BoundingBox](#_BoundingBox)

[FileStream](#_FileStream)

[Moi](#_Moi)

[PropertiesPanel](#_PropertiesPanel)

[UnsignedIntegerTextInput](#_UnsignedIntegerTextInput)

[BRep](#_BRep)

[Filesystem](#_Filesystem)

[NumericTextInput](#_NumericTextInput)

[PropertyBinder](#_PropertyBinder)

[VectorMath](#_VectorMath)

[ColorButton](#_ColorButton)

[GeometryDatabase](#_GeometryDatabase)

[ObjectDatabaseStateEnum](#_ObjectDatabaseStateEnum)

[SceneBrowser](#_SceneBrowser)

[View](#_View)

[Command](#_Command)

[GeometryFactory](#_GeometryFactory)

[ObjectList](#_ObjectList)

[SceneBrowserItem](#_SceneBrowserItem)

[ViewlinkContainer](#_ViewlinkContainer)

[CommandButton](#_CommandButton)

[GeometryFactoryInput](#_GeometryFactoryInput)

[ObjectPicker](#_ObjectPicker)

[Selection](#_Selection)

[ViewPanel](#_ViewPanel)

[CommandUIContainer](#_CommandUIContainer)

[GeomObject](#_GeomObject)

[ObjectSnapEnum](#_ObjectSnapEnum)

[Settings](#_Settings)

[Viewport](#_Viewport)

[ConstructionLine](#_ConstructionLine)

[GeomObjectBase](#_GeomObjectBase)

[ObjectStyle](#_ObjectStyle)

[StateButton](#_StateButton)

[WaitableObject](#_WaitableObject)

[CoordinateFrame](#_CoordinateFrame)

[GeomObjectEnum](#_GeomObjectEnum)

[OrientationPicker](#_OrientationPicker)

[TabButton](#_TabButton)

[WaitableWindow](#_WaitableWindow)

[Curve](#_Curve)

[Grid](#_Grid)

[Osnap](#_Osnap)

[TabContainer](#_TabContainer)

[Window](#_Window)

[CurveOrientation](#_CurveOrientation)

[Group](#_Group)

[PickedPoint](#_PickedPoint)

[Text](#_Text)

[CurveSegment](#_CurveSegment)

[Image](#_Image)

[Point](#_Point)

[TextInput](#_TextInput)

[DisplayModeEnum](#_DisplayModeEnum)

[IntegerTextInput](#_IntegerTextInput)

[Point2D](#_Point2D)

[Theme](#_Theme)

[DrawingAids](#_DrawingAids)

[LayoutPanel](#_LayoutPanel)

[PointObject](#_PointObject)

[UI](#_UI)

GeometryFactory Subclasses
--------------------------

[addpoint](#_addpoint)

[box](#_box)

[mirror](#_mirror)

[revolve](#_revolve)

[addpointsrf](#_addpointsrf)

[box3pts](#_box3pts)

[ellipse](#_ellipse)

[move](#_move)

[rotate](#_rotate)

[align](#_align)

[boxcenter](#_boxcenter)

[ellipsecorner](#_ellipsecorner)

[network](#_network)

[rotateaxis](#_rotateaxis)

[alignbackgroundimage](#_alignbackgroundimage)

[calcarea](#_calcarea)

[ellipsediameter](#_ellipsediameter)

[nsided](#_nsided)

[scale](#_scale)

[annotationtext](#_annotationtext)

[calclength](#_calclength)

[explodemove](#_explodemove)

[offset](#_offset)

[scale1d](#_scale1d)

[arc3pt](#_arc3pt)

[calcvolume](#_calcvolume)

[extend](#_extend)

[orient](#_orient)

[scale2d](#_scale2d)

[arccenter](#_arccenter)

[chamfer](#_chamfer)

[extrude](#_extrude)

[orientlinetoline](#_orientlinetoline)

[scalenonuniform](#_scalenonuniform)

[arccontinue](#_arccontinue)

[circle](#_circle)

[fillet](#_fillet)

[planarsrf](#_planarsrf)

[separate](#_separate)

[arctangent](#_arctangent)

[circle3pt](#_circle3pt)

[flip](#_flip)

[plane](#_plane)

[shell](#_shell)

[arraycircular](#_arraycircular)

[circlediameter](#_circlediameter)

[flow](#_flow)

[plane3pts](#_plane3pts)

[shrinktrimmedsrf](#_shrinktrimmedsrf)

[arraycurve](#_arraycurve)

[circletangent](#_circletangent)

[group](#_group)

[planecenter](#_planecenter)

[silhouette](#_silhouette)

[arraydir](#_arraydir)

[cone](#_cone)

[helix](#_helix)

[point](#_point)

[sketchcurve](#_sketchcurve)

[arraygem](#_arraygem)

[conic](#_conic)

[inset](#_inset)

[polygon](#_polygon)

[sphere](#_sphere)

[arraygrid](#_arraygrid)

[copy](#_copy)

[interpcurve](#_interpcurve)

[polygonedge](#_polygonedge)

[sweep](#_sweep)

[arrow3d](#_arrow3d)

[curve](#_curve)

[intersect](#_intersect)

[polygonstar](#_polygonstar)

[text](#_text)

[backgroundimage](#_backgroundimage)

[cylinder](#_cylinder)

[isocurve](#_isocurve)

[polyline](#_polyline)

[trim](#_trim)

[blend](#_blend)

[delete](#_delete)

[join](#_join)

[project](#_project)

[twist](#_twist)

[booleandifference](#_booleandifference)

[dimaligned](#_dimaligned)

[label](#_label)

[railrevolve](#_railrevolve)

[ungroup](#_ungroup)

[booleanintersection](#_booleanintersection)

[dimangle](#_dimangle)

[leader](#_leader)

[rebuildcurve](#_rebuildcurve)

[ungroupall](#_ungroupall)

[booleanmerge](#_booleanmerge)

[dimhorizontal](#_dimhorizontal)

[line](#_line)

[rect3pts](#_rect3pts)

[viewproject](#_viewproject)

[booleanunion](#_booleanunion)

[dimradius](#_dimradius)

[loft](#_loft)

[rectangle](#_rectangle)

[boundingbox](#_boundingbox)

[dimvertical](#_dimvertical)

[make2d](#_make2d)

[rectcenter](#_rectcenter)

[boundingboxcenter](#_boundingboxcenter)

[drag](#_drag)

[merge](#_merge)

[removeduplicates](#_removeduplicates)

Hints
-----

*   Javascript ES5 is the version that comes with MoI, so avoid newer syntax
*   vsCode is a free text editor that can be used to write scripts and edit this document
*   Problems often happen because of confusion between properties and methods because this document doesn't show actual syntax. Check parentheses.
*   Print to screen with moi.ui.alert(message);
*   Scripts are cached by default. That means that if changes are made to a script while MoI is running, the changes won't have an effect until after restarting MoI. To greatly speed up troubleshooting add the following line to the \[UI\] section of moi.ini :  
      
    DisableFileCaching=y  
      
    
*   Determine MoI Javascript object type with .toString()
*   Discover undocumented properties and methods of a MoI Javascript object using a dump function:  
    
        
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
        
    

Factory Operation
-----------------

*   In order to be displayed on the screen, all geometry must be in the geometry database.
*   It is possible to create, maintain and use geometry that is not displayed to the user (i.e. not in the geometry database).
*   Factories can work with any geometry objects, whether or not they are in the geometry database.

A quick description of how calculate / update / commit / cancel is supposed to work. [http://moi3d.com/forum/index.php?webtag=MOI&msg=3541.1](http://moi3d.com/forum/index.php?webtag=MOI&msg=3541.1)

The factory system is set up primarily to support interactive commands where the user may be changing parameters interactively and wanting to see some feedback on the screen while the command is running.

In order to show an object changing, what actually happens is the existing object is hidden (but still in the geometry database), then the edited object is created by the factory, and added to the geometry database so that it will render on the screen when the geometry database is drawn, because that's how all things are drawn, by drawing the geometry database. This happens during calls to .update(), which can be called either directly by a command script, or if the is a binding set up the binding mechanism will automatically call update when the other partner of the bind is triggered. So for example when UI control is bound to a factory input, when the UI control changes it will stuff the new value into the factory and call update(), that's what the binders handle.

But the original objects, and newly created objects are kept track of by the factory in some internal lists. If the factory is canceled (which can happen by the command script itself calling .cancel() or also by the system if the factory is forcibly pulled down), then it restores the original objects visibility and removes the new objects from the geometry database.

During the command ending cleanup step, any active factories that have not had .commit() called on them are also canceled.

So in order to signal that the command script was fully executed, it calls .commit() before it ends to signal that the command's whole process was executed, and at that point the original objects (that up until now were just hidden) are actually removed from the database.

Some commands also have what are called "UI objects" that are things like additional lines or points added to the geometry database while the command is running for additional illustration purposes.

The .calculate() method is added to this factory system to help with someone who wants to use the factory procedurally in a script rather than in an interactive command. It runs the factory and generates the new objects, but the new objects are not automatically added to the geometry database, they are just returned in a list so they could be used for additional calculations without necessarily showing up on the screen, and the original objects are not hidden.

During .calculate() there is a flag set to disable the creation of "UI geometry" by the factory, but possibly some older commands need to be updated to respect that. If you are seeing some left-over bits of lines or points or stuff like that, let me know what commands you see them in and they probably need to be updated to not generate UI geometry when the flag is set.

Basically, objects in the geometry database are immutable, to modify an object a geometry factory will create a new object and the old object will need to be removed from the geometry database. This cycle of of generating a new objects and removing the old object is handled automatically by the factory.update() and factory.commit() mechanisms that regular commands use. It can be useful for a plugin to handle it manually though, which is done by using factory.calculate() instead of factory.update()/commit() — unlike the update/commit the calculate() function will generate an output object but not automatically add it to the geometry database or remove any input objects from the geometry database.

Geometry itself does not really have a "committed" state, it's actually the factory that has that state.

When a factory is being used in an interactive command, the newly created geometry (created during a call to .update() ) is actually added to the geometry database as well, otherwise it would not show up on the screen. But when you do a factory.commit(), it then knows not to remove that geometry during the cleanup stages when a command exits, otherwise that geometry is removed if a factory is torn down before a commit() happened.

If you do a factory.calculate(), then that generates a list of output objects but does not process them in any of the other ways that happen during the normal interactive update/commit/cancel type stuff. That's so you could potentially use those objects for other intermediate calculations instead of forcing them to be displayed on the screen.

So the results of .calculate() are not added automatically to the geometry database. But you should be able to use them for inputs into other factories, however if you need them to be selected and show up in the geometry database you will need to add them to the geometry database yourself.

Geometry does have a flag for whether it is "in the database" or not in the database list, but that's a different thing than a factory's committed state.

Commands, Instant Scripts, and Startup Scripts
----------------------------------------------

*   Only one command can be run at a time, if you run a command while another one is running the current running command will be canceled before the new one will run.
*   You can avoid this by not packaging your script into a "command" and instead run it as "instant script" code.
*   You can do that by having the script code (prefixed by "script:") directly contained inside the keyboard shortcut instead of having it in a separate file. `script: /* comment */ moi.ui.alert( 'hello world' );`
*   Or another way is if you have the file located in a folder named "scripts" instead of in the "commands" folder.
*   MoI looks first in “commands” and only then in “scripts” if it doesn't find a .js with the appropriate name in “commands”
*   When something is run as a "command" there is a bunch of other stuff that is managed both before the command is run and after the command exits. Some of the stuff done before a command starts includes loading any associated UI from a companion .htm file, clearing any "selection transition" display, clearing "selection lock", preparing the undo manager, and recording the current geometry database revision number and current selection counter. Some of the stuff done when a command ends includes clearing selection lock, hiding the "Calculating..." and "Calculation failed" UI, persisting control values from the controls in the UI, clearing the command UI, canceling any factories that were created in the command that were not committed, generating undo units if any geometry was created or removed during the command, and deactivating any command or command set buttons associated with that command.
*   If you want some script to do something like manipulate a view or selection without exiting the current command then have it run as immediate executed script instead of as a command.
*   When MoI is started it will run all .js files it finds in a directory named "startup" inside of MoI's AppData. It will also look for any startup directory inside the main application install folder as well. The scripts will run right before the main window is displayed - note that if the script puts up a modal dialog the main window won't show until the script finishes. Scripts will be run in alphabetical order. MoI will create startup and commands directories inside appdata.
*   Another type of a startup script is used for batch processing. The first step is that you can pass the name of a script file as a command-line parameter to MoI.exe. If there are any spaces in the script file name, the entire file name should be enclosed in double quotes, like: `MoI.exe "c:\path with spaces\script.js"` The script will execute immediately before the main window is displayed, so if your script decides to exit MoI the actual MoI UI will never show up on the screen. Michael made an example to get you started. This BatchConvert.zip script shows how to convert IGES to OBJ files.

Command User Interface
----------------------

*   .js is always needed
*   .htm with same name as .js is needed for command to have a user interface
*   .htm required if using moi.ui.commandUI because that is trying to get something from .htm global object
*   loading a javascript function in the head of .htm can be convenient so that events like onclick can directly call a function.
*   commandUI, commandDialog, and fireUIevent are good for passing information back and forth between .js and .htm
*   Whether or not a script has a .htm user interface is still cached even with file caching disabled. This means that if you create a .htm file with the same name as your .js while MoI is running, the user interface represented by the .htm won't appear until after MoI is restarted. Another thing that is cached even with file caching turned off is whether "// config: norepeat" is present at the top of the .js to disable the Repeat checkbox.
*   Unintentional persistence of variables can happen if javascript is loaded in the head of the .htm

  

**Example**

.js

.htm

    
    // config: norepeat
    // The line above disables the Repeat checkbox even though it looks like a comment
    
    waitForSomething();
    
    function waitForSomething() {
    
        // toggle checkbox after 1 second
        moi.ui.commandUI.setTimeout(toggle, 1000);
    
        var dialog = moi.ui.commandDialog;
    
        while (1) {
    
            if (!dialog.waitForEvent()) { // Canceled
                return;
            }
    
            if (dialog.event == 'done') { // "Done" pushed
                break;
            }
    
            if (dialog.event == 'something') { // "Something" pushed
                moi.ui.alert('you did something');
                break;
            }
        }
    }
    
    function toggle() {
        var e = moi.ui.commandUI.myCheckbox;
        e.value = !e.value;
    }
    

    
    <html xmlns:moi>
    
    <head>
        <link rel="stylesheet" href="moi://ui/moi.css" type="text/css">
    </head>
    
    <body class="commandbody">
        <div class="commandheader">
            <div class="commandprompt">Do something
    
                <moi:PushButton id="joinButton" onclick="moi.ui.fireUIEvent('something')" style="width: 100%">Something
                </moi:PushButton>
    
                <!-- checkbox state persists even after command is closed
                run this command a few times to see that checkbox toggles back and forth -->
                <moi:CheckButton id="myCheckbox">My Checkbox</moi:CheckButton>
    
            </div>
        </div>
        <!-- Done and Cancel buttons -->
        <moi:CommandDoneCancel />
    </body>
    
    </html>
    

Instant Script User Interface
-----------------------------

  

**Example**

instantScript.js

instantScript.htm

    
    instantScript();
    
    function instantScript() {
    
        if (moi.majorVersionNumber < 4) {
            moi.ui.alert('Requires MoI version 4 or later');
            return;
        }
    
        // load UI
        var url = 'moi://appdata/scripts/instantScript.htm';
        moi.ui.commandDialog.push(url);
    
        // verify that UI loaded successfully
        if (moi.ui.commandUI.g_loadCheck === undefined) {
            var splitURL = url.split('/');
            var filename = splitURL[splitURL.length - 1];
            moi.ui.alert(filename + ' is missing or was renamed');
        }
    
        moi.geometryDatabase.deselectAll();
    
        // pick object
        var objectpicker = moi.ui.createObjectpicker();
        if (!getObject(objectpicker))
            return;
    
        moi.ui.alert('you picked a ' + moi.ui.propertiesPanel.objectType);
    
        // explicitly unlock selection since this is an instant script and
        // that's not done automatically unlike with a command
        moi.geometryDatabase.getObjects().unlockSelection();
    
    }
    
    // event loop to keep UI open until object picked or Cancel
    // commands can reuse existing code in the commands folder by having a line like:
    // #include "GetObject.js"
    // at the start of their JavaScript, but that doesn't work for an instant script
    // and also .htm UI doesn't get loaded/closed automatically for an instant script
    // so a modified version of GetObject() is needed anyway
    function getObject(objectpicker) {
    
        objectpicker.min = objectpicker.max = 1;
        objectpicker.disableWindowing();
    
        var dialog = moi.ui.commandDialog;
    
        while (1) {
    
            if (!objectpicker.waitForEvent()) { // cancelled
                dialog.pop(); // close UI
                return false;
            }
    
            if (objectpicker.event == 'finished') {
                dialog.pop(); // close UI
                break;
            }
        }
    
        objectpicker.objects.lockSelection();
    
        return true;
    }
    

    
    <html xmlns:moi>
    
    <head>
        <link rel="stylesheet" href="moi://ui/moi.css" type="text/css">
        <script>
            var g_loadCheck = true;
        </script>
    </head>
    
    <body class="commandbody">
        <div class="commandheader">
            <div class="commandprompt">pick an object</div>
        </div>
    
        <moi:CommandCancel />
    </body>
    
    </html>
    

HTM tags
--------

MoI HTM tags are used to add UI elements

Tag

Attributes

Notes

Base control class from which input tags inherit attributes. Not actually usable as tag.

The internal part of the inputs listed below inherit from the MoI base control class so they also gets some other capabilities like being able to set up a binding map to connect the "value" property to another property on some other object so that when the value changes the other object's property is also updated. That's also where the templating capability comes from, which is that the HTML from the Slider.htm template is inserted into the slider control when it is created.

value="aNumber"

default="aNumber"

binding="value = propertyOfAnObject"

You first need to give each control an id="" attribute - that will then give it a name that can be referred to in script.

  

Then if you want to tie those 2 controls together so when one is changed the other will be updated, you can use a binder to do that. There are a few different ways to set up binders, but in a case like this is it easiest to use a binding map attribute - in v3 that's a binding="" attribute that you can declare on a control. There are also a couple of different forms of binding maps, the most simple which can be used in this case is a direct assignment 2-way binder, which is just 2 properties that have an = between them. With that kind of binding map, MoI will monitor each property and when it is changed reflect that value onto the other one. So with 2 controls that will have the effect of keeping the controls synchronized to one another.

  

Example:

    
    <moi:Slider id="myslider" value="1.0" min="1.0" max="10.0" />
    <moi:NumericInput id="myinput" binding="this.value = myslider.value" />
    

  

  
That will create 2 controls, a slider and then a numeric input field. The numeric input field has a binder="" declared on it which will cause the values of the 2 controls to be synchronized - that binding map means that any changes on the property on one side of the = will then cause the value on the other side of the equal to be updated - in this case it will cause the slider and the input field to be synchronized to have the same value.

  

Then since they will have the same value, in your command script you can retrieve the value from either one of them, it doesn't really matter which one you get it from.

  

A binding map does not support calling a function in it, only retrieving properties.

  

There are other kinds of binders as well, like setting up a binding between a UI control's value and a geometry factory's input slot so that any time the UI control's value changes it will then apply the new property to the geometry factory and call .update() on it - when you set one of those up then you don't have to do any manual event handling of that control after that.

style="persist:true"

user entered value is restored next time the command is run if _true_

  

Sets whether a control in the command UI will remember its value on the next run of the command or not - some controls default to persisting the value and if I remember right some controls like text input fields default to not persisting it, but the default persist value can be overwritten by assigning that style property to the specific element.

  

If a control in the command UI is set to persist then its value is recorded when the command ends, and the next time that command starts up it will get initialized with that value.

style="decimalPlaces:integer"

number of decimal places to display

<moi:NumericInput />

NumericInput is for a floating point number that is not representing a distance, say like a scale factor or things like that. See [NumericTextInput](#_NumericTextInput) JavaScript class

<moi:DistanceInput />

DistanceInput is for things that are expressed in units, it will get a small unit system label after it and you can type in things like other units and it will convert.

<moi:IntegerInput />

See [IntegerTextInput](#_IntegerTextInput) JavaScript class

<moi:UnsignedIntegerInput />

See [UnsignedIntegerTextInput](#_UnsignedIntegerTextInput) JavaScript class

<moi:PointInput />

See [PointTextInput](#_PointTextInput) JavaScript class

<moi:UnitsLabel />

Displays abbreviated units label corresponding with the setting at Options>General>"Unit system"

<moi:TextInput />

See [TextInput](#_TextInput) JavaScript class

<moi:Slider />

There's not too much to the internal control part - it reads any min="" mid="" and max="" values from the html and creates 2 images for the knobs (regular and highlighted), and has an event handler to watch for mouse events to change the knob.

  

Sliders have a value property that contains their current position value, and during initialization they look for a min="" and max="" property (and optionally a mid="") that sets up the range of the slider.

  

The internal part of the slider inherits from the MoI base control class so it also gets some other capabilities like being able to set up a binding map to connect the "value" property to another property on some other object so that when the value changes the other object's property is also updated. That's also where the templating capability comes from, which is that the HTML from the Slider.htm template is inserted into the slider control when it is created.

  

Sliders make use of 2 images in the \\ui subfolder: SliderKnob.png and SliderKnob\_highlighted.png . There's also a template named Slider.htm which sets up the inner structure of the slider which uses 2 nested divs to apply some border lines. The styling of them is controlled from moi.css in the moi\\:Slider section, there are some entries in there for controlling the borders on the nested divs for the body part of the slider, and also hiding the regular knob and showing the highlighted knob when you move the mouse over the control is set there with the :hover styling.

value="aNumber"

min="aNumber"

mid="aNumber"

Optional: you can leave out the mid="" declaration on the slider if you want the mid to just automatically be 1/2 the way between min and max - it's only there if you want to have slightly different spread ranges for the left half and right half of the slider.

max="aNumber"

binding="value = propertyOfAnObject"

<moi:Select>...</moi:Select>

styled HTML select dropdown menu

default="valueOfAnOption"

binding="value = propertyOfAnObject"

<moi:Option>...</moi:Option>

An option in a dropdown menu. Must be between <moi:Select /> and </moi:Select>

value="aString"

textid="stringIdOfText"

For multi-language display. Looks up the text to display from the current active language string table file. If you have English set as your language, that will be the file EnglishStrings.txt in your \\ui sub-folder.

<moi:PushButton>...</moi:PushButton>

Has .disabled property that can be used to make button non-clickable and also gray-out the button. Set .disabled on a Javascript variable with the same name as the id of the HTML pushbutton tag.

  

In .htm:

`<moi:PushButton id="deleteViewButton" onclick="deleteView()" style="width: 100%; color: firebrick">Delete</moi:PushButton>`  
  

In .js or script in head of .htm:

`deleteViewButton.disabled = false;`

class="SlimBtn"

for buttons in a dense grid to reduce padding a bit

class="commanddonecancelbtn"

Can be used to make a Done button:

`<moi:PushButton id="done" class="commanddonecancelbtn"> <moi:Text textid="Command done button" /> </moi:PushButton>`

class="hiddencommanddonecancelbtn"

<moi:CheckButton>...</moi:CheckButton>

Square checkbox for choosing items from a fixed number of alternatives.

default="false"

checked when _true_

style="persist:true"

user entered value is restored next time the command is run if _true_

binding="value = propertyOfAnObject"

binding=

Example:

`binding="this.style.display < return OrientationPickerAlignToObjects.value ? '' : 'none';"`

<moi:LabelButton>...</moi:LabelButton>

Borderless button for switching between 2 options where the button text/image changes as the option changes such as radius or diameter or for doing another action when text/image is clicked like copying to clipboard. Gets a gray box on hover.

  

When switching between 2 options use in combination with a function that toggles the appearance of the button while also toggling the relevant variable:

  
`<moi:LabelButton onclick="ToggleRadiusDiameter();"><moi:Text id="_RadiusButton" textid="Radius button"/><moi:Text id="_DiameterButton" style="display:none" textid="Diameter button"/><moi:Cycler/></moi:LabelButton>`

<moi:Cycler/>

An arrow indicating that a LabelButton can be cycled through multiple values by clicking on it.

<body class="commandbody">...</body>

Body for command UI

<div class="commandheader">...</div>

header for command UI

<div class="commandprompt">...</div>

Prompt to display when the command is started

<div class="hiddencommandprompt">...</div>

Prompt to display for a subsequent stage of the command

<div class="commandoptions">...</div>

UI elements to display when the command is started if some of those elements will subsequently be hidden with moi.ui.hideUI( 'myIdString' ). Probably not needed if command has a single UI with no showing or hiding of elements.

<div class="hiddencommandoptions">...</div>

UI elements to display for a subsequent stage of the command

<moi:CommandCancel />

A single button that cancels the command

<moi:CommandDoneCancel />

2 buttons: Done on the left and Cancel on the right.

<moi:CommandHiddenDoneCancel />

Done hidden, but Cancel visible

<moi:ProgressBar />

style="persist:true;"

<moi:CommandOptionsSeparatorLine />

horizontal line like <hr>

<moi:Spacer />

0.5em width

<moi:SmallSpacer />

0.2em width

<moi:SmallBr />

0.25em height

<body class="CommandSetBody">...</body>

Body for a command set which is group of related commands that share a single button. There are 2 files that make up a command set, one is a .htm file for the UI and the other is an .xml file that lists the commands in it.

  

When you open a command set (like click on "Draw curve">Lines), the last used command will automatically start unless it's marked with "noautolaunch" which should be set on a command that just does its action immediately like Boolean Union for example.The first time that it opens it will just run the first one. To mark a command with noautolaunch put a line like this at the top of the .js for the command:

  
`// config: noautolaunch`  
  

or to also disable the Repeat checkbox:

  
`// config: norepeat noautolaunch`

<moi:CommandButton>...</moi:CommandButton>

button with icon and text for starting a command

command="stringNameOfCommand"

left-click command to run

rcommand="stringNameOfCommand"

right-click command to run

commandset="stringNameOfCommandSet"

A "command set" is made up of an .xml and an .htm file. The .xml file defines what commands are in the command set and the first one there will be the default one that is initially launched when activating the command set. The .htm file has the UI that is displayed as a flyout menu for that command set.

icon="stringURLofPNG"

Example:

`icon="moi://ui/icons/myIcon.png"`

<moi:CommandMenuButton>...</moi:CommandMenuButton>

Command button with flyout menu that's visually continuous with the button.

icon="stringURLofPNG"

Example:

`icon="moi://ui/icons/myIcon.png"`

menu="stringURLofHTM"

`icon="moi://appdata/startup/myMenu.htm"`

<moi:CommandSplitButton>...</moi:CommandSplitButton>

Command button with flyout menu that visually splits off from the button.

icon="stringURLofPNG"

Example:

`icon="moi://ui/icons/myIcon.png"`

menu="stringURLofHTM"

`icon="moi://appdata/startup/myMenu.htm"`

<body class="DialogBody">...</body>

Body for a popup dialog

<moi:Title>...</moi:Title>

Title text for a popup dialog

textid="stringIdOfText"

For multi-language display. Looks up the text to display from the current active language string table file. If you have English set as your language, that will be the file EnglishStrings.txt in your \\ui sub-folder.

<moi:DialogOKCancel />

2 buttons: Ok and Cancel for a popup dialog

<moi:DialogClose />

Close button for a popup dialog

<moi:DialogOK />

OK button for a popup dialog

<moi:DialogCancel />

Cancel button for a popup dialog

<moi:WindowControlButton>...</moi:WindowControlButton>

For controlling the size of a window. The one with id="CloseWindow" gets a red colored background.

icon="myIcon.png"

style="fireUIEvent:false; notabindex:false;"

<moi:SmallCloseWindowButton>...</moi:SmallCloseWindowButton>

 

style="dismissFlyout:true;"

class="removebtn"

<moi:Binder />

Binds attributes of html elements such as for controlling display of an element based on the properties of other elements:

  
`<moi:Binder binding="setflatdir_tr.style.display < return ( (twistselect.value == 'flat' && window.g_Is1rail == true) ? '' : 'none');"/>`

binding

<moi:Text />

For multi-language display. See [Text](#_Text) JavaScript class

textid="stringIdOfText"

Looks up the text to display from the current active language string table file. If you have English set as your language, that will be the file EnglishStrings.txt in your \\ui sub-folder.

class="warning"

Red text in yellow box

<moi:ExpanderHeader>...</moi:ExpanderHeader>

header for a folded section that can expand

<moi:ExpanderBody>...</moi:ExpanderBody>

body for a folded section that can expand

noborder="false"

<body class="MenuBody">...</body>

<moi:FlyoutHeader />

header for a flyout menu

<moi:MenuItem>...</moi:MenuItem>

 

binding="checked = booleanPropertyOfAnObject"

style="autocheck:false;"

command="stringNameOfCommand"

<moi:ListItem>...</moi:ListItem>

.disabled property on JavaScript object corresponding with id of ListItem

URL
---

Address from which HTML, CSS, images, and other UI ingredients can be loaded

URL

Comments

moi://ui

Native MoI UI directory

moi://appdata

User directory where plugins live

res://

Some icons are embedded as resources inside of moi\_lib.dll because that's what the distribution license for those particular icon images required.

If you look in CommandBar.htm, those icons will be ones that have their icon="" property using the res:// protocol like this: icon="res://saveicon"

For these you can also create a replacement icon file with that same filename and put it in the ui\\icons folder and it will pick up that version if it's present. So for example for replacing the save icon put a file named saveicon.png inside of the \\ui\\icons folder. These icons should usually be 64 by 64 PNG images with alpha mask to make a transparent background.

[Annotation (](#toc) [GeomObject](#_GeomObject) )
-------------------------------------------------

Properties of this class define the appearance of annotations such as dimensions. An undo unit won't be created if the properties of an existing annotation are changed directly. To trigger creation of an undo unit use moi.ui.propertiesPanel.setAnnotationProp() to set the property value. See ObjectPropertiesDialog.htm

**Properties**

Name

Type

Notes

annotationType

string

annotation.annotationType - one of "LinearDimension", "RadialDimension", "AngularDimension", "Leader", "Text"

annotationFrame

[CoordinateFrame](#_CoordinateFrame)

annotation.annotationFrame - coordinate frame for the annotation object's plane

arrowheadType

string

annotation.arrowheadType - "arrow", "open arrow", "tick", "dot", "barb"

arrowLength

annotation.arrowLength - pixel arrowhead size when using Scaling: By screen size mode.

arrowLengthModelUnits

annotation.arrowLengthModelUnits - model units arrowhead size when using Scaling: By model units mode.

arrowWidthFactor

annotation.arrowWidthFactor - value for aspect ratio to generate width from height

arrowGap

float

annotation.arrowGap - gap at point of arrow in Scaling by screen size mode. No effect on "dot" and "tick" arrowhead types.

arrowGapModelUnits

float

annotation.arrowGapModelUnits - gap at point of arrow in scaling by model units mode

openArrowLength

annotation.openArrowLength - length for open arrowhead size in By screen size mode

openArrowLengthModelUnits

annotation.openArrowLengthModelUnits - length for open arrowhead in model units mode

openArrowWidthFactor

annotation.openArrowWidthFactor - same as arrowWidthFactor but for Open arrowheads

tickLength

annotation.tickLength - size of tick type arrowhead in by screen size mode

tickLengthModelUnits

annotation.tickLengthModelUnits - size of tick type arrowhead in by model units mode

tickLineWidth

annotation.tickLineWidth - display line width for tick arrowheads

reverseTick

annotation.reverseTick - reverse tick direction

dotSize

annotation.dotSize - size of dot arrowhead type in screen size scaling mode

dotSizeModelUnits

annotation.dotSizeModelUnits - size of dot arrowhead in by model units scaling mode

extensionLength

annotation.extensionLength - length of extension lines in screen size scaling mode

extensionLengthModelUnits

annotation.extensionLengthModelUnits - length of extension lines in model units scaling mode

extensionGap

annotation.extensionGap - gap for extension lines in screen mode

extensionGapModelUnits

annotation.extensionGapModelUnits - gap for extension lines in model units mode

arrowLineExtension

annotation.arrowLineExtension - arrow line extension in screen mode

arrowLineExtensionModelUnits

annotation.arrowLineExtensionModelUnits - arrow line extension in model units mode.

textAlign

string

annotation.textAlign - "Left", "Center", "Right", "Justified"

scaleMode

string

annotation.scaleMode - "By screen size", "By model units"

height

annotation.height - Text height for By model units mode.

textBoxPaddingX

annotation.textBoxPaddingX - left/right text box padding for screen size scaling mode

textBoxPaddingY

annotation.textBoxPaddingY - top/bottom text box padding for screen size scaling mode

textBoxPaddingXModelUnits

annotation.textBoxPaddingXModelUnits - left/right text box padding for model units scaling mode

textBoxPaddingYModelUnits

annotation.textBoxPaddingYModelUnits - top/bottom text box padding for model units scaling mode

textBoxOutline

string

annotation.textBoxOutline - "None", "Rect", "Bracket"

textBoxOutlineWidth

annotation.textBoxOutlineWidth - width to use for bracket outline in screen size scaling mode

textBoxOutlineWidthModelUnits

annotation.textBoxOutlineWidthModelUnits - width to use for bracket outline in model units scaling mode

textMode

string

annotation.textMode - "Above", "Inline", "Screen"

text

string

annotation.text - text value for annotation, for dims it can contain <> which will be replaced by numeric dimension length

fontName

fontPtSize

fontStyleName

fontWeight

fontStyle

fontUnderline

fontStrikeout

distanceDisplay

string

annotation.distanceDisplay - "Decimal", "Feet & Inches"

numDecimalPlaces

showTrailingZeros

fractionalDisplayPrecision

rotateArrowheadPlaneTowardsViewer

  

**Methods**

Name

Result

Arguments

getPoints

[List](#_List) of [Points](#_Point)

returns a list of the defining points for the annotation

[AnnotationPreset](#toc)
------------------------

Annotation presets control the property values that will be applied to a newly drawn dimension. Presets are created and edited in the Options dialog > Dimensions section. Different presets can be created to make different styles and when you are drawing a dimension there is an option for which property preset to use. The "Default" preset is stored in the moi.ini file and so is globally available in all projects. Additional presets are project specific and saved in .3dm files.

**Properties**

Name

Type

Notes

presetName

string

presetIndex

int

read only

position in preset list

fontName

fontPtSize

fontStyleName

fontWeight

fontStyle

fontUnderline

fontStrikeout

textDisplayMode

textAlign

scaleMode

height

textAnchor

textBoxOutline

textBoxOutlineWidth

textBoxOutlineWidthModelUnits

textBoxPaddingX

textBoxPaddingY

textBoxPaddingXModelUnits

textBoxPaddingYModelUnits

arrowheadType

arrowheadArrowLength

arrowheadArrowLengthModelUnits

arrowheadArrowWidthFactor

arrowheadOpenArrowLength

arrowheadOpenArrowLengthModelUnits

arrowheadOpenArrowWidthFactor

arrowheadTickLength

arrowheadTickLengthModelUnits

arrowheadTickLineWidth

arrowheadDotSize

arrowheadDotSizeModelUnits

arrowheadReverse

arrowPosition

outsideLineLength

outsideLineLengthModelUnits

outsideDrawLineAcross

extensionLength

extensionLengthModelUnits

extensionGap

extensionGapModelUnits

arrowLineExtension

arrowLineExtensionModelUnits

formattingDistanceDisplay

formattingFractionalPrecision

formattingDecimalPrecision

int

an integer number from 0 to 7 for the number of decimal places to show

formattingDecimalShowTrailingZeros

radialDimensionRadialType

radialDimensionCrossSize

radialDimensionCrossSizeModelUnits

  

**Methods**

Name

Result

Arguments

setFont

shows font picker dialog

[BackgroundImage](#toc)
-----------------------

Items of this class define images that appear in a view's background.

**Properties**

Name

Type

Notes

embedded

boolean

fileName

string

read only

The name of the file the background image was loaded from.

hidden

boolean

_**\-1**_ if the background image is currently hidden, and _**0**_ if it is visible.

  

**Methods**

Name

Result

Arguments

frame

[CoordinateFrame](#_CoordinateFrame)?

Example:

`var images = moi.view.getBackgroundImages(); for ( var i = 0; i < images.length; ++i ) { var img = images.item(i); var f = moi.command.createFactory('plane'); f.setInput( 0, img.frame ); f.setInput( 2, img.width ); f.setInput( 3, img.height ); f.commit(); }`

getEmbeddedImage

[Image](#_Image)

Returns an [Image](#_Image) object, so that image.save() can be called to extract an embedded background image out to a separate file again.

width

_float_ width

height

_float_ height

reload

remove

Removes the background image.

[BoundingBox](#toc)
-------------------

Items of this class define a world-axes aligned three dimensional bounding box. As new [BoundingBox](#_BoundingBox), [GeomObject](#_GeomObject) and [Point](#_Point) objects are added, it automatically adjusts its current position and size by computing the union of its previous position and size with the bounding box of the newly added item.

* * *

**References:** [GeomObject](#_GeomObject)(1), [ObjectList](#_ObjectList)(2), [PropertiesPanel](#_PropertiesPanel)(2), [VectorMath](#_VectorMath)(1)

**Properties**

Name

Type

Notes

center

[Point](#_Point)

read only

The [Point](#_Point) at the geometric center of the [BoundingBox](#_BoundingBox).

diagonalLength

float

read only

The distance from one corner of the [BoundingBox](#_BoundingBox) to its diametrically opposite corner.

max

[Point](#_Point)

Specifies the corner [Point](#_Point) of the [BoundingBox](#_BoundingBox) with the maximum x, y and z coordinates.

min

[Point](#_Point)

Specifies the corner [Point](#_Point) of the [BoundingBox](#_BoundingBox) with the minimum x, y and z coordinates.

xLength

float

read only

The length of the [BoundingBox](#_BoundingBox) along its x-axis parallel edges.

yLength

float

read only

The length of the [BoundingBox](#_BoundingBox) along its y-axis parallel edges.

zLength

float

read only

The length of the [BoundingBox](#_BoundingBox) along its z-axis parallel edges.

  

**Methods**

Name

Result

Arguments

addBoundingBox

_[BoundingBox](#_BoundingBox)_ box

Adds another bounding _box_ to this one. This [BoundingBox](#_BoundingBox) is modified to be the union of _box_ and the original contents of the [BoundingBox](#_BoundingBox).

addObject

_[GeomObject](#_GeomObject)_ obj,  
_boolean_ useHighAccuracyBounds = **0**

Adds the [BoundingBox](#_BoundingBox) for _obj_ to this one. This [BoundingBox](#_BoundingBox) is modified to be the union of the [BoundingBox](#_BoundingBox) for _obj_ and the original contents of the [BoundingBox](#_BoundingBox).

addPoint

_[Point](#_Point)_ point

Adds the [BoundingBox](#_BoundingBox) for _point_ to this one. This [BoundingBox](#_BoundingBox) is modified to be the union of the [BoundingBox](#_BoundingBox) for _point_ and the original contents of the [BoundingBox](#_BoundingBox).

clear

get

_float_ minX,  
_float_ minY,  
_float_ minZ,  
_float_ maxX,  
_float_ maxY,  
_float_ maxZ

set

_float_ minX,  
_float_ minY,  
_float_ minZ,  
_float_ maxX,  
_float_ maxY,  
_float_ maxZ

Sets the position and size of the [BoundingBox](#_BoundingBox) to the region bounded by the two corner points _(minX,minY,minZ_) and _(maxX,maxY,maxZ)_.

[BRep](#toc) ( [GeomObject](#_GeomObject) )
-------------------------------------------

Items of this class define **Boundary Representations** for solids.

**Methods**

Name

Result

Arguments

dropPoint

[List](#_List)

[Point](#_Point)

brep.dropPoint( pt ); - finds closest point on brep to given 3D point. Returns a list with 3 items, 0: Face object that the closest point is on, 1: 2D uv coordinate for the face, 2: 3D coordinate of the closest point.

getEdges

[ObjectList](#_ObjectList)

Returns a list of the BRep's edges.

getFaces

[ObjectList](#_ObjectList)

Returns a list of the BRep's faces.

getJoinedEdges

[ObjectList](#_ObjectList)

edges that glue together a face and another face or the face and itself (a seam)

getNakedEdges

[ObjectList](#_ObjectList)

Returns a list of the BRep's naked edges (aka lamina edges).

getSeamEdges

[ObjectList](#_ObjectList)

Gets the seam edges of a closed surface.

[ColorButton](#toc) ( [UIControl](#_UIControl) )
------------------------------------------------

Items of this class represent a user interface control that allows a user to select a color value. The control displays the current value of its color value and pops up the system color picker dialog when the user clicks on the control. The color the user selects is then set as the new value of the control.

**Properties**

Name

Type

Notes

value

int

Specifies the current color value of the control. The color is an integer of the form: **0xRRGGBB**, where _RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value.

[CommandButton](#toc) ( [UIControl](#_UIControl) )
--------------------------------------------------

**Properties**

Name

Type

Notes

active

boolean

[Command](#toc)
---------------

Items of this class represent the currently executing command within the **MoI** application. It can be accessed from a script via _moi.command_.

* * *

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

currentCommandName

string

read only

gets the current running command name, or empty string if no command currently running

pendingCommandName

string

read only

isCanceled

boolean

read only?

allow a script to determine if the current running command has been canceled

lastCommandRevisionEnd

int

read only

Specifies what the [GeometryDatabase](#_GeometryDatabase) revision was at the end of the last command.

lastCommandRevisionStart

int

read only

Specifies what the [GeometryDatabase](#_GeometryDatabase) revision was at the start of the last command.

nonRepeatingCommands

string

Specifies the list of blank separated commands which cannot be repeated.

  

**Methods**

Name

Result

Arguments

cancel

Cancels the currently executing command (if any).

createFactory

[GeometryFactory](#_GeometryFactory)

_string_ factoryName

Creates and returns a [GeometryFactory](#_GeometryFactory) object that can be used to create the type of geometry specified by _factoryName_. Every geometry factory has a specific set of inputs, which define the characteristics of the geometry it creates (e.g. a line requires two [Point](#_Point) objects to define its endpoints).

In general, each _MoI_ command starts by creating the appropriate type of geometry factory and then filling in all of the required inputs via user prompts and point and object picking. Once all of the factory inputs have been specfied, the factory is asked to create a new geometric object, based on its inputs, which is then added to the current scene.

execCommand

_string_ commandName

Executes the command specified by _commandName_.

The use and effect of each command is described in the [_MoI v4 Command Reference_](https://moi3d.com/4.0/docs/moi_command_reference.htm).

execCommandSet

_string_ commandSetName

getCommandLineParams

string

Returns the command line parameters specified when invoking **MoI**.

  

Not supported for instant scripts.

getOption

any

_string_ option,  
_boolean_ fromIni = **0**

Returns the value of a previously saved _option_. This method works in conjunction with the **setOption** method to allow you to set and get command options from one command execution to the next. If _fromIni_ is omitted or _false_, the _option_ is assumed to be stored in the application's temporary option's cache. If _fromIni_ is _true_, the _option_ is retrieved from the _moi.ini_ file.

If the _option_ value requested has not previously been set, an exception is generated.

The standard convention used for _option_ names is to use the name of the file referencing the _option_ followed by a suffix describing the purpose of the value (e.g. _Options.htm\_lastused)_. This is only a convention, but it helps guarantee that two different commands do not define and use the same _option_ name.

redo

Performs a _redo_ of a previously _undone_ command. Successive calls redo the sequence of previously undone commands. There is no indication of when the last undone command has been redone.

registerCommandSpecificShortcutKey

_string_ shortcut

Registers a keyboard key as a _shortcut_ key for this command. When the _shortcut_ key is pressed, it will generate a [UI](#_UI) event for the command.

repeatLastCommand

Repeats the last command executed that was not a non-repeatable command. Note that this does not create the same result that the last command created, but re-executes the command as if the user had initiated it again. That is, this method is equivalent to the user pressing **Enter** or the right mouse button after completing a command.

setCommandSpecificUndo

_boolean_ newCommandSpecificUndo

Allows a command to register an "Undo" UIEvent so that custom undo logic can be triggered while the command is running. See polyline command for an example.

addSelectedObjectsStateUndoUnit

setOption

_string_ option,  
_any_ varValue,  
_boolean_ toIni = **0**

Saves _varValue_ under the name _option_. This method is used in conjunction with the **getOption** method to save and restore user specified command options from one execution of the command to the next.

If _toIni_ is omitted or _false_, _varValue_ is stored in the application's temporary option/s cache. If _toIni_ is _true_, _varValue_ is permanently saved in the _moi.ini_ file under the name specified by _option_.

The standard convention used for _option_ names is to use the name of the file referencing the _option_ followed by a suffix describing the purpose of the value (e.g. _Options.htm\_lastused)_. This is only a convention, but it helps guarantee that two different commands do not define and use the same _option_ name.

undo

Performs an _undo_ of a command. Successive calls retrieve undo units further back in the command history stack. There is no indication of when the last command in the history stack has been undone.

  

There are 3 types of undo units:

1.  GeomObject
2.  StyleList
3.  Select / Lock / Hide

A geometry undo unit is typically created after a command exits if that command either created or destroyed a geometry object. When a geometry undo unit is created, which happens after the command exits, the geometry undo unit will have whatever selection / hidden / locked state is on the object at that time. Setting a property on an Annotation (subclass of GeomObject) using moi.ui.propertiesPanel.setAnnotationProp() will cause a geometry undo unit to be created even if no objects are created/destroyed.

  

A style undo unit is created for each style that is added/deleted. This can result in many style undo units being needlessly generated and combined(?) per command. To trigger creation of a single style undo unit, bracket the addition/deletion of styles like this:  
  

    
    moi.geometryDatabase.styleEditorOpened();
    // add/remove styles here
    moi.geometryDatabase.styleEditorClosed();
                                

  

A select / lock / hide undo unit (a "selection undo unit") is ephemeral. Selection undo doesn't actually generate a normal undo unit that goes in the undo stack, it's a special case in undo where before processing anything from the regular undo stack it checks if there is a stored selection undo available that matches the current database revision number and if there is restores that instead of performing the regular undo. The events that trigger creation of a selection undo unit are:  

*   Doing selection using the scene browser or object properties dialog
*   moi.geometryDatabase.deselectAll()
*   hide()
*   invertSelection()
*   isolate()
*   selectAll
*   selectLastCreated
*   selectNamed
*   selectLoop
*   selectVisible
*   showSubset()
*   lock()
*   isolateLock()
*   unlockSubset()

To trigger creation of a selection undo unit, bracket the changes to selected / locked / hidden like this:  
  

    
    moi.geometryDatabase.SaveSelectionUndo();
    // select / lock / hide stuff here
    moi.geometryDatabase.SetSelectionUndoRevision();
    

[CommandUIContainer](#toc) ( [WaitableObject](#_WaitableObject) )
-----------------------------------------------------------------

Items of this class manage the user interface associated with the currently executing command. The reference to the currently active instance can be obtained using the expression _moi.ui.commandDialog_

* * *

**References:** [UI](#_UI)(1)

**Methods**

Name

Result

Arguments

pop

Pops and restores the user interface saved by the most recent call to the **push** method. If there was no matching previous call to **push**, an exception is generated.

push

_string_ [URL](#_URL)

Pushes the state of the current command user interface onto a stack, then loads and executes the command user interface specified by [URL](#_URL).

[ConstructionLine](#toc) ( [GeomObject](#_GeomObject) )
-------------------------------------------------------

Items of this class represent construction lines that can be used to help the user select points in two or three dimensional space. A new construction line can be added with `moi.geometryDatabase.addConstructionLine( start, end, isTemporary );`

**Properties**

Name

Type

Notes

isTemporary

boolean

Specifies whether or not the [ConstructionLine](#_ConstructionLine) is temporary. If _true_, the [ConstructionLine](#_ConstructionLine) is temporary and will be deleted at the end of the current operation. If _false_, it is not temporary.

[CoordinateFrame](#toc)
-----------------------

Items of this class represent a 3D coordinate system.

* * *

**References:** [PointPicker](#_PointPicker)(5), [VectorMath](#_VectorMath)(4), [View](#_View)(2), [Viewport](#_Viewport)(4)

**Properties**

Name

Type

Notes

origin

[Point](#_Point)

Specifies the [Point](#_Point) in world space that is the origin for this coordinate system.

xaxis

[Point](#_Point)

Specifies the [Point](#_Point) in world space that defines the x axis for this coordinate system. That is, the vector from **origin** to **xaxis** defines the positive x axis of the coordinate system.

yaxis

[Point](#_Point)

Specifies the [Point](#_Point) in world space that defines the y axis for this coordinate system. That is, the vector from **origin** to **yaxis** defines the positive y axis of the coordinate system.

zaxis

[Point](#_Point)

read only

Specifies the [Point](#_Point) in world space that defines the z axis for this coordinate system. That is, the vector from **origin** to **zaxis** defines the positive z axis of the coordinate system.

  

**Methods**

Name

Result

Arguments

distancex

float

_[Point](#_Point)_ point

Local coordinate from world coordinate. Returns the distance that the passed in point is located at along the frame x-axis direction, basically a plane that is formed from the origin point and the axis direction.

distancey

float

_[Point](#_Point)_ point

distancez

float

_[Point](#_Point)_ point

evaluate

[Point](#_Point)

_float_ x,  
_float_ y,  
_float_ z

World coordinates from local coordinates. It basically starts at the frame's origin, then goes along the x axis direction of the frame by the x value that you pass in, and then the same for y and z values. So if for example you passed in just evaluate(0,0,0) that would give you back just the frame's origin point. If you passed evalute(1,0,0) that would give back a point that was 1 unit away from the frame's origin in the x axis direction.

projectx

[Point](#_Point)

[Point](#_Point)

projecty

[Point](#_Point)

[Point](#_Point)

projectz

[Point](#_Point)

[Point](#_Point)

set

_float_ newOriginX,  
_float_ newOriginY,  
_float_ newOriginZ,  
_float_ newXAxisX,  
_float_ newXAxisY,  
_float_ newXAxisZ,  
_float_ newYAxisX,  
_float_ newYAxisY,  
_float_ newYAxisZ

Completely replaces the previous coordinate system with a new one whose origin in world space coordinates is given by _(newOriginX,newOriginY,newOriginZ)_, and whose x and y axes are defined by the points _(newXaxisX,newXaxisY,newXaxisZ_) and _(newYaxisX,newYaxisY,newZaxisZ_) respectively, also in world coordinates.

The z axis for the new coordinate system is derived implicitly from the new x and y axes using the _right hand rule_.

top

[CoordinateFrame](#_CoordinateFrame)

front

[CoordinateFrame](#_CoordinateFrame)

right

[CoordinateFrame](#_CoordinateFrame)

[Curve](#toc) ( [GeomObject](#_GeomObject) )
--------------------------------------------

Items of this class represent geometric objects that are curves (e.g. circles, circular arcs, ellipses, lines, rectangles, polygons, etc.).

**Properties**

Name

Type

Notes

conicFrame

[CoordinateFrame](#_CoordinateFrame)

read only

returns the coordinate frame of a circle, arc, or ellipse. Only valid if isCircle, isArc, or isEllipse returns _true_.

conicRadius

float

read only

Returns the radius of a circle, arc or the x-axis radius of an ellipse. Only valid if isCircle, isArc, or isEllipse returns true.

conicRadiusY

float

read only

Returns the y-axis radius of an ellipse. Only valid if isEllipse returns _true_.

conicEndAngleRadians

float

read only

Returns the end angle in radians of a circular arc. The arc starts at the x-axis of the arc's frame. Only valid if isArc returns _true_.

domainMax

read only

returns upper bound of the curve's parametric domain

domainMin

read only

returns lower bound of the curve's parametric domain

isClosed

boolean

read only

Specifies whether or not the curve is closed. If _true_, then the curve is closed. If _false_, then the curve is open.

isPlanar

boolean

read only

returns _true_ if the curve's control polygon is planar

planarFrame

[CoordinateFrame](#_CoordinateFrame)

read only

returns a coordinate frame with an origin point at the curve's control polygon centroid and a z axis along the plane normal, only valid if crv.isPlanar == true

isPeriodic

boolean

read only

returns _true_ if the curve has periodic ends (overlapping control points at start/end rather than a corner point at the start/end)

isDegenerate

boolean

read only

returns _true_ if the curve has a degenerate control polygon with all the points stacked in the same spot

isLine

boolean

read only

returns _true_ if the curve has the shape of a line

isSimpleLine

boolean

read only

returns _true_ if the curve is a simple line segment made up of only 2 control points

isCircle

boolean

read only

returns _true_ if the curve is a circle

isArc

boolean

read only

returns true if the curve is a circular arc

isEllipse

boolean

read only

returns _true_ if the curve is an ellipse (either a full ellipse or an elliptical arc)

isClickSelected

boolean

read only

returns _true_ if the curve was selected by a mouse click action

isClickSelectedNearEnd

boolean

read only

returns _true_ if the curve was selected by a mouse click action and it was clicked on a spot closer to it's ending side than its starting side

clickSelectionPoint

[Point](#_Point)

read only

Returns the point on the curve where it was click selected. Only valid if isClickSelected returns _true_.

clickSelectionParam

read only

Returns the parameter value of the curve where it was click selected. Only valid if isClickSelected returns _true_.

isNewEdge

boolean

read only?

set to _true_ if the edge was newly generated instead of coming from a copy or split off piece of an original one.  
example:  
`script: /* Select new edges at intersections after a boolean command */ moi.geometryDatabase.deselectAll(); var breps = moi.geometryDatabase.getLastCreated().getBReps(); for ( var i = 0; i < breps.length; ++i ) { var edges = breps.item(i).getEdges(); for ( var j = 0; j < edges.length; ++j ) { var e = edges.item(j); if ( e.isNewEdge ) e.selected = true; } }`

  

**Methods**

Name

Result

Arguments

changeClosedCurveSeam

[Curve GeomObject](#_GeomObject)

new\_start\_parameter,  
_boolean_ rebuild\_circles = _true_

`curve.changeClosedCurveSeam( new_start_parameter, rebuild_circles /*optional, default = true */ );`

dropPoint

parameter value

[Point](#_Point)

curve.dropPoint( pt ) - returns curve parameter value of closest point on the curve to the given 3D point.

evaluatePoint

[Point](#_Point)

parameter value

crv.evaluatePoint( t ) - Function returning a point for the given parameter value.

evaluateTangent

vector

parameter value,  
optional boolean

crv.evaluateTangent( t, FromLeft = _true_ ) - Function returning a unit tangent vector for the given parameter value. Optional second parameter controls calculating the tangent from the lower or higher parametric side at a discontinuity, default value = _true_.

evaluateCurvature

vector

parameter value,  
optional boolean

crv.evaluateCurvature( t, FromLeft = _true_ ) - Function returning the curvature vector for the given parameter value. Optional second parameter controls calculating the tangent from the lower or higher parametric side at a discontinuity, default value = _true_.

evaluateDerivatives

[List](#_List)

parameter value,  
_int_ NumDerivs,  
optional _boolean_

crv.evaluateDerivatives( t, NumDerivs, FromLeft = _true_ ) - Function returning a list of derivative values for the given parameter value. Optional third parameter controls calculating the tangent from the lower or higher parametric side at a discontinuity, default value = _true_. The derivatives are returned in a list of length NumDerivs+1 with index 0 having the point value, index 1 having the first derivative, index 2 having the second derivative, etc...

getFacesOfEdge

[ObjectList](#_ObjectList)

Returns an [ObjectList](#_ObjectList) containing all [Face](#_Face) objects that have this curve as an edge.

getEdgeIsoType

\-1,  
0,  
1

[GeomObject](#_GeomObject) Face

> \-1 : Edge is not an isocurve of the given face.  
> 0 : Edge is an isocurve of the given face, going in the U? direction.  
> 1 : Edge is an isocurve of the given face, going in the V? direction.

Takes a parameter of which face to consider since an edge can be shared between 2 faces.

    
    // gets isocurve type of a selected edge and selects the corresponding face
    // select 1 edge
    var selectedObjectsList = moi.geometryDatabase.getSelectedObjects();
    var edgeCrv = selectedObjectsList.getEdges().item(0);
    var face = edgeCrv.getFacesOfEdge().item(0);
    face.selected = true;
    
    var iso = edgeCrv.getEdgeIsoType(face);
    var string;
    switch (iso) {
        case -1: string = 'not an isocurve'; break;
        case 0: string = 'along U'; break;
        case 1: string = 'along V'; break;
    }
    
    moi.ui.alert('string = ' + string);
    

getUVCurvesOfEdge

Every edge has both a 3D curve piece to it which you normally see on the screen, but also in addition to that a 2D curve component for how the edge maps to the UV parameter space of the surface.

  

The UV space curve will be inside of the UV domain rectangle of the surface, it's not unusual for that domain to be a 0 to 1 unit square.

    
    // Extracts out the UV space curve of each edge as a regular curve object.
    var faces = moi.geometryDatabase.getSelectedObjects().getFaces();
    for (var iFace = 0; iFace < faces.length; ++iFace) {
        var face = faces.item(iFace);
        var edges = face.getEdges();
        for (var iEdge = 0; iEdge < edges.length; ++iEdge) {
            var edge = edges.item(iEdge);
            var uvcrvs = edge.getUVCurvesOfEdge(face);
            moi.geometryDatabase.addObjects(uvcrvs);
        }
    }
    

getLength

float

Returns the length of the curve.

getStartPt

[Point](#_Point)

Returns the starting [Point](#_Point) of the curve.

getEndPt

[Point](#_Point)

Returns the ending [Point](#_Point) of the curve.

getIsTangentEdge

boolean

float AngleToleranceDegrees = 2

Curve.getIsTangentEdge( AngleToleranceDegrees /\* optional, default = 2 degrees \*/ );  
\- returns _true_ if the 2 surfaces on either side of the edge are tangent to each other.

isOnPlane

boolean

[CoordinateFrame](#_CoordinateFrame)

returns _true_ if the curve is on the given frame's x/y plane

isOnParallelPlane

boolean

[CoordinateFrame](#_CoordinateFrame)

returns _true_ if the curve is on a plane parallel to the given frame's x/y plane

[CurveOrientation](#toc)
------------------------

**Properties**

Name

Type

Notes

flipped

boolean

seam

float

[CurveSegment](#toc) ( [GeomObject](#_GeomObject) )
---------------------------------------------------

An edge curve in a BRep always has just one segment. Segments are not meant to exist outside of their parent curve, and so they don't respond to obj.clone()

  

**Properties**

Name

Type

Notes

conicFrame

[CoordinateFrame](#_CoordinateFrame)

read only

returns the coordinate frame of a circle, arc, or ellipse. Only valid if isCircle, isArc, or isEllipse returns _true_.

conicRadius

float

read only

Returns the radius of a circle, arc or the x-axis radius of an ellipse. Only valid if isCircle, isArc, or isEllipse returns true.

conicRadiusY

float

read only

Returns the y-axis radius of an ellipse. Only valid if isEllipse returns _true_.

conicEndAngleRadians

float

read only

Returns the end angle in radians of a circular arc. The arc starts at the x-axis of the arc's frame. Only valid if isArc returns _true_.

domainMax

read only

returns upper bound of the curve's parametric domain

domainMin

read only

returns lower bound of the curve's parametric domain

isClosed

boolean

read only

Specifies whether or not the curve is closed. If _true_, then the curve is closed. If _false_, then the curve is open.

isPlanar

boolean

read only

returns _true_ if the curve's control polygon is planar

planarFrame

[CoordinateFrame](#_CoordinateFrame)

read only

returns a coordinate frame with an origin point at the curve's control polygon centroid and a z axis along the plane normal, only valid if crv.isPlanar == true

isPeriodic

boolean

read only

returns _true_ if the curve has periodic ends (overlapping control points at start/end rather than a corner point at the start/end)

isDegenerate

boolean

read only

returns _true_ if the curve has a degenerate control polygon with all the points stacked in the same spot

isLine

boolean

read only

returns _true_ if the curve has the shape of a line

isSimpleLine

boolean

read only

returns _true_ if the curve is a simple line segment made up of only 2 control points

isCircle

boolean

read only

returns _true_ if the curve is a circle

isArc

boolean

read only

returns true if the curve is a circular arc

isEllipse

boolean

read only

returns _true_ if the curve is an ellipse (either a full ellipse or an elliptical arc)

  

**Methods**

Name

Result

Arguments

dropPoint

parameter value

[Point](#_Point)

curvesegment.dropPoint( pt ) - returns curve parameter value of closest point on the curve segment to the given 3D point.

evaluatePoint

[Point](#_Point)

parameter value

crv.evaluatePoint( t ) - Function returning a point for the given parameter value.

evaluateTangent

vector

parameter value,  
optional boolean

crv.evaluateTangent( t, FromLeft = _true_ ) - Function returning a unit tangent vector for the given parameter value. Optional second parameter controls calculating the tangent from the lower or higher parametric side at a discontinuity, default value = _true_.

evaluateCurvature

vector

parameter value,  
optional boolean

crv.evaluateCurvature( t, FromLeft = _true_ ) - Function returning the curvature vector for the given parameter value. Optional second parameter controls calculating the tangent from the lower or higher parametric side at a discontinuity, default value = _true_.

evaluateDerivatives

[List](#_List)

parameter value,  
_int_ NumDerivs,  
optional _boolean_

crv.evaluateDerivatives( t, NumDerivs, FromLeft = _true_ ) - Function returning a list of derivative values for the given parameter value. Optional third parameter controls calculating the tangent from the lower or higher parametric side at a discontinuity, default value = _true_. The derivatives are returned in a list of length NumDerivs+1 with index 0 having the point value, index 1 having the first derivative, index 2 having the second derivative, etc...

getStartPt

getEndPt

getLength

getIsG1ToAdjacentSegment

boolean

0 or 1

only works if the curveSegment is joined into a curve with the adjacent curveSegment, which isn't true of BRep edges

  

`CurveSegment.getIsG1ToAdjacentSegment( 0 /* 0 for start, 1 for end */ );`  
\- returns _true_ if the next segment at the start or end is smooth to the current curve segment.

isOnPlane

boolean

[CoordinateFrame](#_CoordinateFrame)

returns _true_ if the curve is on the given frame's x/y plane

isOnParallelPlane

boolean

[CoordinateFrame](#_CoordinateFrame)

returns _true_ if the curve is on a plane parallel to the given frame's x/y plane

[DisplayModeEnum](#toc)
-----------------------

This enumeration defines the various display modes that can be used for displaying objects in the editing viewports.

* * *

**References:** [GeomObject](#_GeomObject)(2)

**Enumeration Values**

Name

Value

Normal

0

The object is drawn using a drawing style consisting of a solid wireframe and solid shading.

FaintWireframe

1

The object is drawn using a drawing style consisting of a faint dashed wireframe and no shading, giving the object a _ghosted_ appearance.

[DrawingAids](#toc)
-------------------

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

drawPlanar

boolean

gridSnap

boolean

Specifies whether _grid_ snapping is on or off. If _true_, then grid snapping is turned on. If _false_, grid snapping is turned off.

objectSnap

boolean

Specifies whether _object_ snapping is on or off. If _true_, then object snapping is turned on. If _false_, object snapping is turned off.

objectSnapAxis

boolean

Specifies whether _object_ snapping to the world space x, y and z axes is on or off. If _true_, axis snapping is turned on. If _false_, axis snapping is turned off.

objectSnapCen

boolean

Specifies whether object snapping to the _center point_ of circles, ellipses or circular arcs is turned on or off. If _true_, then center snapping is turned on. If _false_, center snapping is turned off.

objectSnapEnd

boolean

Specifies whether _object_ snapping to the end points of curves or edges is on or off. If _true_, then end snapping is turned on. If _false_, end snapping is turned off.

objectSnapInt

boolean

Specifies whether _object_ snapping to the intersection between two or more curves or edges is on or off. If _true_, then intersection snapping is turned on. If _false_, then intersection snapping is turned off.

objectSnapMarkerDisplayRadius

int

Specifies the maximum distance, in pixels, that a potential snap marker can be from the current cursor position before it will be displayed to the user. All snap markers within this radius are displayed, while those outside it are not.

objectSnapMarkerOpacity

int

objectSnapMid

boolean

Specifies whether _object_ snapping to the midpoint of curves or edges is on or off. If _true_, then midpoint snapping is turned on. If _false_, then midpoint snapping is turned off.

objectSnapOn

boolean

Specifies whether _object_ snapping to points on a curve or edge is on or off. If _true_, then point on curve snapping is turned on. If _false_, point on curve snapping is turned off.

objectSnapOnSrf

boolean

Specifies whether _object_ snapping to points on the surface of a solid is on or off. If _true_, then surface snapping is turned on. If _false_, then surface snapping is turned off.

objectSnapOrigin

boolean

Specifies whether object snapping to the _world origin_ is turned on or off. If _true_, then snapping to the world origin is turned on. If _false_, world origin snapping is turned off.

objectSnapPerp

boolean

Specifies whether _object_ snapping is on or off for points on a curve or edge that are perpendicular to the curve's tangent at that point and a line through the point and the current base point. If _true_, then perpendicular snapping is turned on. If _false_, perpendicular snapping is turned off.

objectSnapPerpPerp

boolean

objectSnapProjectInOrthoViews

boolean

objectSnapPt

boolean

objectSnapQuad

boolean

Specifies whether _object_ snapping to the quadrant points of circular or elliptical curves or edges is on or off. If _true_, then quadrant snapping is turned on. If _false_, quadrant snapping is turned off.

objectSnapRadius

int

objectSnapShowMarkers

boolean

Specifies whether or not object snap markers are displayed. If _true_, object snap markers are displayed. If _false_, they are not.

Object snap markers are the small x symbols displayed in the editing viewports to show the location of potential snap points to the user.

objectSnapTan

boolean

Specifies whether _object_ snapping is on or off for points on a curve or edge that form a tangent to the curve at that point with a line though the current base point. If _true_, then tangent snapping is turned on. If _false_, tangent snapping is turned off.

objectSnapTanTan

boolean

objectSnapUseApparentIntersections

boolean

projectToCPlaneOrtho

boolean

projectToCPlaneAll

boolean

snapToLockedObjects

boolean

Specifies whether or not snapping to locked objects is allowed. If _true_, the user can snap to points on locked objects. If _false_, no snap points on locked objects will be displayed.

snapToPickedPoints

boolean

Specified whether snapping to points already picked in the current command is on or off. If _true_, then picked point snapping is turned on. If _false_, then picked point snapping is turned off.

straightSnap

boolean

Specifies whether _straight_ snapping is on or off. If _true_, then straight snapping is turned on. If _false_, straight snapping is turned off.

straightSnapActivateDistance

int

Specifies the distance, in pixels, the cursor can be from a straight snap line before it _snaps_ to the line. That is, as soon as the cursor moves within the specified distance from a potential straight snap line, it will activate and snap to that line. Note that this value only controls how close the cursor must be in order to activate the straight snap. The distance the cursor must travel away from a straight snap line before deactivating the line is controlled by the value of **straightSnapKeepActiveDistance**.

straightSnapAngle

float

Specifies the angle, in degrees, at which straight snapping occurs. That is, straight snapping occurs at any _multiple_ of this angle. For example, if the angle is _90_, then straight snapping occurs at _0_, _90_, _180_ and _270_ degrees.

straightSnapEnablePerpendicular

boolean

straightSnapEnableSurfaceNormal

boolean

straightSnapEnableTangent

boolean

straightSnapEnableVertical

boolean

straightSnapKeepActiveDistance

int

Specifies the distance, in pixels, the cursor must move away from an active straight snap line before it _deactivates_ the line. Note that this value only controls how far away the cursor must move before deactivating a straight snap. The distance the cursor must be from a potential straight snap line before activating the line is controlled by the value of **straightSnapActivateDistance**.

Normally, the value of **straightSnapKeepActiveDistance** should be greater than the value of **straightSnapActivateDistance** in order to prevent straight snaps from turning on and off too rapidly while the cursor is moving.

straightSnapLineColor

int

Specifies the color used to draw straight snap lines as an integer of the form: **0xAARRGGBB**, where _AA_ is the _alpha_ channel value, _RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value. Note that a value for _AA_ of _0x00_ is fully transparent, while _0xFF_ is fully opaque.

straightSnapLineStyle

string

Specifies the line style used to draw straight snap lines. The possible values are:

*   Short Dashed
*   Dashed
*   Solid

Specifying any other value will result in drawing solid straight snap lines.

straightSnapLineWidth

float

Specifies the width, in pixels, of the lines used to draw straight snaps.

  

**Methods**

Name

Result

Arguments

constructionLineDivSnap

_float_ divisions

constructionLineProject

constructionLineReorient

constructionLineReposition

constructionLineRotate

_float_ angleDegrees

[EditableListView](#toc)
------------------------

**Methods**

Name

Result

Arguments

add

remove

[Face](#toc) ( [GeomObject](#_GeomObject) )
-------------------------------------------

A surface is only a face if it is joined to another surface. In other words, separated surfaces aren't faces. A sphere has only 1 surface that is joined to itself and so this surface is NOT a face regardless of whether the Separate command is run on the sphere.

* * *

**References:** [GeomObject](#_GeomObject)

**Properties**

Name

Type

Notes

domainMax

read only

returns u,v coordinate of the upper right of the surface's parameter range

domainMin

read only

returns u,v coordinate of the lower left of the surface's parameter range

isNew

boolean

read only?

set to _true_ if the face was newly generated instead of coming from a copy or split off piece of an original one.  
example:  
`script: /* Select fillet surfaces */ moi.geometryDatabase.deselectAll(); var breps = moi.geometryDatabase.getLastCreated().getBReps(); for ( var i = 0; i < breps.length; ++i ) { var faces = breps.item(i).getFaces(); for ( var j = 0; j < faces.length; ++j ) { var f = faces.item(j); if ( f.isNew ) f.selected = true; } }`

isConeSurface

boolean

read only

_true_ if the underlying surface for this face is a cone

isCylinderSurface

boolean

read only

_true_ if the underlying surface for this face is a cylinder

isPlanar

boolean

read only

_true_ if the underlyinh surface for this face is planar

planarFrame

[CoordinateFrame](#_CoordinateFrame)

read only

returns a coordinate frame for a planar surface. Only valid if isPlanar returns _true_.

isSphereSurface

boolean

read only

_true_ if the underlying surface for this face is a sphere

analyticFrame

[CoordinateFrame](#_CoordinateFrame)

coordinate frame for a cylinder, cone, or sphere surface

analyticHeight

float

height for a cylinder or cone surface

analyticRadius

float

radius for a cylinder, cone, or sphere surface

  

**Methods**

Name

Result

Arguments

dropPoint

2D uv coordinate point

[Point](#_Point)

face.dropPoint( pt ); - returns 2D uv coordinate point of closest point on the face to the given 3D point.

evaluatePoint

[Point](#_Point)

[Point2D](#_Point2D) UV,  
u\_from\_left,  
v\_from\_left

face.evaluatePoint( uv, u\_from\_left, v\_from\_left ) : Function that evaluates a uv parameter value and returns a 3D point.

evaluateNormal

vector

UV parameter value

face.evaluateNormal( uv ) : Function that evaluates a uv parameter value and returns a normal vector.

evaluate1stDerivatives

[List](#_List)

UV parameter value

face.evaluate1stDerivatives( uv, u\_from\_left, v\_from\_left ) : Function that evaluates a uv parameter value and returns first derivatives as a list containing \[pt, du, dv, duv\].

evaluate2ndDerivatives

[List](#_List)

UV parameter value

face.evaluate2ndDerivatives( uv, u\_from\_left, v\_from\_left ) : Function that evaluates a uv parameter value and returns first and second derivatives as a list containing \[pt, du, dv, duv, duu, dvv\].

getEdges

[ObjectList](#_ObjectList)

getJoinedEdges

[ObjectList](#_ObjectList)

edges that glue together a face and another face or the face and itself (a seam)

getNakedEdges

[ObjectList](#_ObjectList)

Returns a list of the face's naked edges (aka lamina edges).

getSeamEdges

[ObjectList](#_ObjectList)

Gets the seam edges of a closed surface.

getLoops

[List](#_List) of [ObjectLists](#_ObjectList)

returns a set of boundaries with the first boundary being the outer boundary of the face and any next ones being holes. Each boundary is itself a list of edges that make up the boundary.

isOnPlane

boolean

[CoordinateFrame](#_CoordinateFrame)

face.isOnPlane( frame ) : Function that returns _true_ if the surface is planar and is on the given coordinate frame's x/y plane.

isOnParallelPlane

boolean

[CoordinateFrame](#_CoordinateFrame)

face.isOnParallelPlane( frame ) : Function that returns _true_ if the surface is planar and is on a plane parallel to the given coordinate frame's x/y plane.

[FactoryInputEnum](#toc)
------------------------

This enumeration defines the different types of values that a [GeometryFactoryInput](#_GeometryFactoryInput) object can be configured to accept.

* * *

**References:** [GeometryFactory](#_GeometryFactory)(1), [GeometryFactoryInput](#_GeometryFactoryInput)(1)

**Enumeration Values**

Name

Value

Unknown

0

The [GeometryFactoryInput](#_GeometryFactoryInput) object has not been configured to accept any type of object.

Point

1

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts [Point](#_Point) objects.

CoordinateFrame

2

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts [CoordinateFrame](#_CoordinateFrame) objects.

Bool

3

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts boolean values (i.e. _true_ or _false)_.

Double

4

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts floating point values.

Int

5

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts integer values.

String

6

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts string values.

Object

7

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts [GeomObject](#_GeomObject) objects.

ObjectList

8

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts [ObjectList](#_ObjectList) objects.

List

9

The [GeometryFactoryInput](#_GeometryFactoryInput) object accepts [List](#_List) objects.

[FileStream](#toc)
------------------

* * *

**References:**

**Properties**

Name

Type

Notes

atEOF

boolean

read only?

returns true if the stream is at the end with nothing more to read from it

  

**Methods**

Name

Result

Arguments

setCodec

name

controls the encoding to use for reading or writing. Supported codecs are listed here: [http://doc.qt.io/qt-5/qtextcodec.html#details](http://doc.qt.io/qt-5/qtextcodec.html#details)

setWriteBOM

sets whether to write the byte order mark at the front of the text file, default is no BOM

readLine

string

reads a line of text from the stream, the text is the return value of the function

writeLine

_string_ text

writes a line of text to the stream

close

closes the stream

[Filesystem](#toc)
------------------

It can be accessed from a script via _moi.filesystem_.

* * *

**References:** [Moi](#_Moi)(1)

**Methods**

Name

Result

Arguments

copyFile

_string_ existingPath,  
_string_ newPath,  
_boolean_ failIfExists = false

Returns if file exists. copyFile has optional 3rd true/false parameter for failing if target file already exists, defaults to false.

Required Args 1 and 2 give the path to the existing file, and the path to the new file. FailIfExists is an optional value, if set to true the operation will not overwrite an existing file. Default is false.

deleteFile

_string_ path

Deletes the given file

dirExists

boolean

_string_ path

Returns true if the given directory exists

fileExists

boolean

_string_ fileName

Returns true if the given file exists

getCompactPath

string

_string_ fileName,  
_int_ numChars

Arg1 = Input filename  
Arg2 = Target number of characters to try and fit  
Return value = filename with paths removed if full path exceeds target limit  

getPathDelimiter

Returns the native path delimiter for the OS. For Windows it's \\ on Mac it's /.

It's usually possible to write cross platform code without using this because on Mac script functions that take file names will accept Windows like path names using z:\\

getDirs

[List](#_List)

_string_ dirname,  
_string_ filter = **Null**

`moi.filesystem.getDirs( 'dirname', 'filter*' );`  
  
Given a directory name and an optional filter string, return a list of sub-directories within that directory. For example: `var dirs = moi.filesystem.getDirs( 'c:\\', 'p*' );`  
Filter can be a semi-colon delimited list of filters.

getDirName

string

_string_ caption  
_string_ initPath

directory picker. Returns '' empty string if canceled

`var dir = moi.filesystem.getDirName( 'Dialog caption', 'c:\\initpath' );`

getAppDataDir

string

Returns path to the Moi AppData folder. On Windows this is: %AppData%\\Moi, on Mac it's ~/Library/Application Support/Moi.

getUiDir

string

Returns path to the UI folder inside the install dir

getCommandsDir

string

Returns path to the Commands folder inside the install dir

getProcessDir

string

Returns path to where application binaries are installed. On Windows returns the path to where MoI.exe is located. On Mac, returns the full path to /Contents/Resources/ inside the app bundle.

getTempDir

string

Returns path to the TEMP folder

getFileNameFromPath

string

_string_ fullPath

Arg1 = filename with full path  
Return value = just the file name portion of the path, no directory

getFiles

[List](#_List)

_string_ folderPath,  
_string_ filter,  
_boolean_ recurseSubDirectories = **false**

Given a directory name and a filter string, return a list of files within that directory. For example:  
`var files = moi.filesystem.getFiles( 'c:\\scripts\\iges', '*.igs' );`  
Filter can be a semi-colon delimited list of filters.

getOpenFileName

string

_string_ dialogTitle,  
_string_ filters,  
_string_ initialFilename = **Null**

Function for a script to be able to show the open file name dialog

The filter string has entries separated by the pipe | character, with the entries in pairs with a label first and then a filter next, for example: 'Point files (\*.txt, \*.xyz, \*.csv)|\*.txt;\*.xyz;\*.csv|All files (\*.\*)|\*.\*' returns filename or empty string if dialog was canceled.

Optional initialFilename allows the intial directory to be set by passing in a path.

  

Example with macOS-style initial path:

    
    var filename = moi.filesystem.getOpenFileName( 'Open', 'SVG (*.svg)|*.svg|PDF (*.pdf)|*.pdf', '/Users/yourName' );
    moi.ui.alert( 'filename = ' + filename );
    

getSaveFileName

string

_string_ dialogTitle,  
_string_ filters,  
_string_ initialFilename = **Null**

Function for a script to be able to show the save file name dialog.

The filter string has entries separated by the pipe | character, with the entries in pairs with a label first and then a filter next, for example: 'Point files (\*.txt, \*.xyz, \*.csv)|\*.txt;\*.xyz;\*.csv|All files (\*.\*)|\*.\*' returns empty string if dialog was canceled.

Optional initialFilename allows the intial directory to be set by passing in a path.

  

Example with Windows-style initial path:

    
    var filename = moi.filesystem.getSaveFileName( 'Save As', 'SVG (*.svg)|*.svg|PDF (*.pdf)|*.pdf', 'C:\\Users' );
    moi.ui.alert( 'filename = ' + filename );
    

incrementFileName

string

_string_ fileName

Increment a file name. For example File01.txt becomes File02.txt  
Arg1 = input filename  
Return value = incremented filename  

openFileStream

string

_string_ fileName  
_string_ mode

Creates a file stream object that can read or write content to the given filename. Mode can be 'r' for read, or 'w' for write.

V4: Unicode files with byte order marks should be supported now, the default will be UTF-8 if no byte order mark is found. Also added new methods .setWriteBOM( boolean ) which you can call to make writing a text file write the byte order mark at the front (default is no BOM), and .setCodec( name ) to have specific control over what encoding to use for reading or writing.

setWriteBOM

result

boolean

call to make writing a text file write the byte order mark at the front (default is no BOM)

setCodec

string

_string_ name

Specific control over what encoding to use for reading or writing. Supported codecs are listed here: [http://doc.qt.io/qt-5/qtextcodec.html#details](http://doc.qt.io/qt-5/qtextcodec.html#details) .

processFileNameToUI

string

_string_ scriptPath

Given a script path, return the native path to be used for showing in any UI controls.

processFileNameFromUI

string

_string_ nativePath

Given a native path, return the script path

shellExecute

_string_ path,  
_string_ params = **Null**,  
_boolean_ WaitForFinished = _false_

Arg 1 (required) - path to file. Could be an executable or a data file which will then open it up in whatever the OS has registered to handle that file extension type

If given an executable program file, command line parameters can be given by optional Arg2, and if Arg3 is true it will wait for the launched program to finish before returning from shellExecute(). When using WaitForFinished, the return value is a dictionary object with .exitCode and .output properties on it. exitCode contains the integer exit code value of the called process and .output is a string parameter for any text written by the called process to stdout.  
Example:  

    
    var res = moi.filesystem.shellExecute( 'cmd /c dir c:\\', , true );
    if ( res.output ) moi.ui.alert( res.output );
    

shellOpenFolder

toNativePath

string

_string_ filename

Given a script path (using z:\\ on Mac) returns native OS path

toScriptPath

string

_string_ filename

Given a native OS path converts it to a script path

[GeomObject](#toc) ( [GeomObjectBase](#_GeomObjectBase) )
---------------------------------------------------------

This is a partially abstract base class from which all **MoI** geometric objects are derived. Although it is not possible to directly create instances of this class, it does define a number of useful properties and methods that all of its various subclasses inherit.

* * *

**References:** [BRep\*](#_BRep)(1), [BoundingBox](#_BoundingBox)(1), [ConstructionLine\*](#_ConstructionLine)(1), [Curve\*](#_Curve)(1), [CurveSegment\*](#_CurveSegment)(1), [Face\*](#_Face)(1), [GeometryDatabase](#_GeometryDatabase)(3), [MeshObject\*](#_MeshObject)(1), [ObjectList](#_ObjectList)(3), [Osnap](#_Osnap)(2), [PointObject\*](#_PointObject)(1), [PointPicker](#_PointPicker)(1)

**Properties**

Name

Type

Notes

databaseRevision

int

read only

Specifies an internal revision number for the object. Any changes made to the object cause this value to change.

databaseState

[ObjectDatabaseStateEnum](#_ObjectDatabaseStateEnum)

read only

Specifies the state of the object relative to the current scene.

displayMode

[DisplayModeEnum](#_DisplayModeEnum)

Specifies the display mode used to draw the geometric object in any of the editing viewports.

hasEditPoints

boolean

read only

obj.hasEditPoints - _true_ if object has edit points, _false_ if not

hasSelectedEditPoints

boolean

read only

obj.hasSelectedEditPoints - _true_ if object has any selected edit points

numEditPoints

int

read only

obj.numEditPoints - number of edit points

hidden

boolean

Specifies whether the geometric object is visible or hidden. If _true_, the object is hidden in the editing viewports.

  

Setting hidden on an object recursively sets the hidden property on each of its sub-objects to the same value.

  

Setting hidden = true also sets selected = false.

  

If hidden = true on a parent object, but hidden = false on a child then the child won't be visible in the viewports. In other words, setting hidden = false on a sub-object isn't enough to make that sub-object visible: all of its parent objects must also have hidden = false set.

id

string

read only

Specifies a unique id associated with each geometric object when it is added to the current scene.

isBRepSubObject

boolean

*   face.isBRepSubObject = true when face is joined to another face, but false when just a freestanding face
*   curve.isBrepSubObject = true when curve is an edge of a face, but false when curve is a freestanding curve

isCurve

boolean

read only

isEdgeCurve

boolean

read only

isJoinedEdgeCurve

boolean

true for an edge that glues together a face and another face or the face and itself (a seam)

isLaminaEdgeCurve

boolean

naked edge and lamina edge are the same thing

isSeamEdgeCurve

boolean

read only

isStandaloneCurve

boolean

read only

A "Standalone curve" is a curve that is its own independent top level object, which is distinct from an edge curve which is part of the structure of a surface or solid. When you create a curve using the "Draw curve" tools for example, those are standalone curves.

isCurveSegment

boolean

read only

isEdgeCurveSegment

boolean

read only

isBRep

boolean

read only

isSolidBRep

boolean

read only

isOpenBRep

boolean

read only

isSingleFaceBRep

boolean

read only

isFace

boolean

read only

A surface is only a face if it is joined to another surface. In other words, separated surfaces aren't faces. A sphere has only 1 surface that is joined to itself and so this surface is NOT a face regardless of whether the Separate command is run on the sphere.

isGroup

boolean

read only?

ownerGroup

read only?

groupIndex

integer

read only?

\-1 if no group

hasSelectedAncestorGroup

boolean

read only?

isConstructionLine

boolean

read only

isPointObject

boolean

read only

isTopLevelObject

boolean

read only

A top-level object is an object the user can directly select or manipulate in the user interface without having to first select a parent object.

isMeshObject

boolean

read only?

isAnnotation

boolean

read only?

isLinearDimension

boolean

read only?

isRadialDimension

boolean

read only?

isAngularDimension

boolean

read only?

isLeader

boolean

read only?

isAnnotationText

boolean

read only?

isStandaloneObject

boolean

read only?

isNewObject

boolean

read only?

locked

boolean

Specified whether the geometric object is locked or not. If _true_, the object is locked and cannot be selected. If _false_, it is not locked and can be selected.

When in the _locked_ state, objects are displayed greyed-out in the editing viewports, and have a padlock icon displayed next to them in the various application list views. They cannot be selected or modified while in the locked state.

name

string

Specifies the name of the object. The name of the object appears in the application's _Objects_ list. More than one object can have the same name, which is useful as a means of grouping related objects in the scene. The name is also used for associating the object with a particular mesh when exporting to file formats that support named meshes.

selected

boolean

Specifies whether the geometric object is currently selected or not. If _true_, the object is selected. If _false_, it is not selected.

showPoints

boolean

Specifies whether the control points for the object are visible or not. If _true_, the control points are visible in the editing viewports. If _false_, the control points are not visible.

styleIndex

int

Specifies the index of the [ObjectStyle](#_ObjectStyle) object within the application's _Styles_ list that is associated with the geometric object. The [ObjectStyle](#_ObjectStyle) controls some of the object's display appearance and exported material settings, and can also be used as a way of grouping related objects within the scene.

The valid values are from _0_ to _(styles.length - 1)_. Values outside of this range are mapped internally to the default style.

type

[GeomObjectEnum](#_GeomObjectEnum)

read only

Specifies what the type of the geometric object is.

updateWithHistory

boolean

  

**Methods**

Name

Result

Arguments

clone

[GeomObject](#_GeomObject)

Creates and returns a clone, or copy, of the object. The copy is identical to the original object, but has not yet been added to the current scene. You may add the object to the scene using the [GeometryDatabase](#_GeometryDatabase) object's **addObject** or **addObjects** methods.

  

cloning resets .selected = true to .selected = false

  

curve segments are not meant to exist outside of their parent curve, and so they don't respond to obj.clone()

copyPropertiesFrom

sourceObject

copyPropertiesTo

targetObject

deleteHistoryData

getBoundingBox

[BoundingBox](#_BoundingBox)

_boolean_ useHighAccuracyBounds = **0**

Returns a [BoundingBox](#_BoundingBox) object describing the bounding box for the object.

getEditPoint

[Point](#_Point)

_integer_ index

obj.getEditPoint( index ) - method that returns an x,y,z point for the given edit point index

getEditPointSelected

boolean

_integer_ index

obj.getEditPointSelected( index ) - method that returns _true_ if the given edit point is selected

setEditPointSelected

_integer_ index  
_boolean_ selected

a way to set the selection state of an edit point

getParentBRep

[GeomObject](#_GeomObject)

getTopLevelParent

[GeomObject](#_GeomObject)

getParentObject

[GeomObject](#_GeomObject)

getHistoryChildren

[ObjectList](#_ObjectList)

getHistoryData

string

getHistoryParents

[ObjectList](#_ObjectList)

getSubObjects

[ObjectList](#_ObjectList)

Returns an [ObjectList](#_ObjectList) containing all of the sub-objects contained within the geometric object. For example, a _box_ solid returns a list of 30 sub-objects, consisting of 12 [Curve](#_Curve), 12 [CurveSegment](#_CurveSegment) and 6 [Face](#_Face) objects.

  

Returns:

*   an empty objectList if operating on a face
*   curveSegments in an objectList if operating on a curve (a curve is what can get selected when clicking in the viewports)
*   when operating on a [Group](#_Group): any sub-groups, any BReps, standalone curves etc. contained by the top-level group or the sub-groups, and any sub-objects of these non-group objects. For example, edges of all BReps and curveSegments of all curves.

getStandaloneParent

initializeHasSelectedAncestorGroup

setUserText

getUserText

removeUserText

getAllUserText

clearAllUserText

setHitTest

_boolean_

Hit testing is when an object is targeted for click selection or snapping. In some cases when a script is dynamically creating an object on every mouse move, that object can leave behind things like intersection snaps. Hit testing can be turned off in such cases so the object will be ignored for generating snap points. If an object is set with the "no hit test" flag, it should cause the pointpicker to skip over it and not target any snaps on it, and also it won't be targeted for selection either. Then if you want it to behave normally later on afterwards you'll need to set obj.setHitTest( true ); on those same objects to reset it.

[GeomObjectBase](#toc)
----------------------

The single instance of this class provides access to and manages all of the geometric data for the current session. It can be accessed from any script using the expression: _moi.geometryDatabase_.

* * *

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

GetGeomObjectBase

read only

GetIMoiGeomObject

read only

[GeomObjectEnum](#toc)
----------------------

This enumeration defines the various types of geometric objects that can be defined in _MoI_.

* * *

**References:** [GeomObject](#_GeomObject)(1)

**Enumeration Values**

Name

Value

Unknown

0

The object is of an unknown type.

CurveSegment

1

The object is a [CurveSegment](#_CurveSegment).

Curve

2

The object is a [Curve](#_Curve).

BRep

3

The object is a [BRep](#_BRep) (Boundary Representation).

Face

4

The object is a [Face](#_Face).

ConstructionLine

5

The object is a [ConstructionLine](#_ConstructionLine).

PointObject

6

The object is a [PointObject](#_PointObject) (i.e. a [Point](#_Point))

MeshObject

7

The object is a [MeshObject](#_MeshObject).

[GeometryDatabase](#toc)
------------------------

The single instance of this class provides access to and manages all of the geometric data for the current session. It can be accessed from any script using the expression: _moi.geometryDatabase_.

* * *

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

currentFileName

string

read only

Specifies the full path and file name of the file currently being edited (e.g. _C:\\my\_models\\MoI\_Ball.3dm)_. If no file has been loaded or saved yet, its value is the empty string.

currentFileChanged

boolean

currentFileNameDir

string

read only

Specifies the full path to (but not the file name) of the file currently being edited (e.g. _C:\\my\_models\\)_. If no file has been loaded or saved yet, its value is the empty string.

intialFileToLoad

filename for intial file to load by executable command line parameter

defaultUnits

string

Specifies the default units to use for measuring distances and lengths for any new scene created. The possible values are:

*   Feet
*   Inches
*   Meters

units

string

Specifies the base unit used for measuring distances and lengths in the current session. The possible values are:

*   Feet
*   Inches
*   Meters

distanceDisplay

string

defaultDistanceDisplay

string

generatedObjectsInheritStyle

boolean

Specifies whether objects generated from another object inherit the style of the object they are generated from. If _true_, any generated object inherits the style of the object it is generated from. If _false_, any generated object is initially given the default style.

For example, if a circle is extruded to create a cylinder, the cylinder is generated from the circle and will either inherit the circle's style or be given the default style, depending upon the setting of this property.

isFeetAndInchesDisplay

string

isPrint3DInstalled

boolean

notes

string

Accesses the text visible in the GUI at Files > Notes.

  

    
    var notes = moi.geometryDatabase.notes;
    moi.geometryDatabase.notes = 'set notes to this';
    moi.geometryDatabase.notes += 'add this to notes';
    

revision

int

read only

scaleOnImportDifferentUnits

boolean

scaleOnUnitChange

boolean

Specifies whether all geometric data should be scaled when the current unit system specified the **Units** property is changed. If _true_, then all geometric data is scaled appropriately when the unit system changes. If _false_, no change occurs to the geometric data when the unit system changes.

startupTemplate

string

tolerance

float

read only

Specifies the 1.0e-3 absolute tolerance value used internally by **MoI** when determining if two values are _equal_. In most cases this has been replaced with a relative tolerance based on object bounding box diagonal. The adaptive tolerance can still be affected a little by scaling. The way it works is if an object is within the “standard size zone” with a bounding box diagonal length >= 1.0 and <= 50.0 it will use the same 0.001 tolerance. The size-relative tolerancing will kick in when it's < 1.0 or > 50.0 in diagonal size.

unitsShortLabel

string

read only

Specifies the short form of the current units system specified by the **Units** property. The possible values are:

*   ft
*   in
*   m

  

**Methods**

Name

Result

Arguments

addAnnotationPreset

_string_ name  
_integer_ copy\_from\_index

Example: `moi.geometryDatabase.addAnnotationPreset( name, copy_from_index );`

deleteAnnotationPreset

_integer_ index

Example: `moi.geometryDatabase.deleteAnnotationPreset( index );`

getAnnotationPresets

array? of preset objects

findAnnotationPreset

[AnnotationPreset](#_AnnotationPreset)

_string_ presetName

Returns the annotation preset with the specified _presetName_, or _null_ if no preset wth the specified _presetName_ is found.

importAnnotationPresets

Example: `moi.geometryDatabase.importAnnotationPresets();`

addConstructionLine

[Point](#_Point) start  
[Point](#_Point) end  
_boolean_ isTemporary

`moi.geometryDatabase.addConstructionLine( start, end, isTemporary );`

calculateCurveOrientations

[List](#_List)

_[ObjectList](#_ObjectList)_ curveList

You can generate an orientation list in script using `var orient_list = moi.geometryDatabase.calculateCurveOrientations( ObjectListWithCurves );`

  

This generates a list of CurveOrientation objects, one for each curve. Each CurveOrientation object has 2 properties .flipped and .seam .

  

The .flipped property will be true if the Blend should flip the curve before generating a blend from it, and the .seam parameter has a number value for the location of the seam point to use on a closed curve. The number is a normalized parameter value, a value of 0.0 means the start point of the curve, a value of 1.0 means the end domain of the curve.

copyToClipboard

_[ObjectList](#_ObjectList)_ objects

Copies all of the contents of _objects_ to the system clipboard.

copyToClipboardCommand

_[ObjectList](#_ObjectList)_ objects

copyToClipboardAI

copyToClipboardPDF

copyToClipboardSVG

createObjectList

[ObjectList](#_ObjectList)

Creates and returns a new, empty [ObjectList](#_ObjectList).

deleteAll

Deletes all geometric data contained in the current session (i.e. solids, surfaces, curves, points, etc.).

deselectAll

Deselects all currently selected objects (solids, surfaces, curves, points, etc.).

fileExport

_string_ fileName,  
_string_ options = **""**

`moi.geometryDatabase.fileExport( 'FileName', 'options_string' );`

  

Only selected objects get exported, unlike saveAs() which writes all objects to the new file. No file is created if nothing is selected.

  

DXF export function parameter options (semi-colon delimited):  
  
NoUI=true  
ExportType=2d | 3d  
ProjectionView=top | 3d | front | right  
WriteCurvesAs=splines | cubicsplines | polylines  
PolylineAngleDegrees=10.0  
UseSimpleEntities=true  
NumDecimalPlaces=12  
  
GenerateHiddenLines=false  
HiddenLineLayerMode=fromstyle | custom  
HiddenLineLayerName=Hidden lines (layer name to use when layer mode = custom)  
HiddenLineLayerPrefixSuffix=prefix | suffix (controls dropdown for which of "prefix" or "suffix" inputs is shown in the UI)  
HiddenLineLayerPrefix=prefix\_ (prefix to prepend to style name when layer mode = fromstyle)  
HiddenLineLayerSuffix=\_suffix (suffix to append to style name when layer mode = fromstyle)  
IgnoreTangentEdges=false  
Resolution=25.0  
  
  
PDF/AI/SVG export function parameter options:  
  
NoUI=true  
ProjectionView=top | 3d | front | right  
ScaleType=fit | preserveunits  
MoiScale=1.0  
PageScale=1.0  
PageUnits=mm | cm | in | pt  
CenterOnPage=true  
  
PageSize=letter | legal | tabloid | a3 | a4 | a5 | custom  
Landscape=false  
PageSizeCustomWidth=8.5  
PageSizeCustomHeight=11.0  
PageSizeCustomUnits=mm | cm | in | pt  
  
GenerateOutlines=true  
GenerateSilhouettes=true  
GenerateHiddenLines=false  
GenerateCrossHatching=false  
ShadedBackground=true  
IgnoreTangentEdges=false  
Resolution=25.0  
  
Line style properties for visible lines:  
VisWidth=0.1  
VisColorMode=fromstyle | custom  
VisColor=0,0,0 (r,g,b color value for lines when color mode = custom)  
VisLayerMode=fromstyle | custom  
VisLayerName=Visible lines (layer name to use when layer mode = custom)  
VisLayerPrefixSuffix=prefix | suffix (which of prefix or suffix are shown in the UI when layer mode = fromstyle)  
VisLayerPrefix= (prefix to prepend to the layer name when layer mode = fromstyle)  
VisLayerSuffix= (suffix to append to layer name when layer mode = fromstyle)  
  
Line style properties for outlines:  
OutWidth=3.0  
OutColorMode=fromstyle | custom  
OutColor=0,0,0 (r,g,b color value for lines when color mode = custom)  
OutLayerMode=fromstyle | custom  
OutLayerName=Outlines (layer name to use when layer mode = custom)  
OutLayerPrefixSuffix=prefix | suffix (which of prefix or suffix are shown in the UI when layer mode = fromstyle)  
OutLayerPrefix= (prefix to prepend to the layer name when layer mode = fromstyle)  
OutLayerSuffix= (suffix to append to layer name when layer mode = fromstyle)  
  
Line style properties for silhouettes:  
SilWidth=0.4  
SilColorMode=fromstyle | custom  
SilColor=0,0,0 (r,g,b color value for lines when color mode = custom)  
SilLayerMode=fromstyle | custom  
SilLayerName=Silhouettes (layer name to use when layer mode = custom)  
SilLayerPrefixSuffix=prefix | suffix (which of prefix or suffix are shown in the UI when layer mode = fromstyle)  
SilLayerPrefix= (prefix to prepend to the layer name when layer mode = fromstyle)  
SilLayerSuffix= (suffix to append to layer name when layer mode = fromstyle)  
  
Line style properties for hidden lines:  
HidWidth=0.1  
HidColorMode=fromstyle | custom  
HidColor=0,0,0 (r,g,b color value for lines when color mode = custom)  
HidLayerMode=fromstyle | custom  
HidLayerName=Hidden lines (layer name to use when layer mode = custom)  
HidLayerPrefixSuffix=prefix | suffix (which of prefix or suffix are shown in the UI when layer mode = fromstyle)  
HidLayerPrefix= (prefix to prepend to the layer name when layer mode = fromstyle)  
HidLayerSuffix= (suffix to append to layer name when layer mode = fromstyle)  
  
Line style properties for annotations:  
AnnWidth=0.1  
AnnColorMode=fromstyle | custom  
AnnColor=0,0,0 (r,g,b color value for lines when color mode = custom)  
AnnLayerMode=fromstyle | custom  
AnnLayerName=Annotations (layer name to use when layer mode = custom)  
AnnLayerPrefixSuffix=prefix | suffix (which of prefix or suffix are shown in the UI when layer mode = fromstyle)  
AnnLayerPrefix= (prefix to prepend to the layer name when layer mode = fromstyle)  
AnnLayerSuffix= (suffix to append to layer name when layer mode = fromstyle)  
  
HiddenLinesOpacity=0.75 (opacity only applies to PDF export, not AI export)  
HiddenLinesDashed=true  
HiddenLinesDashSize=0.75  
HiddenLinesGapSize=1.0  
  
UseAICB=true (for AI copy to clipboard on OSX, for going into Adobe Illustrator CS3 or older).

saveAs

_string_ fileName,  
_string_ options = **""**

Allow initializing dialog with a directory name, like:  
SaveAs c:\\output\\fbx  
When given a directory name the dialog will start out in that directory.

  

same options strings can be used as for fileExport

fileImport

_string_ fileName

Imports the file specified by _fileName_ into the current scene.

fileImportSubD

fileNew

_boolean_ noQuerySaveChanges = **0**

Clears the contents of the current scene and starts a new one. If _noQuerySaveChanges_ is omitted or _false_, the user is prompted to save any unsaved changes to the current scene. If _noQuerySaveChanges_ is _true_, the current scene is cleared without asking the user if they want to save their work.

addObject

_[GeomObject](#_GeomObject)_ object

Adds the geometric _object_ specified by _object_ to the current scene.

addObjects

_[ObjectList](#_ObjectList)_ objects

Adds all of the geometric _objects_ contained in _objects_ to the current scene.

  

Sets .selected = false. In other words, if a loose object has .selected === true and then it's added to the scene then it will have .selected === false.

processObjects

findObject

[GeomObject](#_GeomObject)

_string_ id

Returns the geometric object with the specified _id_, or _null_ no object wth the specified _id_ is found.

getObjects

[ObjectList](#_ObjectList)

_false_ enterGroups

Returns an [ObjectList](#_ObjectList) containing all currently defined _top-level_ geometric objects (solids, surfaces, curves, points, etc.). If no objects are defined, the list will be empty. Returns objects inside groups by default, but can pass getObjects( false ) to disable going into groups.

getLastCreated

[ObjectList](#_ObjectList)

get an object list of the objects that were created by the last run command.  
Example:  
`script: /* Select fillet surfaces */ moi.geometryDatabase.deselectAll(); var breps = moi.geometryDatabase.getLastCreated().getBReps(); for ( var i = 0; i < breps.length; ++i ) { var faces = breps.item(i).getFaces(); for ( var j = 0; j < faces.length; ++j ) { var f = faces.item(j); if ( f.isNew ) f.selected = true; } }`

getOpenFileName

string

_string_ dialogTitle = **""**,  
_boolean_ isTemplate = **0**

getSaveFileName

string

_string_ default = **""**

getSelectedObjects

[ObjectList](#_ObjectList)

Returns an [ObjectList](#_ObjectList) containing all currently selected geometric objects (solids, surfaces, curves, points, etc.). If no objects are selected, the list will be empty.

getUnitsShortLabelFor

string

_string_ units

getUnitConversionScaleFactor

float?

_string_ fromUnits  
_string_ units

initializeHasSelectedAncestorGroup

hide

_boolean_ unused = **0**

Hides all currently selected geometric objects.

incrementalSave

invertSelection

Inverts the current selection. All geometric objects not currently selected are selected, and all previously selected objects are unselected.

isolate

Isolates the currently selected geometric objects by hiding all non-selected objects.

isolateLock

Isolates the currently selected geometric objects by locking all non-selected objects.

lock

Locks all currently selected geometric objects. If no objects are currently selected, then all previously locked objects are unlocked.

A locked object cannot be selected or modified, and will appear with a padlock icon when displayed in one of the application list views. The object will also usually appear greyed-out in any of the editing viewports.

open

_string_ fileName,  
_boolean_ noQuerySaveChanges = **0**

Clears the current scene and loads in a new scene contained in the file specified by _fileName_. If _noQuerySaveChanges_ is omitted or _false_, the user is prompted to save any unsaved changes to the current scene. If _noQuerySaveChanges_ is _true_, the current scene is cleared without asking the user if they want to save their work.

openTemplate

_string_ fileName,  
_boolean_ noQuerySaveChanges = **0**

Clears the current scene and loads in a new scene contained in the file specified by _fileName_. If _noQuerySaveChanges_ is omitted or _false_, the user is prompted to save any unsaved changes to the current scene. If _noQuerySaveChanges_ is _true_, the current scene is cleared without asking the user if they want to save their work.

This method is identical to the **open** method, except that after loading the specified _fileName_, the **openTemplate** method discards the file name. This has the effect of forcing the user to specify a new save file name when they try to save the scene, thus preventing them from accidentally saving over the _template_ file.

pasteFromClipboard

Paste the current contents of the system clipboard into the scene. In order for this to work correctly, the clipboard must contain some type of data meaningful to **MoI**. In most cases, this will be data previously sent to the clipboard from this, or another, copy of **MoI**.

print3D

removeObject

_[GeomObject](#_GeomObject)_ object

Removes _object_ from the current scene. A sub-object can't be removed from the geometry database, only a top level object can be removed.

removeObjects

_[ObjectList](#_ObjectList)_ objects

Removes all items in the _objects_ list from the current scene. Sub-objects can't be removed from the geometry database, only top level objects can be removed.

incrementRevision

save

Save the current contents of the scene to the file currently associated with the scene. If no file is associated with the scene, the system save file dialog is displayed, prompting the user to enter the name of the file to save the scene in.

selectAll

Selects all currently visible (i.e. non-hidden) objects (solids, surfaces, curves, etc.).

selectLastCreated

_boolean_ deselectOthers = **0**

selectNamed

_string_ name

Selects all objects having the specified _name_. Note that this does not deselect any currently selected objects. It simply adds any matching named objects to the current selection.

selectLoop

select edge loop

[http://moi3d.com/forum/index.php?webtag=MOI&msg=3112.22](http://moi3d.com/forum/index.php?webtag=MOI&msg=3112.22) and [http://moi3d.com/forum/index.php?webtag=MOI&msg=3112.32](http://moi3d.com/forum/index.php?webtag=MOI&msg=3112.32)

selectVisible

Selects top-level objects that have some pixels being displayed in any view. In other words, it will select all objects that could possibly be targeted by a click at that moment.

saveSelectionUndo

Force creation of a "selection" undo unit for changes to selected, locked, or hidden properties of objects by putting those changes between saveSelectionUndo() and setSelectionUndoRevision() like this:

  

    
    var selObjList = moi.geometryDatabase.getSelectedObjects(); 
    moi.geometryDatabase.saveSelectionUndo(); 
    selObjList.setProperty('selected', false); 
    moi.geometryDatabase.setSelectionUndoRevision(); 
    

  

Some operations like `moi.geometryDatabase.deselectAll();` will interfere with creation of a selection undo unit if they occur between .saveSelectionUndo() and .setSelectionUndoRevision()

setSelectionUndoRevision

see saveSelectionUndo

showPoints

Toggles the visibility of the _control points_ for all currently selected geometric objects. If one or more of the currently selected objects is not displaying its control points, then the control points for all selected objects are displayed. If all selected objects have their control points displayed, then the control points for all selected objects are hidden. If no objects are selected, this method has no effect.

showSubset

sortCurves

_[ObjectList](#_ObjectList)_ curveList

setStatic

updateStaticFaceColors

styleEditorOpened

Only 1 undo unit is generated for changes to Styles between styleEditorOpened and styleEditorClosed. This minimizes generation of uneccessary undo data if a bunch of Styles are being changed. The performance of multiple calls to .addStyle() is improved if an undo unit isn't generated for each call. May be changed in MoI 5.

styleEditorClosed

See styleEditorOpened

addStyle

[ObjectStyle](#_ObjectStyle)

Creates and returns a new [ObjectStyle](#_ObjectStyle) object. The new object style will have already been added to the end of the application's _Styles_ list.

activeStyle

int

addDefaultStyles

findStyle

[ObjectStyle](#_ObjectStyle)

_string_ styleName,  
_boolean_ createIfNotFound = **0**

Return the [ObjectStyle](#_ObjectStyle) object with the specified _styleName_, or _null_ if no style object with the specified _styleName_ is found.

However, if the requested style is not found, but _createIfNotFound_ is _true_, then a new [ObjectStyle](#_ObjectStyle) object with the specified _styleName_ is created and added to the application's _Styles_ list and returned as the result.

getObjectStyles

[List](#_List)

Returns a [List](#_List) of all currently defined [ObjectStyle](#_ObjectStyle) objects.

unlockSubset

getUserText

string

_string_ key

Returns text value for given key, or undefined if not present.

getAllUserText

[List](#_List)

returns a [List](#_List) of all document user text objects where each object has properties .key and .value which can also be viewed in the GUI at File > Notes > "Document user text"

  

    
    var UserTexts = moi.geometryDatabase.getAllUserText();
    
    for (var i = 0; i < UserTexts.length; ++i) {
        var UserText = UserTexts[i];
        moi.ui.alert('key = ' + UserText.key + '\n' +
            'value = ' + UserText.value);
    }
    

removeUserText

_string_ key

Remove user text value for given key.

  
`moi.geometryDatabase.removeUserText( 'key' );`

clearAllUserText

Clear all object user text. Object user text is also visible in the GUI on the "Details..." object properties dialog.

setUserText

_string_ key  
_string_ value

Set text value for given key.

  
`moi.geometryDatabase.setUserText( 'key', 'value' );`

[GeometryFactory](#toc)
-----------------------

Items of this class create new geometric objects that can be added to the current scene. Instances of this class are created by calling the **createFactory** method of the [Command](#_Command) object obtained from the expression _moi.command_.

Each [GeometryFactory](#_GeometryFactory) instance has a specific set of _inputs_ which must be set prior to creating the factory's geometry. The inputs are numbered from _0_ to **numInputs** _\- 1_, where the value of **numInputs** depends upon the type of geometry the factory creates. Each input requires a specific type of data, such as a [Point](#_Point) or list of [GeomObject](#_GeomObject) objects.

* * *

**References:** [Command](#_Command)(1), [UI](#_UI)(1)

**Properties**

Name

Type

Notes

name

string

read only

Specifies the name of the type of factory object this is. This is the same name passed to the [Command](#_Command) object's **createFactory** method used to create this object.

numInputs

int

read only

Specifies the number of inputs this factory object has.

  

**Methods**

Name

Result

Arguments

addToListInput

_int_ whichInput,  
_any_ value

Adds _value_ to the end of the list of values for the input specified by _whichInput_.

calculate

[ObjectList](#_ObjectList)

_string_ option

Do factory.calculate() to gather up output of factory and then moi.geometryDatabase.addObjects(ObjectList) to add output of factory to scene.

  

Avoid factory.update() and factory.commit() when using .calculate() since .update() and .commit() are intended for interactive mode and will conflict with .calculate() in sporadic and surprising ways.

  

Perform an operation on a freshly minted object by running factory.calculate() which returns an ObjectList and then combine that ObjectList with the ObjectList for other items needed for the operation by using .addObject while making sure to add an Object rather than an ObjectList, or use a helper function like CombineLists (above) to append all Objects from one list to another.

  

factory.update() runs remotely on moi\_commandprocessor for [async](#_Async) factories, but factory.calculate() will return an objectList and generate it in-process even on an async factory because factory.calculate() returns an objectList to the caller.

  

Request for .calculate() to use remote processing by passing a string option 'async' like factory.calculate( 'async' );

cancel

Cancels the factory, preventing it from generating any new geometric objects.

clearInput

_int_ whichInput

Clears (i.e. _resets_) the value of the input specified by _whichInput_.

commit

Creates an instance of the type of [GeomObject](#_GeomObject) object this object is a factory for and adds it to the current scene.

createInput

_string_ inputType

createInputType

_[FactoryInputEnum](#_FactoryInputEnum)_ type

disableUIGeometry

Some geometry factories add additional decorative geometry to the geometry database which for the regular commands help to kind of illustrate what is happening. If you run the regular Transform > Mirror command you'll see that when you go to pick the 2 points for the axis line, there is a line drawn between the points basically marking the mirror axis, but that line goes away when the mirror command is finished - that line is the "UI geometry" that the mirror factory is creating.

  

You can disable the creation of UI geometry by calling the disableUIGeometry() method on a factory, so try doing something like adding this line:

  
`factoryMirror.disableUIGeometry();`  
  

immediately after you create the mirror factory.

disableUpdate

_boolean_ varSuppress

Specifies whether or not updates of the editing viewports should be performed while the factory inputs are being updated. If _varSuppress_ is _true_, the the editing viewports will not update as the user interactively modifies the factory inputs. For example, if a line factory were active, but viewport updates were disabled, the user would not see the new line _rubberbanding_ in the editing viewports.

If _varSuppress_ is _false_, the editing viewports are updated while the user interactively updates the factory inputs.

getInput

[GeometryFactoryInput](#_GeometryFactoryInput)

_int_ whichInput

Returns a [GeometryFactoryInput](#_GeometryFactoryInput) object which acts as a reference to the factory input specified by _whichInput_. This object is then typically used with a _bindxxx_ method to allow binding the specified factory input to a user interface object, such as a [PointPicker](#_PointPicker), which allows the user to interactively specify the value required by the factory input.

getInputObjects

getCreatedObjects

getRemovedObjects

getUIObjects

removeInput

removeLastInput

reset

Resets (i.e. _clears_) the factory object back to its initial state.

setInput

_int_ whichInput,  
_any_ value

Assigns _value_ to the factory input specified by _whichInput_.

update

Causes the factory to update the editing viewports to reflect the factory's current input settings. This method is normally called after a script modifies one or more of the factory inputs using the **setInput** method.

  

Does not directly return an objectList. If an objectList is needed follow with factory.getCreatedObjects(); or use factory.calculate(); instead of factory.update();

waitForAsyncUpdate

Some "asynchronous factories" are processed remotely when factory.update() is called:

*   ArrayGem
*   Blend
*   Booleans
*   CalcArea
*   CalcLength
*   CalcVolume
*   Chamfer
*   Extrude
*   Fillet
*   Flow
*   Inset
*   Intersect
*   Join
*   Loft
*   Network
*   Nsided
*   Offset
*   Project
*   RailRevolve
*   Revolve
*   Shell
*   Silhouette
*   Sweep
*   Text
*   Twist

If factory.update() is called for an async factory then that's processed remotely, so the main process needs to wait for the remote processing to finish if the result is going to be used by the main process. The way to do that is by doing factory.update() then factory.waitForAsyncUpdate() and finally using the result after waiting.

  

When a factory is using remote processing it gathers up parameters and sends it to a separate moi\_commandprocessor process and does the the actual work over there. That has the expense of some additional transmission overhead but long-running operations can be canceled and there is crash protection where if the processing crashes it will only take down the worker process and not the main Moi process.

  

.waitForAsyncUpdate() is used internally by calcCurveLength(), calcSurfaceArea(), and calcSolidVolume() because those need to return a number value; not an objectList, so they use factory.update() followed by factory.waitForAsyncUpdate() because factory.update() can also transmit back modified input values.

  

Doing factory.calculate() with an async factory will return an objectList and it will be generated in-process rather than being sent to moi\_commandprocessor for async operation. In v5 you can request for .calculate() to use remote processing by passing a string option 'async' like:

  
`factory.calculate('async');`  
  

If you do that it will internally block using .waitForAsyncUpdate() and this works for getting any factory to be processed remotely incuding both async and non-async factories. If you call .waitForAsyncUpdate() when there is not an async update currently in progress it should just be a NOP.

  

There used to be an issue that the id of an object was generated when it was added to the geometry database. So, if you used factory.calculate() to generate some geometry but never add it into to the the geometry database then it would not have an id value and ids are needed for factories that do async updates. In v4 this was solved by generating object id values right when the object is initially created, so there isn't a situation anymore where an object doesn't have an id value set on it.

[GeometryFactoryInput](#toc)
----------------------------

Items of this class represent _bindable_ references to specific [GeometryFactory](#_GeometryFactory) object inputs. They are created using the **getInput** method of a [GeometryFactory](#_GeometryFactory) object, and are typically used in conjunction with a **bindxxx** method of a user interface object, such as a [PointPicker](#_PointPicker) object, to bind a factory input to a value the user specifies using the user interface object, such as a [Point](#_Point) selected using a [PointPicker](#_PointPicker) object.

* * *

**References:** [GeometryFactory](#_GeometryFactory)(1), [UI](#_UI)(1)

**Properties**

Name

Type

Notes

name

string

Specifies the name of the factory input this object is associated with. The name identifies the purpose or role of the factory input. For example, the name of factory input _0_ for a _line_ factory is _Start_, reflecting its role of specifying the start point of the line it is creating.

type

[FactoryInputEnum](#_FactoryInputEnum)

read only

Specifies the type of value the factory input associated with this object accepts.

  

**Methods**

Name

Result

Arguments

getValue

any

Returns the current value of the factory input this object is associated with.

setValue

_any_ newValue

Sets the value of the factory input this object is associated with to _newValue_.

[Grid](#toc)
------------

The single instance of this class defines all of the properties that control the behavior and appearance of the grid drawn in the background of each editing viewport. Access to this object can be obtained within a script using _moi.grid_.

* * *

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

accentedLineColor

int

Specifies the color used to draw the accented (i.e. _major_) grid lines. The color is an integer of the form: **0xRRGGBB**, where _RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value.

accentedLineFrequency

int

Specifies the interval, measured in normal grid lines, at which an accented (i.e. _major_) grid line is drawn. For example, a value of _5_ means that every fifth grid line is an accented grid line.

accentedLineStyle

string

Specifies the line style used to drawn accented (i.e. _major_) grid lines. The possible values are:

*   Long Dashed
*   Dashed
*   Solid

If an unrecognized value is used, a solid grid line is drawn.

accentedLineWidth

float

Specifies the width, in pixels, of an accented (i.e. _major_) grid line.

display

boolean

Specifies whether the grid is displayed or not. If _true_, then the grid is displayed. If _false_, the grid is not displayed.

lineColor

int

Specifies the color used to draw the normal (i.e. _minor_) grid lines. The color is an integer of the form: **0xRRGGBB**, where _RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value.

lineStyle

string

Specifies the line style used to drawn normal (i.e. _minor_) grid lines. The possible values are:

*   Long Dashed
*   Dashed
*   Solid

If an unrecognized value is used, a solid grid line is drawn.

lineWidth

float

Specifies the width, in pixels, of a normal (i.e. _minor_) grid line.

sections

int

Specifies the number of grid lines drawn in each quadrant of the grid.

showXYAxes

boolean

Specifies whether the x and y axes should be drawn. If true, the x and y axes are drawn. If _false_, the axes are not drawn.

size

float

Specifies the distance interval, measured in base units (e.g. 'Feet'), between each pair of grid lines.

snapSize

float

Specifies the _grid_ snapping distance interval, measured in base units (e.g. 'Feet').

xAxisColor

int

Specifies the color used to draw the positive x axis line. The color is an integer of the form: **0xRRGGBB**, where _RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value.

yAxisColor

int

Specifies the color used to draw the positive y axis line. The color is an integer of the form: **0xRRGGBB**, where _RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value.

[Group](#toc) ( [GeomObject](#_GeomObject) )
--------------------------------------------

A group is a geomObject that can contain arbitrary other geomObjects

* * *

**References:** [GeomObject](#_GeomObject)

**Properties**

Name

Type

Notes

frame

[CoordinateFrame](#_CoordinateFrame)

objects

[ObjectList](#_ObjectList)

Immediate children of the group, unlike .getSubObjects() which recursively returns all children.

  

**Methods**

Name

Result

Arguments

getFirstNode

[GeomObject](#_GeomObject)

[GeomObject](#_GeomObject) current\_node

Returns the first immediate sibling of current\_node that's in the same group.

getNextNode

[GeomObject](#_GeomObject)

[GeomObject](#_GeomObject) current\_node

Returns the next immediate sibling of current\_node that's in the same group. Returns _null_ if a next sibling isn't found.

  

If the next immediate sibling is a group then rather than returning that group, it will return the first non-group object inside that group.

This will only traverse groups and any objects that are the immediate child of a group but not go into sub-objects like curve segments.

    
    var selObjList = moi.geometryDatabase.getSelectedObjects();
    var obj = selObjList.item(0);
    var group = obj.getParentObject();
    var child = group.getNextNode(obj);
    if (child === null) {
        child = group.getFirstNode(obj);
    }
    moi.geometryDatabase.deselectAll();
    child.selected = true;
    

[Image](#toc)
-------------

Items of this class represent bitmap images.

* * *

**References:** [View](#_View)(1)

**Methods**

Name

Result

Arguments

getSaveFileName

string

_string_ default = **""**

Prompts the user for the name of a file to save the image in, and returns either the fully qualified name of the file that the user selected, or the empty string if the user cancels the file prompt.

The value of _default_ is a string specifying the _default_ file name to use. If omitted, no _default_ file name is displayed in the input field.

If the user selects an existing file, the file prompt dialog will automatically ask if the user wants to replace the selected file, so there is no need to prompt the user again for this information.

save

_string_ fileName

Saves the bitmap image to the file specified by _fileName_.

[IntegerTextInput](#toc) ( [TextInput](#_TextInput) )
-----------------------------------------------------

Items of this class represent a user interface control that allows the user to type integer values.

**Properties**

Name

Type

Notes

integerValue

int

Specifies the current integer value of the control, either as entered by the user or set by the application.

[LayoutPanel](#toc)
-------------------

Items of this class represent user interface elements whose purpose is to manage the layout of other user interface elements contained within it.

**Properties**

Name

Type

Notes

dock

string

Specifies how the panel should be laid out with respect to the user interface element it is contained in. The possible values are:

*   **top**: The panel should be _docked_ to the top edge of its parent.
*   **bottom**: The panel should be _docked_ to the bottom edge of its parent.
*   **left**: The panel should be _docked_ to the left edge of its parent.
*   **right**: The panel should be _docked_ to the right edge of its parent.
*   **fill**: The panel should fill any unused space within its parent.

[List](#toc)
------------

Items of this class can contain lists of any **MoI** data or object type. You can create new [List](#_List) objects using the global _**moi**_ object's **createList** method.

* * *

**References:** [GeometryDatabase](#_GeometryDatabase)(2), [Moi](#_Moi)(1), [UI](#_UI)(2), [View](#_View)(1)

**Properties**

Name

Type

Notes

length

int

read only

The number of elements currently in the list.

  

**Methods**

Name

Result

Arguments

add

_any_ item

Adds _item_ to the end of the list.

callMethod

_string_ methodName

clear

list.clear() will empty out the list so it has length=0

item

int

_int_ index

Returns the _index_ element of the list. The valid indices are from _0_ to _(list.length - 1)_. The method raises an exception if _index_ is not in this range.

pop

last element from list

Same behavior as JavaScript array. The last element of the list is removed from the list and returned. If the list is empty, returns undefined.

push

int new\_length

_any_

Same behavior as JavaScript array. The arguments are appended to the end of the list in the order in which they appear. The new length of the list is returned as the result of the call.

remove

_int_ index

Removes the _index_ element from the list. The valid indices are from _0_ to _(list.length - 1)_. The method raises an exception if _index_ is not in this range.

[MenuItem](#toc) ( [UIControl](#_UIControl) )
---------------------------------------------

Items of this class represent user interface menu items.

**Properties**

Name

Type

Notes

checked

boolean

Specifies whether the menu item should display a _checked_ symbol next to the menu item text. If _true_, the checked symbol is displayed. If _false_, the checked symbol is not displayed.

[MeshObject](#toc) ( [GeomObject](#_GeomObject) )
-------------------------------------------------

Items of this class represent geometric objects that have been converted from NURBS into polygonal meshes as part of preparing the objects for export to a polygon based file format.

[Moi](#toc)
-----------

The single instance of this class is the top-level object in the **MoI** environment, and provides access to all other data and objects in the environment. It can be accessed from any script as the value of the _**moi**_ variable.

* * *

**References:** [UIControl](#_UIControl)(1)

**Properties**

Name

Type

Notes

command

[Command](#_Command)

read only

Contains a reference to the [Command](#_Command) object, which provides access to the properties and methods used to manage and control the **MoI** application command execution environment.

drawingAids

[DrawingAids](#_DrawingAids)

read only

Contains a reference to the [DrawingAids](#_DrawingAids) object, which provides access to the current state of all of the drawing aids (i.e. snaps, construction line data) available to the user.

expireDate

string

read only

Contains the user's **MoI** trial license expiration date in the form: **mmm-dd-yyyy** (e.g. _Sep-21-2009)_. Its value is the empty string if the user has a fully licensed copy of **MoI** installed.

filesystem

[Filesystem](#_Filesystem)

read only

Contains a reference to the [Filesystem](#_Filesystem) object, which provides a number of methods for manipulating file names and prompting the user for file names.

geometryDatabase

[GeometryDatabase](#_GeometryDatabase)

read only

Contains a reference to the [GeometryDatabase](#_GeometryDatabase) object, which provides access to all of the geometry data for the current session.

grid

[Grid](#_Grid)

read only

Contains a reference to the [Grid](#_Grid) object, which provides access to all of the properties used to control the background grid drawn in the editing viewports.

selection

[Selection](#_Selection)

read only

settings

[Settings](#_Settings)

read only

Contains a reference to the [Settings](#_Settings) object, which provides access to the properties which control the various file import and export options.

ui

[UI](#_UI)

read only

Contains a reference to the [UI](#_UI) object, which provides access to the properties used to control the behavior of the **MoI** application user interface.

vectorMath

[VectorMath](#_VectorMath)

read only

Contains a reference to the [VectorMath](#_VectorMath) object which provides useful helper methods for performing vector math operations and tests upon [Point](#_Point) objects as well as factory methods for creating [CoordinateFrame](#_CoordinateFrame) objects.

version

string

read only

The version number of **MoI** in the form: **x.y** ttt...ttt, where _x_ is the major version, _y_ is the minor version, and _ttt...ttt_ is an optional text modifier. For example: _2.0 Beta Jun-23-2009_.

majorVersionNumber

string?

view

[View](#_View)

read only

Contains a reference to the [View](#_View) object, which provides access to the properties which control the appearance and behavior of the editing viewports.

  

**Methods**

Name

Result

Arguments

copyTextToClipboard

_string_ text

Copies _text_ to the system clipboard.

createList

[List](#_List)

Creates and returns a new [List](#_List) object, which can be used to store a list of any type of **MoI** data.

exit

_boolean_ noQuerySaveChanges = **0**

Causes **MoI** to exit. If _noQuerySaveChanges_ is omitted or _0_, the user is prompted first to save any unsaved changes. If _noQuerySaveChanges_ is not _0_, the program exits immediately without saving the contents of the user's current session.

  

When you call moi.exit() , the moi process is not immediately terminated, a close message is posted to the main window so it will follow the same procedure as the regular window close button being pushed. So, moi.exit() initiates the closing procedure but the app won't actually terminate until after the main event loop processes the posted close event.

getExecutableCommandLineArgs

[List](#_List)

Returns list of command line parameters for launching the executable.

getLog

string

Returns a string containing all messages written to the **MoI** application log using the **log** method.

launchHelp

Launches the _MoI_ help system by loading the main **MoI** help file page into the user's default web browser.

log

_string_ toLog

Logs _toLog_ to the **MoI** log. The current contents of the log can be retrieved using the **getLog** method.

test

_string_ test

toString

string

returns specific name of a MoI JavaScript object

[NumericTextInput](#toc) ( [TextInput](#_TextInput) )
-----------------------------------------------------

Items of this class represent a user interface control that allows the user to type floating point values (i.e. numbers that can contain a decimal point).

**Properties**

Name

Type

Notes

numericValue

float

Specifies the current floating point value of the control, either as entered by the user or set by the application.

[ObjectDatabaseStateEnum](#toc)
-------------------------------

This enumeration defines the various states a geometric object can be in with regard to its inclusion in the current scene.

* * *

**References:** [GeomObject](#_GeomObject)(1)

**Enumeration Values**

Name

Value

Unknown

0

The current state of the object is unknown.

Unattached

1

The object has not yet been added to the current scene. That is, it has been created but not yet added to the scene.

InDatabase

2

The object is part of the current scene.

Deleted

3

The object has been deleted from the current scene.

[ObjectList](#toc)
------------------

Items of this class contain lists of geometric objects (solids, surfaces, curves, points, etc.). They also contain useful methods for operating on all or some of the members in the list.

* * *

**References:** [BRep](#_BRep)(5), [Curve](#_Curve)(1), [Face](#_Face)(4), [GeomObject](#_GeomObject)(3), [GeometryDatabase](#_GeometryDatabase)(9), [GeometryFactory](#_GeometryFactory)(1), [ObjectPicker](#_ObjectPicker)(1), [UI](#_UI)(1)

**Properties**

Name

Type

Notes

length

int

read only

Specifies the number of elements currently in the list.

numBReps

int

read only

Specifies the number of [BRep](#_BRep) objects currently in the list.

numConstructionLines

int

read only

Specifies the number of [ConstructionLine](#_ConstructionLine) objects currently in the list.

numCurves

int

read only

Specifies the number of [Curve](#_Curve) objects currently in the list.

numEdges

int

read only

Specifies the number of edge objects currently in the list.

numFaces

int

read only

Specifies the number of [Face](#_Face) objects currently in the list.

numFacesFromMultiFaceBReps

int

read only

numOpenBReps

int

read only

Specifies the number of open [BRep](#_BRep) objects currently in the list.

numPoints

int

read only

Specifies the number of [PointObject](#_PointObject) objects currently in the list.

numSingleFaceBReps

int

read only

Specifies the number of [BRep](#_BRep) objects with a single face currently in the list.

numSolids

int

read only

Specifies the number of solid objects currently in the list.

numStandaloneCurves

int

read only

Specifies the number of stand-alone [Curve](#_Curve) objects currently in the list.

  

A "Standalone curve" is a curve that is its own independent top level object, which is distinct from an edge curve which is part of the structure of a surface or solid. When you create a curve using the "Draw curve" tools for example, those are standalone curves.

numTopLevelObjects

int

read only

Specifies the number of top-level objects currently in the list. A top-level object is an object the user can directly select or manipulate in the user interface without having to first select a parent object.

  

**Methods**

Name

Result

Arguments

addObject

_[GeomObject](#_GeomObject)_ obj

Adds the geometric object specified by _obj_ to the end of the list.

callMethod

_string_ methodName

Perform a GeomObject method on each object in an objectList without explicitly iterating over the objectList. For example, remove history data from selected objects:  
`moi.geometryDatabase.getSelectedObjects().callMethod( 'deleteHistoryData' );`

getAnnotations

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the [Annotations](#_Annotation) contained in the list.

getBReps

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the [BRep](#_BRep) objects contained in the list.

clear

objectlist.clear() will empty out the list so it has length=0

getBoundingBox

[BoundingBox](#_BoundingBox)

Returns the smallest [BoundingBox](#_BoundingBox) containing all of the objects in the list.

getConstructionLines

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the [ConstructionLine](#_ConstructionLine) objects contained in the list.

getCurves

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the [Curve](#_Curve) objects contained in the list.

getEdges

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the edge objects contained in the list.

getFaces

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the [Face](#_Face) objects contained in the list.

getGroups

[ObjectList](#_ObjectList)

Returns an objectList containing only the [Group](#_Group) objects contained in the list. Not just the top-level groups, but also all nested groups.

getHighAccuracyBoundingBox

[BoundingBox](#_BoundingBox)

Returns the smallest [BoundingBox](#_BoundingBox) containing all of the objects in the list. This is similar to the result returned by the **getBoundingBox** method, but returns a more accurate resul which may take longer to compute. Use it instead of **getBoundingBox** in cases where accuracy matters more than speed.

getOpenBReps

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the open [BRep](#_BRep) objects contained in the list.

getPoints

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the [PointObject](#_PointObject) objects contained in the list.

getSingleFaceBReps

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the [BRep](#_BRep) objects with a single face contained in the list.

getSolids

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the solid objects contained in the list.

getStandaloneCurves

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the stand-alone [Curve](#_Curve) objects contained in the list.

A "Standalone curve" is a curve that is its own independent top level object, which is distinct from an edge curve which is part of the structure of a surface or solid. When you create a curve using the "Draw curve" tools for example, those are standalone curves.

getTopLevelObjects

[ObjectList](#_ObjectList)

Returns a new [ObjectList](#_ObjectList) containing only the top-level objects contained in the list. A top-level object is an object the user can directly select or manipulate in the user interface without having to first select a parent object.

invertProperty

_string_ propName

item

[GeomObject](#_GeomObject)

_int_ index

Returns the _index_ element of the list. The elements of the list are numbered from _0_ to _(list.length - 1)_. If _index_ is not in this range, an exception is generated.

lockSelection

Locks the selection status of all geometric objects in the list. That is, if an object in the list is unselected at the time this method is called, it cannot be selected after the call. And vice versa, if an object in the list is selected at the time this method is called, it cannot be unselected.

  

The selection lock can be released using the **unlockSelection** method.

  

Selection lock is cleared automatically both at the beginning and the end of a command, but is left as-is for an instant script. Selection lock can also be cleared by tapping the Escape key which does:

1.  If a script has been running for more than 3 seconds since the last event wait Esc will cancel the script by triggering an exception for any MoI API function call.
2.  If a dialog has keyboard focus or if there is flyout menu window open, it will close that window. If it was a modal window it will give the cancel return code value.
3.  If there was no dialog to target, then if there is any active selection filter it will clear that.
4.  If there was no selection filter, then if a command is running it will cancel that command by making the .waitForEvent() function return false. When a script sees .waitForEvent() returning false it should exit.
5.  If there was no command running, then if there is an object using an event loop waiting for events it will cancel that making it exit the waiting state.
6.  If there was no waiting object, then if there are any selected objects it will clear the selection.
7.  If there was not any object selection then it looks if any objects had edit points turned on and if so then turns them off.

pop

last element from list

Same behavior as JavaScript array. The last element of the list is removed from the list and returned. If the list is empty, returns undefined.

push

int new\_length

_any_

Same behavior as JavaScript array. The arguments are appended to the end of the list in the order in which they appear. The new length of the list is returned as the result of the call. Can take another ObjectList or JavaScript array and it will look through the contents to find objects.

remove

_int_ index

Removes the _index_ element from the list. The valid indices are from _0_ to _(list.length - 1)_. The method raises an exception if _index_ is not in this range.

removeObject

_[GeomObject](#_GeomObject)_ obj

Removes the geometric object specified by _obj_ from the list.

removeObjectAt

_int_ index

Removes the _index_ element of the list from the list. An exception is generated if the specified _index_ is not in the range from _0_ to _(list.length - 1)_.

setProperty

_string_ propName,  
_any_ pvarValue

Select all objects in objectList: `objectList.setProperty('selected', true);`

sortBySelectionOrder

Sorts the items in the list by the order in which they were selected, with the first item in the list being the first one selected, and so on.

unlockSelection

Unlocks the selection status of all geometric items in the list. Refer to the **lockSelection** method for a description of what _lock selection_ means.

[ObjectPicker](#toc) ( [WaitableObject](#_WaitableObject) )
-----------------------------------------------------------

Items of this class represent user interface elements that allow the user to interactively select geometric objects in the current scene by clicking the mouse or pen on the object in the editing viewports or scene browser, or by dragging a selection _window_ rectangle around the objects to be selected in the editing viewports.

* * *

**References:** [UI](#_UI)(1)

**Properties**

Name

Type

Notes

autoFaceDrillDown

boolean

allows a face to be selected directly without clicking multiple times to drill down to that face. Similar effect as `moi.selection.setFilter( 'Types', 'Faces', true );` but doesn't prevent non-face objects from being selected.

finishOnPick

boolean

Specified whether picking is finished as soon as an object is _picked_. If _true_, then the object picker is finished as soon as an object is picked. If _false_, the object picker is not finished until the user explicitly finishes object picking (e.g. by pressing the **Enter** key).

max

int

Specifies the maximum number of objects that can be _picked_.

min

int

Specifies the minimum number of objects that can be _picked_.

objects

[ObjectList](#_ObjectList)

read only

Specifies an [ObjectList](#_ObjectList) object containing the list of all objects that have been _picked_.

  

**Methods**

Name

Result

Arguments

allowBReps

Allow [BRep](#_BRep) (i.e. Boundary Representation) objects to be _picked_.

allowCurves

Allow [Curve](#_Curve) objects to be _picked_.

allowEdgeCurves

Allow [CurveSegment](#_CurveSegment) objects to be _picked_.

allowEditPoints

Allow object _control points_ to be _picked_.

allowFaces

Allow [Face](#_Face) objects to be _picked_.

allowPointObjects

Allow [PointObject](#_PointObject) objects to be _picked_.

allowStandaloneCurves

Allow stand-alone [Curve](#_Curve) objects to be _picked_.

  

A "Standalone curve" is a curve that is its own independent top level object, which is distinct from an edge curve which is part of the structure of a surface or solid. When you create a curve using the "Draw curve" tools for example, those are standalone curves.

allowTopLevelObjects

Allow top-level objects to be _picked_.

disableWindowing

Disables selecting objects in the editing viewports by dragging a selection _window_ rectangle around them.

done

boolean

Terminates the object picking operation and returns whether or not the object picking session was successful. If return value of _true_ indicates that at least the minimum number of objects specified was _picked_. A return value of _false_ indicates that fewer than the minimum number of objects specified was _picked_.

  

`picker.objects` only gets filled in after doing `picker.done();`

resetAllow

Resets the set of object types that can be _picked_ back to the empty set.

  

**Example**

    
    // BoundingBox.js
    // norepeat isn't a comment. It's a flag to disable the repeat checkbox
    // config: norepeat 
    
    #include "GetObjects.js"  // GetObjects is a function that determines when the objectPicker is done or finished
    // GetObjects (plural) allows multiple objects to be selected while GetObject (singular) is for selecting a single object.
    // objects that were selected prior to running command can't be deselected if they match allowBReps() etc. filters when GetObjects is used
    // objects that were preselected are deselected unless the preselection is a single object that matches the allow filters when GetObject is used
    
    function DoBoundingBox() {
        var objectpicker = moi.ui.createObjectPicker();
        if (!GetObjects(objectpicker))
            return;
    
        var factory = moi.command.createFactory('boundingbox');
        factory.setInput(0, objectpicker.objects); //objectpicker.objects includes all objects selected when picker finishes regardless of whether they were selected by picker or were selected before picker created
    
        factory.commit();
    }
    
    DoBoundingBox();
    

[ObjectSnapEnum](#toc)
----------------------

This enumeration defines the various types of supported object snaps.

* * *

**References:** [Osnap](#_Osnap)(1)

**Enumeration Values**

Name

Value

None

0

Origin

1

Snap to the world space origin at (0,0,0).

Axis

2

snap to a point on one of the world axes.

End

3

Snap to one of the end points of a line, curve or circular arc.

Mid

4

Snap to the mid-point of a line or circular arc.

Cen

5

Snap to the center of a circle, ellipse or circular arc.

Int

6

Snap to the intersection point of two lines or curves.

StraightSnapInt

7

Snap to a straight line passing through a base point.

SelfInt

8

CPlaneInt

9

Quad

10

Snap to one of the quadrant points of a circle, ellipse or circular arc.

Pt

11

PtOnObject

12

On

13

Snap to a point on a curve.

OnSrf

14

Snap to a point on the surface of a solid object.

Perp

15

Snap to a point perpendicular to a line, circle, ellipse, circular arc or curve.

Tan

16

Snap to a point tangential to a circle, ellipse, circular arc or curve.

PerpPerp

17

TanTan

18

Div

19

Snap to one of the division points specified for a construction line.

[ObjectStyle](#toc)
-------------------

Items of this class define an object style that can be applied to geometric objects using the application's _Styles_ list.

* * *

**References:** [GeometryDatabase](#_GeometryDatabase)(2)

**Properties**

Name

Type

Notes

color

int

Specifies the color associated with the object style. The value is an integer of the form: **0xRRGGBB**, where _RR_ specifies the _red_ channel value, _GG_ specifies the _green_ channel value, and _BB_ specifies the _blue_ channel value.

Any geometric objects assigned the style will also use the color when drawn on the screen and when exported to any file format that supports material definitions.

hexcolor

string

read only

Specifies the current color associated with the object style as a hexadecimal string of the form: **#RRGGBB**, where _RR_ specifies the _red_ channel value, _GG_ specifies the _green_ channel value, and _BB_ specifies the _blue_ channel value.

index

int

read only

Specifies the 0-based index of the object style within the application's _Styles_ list.

name

string

Specifies the name associated with the object style. The name appears in the application's _Styles_ list as part of the style's description. It is also used as the _material_ name for any geometric objects assigned that style when they are exported to a file format which supports named material styles.

  

**Methods**

Name

Result

Arguments

moveDown

Attempts to move the object style down one slot in the application's _Styles_ list. It performs no action if the object style is already the bottommost style in the list.

moveUp

Attempts to move the object style up one slot in the application's _Styles_ list. It performs no action if the object style is already the topmost style in the list.

remove

Removes the object style from the application's _Styles_ list.

[OrientationPicker](#toc)
-------------------------

* * *

**References:**

**Properties**

Name

Type

Notes

frame

noDefaultFrame

boolean

shiftDown

boolean

controlDown

boolean

altDown

boolean

  

**Methods**

Name

Result

Arguments

bindResultFrame

clearBindings

initEditAxisStage

reset

setDefaultFrame

[Osnap](#toc)
-------------

Items of this class represent a particular snapping condition that a [PickedPoint](#_PickedPoint) object satisfies.

* * *

**References:** [PickedPoint](#_PickedPoint)(1)

**Properties**

Name

Type

Notes

isOnCurve

boolean

read only

Specifies whether the [PickedPoint](#_PickedPoint) os on a curve. If _true_, the point is on a curve. If _false_, the point is not on a curve.

object

[GeomObject](#_GeomObject)

read only

Specifies a geometric object the [PickedPoint](#_PickedPoint) is associated with. The value is _null_ if the snapping condition does not involve a geometric object.

otherObject

[GeomObject](#_GeomObject)

read only

Specifies another geometric object the [PickedPoint](#_PickedPoint) is associated with, for snapping conditions involving more than a single object. The value is _null_ if two objects are not involved.

otherParameter

float

read only

Specifies another numeric value describing some aspect of the snapping condition. Like the **parameter** property, the interpretation of the value depends upon the snapping condition. For example, in the case of an intersection snapping condition, it represents the distance from the starting point to the point of intersection.

parameter

float

read only

Specifies a numeric value describing some aspect of the snapping condition. The interpretation of the value depends upon the snapping condition. For example, in some cases the value is a number between _0.0_ and _1.0_ specifying the fractional distance of the snapping point along the curve when traveling from the curve's _start_ to _end_ point.

pt

[Point](#_Point)

read only

Specifies a [Point](#_Point) object containing the snapping point.

screenDist

float

read only

type

[ObjectSnapEnum](#_ObjectSnapEnum)

read only

Specifies the [ObjectSnapEnum](#_ObjectSnapEnum) enumeration value that describes the snapping condition satisfied.

typeString

string

read only

Specifies a text string describing the snapping condition satisfied.

[PickedPoint](#toc) ( [Point](#_Point) )
----------------------------------------

Items of this class represent a point the user has picked as part of executing a **MoI** command.

* * *

**References:** [PointPicker](#_PointPicker)(2)

**Properties**

Name

Type

Notes

numOsnaps

int

read only

Specifies the number of object snap conditions the picked point satisfies.

point

[Point](#_Point)

read only?

x,y,z point

x

float

read only?

x coordinate in 3D

y

float

read only?

y coordinate in 3D

z

float

read only?

z coordinate in 3D

screenX

float

read only

Specifies the x coordinate in screen space of the picked point.

screenY

float

read only

Specifies the y coordinate in screen space of the picked point.

shiftDown

boolean

read only?

Specifies whether or not the user was pressing the **Shift** key while the point was picked. If _true_, the user was pressing the **Shift** key. If _false_, they were not.

controlDown

boolean

read only?

Specifies whether or not the user was pressing the **Ctrl** key while the point was picked. If _true_, the user was pressing the **Ctrl** key. If _false_, they were not.

altDown

boolean

read only?

Specifies whether or not the user was pressing the **Alt** key while the point was picked. If _true_, the user was pressing the **Alt** key. If _false_, they were not.

viewport

[Viewport](#_Viewport)

read only

Specifies the [Viewport](#_Viewport) object that the point was picked in.

  

**Methods**

Name

Result

Arguments

add

osnap

[Osnap](#_Osnap)

_int_ index

Returns one of the [Osnap](#_Osnap) conditions that the picked point satisfies. The particular [Osnap](#_Osnap) condition to return is specified by _index_, which must be in the range from _0_ to _**numOsnaps** **\-** **1**_.

scale

set

[Point](#toc)
-------------

Items of this class represent points in three dimensional space with an x, y and z coordinate. This is different from a pointObject which is a geomObject that is visible in the viewports rather than simply being a set of coordinates. The point corresponding to a point object is available as a property at pointObject.pt

  

make a point using moi.VectorMath.createPoint(x,y,z)

* * *

**References:** [BoundingBox](#_BoundingBox)(6), [CoordinateFrame](#_CoordinateFrame)(11), [Curve](#_Curve)(2), [Osnap](#_Osnap)(1), [PickedPoint\*](#_PickedPoint)(1), [PointObject](#_PointObject)(1), [PointPicker](#_PointPicker)(11), [PointStreamPicker](#_PointStreamPicker)(1), [PointTextInput](#_PointTextInput)(1), [UI](#_UI)(1), [VectorMath](#_VectorMath)(4), [View](#_View)(1), [Viewport](#_Viewport)(6)

**Properties**

Name

Type

Notes

x

float

The x coordinate of the [Point](#_Point).

y

float

The y coordinate of the [Point](#_Point).

z

float

The z coordinate of the [Point](#_Point).

  

**Methods**

Name

Result

Arguments

add

_[Point](#_Point)_ pointToAdd

Adds the x coordinate of _pointToAdd_ to the x coordinate of this [Point](#_Point), adds the y coordinate of _pointToAdd_ to the y coordinate of this [Point](#_Point), and adds the z coordinate of _pointToAdd_ to the z coordinate of this [Point](#_Point). The results replace the current x, y and z coordinates of this [Point](#_Point).

get

_float_ x,  
_float_ y,  
_float_ z

scale

_float_ factor

Multiplies the x, y and z coordinates of this [Point](#_Point) by the specified scale _factor_. The results replace the current values for the x, y and z coordinate of this [Point](#_Point).

set

_float_ newX,  
_float_ newY,  
_float_ newZ

Sets the x, y and z coordinates of this [Point](#_Point) to the new values specified by _newX_, _newY_ and _newZ_.

toString

string

_int_ numDecimals = **\-1**

Returns the result of converting the [Point](#_Point) to a string of the form: _(x,y,z_) using the number of decimal places specified by _numDecimals_.

If _numDecimals_ is omitted or _\-1_, the default number of decimal places is used.

[Point2D](#toc)
---------------

Items of this class represent points in two dimensional space with an x and y coordinate.

* * *

**References:** [PointStreamPicker](#_PointStreamPicker)(1)

**Properties**

Name

Type

Notes

x

float

The x coordinate of the [Point2D](#_Point2D).

y

float

The y coordinate of the [Point2D](#_Point2D).

  

**Methods**

Name

Result

Arguments

add

_[Point2D](#_Point2D)_ pointToAdd

Adds the x coordinate of _pointToAdd_ to the x coordinate of this [Point2D](#_Point2D), and adds the y coordinate of _pointToAdd_ to the y coordinate of this [Point2D](#_Point2D). The results replace the current x and y coordinates of this [Point2D](#_Point2D).

get

_float_ x,  
_float_ y

scale

_float_ factor

Multiplies the x and y coordinates of this [Point2D](#_Point2D) by the specified scale _factor_. The results replace the current values for the x and y coordinate of this [Point2D](#_Point2D).

set

_float_ newX,  
_float_ newY

Sets the x and y coordinates of this [Point2D](#_Point2D) to the new values specified by _newX_ and _newY_.

toString

string

_int_ numDecimals = **\-1**

Returns the result of converting the [Point](#_Point) to a string of the form: _(x,y_) using the number of decimal places specified by _numDecimals_.

If _numDecimals_ is omitted or _\-1_, the default number of decimal places is used.

[PointObject](#toc) ( [GeomObject](#_GeomObject) )
--------------------------------------------------

Items of this class represent geometric objects consisting of a single point. Unlike a [Point](#_Point) these are visible like a line or a cube rather than simply being a set of coordinates. Can be made with a point factory.

**Properties**

Name

Type

Notes

pt

[Point](#_Point)

read only

Specifies the [Point](#_Point) object used to represent the position of the point.

[PointPicker](#toc) ( [WaitableObject](#_WaitableObject) )
----------------------------------------------------------

Items of this class allow the user to interactively select a point in 3D space by moving the mouse pointer around in the various editing viewports and clicking the left mouse button. A [PointPicker](#_PointPicker) supports various types of snapping behavior and, in general, is designed to assist the user in accurately selecting a point based upon the current scene geometry.

* * *

**References:** [UI](#_UI)(2)

**Properties**

Name

Type

Notes

allowMidObjectSnap

boolean

altDown

boolean

read only

Specifies whether or not the user is currently pressing the **Alt** key. If _true_, the user is pressing the **Alt** key. If _false_, they are not.

basept

[PickedPoint](#_PickedPoint)

read only

Specifies the [PickedPoint](#_PickedPoint) object representing the current _base point_ used for picking points. If no base point has been specified, the value is _null_.

The base point is used for various types of snapping behavior, such as straight snapping, tangent snapping, and any other type of snapping which is based on two points (i.e. a base point and a snap _target_ point).

controlDown

boolean

read only

Specifies whether or not the user is currently pressing the **Control** key. If _true_, the user is pressing the **Control** key. If _false_, they are not.

cplane

[CoordinateFrame](#_CoordinateFrame)

read only

projectToCPlane

boolean

disableBasePt

boolean

Specifies whether snapping behavior that depends upon a _base point_ is enabled or not. If _true_, any snapping behavior that uses a base point is disabled. If _false_, base point snapping behavior is enabled.

disableGridSnap

boolean

disableObjectSnap

boolean

Specifies whether object snapping behavior is enabled or not. If _true_, object snapping behavior is disabled. If _false_, object snapping behavior is enabled.

disableSnapToBasePt

boolean

Specifies whether snapping to the _base point_ is enabled or not. If _true_, snapping to the base point is disabled. If _false_, snapping to the base point is enabled.

disableStraightSnap

boolean

disableTanPerpObjectSnap

boolean

disableVerticalStraightSnap

boolean

Avoids getting a vertical tracking snap line coming off the surface normal when doing the "on surface" type drawing.

dontMakeConstructionLines

boolean

enableOnObjectSnap

boolean

finishOnMouseDown

boolean

finishOnMouseMove

boolean

finishOnMouseUp

boolean

hasBasePt

boolean

read only

So that a script can tell if there is a straight snap currently active. This makes it possible to do a "direction lock" shortcut key:  

    var pp = moi.ui.getActivePointPicker();
    if (pp && pp.hasStraightSnap) {
        pp.restrictToLinePtDir(pp.basePt, pp.straightSnapDir, true);
    }

hasStraightSnap

boolean

read only

So that a script can tell if there is a straight snap currently active. This makes it possible to do a "direction lock" shortcut key:  

    var pp = moi.ui.getActivePointPicker();
    if (pp && pp.hasStraightSnap) {
        pp.restrictToLinePtDir(pp.basePt, pp.straightSnapDir, true);
    }

straightSnapDir

vector i.e. [Point](#_Point)

read only

So that a script can tell if there is a straight snap currently active. This makes it possible to do a "direction lock" shortcut key:  

    var pp = moi.ui.getActivePointPicker();
    if (pp && pp.hasStraightSnap) {
        pp.restrictToLinePtDir(pp.basePt, pp.straightSnapDir, true);
    }

hasRelocatedBasePt

boolean

read only

inMouseDown

boolean

read only

inMouseUp

boolean

read only

onlyUseSnapFunc

boolean

orientedptframe

[CoordinateFrame](#_CoordinateFrame)

read only

param

float

read only

pt

[PickedPoint](#_PickedPoint)

read only

Specifies a [PickedPoint](#_PickedPoint) object representing the most recent point a user has interactively picked using the [PointPicker](#_PointPicker) object. If the user has not yet picked a point, the value is _null_.

ptframe

[CoordinateFrame](#_CoordinateFrame)

read only

relocatedBasePt

[Point](#_Point)

read only

resetOnMouseLeave

boolean

screenpt

read only?

2d mouse coordinates

shiftDown

boolean

read only

Specifies whether or not the user is currently pressing the **Shift** key. If _true_, the user is pressing the **Shift** key. If _false_, they are not.

stickToSurfacesMode

string

The first pick on a surface to use a plane aligned with the surface normal - that's why you can draw a circle onto the side of a box in the 3D view for example, or onto a sphere with the first pick defining the plane as being tangent to the sphere at that point. Example:

`pointpicker.stickToSurfacesMode = 'max';`

  

**Methods**

Name

Result

Arguments

bindBasePt

_object_ target

Binds the point referenced by _target_ to the PickingObject for use as the _base_ point for various types of snapping behavior. Refer to the description of the **basept** property for more details.

Note that this is different than the **setBasePt** method. The value for _target_ should be a [GeometryFactoryInput](#_GeometryFactoryInput) object, as returned by the **getInput** method of a [GeometryFactory](#_GeometryFactory) object, ands allows the [PointPicker](#_PointPicker) **basePt** value to be bound to the same [Point](#_Point) object obtained from the [GeometryFactory](#_GeometryFactory) object.

bindFunc

_object_ target,  
_string_ funcName = **""**

bindFuncPostUpdate

_object_ target,  
_string_ funcName = **""**

bindResultCPlane

_object_ target

bindResultFrame

_object_ target

bindResultOrientation

_object_ target

bindResultPt

_object_ target

clearBasePt

clearBindings

Clears (i.e. _removes_) any bindings created by calling any of the **bindBasePt**, **bindFunc**, **bindFuncPostUpdate**, **bindResultCPlane**, **bindResultFrame**, **bindResultOrientation** or **bindResultPt** methods.

recalc

.recalc() requested here [http://moi3d.com/forum/index.php?webtag=MOI&msg=8665.221](http://moi3d.com/forum/index.php?webtag=MOI&msg=8665.221)

reset

Resets the [PointPicker](#_PointPicker) object back to its initial state.

restrictToLinePtDir

_[Point](#_Point)_ basePt,  
_[Point](#_Point)_ dir,  
_boolean_ projectAll

Restrict the user to only selecting points along the line defined by startPt and the vector _dir_. If _projectAll_ is _true_, the user can select any point along the infinite line that goes through startPt in the direction specified by _dir_. If _projectAll_ is _false_, the user can only select points along the line segment between startPt and startPt + _dir_.

restrictToLinePtPt

_[Point](#_Point)_ startPt,  
_[Point](#_Point)_ endpt,  
_boolean_ projectAll

Restrict the user to only selecting points along the line defined by _startPt_ and endPt. If _projectAll_ is _true_, the user can select any point along the infinite line that goes through _startPt_ and endPt. If _projectAll_ is _false_, the user can only select points along the line segment between _startPt_ and endPt.

restrictToObject

_[GeomObject](#_GeomObject)_ obj

Restrict the user to only selecting points on the geometric object specified by _obj_.

restrictToPlane

_[CoordinateFrame](#_CoordinateFrame)_ plane,  
_boolean_ projectAll

restrictToPlaneThroughPt

_[Point](#_Point)_ point,  
_boolean_ projectAll

makes this point on a parallel plane to the view but going through the fist picked point. Example:

`pointpicker.restrictToPlaneThroughPt( pointpicker.pt, false );`

clearRestriction

setAngleConstraint

_float_ angleDegrees

setBasePt

_[Point](#_Point)_ point

Sets the current _base point_ for the [PointPicker](#_PointPicker) to the [Point](#_Point) specified by _point_. Refer to the **basept** property description for more information on how the base _point_ is used.

setDistanceConstraint

_float_ distance

setPt

_[Point](#_Point)_ point

Sets the picked _point_ to _point_.

setRadialIntersection

_[CoordinateFrame](#_CoordinateFrame)_ frame,  
_[Point](#_Point)_ point

setX

_float_ x

setY

_float_ y

setZ

_float_ z

addSnapFunc

_object_ pdispFunc,  
_string_ funcName = **""**

The snap function is a script function that takes a pointpicker as an argument, like:

`function snapFunc(pointpicker) { ... }`

You enable the snap function on the pointpicker by calling:

`pointpicker.addSnapFunc( snapFunc );`

The pointpicker will then call the snap function at the beginning of the pointpick calculation and if the snap function has provided a snap point by calling

`pointpicker.setSnapFuncPoint(pt_xyz, 'label');`

then it will use that snap point. You can also set

`pointpicker.onlyUseSnapFunc = true;`

so that it won't fall back to a regular point pick if there is no snap point provided. Use hitTestSnapPoints to determine which point is closest to the mouse.

addSnapPoint

_[Point](#_Point)_ point,  
_string_ textLabel

addSnapPostFunc

_object_ pdispFunc,  
_string_ funcName = **""**

clearCurrentSnaps

clearSnapFuncPoint

clearSnapFuncs

clearSnapPoints

addStraightSnapAngle

_float_ angleInDegrees,  
_string_ label

clearStraightSnapAngles

disableStraightSnapAngle

_float_ angleInDegrees

hitTestSnapPoints

int

_array_ of [Points](#_Point)

Takes array of xyz point objects, returns index of one closest to the mouse and within object snap radius or -1 if none found. Helper function for implementing custom snap function as described here: [http://moi3d.com/forum/index.php?webtag=MOI&msg=10917.2](http://moi3d.com/forum/index.php?webtag=MOI&msg=10917.2)

setSnapFuncPoint

_[Point](#_Point)_ point,  
_string_ textLabel

[PointStreamPicker](#toc) ( [WaitableObject](#_WaitableObject) )
----------------------------------------------------------------

Items of this class represent a user interface element that allows the user to generate a sequence of points freehand simply by dragging the mouse or pen.

* * *

**References:** [UI](#_UI)(1)

**Properties**

Name

Type

Notes

numPoints

int

read only

Specifies the number of points the user has generated by dragging the mouse or pen.

screenTol

float

Allows behavior to be modified from the default 5 pixels that the mouse has to travel before generating a new point for Sketch curve. Can set pointstreampicker.screenTol = 0.0 to take all points regardless of distance from previous point, or something like pointstreampicker.screenTol = 30.0; to make it sparser.

  

**Methods**

Name

Result

Arguments

bind

_object_ pdispBind

clearBindings

Clears (i.e. _removes_) all bindings previously set up using the **bind** method.

disableGridSnap

boolean

getPoint

[Point](#_Point)

_int_ whichPoint

Returns the [Point](#_Point) object at index _whichPoint_ within the user generated sequence of points. The value of _whichPoint_ must be in the range from _0_ to **numPoints** _\- 1_.

getPoint2D

[Point2D](#_Point2D)

_int_ whichPoint

Returns the [Point2D](#_Point2D) object at index _whichPoint_ within the user generated sequence of points. The value of _whichPoint_ must be in the range from _0_ to **numPoints** _\- 1_.

[PointTextInput](#toc) ( [TextInput](#_TextInput) )
---------------------------------------------------

Items of this class represent a user interface control that allows the user to type in the location of a point in 3D space.

**Properties**

Name

Type

Notes

pointValue

[Point](#_Point)

Specifies the current [Point](#_Point) value of the control, either as entered by the user or set by the application.

[PropertiesPanel](#toc)
-----------------------

The single instance of this class describes the characteristics of the current set of selected objects that are displayed in the **MoI** properties panel. Access to this object can be obtained using the expression: _moi.ui.propertiesPanel_.

**Properties**

Name

Type

Notes

hasLength

boolean

read only

Specifies whether or not the current selection has a displayable length value. If _true_, the selection has a displayable length. If _false_, it does not.

hasRadius

boolean

read only

Specifies whether or not the current selection has a displayable radius value. If _true_, the selection has a displayable radius. If _false_, it does not.

highAccuracyBoundingBox

[BoundingBox](#_BoundingBox)

read only

Specifies a [BoundingBox](#_BoundingBox) that encompasses all objects in the current selection. This value is more accurate than the value of **quickBoundingBox**, but takes longer to compute. Use it in cases where accuracy matters more than speed.

keepVisible

boolean

Specifies whether or not the properties panel should be visible all of the time, or only when a command is not active. If _true_, then the properties panel is visible all the time. If _false_, then the properties panel is only visible when a command is not currently in progress.

length

float

read only

Specifies the length of the current selection in cases where the **hasLength** property is _true_.

name

string

read only

Specifies the name assigned to all objects in the current selection (if any).

isUnnamed

boolean

read only?

nameVaries

boolean

read only?

numSelectedObjects

int

read only

Specifies the number of geometric objects in the current selection.

numSelectedPoints

int

read only

Specifies the number of points in the current selection.

objectType

string

read only

Specifies a string describing the current set of selected objects. If no objects are selected, the value is the empty string. For example, if a line is selected, the value is _Curve_. If a sphere is selected, the value is _Solid_. If both a line and a sphere are selected, the value is _2 Objects_.

quickBoundingBox

[BoundingBox](#_BoundingBox)

read only

Specifies a [BoundingBox](#_BoundingBox) that encompasses all objects in the current selection. This value may be less accurate the the value of **highAccuracyBoundingBox**, but is faster to compute. Use it in cases where speed is more important than accuracy.

radius

float

read only

Specifies the radius of the current selection in cases where the **hasRadius** property is _true_.

show

boolean

read only

showMaintainProportions

boolean

read only

styleHexColor

string

read only

Returns the style color assigned to all of the objects in the current selection as a hexadecimal string of the form: **#RRGGBB** in the case when the **styleVaries** property is _false_, _#FFFFFF_ in the case when the _styleVaries_ property is _true_ and the selection is not empty, and _#000000_ in the case where no object is selected.

_RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value.

styleIndex

int

read only

Specifies the index of the [ObjectStyle](#_ObjectStyle) object within the application's _Styles_ list that is assigned to all objects in the current selection in the case when the **styleVaries** property is _false_, and 0 in the case when the **styleVaries** property is _true_ or no objects are currently selected.

styleName

string

read only

Specifies the name of the style used by all of the objects in the current selection in the case when the **styleVaries** property is _false_, _Various styles_ in the when the **styleVaries** property is _true_, and _Default style_ in the case where no objects are selected.

styleVaries

boolean

read only

Specifies whether or not all objects in the current selection have the same style. If _true_, the objects do not all have the same style. If _false_, all of the selected objects have the same style.

useDiameter

boolean

Specifies whether to display the radius or diameter of objects having such a property. If _true_, the diameter of the object is used. If _false_, the radius of the object is used.

  

**Methods**

Name

Result

Arguments

setAnnotationProp

_string_ property name  
property value

changes the specified property of all _selected_ annotations while also triggering creation of an undo unit so that the property change is undoable. See ObjectPropertiesDialog.htm

setAnnotationText

_string_

Sets all selected annotation text to the new string.

  

An undo unit is only created if focus on the text entry field and then the text entry field losing focus are simulated:

    
    moi.ui.propertiesPanel.annotationTextFocus();
    moi.ui.propertiesPanel.setAnnotationText( 'hello' );
    moi.ui.propertiesPanel.annotationTextBlur();
    

annotationTextFocus

annotationTextBlur

setAnnotationFont

calcSurfaceArea

float

calcCurveLength

float

calcSolidVolume

float

detailedFilterClicked

_string_ ids,  
_boolean_

_ids_ can be a single object id string or several ids delimited by semicolons.

getDetailedProperties

editName

Displays a pop-up dialog that prompts the user to enter a name to assign to all of the currently selected objects.

editSize

_string_ which,  
_string_ newValue,  
_boolean_ varUniform

editParentStyleIndex

editStyleIndex

_int_ newIndex

Assigns the [ObjectStyle](#_ObjectStyle) whose index in the application's _Style_ list is specified by styleIndex as the style for all of the currently selected objects.

registerCallback

_object_ updatePanelFunc

Specifies a function, _updatePanelFunc_, that should be called whenever any changes to the contents of the object occur that should be reflected in the properties panel.

removeUserText

Key

changeUserText

OldKey,  
Key,  
Command

setUserText

OldKey,  
Key,  
Command

[PropertyBinder](#toc)
----------------------

**Methods**

Name

Result

Arguments

bind

_object_ pdispTarget,  
_string_ targetProperty,  
_object_ pdispSource,  
_string_ sourceProperty,  
_boolean_ twoWay

[SceneBrowser](#toc)
--------------------

Access to this object can be obtained using the expression: _moi.ui.sceneBrowser_

* * *

**References:** [UI](#_UI)

**Properties**

Name

Type

Notes

rootItems

[List](#_List)

read only

sceneBrowser.rootItems - list of all root scene browser items. It is possible to make a startup script that expands sections on program startup. To do that put the following in a .js file in your Moi appdata startup folder:  

    var items = moi.ui.sceneBrowser.rootItems;
    for (var i = 0; i < items.length; ++i ){
        items[i].expanded = true;
    }

objects

root item

read only

sceneBrowser.objects - root scene browser item for objects section

types

root item

read only

sceneBrowser.types - root scene browser item for types section

styles

root item

read only

sceneBrowser.styles - root scene browser item for styles section

[SceneBrowserItem](#toc)
------------------------

* * *

**References:** [SceneBrowser](#_SceneBrowser)

  

**Properties**

Name

Type

Notes

name

read only?

item.name

expandable

boolean?

read only?

item.expandable

expanded

boolean?

read only?

item.expanded

parent

read only?

item.parent

children

List?

read only?

item.children

  

**Methods**

Name

Result

Arguments

alterStatus

_string_ mode = **'show'**,  
_boolean_ rightclick = **true**

item.alterStatus( 'show', true ); - alter the status area of an item, that's the one with the eye icon. Mode can be one of 'show','hide','lock','unlock'. Default if not given is 'show'. Optional boolean parameter for rightclick will make it behave like a right mouse button click.

select

_string_ mode = **'toggle'**,  
_boolean_ rightclick = **true?**

item.select( mode, rightclick ) - alter the selection dot of an item. Mode can be one of 'toggle','select','deselect','filteron','filteroff'. Default if not given is 'toggle'. Optional boolean parameter for rightclick will make it behave like a right mouse button click. Here's an example that toggles the selection dot for the Blue item under styles:  
`moi.ui.scenebrowser.styles.find('Blue').select('toggle');`

find

item

_string_ name

item.find('name') - will search all children recursively and return an item with that name or null if none present

[Selection](#toc)
-----------------

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

clearSelectionFilters

multipleSelectMode

  

**Methods**

Name

Result

Arguments

anySelectionFilter

boolean

_string_ category

isFilterActive

boolean

_string_ category  
variantObject  

passesSelectionFilter

boolean

[GeomObject](#_GeomObject)

setFilter

boolean

_string_ one of 'Objects', 'Types', or 'Styles'  
_string_ subcategory e.g. 'Solids' or 'Edges'  
_boolean_

Turn on selection filter for Types > Curves:  
`moi.selection.setFilter( 'Types', 'Curves', true );`

[Settings](#toc)
----------------

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

igesJoinOnImport

boolean

lwoScaleToMeters

boolean

lwoVertexNormalsStyle

string

meshExportCombineSameNamedObjects

boolean

objExportOrientation

string

objExportScaleFactor

float

objExportWriteMaterialAssignments

boolean

objExportWriteMtlFile

boolean

stlExportFileType

string

  

**Methods**

Name

Result

Arguments

editIniFile

getIniPath

string

getIniValue

string

_string_ section  
_string_ key

return an ini value or return **null** if not present.

  
`moi.settings.getIniValue( 'Section name', 'Key name')`

writeIniFile

flush the in-memory contents of moi.ini out to disk

restoreDefaults

_string_ whichGroup = **""**

[StateButton](#toc) ( [UIControl](#_UIControl) )
------------------------------------------------

**Properties**

Name

Type

Notes

value

boolean

[TabButton](#toc) ( [UIControl](#_UIControl) )
----------------------------------------------

**Properties**

Name

Type

Notes

active

boolean

[TabContainer](#toc)
--------------------

**Properties**

Name

Type

Notes

activeTab

string

previousActiveTab

string

read only

[Text](#toc)
------------

The items of this class represent text labels that appear in the **MoI** user interface that are subject to internationalization (i.e. language translation).

**Properties**

Name

Type

Notes

textid

string

Specifies the id to look up in the appropriate user locale language file. The text string associated with the id in the language file is displayed as the contents of the control.

[TextInput](#toc)
-----------------

**References:** [IntegerTextInput\*](#_IntegerTextInput)(1), [NumericTextInput\*](#_NumericTextInput)(1), [PointTextInput\*](#_PointTextInput)(1), [UnsignedIntegerTextInput\*](#_UnsignedIntegerTextInput)(1)

**Properties**

Name

Type

Notes

decimalPoint

string

read only

  

**Methods**

Name

Result

Arguments

activateFlyout

activateInline

onInput

_string_ text

[Theme](#toc)
-------------

Items of this class represent a user interface color theme

**Properties**

Name

Type

Notes

  

**Methods**

Name

Result

Arguments

[UI](#toc)
----------

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

browserPosition

string

Specifies the position of the _Scene Browser_ within the **MoI** main application window. The possible values are:

*   **Inside**: At the bottom of the main toolbar panel on the left or right.
*   **Adjacent**: Adjacent to the main toolbar panel in its own separate area.
*   **Opposite**: On the opposite side of the **MoI** main application window from the main toolbar panel.

commandBar

[commandBarWindow](#_commandBarWindow)

.CommandBarCustomUI property allows adding buttons to the command bar like this:

  

    
    var container = moi.ui.commandBar.CommandBarCustomUI;
    container.insertAdjacentHTML('beforeEnd', '<moi:CommandButton>Test1</moi:CommandButton>');
    

commandDialog

[CommandUIContainer](#_CommandUIContainer)

read only

Specifies the currently active [CommandUIContainer](#_CommandUIContainer) object, or _null_ if no command is currently active.

commandUI

object

read only

Provides access to .htm so long as there is only one <moi:CommandUIContainer> element set up in the .htm

  

commandUI is a way for a script to access the global object of the loaded .htm file. For example, doing moi.ui.commandUI.alert() means that the .js looks for a function alert() in the corresponding .htm file. This can be used to access custom functions in the .htm as well as built-in things like:

*   moi.ui.commandUI.performance.now()
*   moi.ui.commandUI.setTimeout(function, milliseconds)

Failure will result if no .htm file exists or if MoI hasn't been restarted since the .htm was created.

fontName

string

Specifies the name of the font used by the **MoI** user interface.

fontSize

float

Specifies the size, in points, of the font used by the **MoI** user interface.

fractionalDisplayPrecision

int

language

string

Specifies the language used for text appearing in the _MoI_ user interface. The possible values for this are:

*   Dutch
*   English
*   French
*   German
*   Italian
*   Spanish

Specifying a value not in this list will have no effect on the user interface.

mainWindow

[Window](#_Window)

read only

Specifies the [Window](#_Window) object for the main **MoI** application window.

maxNumRecentFiles

int

Specifies the maximum number of recently edited files that the **MoI** application will keep track of. The list of recently edited files can be obtained by calling the **getRecentFiles** method. If the number of edited files exceeds the value of this property, the least recently edited files are discarded from the list as necessary.

maximizeToFullScreen

boolean

numDecimalPlaces

int

propertiesPanel

object

read only

Contains a reference to the [PropertiesPanel](#_PropertiesPanel) object, which provides access to information about the properties of the currently selected geometric objects.

showBrowserPane

boolean

Specifies whether the _Scene Browser_ panel is visible or not. If _true_, the _Scene Browser_ is visible. If _false_, the _Scene Browser_ is hidden, except if **browserPosition** is _Inside_, in which case the Scene Browser is always visible.

showTrailingZeros

boolean

showViewportDisplayTime

boolean

Specifies whether or not the time, in milliseconds, it takes to refresh the contents of an editing viewport should be displayed in the top-left hand corner of each editing viewport. If _true_, the viewport refresh time is displayed. If _false_, it is not.

sidePane

string

sidePanePosition

string

Specifies on which side of the main **MoI** application window the panel containing all of the editing tools and status views should be displayed. The possible values are:

*   Left
*   Right

Specifying a value not in this list will generate an exception.

systemDPI

getAvailableThemes

createTheme

getThemeColor

setThemeColor

getThemeInt

setThemeInt

getThemeDouble

setThemeDouble

  

**Methods**

Name

Result

Arguments

alert

_string_ text,  
_string_ title = **""**

fires alert window

beginUIUpdate

Prevents display updates while changes are being made to the user interface. Call this method before beginning a series of changes to the user interface to prevent the user from seeing partial updates of the display. Once all user interface changes are complete, call the **endUIUpdate** method to allow the user interface to update and reflect all of the changes that were made.

bindPropertyChangeFunc

_object_ object,  
_string_ propName,  
_object_ func

bindUIToInput

_string_ uIElementId,  
_string_ uIElementProperty,  
_[GeometryFactoryInput](#_GeometryFactoryInput)_ input

clearCommandUI

clearPickedPoints

Discards all points that have been picked using the currently active [PointPicker](#_PointPicker) object.

compactCommandPalettes

createBackgroundImageEditor

[WaitableObject](#_WaitableObject)

createDialog

[WaitableWindow](#_WaitableWindow)

_string_ [URL](#_URL),  
_string_ options = **""**,  
_object_ parentWindow = **NULL**

Creates a new application window or dialog and returns a [WaitableWindow](#_WaitableWindow) object representing the new window. The content of the new window or dialog is specified by [URL](#_URL), which should be a URL referring to a file containing, or linking to, the HTML, CSS and Javascript code needed to implement the new window's functionality.

The optional _options_ string contains a comma separated list of additional window features to be applied when creating the window. The available features are:

*   **resizable**: Allow the user to resize the window.
*   **defaultWidth:n**: Make the default width of the window _n_ pixels.
*   **defaultHeight:n**: Make the default height of the window _n_ pixels.

The optional _parentWindow_ argument specifies the parent window for the new window or dialog, and defaults to the main **MoI** application window.

    
    var dialog = moi.ui.createDialog( 'moi://commands/AssignNameDialog.htm', 'resizeable,defaultWidth:300,defaultHeight:520' );
    
    var result = dialog.window.doModal();
    if ( result == -1 ) // Canceled
        return;
    

createObjectPicker

[ObjectPicker](#_ObjectPicker)

Creates and returns a new [ObjectPicker](#_ObjectPicker) object, which can be used to allow the user to pick geometric objects in the current scene while in the process of executing a command. For example, an [ObjectPicker](#_ObjectPicker) object is used by the various _boolean_ commands to allow the user to pick the geometric objects to be booleaned together.

createOrientationEditor

[WaitableObject](#_WaitableObject)

_[ObjectList](#_ObjectList)_ curves,  
_[GeometryFactory](#_GeometryFactory)_ factory,  
_int_ whichInput

createOrientationPicker

[WaitableObject](#_WaitableObject)

createPointPicker

[PointPicker](#_PointPicker)

Creates and returns a new [PointPicker](#_PointPicker) object, which can be used to allow the user to pick geometry points while in the process of executing a command. For example, a [PointPicker](#_PointPicker) object is used by the **Line** command to allow the user to pick the two endpoints of the line being created.

createPointStreamPicker

[PointStreamPicker](#_PointStreamPicker)

Creates and returns a new [PointStreamPicker](#_PointStreamPicker) object, which can be used to allow the user to generate a sequence (i.e. a stream) of points while dragging the mouse in the process of executing a command. For example, a [PointStreamPicker](#_PointStreamPicker) object is used by the **SketchCurve** command to allow the user to generate a stream of points along the path the user traces out with the mouse or tablet pen.

endUIUpdate

Enables updates to the user interface and causes the user interface to be refreshed if any changes were made while user interface updates were disabled. This method is used in conjunction with the **beginUIUpdate** method to prevent partial updates to the display from occuring while a series of user interface changes are being performed.

findElement

element

_string_ id

moi.ui.findElement( 'id' ) - looks through all UIPanels for any element with the given id. Returns the element or null if not found.

fireUIEvent

_string_ event

The event is available to both .js and .htm, and so can be used to pass information from .htm to .js. For example, a command can be closed either with moi.command.cancel() or with moi.ui.fireUIEvent( 'done' ). The event is available at moi.ui.commandDialog.event

formatCoordinate

string

_float_ coordinate,  
_int_ precision = **\-1**

Returns a string containing the specified _coordinate_ value formatted to the number of decimal places specified by _precision_. If _precision_ is omitted or _\-1_, formatting is done using the default value of two decimal places.

formatFeetInches

string

_float_ coordinate,  
_int_ fractionalPrecision = **\-1**

Returns a string containing the specified _coordinate_ value formatted in feet and inches (e.g. _6' 8")_.

The precision of the result in terms of fractions of an inch is controlled by the value of _fractionalPrecision_, which defines the largest denominator that can be used in the fractional part expressed as a power of 2. For example, a value of _4_ for _fractionalPrecision_ means that the largest fractional denominator that could be used is _1/16"_, since _2^4 = 16_.

If _fractionalPrecision_ is omitted or _\-1_, then default formatting is used, which includes no fractional inches, but adds a trailing ? character if the specified _coordinate_ is not an exact multiple of an inch.

formatNumber

string

_float_ number,  
_int_ numDecimalPlaces = **\-1**

Returns a string containing the specified _number_ value formatted to the _number_ of decimal places specified by _numDecimalPlaces_. If _numDecimalPlaces_ is omitted or _\-1_, formatting is done using the default value of two decimal places.

formatString

string

_string_ idTemplate  
_string_ arg1  
_string_ arg2  
_string_ arg3  
_string_ arg4

getActivePointPicker

[PointPicker](#_PointPicker)

Returns the currently active [PointPicker](#_PointPicker) object, or _null_ if no [PointPicker](#_PointPicker) is currently active.

getActiveViewport

[Viewport](#_Viewport)

Returns the [Viewport](#_Viewport) object for the currently _active_ editing viewport. The active viewport is either:

*   The editing viewport the mouse cursor is in
*   The last editing viewport the user clicked in if the mouse cursor is not currently in an editing viewport.

getAvailableLanguages

[List](#_List)

Returns a [List](#_List) object containing the list of languages currently supported by the _MoI_ user interface. The items in the list are the names of the supported languages (e.g. _Dutch)_.

getLastClickedViewport

[Viewport](#_Viewport)

Returns the [Viewport](#_Viewport) object for the editing viewport the user last clicked in.

getLastOrientationPickerFrame

[CoordinateFrame](#_CoordinateFrame)

returns the coordinate frame that was picked with the last OrientationPicker

getLastPickedPoint

[Point](#_Point)

getRecentFiles

[List](#_List)

getScreenRect

object

element

moi.ui.getScreenRect( element ) will give the screen coordinates of the given element or UIPanel. Returns an object with .left, .top, .right, .bottom, .width, and .height properties  
Example - increase the Options dialog width by 10 pixels:  
  

    
        var uipanel = moi.ui.getUIPanel('moi://ui/options.htm');
        if (uipanel) {
            var dlg = uipanel.moiWindow;
            var pos = dlg.getSize(); pos.width += 10; dlg.resize(pos);
        }
    

  
  
Example - position the Options dialog to the right of the side pane:  
  

    
        var options = moi.ui.getUIPanel('moi://ui/options.htm');
        if (options) {
            var rc = moi.ui.getScreenRect(moi.ui.sidePane);
            options.moiWindow.move(rc.right, rc.top);
        }
    

getTemplatedText

string

_string_ id  
_string_ arg1  
_string_ arg2  
_string_ arg3  
_string_ arg4

getText

string

_string_ id

Returns the translation of the user interface string identified by _id_ using the current language translation file, or the empty string if no match for _id_ is found in the file.

htmlEntities

string

getUIPanel

object

_string_ [URL](#_URL)

getUIPanels

[List](#_List)

getViewportUnderMouse

[Viewport](#_Viewport)

Returns the [Viewport](#_Viewport) object for the editing viewport the mouse cursor is currently in. If the mouse cursor is not inside an editing viewport, _null_ is returned.

hideUI

_string_ idToHide

Hides the HTML user interface element specified by _idToHide_, which should be the value of an _id_ attribute for some HTML tag currently visible in the user interface. For example, the HTML content:

...

could be hidden by calling _moi.ui.hideUI("myView")_.

loadCommandUI

_string_ [URL](#_URL)

redrawViewports

Forces the contents of all editing viewports to be redrawn immediately.

reloadPanels

removeLastPickedPoint

resetVisualStyles

showMenu

[WaitableWindow](#_WaitableWindow)

_string_ [URL](#_URL),  
_object_ parentElement,  
_int_ launchSide,  
_int_ launchDir

showUI

_string_ idToShow

Shows the HTML user interface element specified by _idToShow_, which should be the value of an _id_ attribute for some HTML tag currently hidden in the user interface. For example, the HTML content:

...

could be made visible by calling _moi.ui.showUI("myView2")_.

updateBrowser

UpdateViewTab

TabButton

Call a function UpdateViewTab( TabButton ) in the UI when a view tab has been reversed, so that it is possible to implement custom UI like having images there instead of text. Requested on the forum by Tim Whiteman here: [http://moi3d.com/forum/index.php?webtag=MOI&msg=9821.1](http://moi3d.com/forum/index.php?webtag=MOI&msg=9821.1)

[UIControl](#toc)
-----------------

This is a partially abstract base class from which the various **MoI** user interface controls are derived.

* * *

**References:** [ColorButton\*](#_ColorButton)(1), [CommandButton\*](#_CommandButton)(1), [MenuItem\*](#_MenuItem)(1), [StateButton\*](#_StateButton)(1), [TabButton\*](#_TabButton)(1), [UIProgressBar\*](#_UIProgressBar)(1), [UIRangeControl\*](#_UIRangeControl)(1)

**Properties**

Name

Type

Notes

disabled

boolean

Specifies whether the control is enabled or disabled. If _true_, the control is disabled. If _false_, the control is enabled.

  

**Methods**

Name

Result

Arguments

bind

_object_ pdispTarget,  
_string_ targetProperty,  
_object_ pdispSource,  
_string_ sourceProperty,  
_boolean_ twoWay

getControl

object

getMoi

[Moi](#_Moi)

Returns the top-level [Moi](#_Moi) object, which provides access to all of the other **MoI** application objects.

registerEvents

[UIProgressBar](#toc) ( [UIControl](#_UIControl) )
--------------------------------------------------

**Properties**

Name

Type

Notes

value

any

[UIRangeControl](#toc) ( [UIControl](#_UIControl) )
---------------------------------------------------

**Properties**

Name

Type

Notes

value

any

[UnsignedIntegerTextInput](#toc) ( [TextInput](#_TextInput) )
-------------------------------------------------------------

Items of this class represent a user interface control that allows the user to type unsigned integer values.

**Properties**

Name

Type

Notes

integerValue

int

Specifies the current unsigned integer value of the control, either as entered by the user or set by the application.

[VectorMath](#toc)
------------------

The single instance of this class provides access to a set of useful vector math related methods. Access to this object is obtained using the expression _moi.vectorMath_.

* * *

**References:** [Moi](#_Moi)(1)

**Methods**

Name

Result

Arguments

add

object

_object_ pointA,  
_object_ pointB

Returns a new [Point](#_Point) object containing the vector sum of the two [Point](#_Point) objects _pointA_ and _pointB_.

average

object

_object_ pointA,  
_object_ pointB

Returns a new [Point](#_Point) object containing the vector average of the two [Point](#_Point) objects _pointA_ and _pointB_.

createBoundingBox

[BoundingBox](#_BoundingBox)

createFrame

[CoordinateFrame](#_CoordinateFrame)

_[Point](#_Point)_ origin = **NULL**,  
_[Point](#_Point)_ xAxis = **NULL**,  
_[Point](#_Point)_ yAxis = **NULL**

Creates and returns a new [CoordinateFrame](#_CoordinateFrame) object whose _origin_ is at _origin_, whose x axis is defined by _xAxis_, and whose _yAxis_ is defined by _yAxis_.

If _origin_, _xAxis_ and _yAxis_ are omitted, it defaults to creating a copy of the world space coordinate system.

createFrontFrame

[CoordinateFrame](#_CoordinateFrame)

Creates and returns a [CoordinateFrame](#_CoordinateFrame) object equivalent to the world coordinate system as seen from the _Front_ editing viewport. That is, with the positive x and z axes pointing to the right and up, respectively, and the y axis pointing out of the screen.

createRightFrame

[CoordinateFrame](#_CoordinateFrame)

Creates and returns a [CoordinateFrame](#_CoordinateFrame) object equivalent to the world coordinate system as seen from the _Right_ editing viewport. That is, with the positive y and z axes pointing to the right and up, respectively, and the x axis pointing out of the screen.

createTopFrame

[CoordinateFrame](#_CoordinateFrame)

Creates and returns a [CoordinateFrame](#_CoordinateFrame) object equivalent to the world coordinate system as seen from the _Top_ editing viewport. That is, with the positive x and y axes pointing to the right and up, respectively, and the z axis pointing out of the screen.

distance

float

_object_ pointA,  
_object_ pointB

Returns the distance between the two [Points](#_Point) specified by _pointA_ and _pointB_. Best practice is to use a fraction of the object's bounding box diagonal as a tolerance, rather than an absolute tolerance, when using this function as a comparator.

createPoint

[Point](#_Point)

_float_ x = **0.0**,  
_float_ y = **0.0**,  
_float_ z = **0.0**

Creates and returns a new [Point](#_Point) object whose coordinates are specified by _x_, _y_ and _z_. If any of the _x_, _y_ and _z_ values are omitted, they default to _0_.

pointsAreEqual

boolean

_object_ pointA,  
_object_ pointB

Returns _true_ if _pointA_ and _pointB_ represent the same point in space. Returns _false_ if the points are not the same. Generally safer to use pointsWithinTolerance since pointsAreEqual can return false unexpectedly.

pointsWithinTolerance

boolean

_object_ pointA,  
_object_ pointB

Returns _true_ if _pointA_ and _pointB_ are separated by a distance of less than of 1.0e-12. Use moi.vectorMath.distance(a, b) for looser checks.

makeVector

vector i.e. [Point](#_Point)

_[Point](#_Point)_ A,  
_[Point](#_Point)_ B

Creates a vector pointing from A to B. In other words, the created point represents the arrowhead of a vector that originates at the world origin. Length of vector is equal to distance between A and B.

[View](#toc)
------------

**References:** [Moi](#_Moi)(1)

**Properties**

Name

Type

Notes

allow3DRotationTilt

boolean

allowRotationTilt3dx

boolean

axisLabels

string

backgroundImageDrawOrder

string

Specifies how background images should be drawn in the editing viewports relative to the scene objects. The possible values are:

*   **Below objects**: Background images appear below all scene objects.
*   **With objects**: Background images appear as if they were scene objects.
*   **Above objects**: Background images appear above all scene objects.

backgroundImageShowIn

string

Specifies which editing viewports background images should be displayed in. The possible values are:

*   All views
*   Ortho only

backgroundImageTransparency

int

Specifies the amount of transparency to apply to each background image shown in the editing viewports. Values range from _0_ (totally opaque) to _100_ (totally transparent).

customFillLightLevel

float

curveColorMode

string

curveFixedColor

int?

customKeyLightLevel

float

edgeColorMode

string

edgeFixedColor

int

edgeDarkenFactor

int?

edgeLightenFactor

int?

fixedLightPositions

boolean

hiddenLineOpacity

int

Specifies the opacity, or alpha value, used when drawing hidden lines in the editing viewports. The range of values is from _0_ (totally transparent) to _255_ (totally opaque).

hiddenLinesSelectedOnly

boolean

hiddenLineStyle

string

Specifies the line style used to draw hidden lines in the editing viewports. The possible values are:

*   Solid
*   Dashed
*   Long Dashed

lightDirection

[Point](#_Point)

Specifies a [Point](#_Point) representing the direction vector of the light used to illuminate the editing viewports.

lightingStyle

string

lineWidth

float

Specifies the line width, in pixels, used to draw both visible and hidden lines in the editing viewports.

linkOrthoViews

boolean

Specifies whether or not the panning and zooming of the different orthographic views are linked together. If _true_, then the orthographic views are linked together. If _false_, they are not.

When the orthographic views are linked together, then the contents of the views are synchronized, and panning or zooming in one view will immediately be reflected in the other. When the views are not linked together, then each view may be panned and zoomed independently of the others.

lockedObjectsColor

int

Specifies the color used to draw the edges of locked objects in the editing viewports. The color is an integer of the form: **0xRRGGBB**, where _RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value.

lockedObjectsUseAlternateColor

boolean

Specifies whether locked objects use the **lockObjectsColor** for drawing their edges or not. If _true_, then locked objects draw their edges using the **lockObjectsColor**. If _false_, then locked objects draw their edges using the same color they would use when not locked.

meshAngle

float

meshDetailedInflections

boolean

metallicLighting

boolean

reverseRotationMultitouch

boolean

singleFingerRotationMultitouch

boolean

rotationSpeedMultitouch

boolean

panSpeedMultitouch

boolean

zoomSpeedMultitouch

boolean

rotateOrthoViewsMultitouch

boolean

swap3DRotatePanMultitouch

boolean

placeholder

boolean

panButtonSensitivity

float

Specifies the sensitivity of the editing viewport _pan_ button. The value is a multiplicative factor, with _1.0_ being the normal default value. Values between _0.0_ and less than _1.0_ will pan slower than the default, while values greater than _1.0_ will pan faster. Negative values are also allowed, which reverse the normal panning direction as well as affect the panning speed.

panSpeed3dx

float

reversePan3dx

boolean

Specifies whether or not the direction a 3DConnexion device pans in should be the reverse of the normal direction. If _true_, the normal panning direction is reversed. If _false_, the normal panning direction is used.

reversePanButton

boolean

Specifies whether or not the direction the editing viewport _pan_ button moves in should be the reverse of the normal direction. If _true_, the normal panning direction is reversed. If _false_, the normal panning direction is used.

reverseRotateButton

boolean

Specifies whether or not the direction the editing viewport _rotate_ button rotates in should be the reverse of the normal direction. If _true_, the normal rotation directions are reversed. If _false_, the normal rotation directions are used.

reverseRotateMouse

boolean

Specifies whether or not the direction the mouse drag button rotates in should be the reverse of the normal direction. If _true_, the normal rotation directions are reversed. If _false_, the normal rotation directions are used.

reverseRotation3dx

boolean

Specifies whether or not the direction a 3DConnexion device rotates in should be the reverse of the normal direction. If _true_, the normal rotation directions are reversed. If _false_, the normal rotation directions are used.

reverseScrollWheel

boolean

Specifies whether or not the effect of the scroll wheel should be reversed. If _true_, the effect of the scroll wheel is reversed. If _false_, the effect is normal.

reverseZoom3dx

boolean

Specifies whether or not the zooming direction of a 3DConnexion device is reversed. If _true_, the zooming direction of the 3DConnexion device is reversed. If _false_, the zooming direction is normal.

reverseZoomButton

boolean

Specifies whether or not the zooming direction of the editing viewport _zoom_ button is reversed. If _true_, the zooming effect of the _zoom_ button is reversed. If _false_, the zooming effect is normal.

rotateButtonSensitivity

float

Specifies the sensitivity of the editing viewport _rotate_ button. The value is a multiplicative factor, with _1.0_ being the normal default value. Values between _0.0_ and less than _1.0_ will rotate slower than the default, while values greater than _1.0_ will rotate faster. Negative values are also allowed, which reverse the normal rotation direction as well as affect the rotation speed.

rotateMiddleButton

boolean

Specifies whther the middle mouse button is used for panning or rotating in the 3D view. If _true_, the middle mouse button rotates, and the right mouse button pans. If _false_, the middle mouse button pans, and the right mouse button rotates.

rotationSpeed3dx

float

rotationStyle

string

Specifies the style of rotation to use with the mouse or table pen. The possible values are:

shadeMode

string

*   'Shaded'
*   'HiddenLineWireframe' : for drawing hidden lines with no shading [http://moi3d.com/forum/index.php?webtag=MOI&msg=1049.28](http://moi3d.com/forum/index.php?webtag=MOI&msg=1049.28)

showAxisIcon

boolean

Specifies whether the axis icon should be shown in the lower left hand corner of each editing viewport or not. If _true_, then the axis icon is shown. If _false_, then the axis icon is not shown.

The axis icon shows the orientation of the _x_, _y_ and _z_ axes within the viewport.

showEditFrame

boolean

Specifies whether or not the scaling and rotation _edit frame_ is drawn around the currently selected objects in the orthographic viewports. If _true_, the edit frame is displayed. If _false_, the edit frame is not displayed.

showHiddenLines

boolean

Specifies whether or not hidden lines are displayed in the editing viewports. If _true_, hidden lines are displayed in the editing viewports. If _false_, they are not.

showViewControls

boolean

Specifies whether or not the _zoom_, _pan_ and _rotate_ buttons should be displayed in each editing viewport. If _true_, the view controls are displayed. If _false_, the view controls are not displayed.

showViewTitles

boolean

specularBrightness

float

specularFocusSize

float

specularHighlights

boolean

surfaceColorMode

string

surfaceFixedColor

int

swapPanZoom3dx

boolean

swapTwistTilt3dx

boolean

useThinAntiAliasing

boolean

viewportBackgroundColor

int

Specifies the color used to draw the background of each editing viewport. The color is an integer of the form: **0xRRGGBB**, where _RR_ is the _red_ channel value, _GG_ is the _green_ channel value, and _BB_ is the _blue_ channel value.

zoomButtonSensitivity

float

Specifies the sensitivity of the editing viewport _zoom_ button. The value is a multiplicative factor, with _1.0_ being the normal default value. Values between _0.0_ and less than _1.0_ will zoom slower than the default, while values greater than _1.0_ will zoom faster. Negative values are also allowed, which reverse the normal zoom direction as well as affect the zoom speed.

zoomSpeed3dx

float

  

**Methods**

Name

Result

Arguments

getBackgroundImages

[List](#_List)

Returns a [List](#_List) object containing all current background images.

getCPlane

[CoordinateFrame](#_CoordinateFrame)

Returns the [CoordinateFrame](#_CoordinateFrame) object representing the current construction plane being used.

resetAll

resetCPlane

Resets the construction plane back to the system default, with the origin at the world space origin, and the x and y axes lined up with the world space x and y axes.

screenshot

[Image](#_Image)

_string_ area,  
_boolean_ includeCursor

Creates and returns an [Image](#_Image) object containing a screen shot of the editing viewport specified by _area_. The possible values for _area_ are:

*   3d
*   top
*   front
*   right

If the value of _includeCursor_ is _true_, then the mouse cursor is included in the screen shot. If it is _false_, it is not.

setCPlane

_[CoordinateFrame](#_CoordinateFrame)_ frame,  
_boolean_ applyToAllViews = **\-1**,  
_boolean_ orientOrthoViews = **\-1**

Sets the current construction plane to the [CoordinateFrame](#_CoordinateFrame) specified by _frame_. If _applyToAllViews_ is _true_, the new construction plane affects all editing viewports. If _false_, only the 3D viewport is affected.

If _applyToAllViews_ is _true_, then the value of _orientOrthoViews_ specifies how the new construction plane affects the orthographic editing viewports. If _orientOrthoViews_ is _true_, then each of the orthographic viewports aligns its axes with the corresponding axes of the new construction plane. If _false_, the orthographic viewports remain oriented to the world space axes, but the origin of each viewport is modified to match the origin of the new construction plane.

setCPlaneInteractive

boolean

_boolean_ allowNestedCancel = **false**?

Allows the user to interactively set the origin and axes orientation for the construction plane in the editing viewports. Returns false if canceled and takes optional boolean parameter for allowing nested cancel.

spinInteractive

[ViewPanel](#toc)
-----------------

The single instance of this class represents the container for the various editing viewports of **MoI**. The value can be accessed as: _moi.ui.mainWindow.viewpanel_.

* * *

**References:** [Viewport](#_Viewport)(1), [Window](#_Window)(2)

**Properties**

Name

Type

Notes

hideViewControls

boolean

mode

string

Specifies the current mode of the view panel. The possible values are:

*   split
*   3d
*   top
*   front
*   right

The values corresponds to the display modes set by the view mode buttons on the _MoI_ tool bar.

  

**Methods**

Name

Result

Arguments

getViewport

[Viewport](#_Viewport)

_string_ viewportName

Return the [Viewport](#_Viewport) object for corresponding to the specified _viewportName_. The legal values for _viewportName_ are:

*   3d
*   top
*   bottom
*   front
*   bottom
*   right
*   left

Note that _top_ and _bottom_ refer to the same viewport. The same is true for _front_, _back_ and _right_, _left_.

reverseView

_string_ view

Reverses the _view_ direction for the specified _view_. For example, if _view_ is _top_, the _view_ for the _top/bottom_ viewport will switch to _bottom_ if it was _top_, or to _top_ if it was _bottom_.

The legal values for _view_ are:

*   top
*   bottom
*   front
*   back
*   right
*   left

Note that _top_ and _bottom_ refer to the same viewport, and not to the current _view_ direction of that viewport. The same is true for _front_, _back_ and _right_, _left_.

setSize

_int_ width,  
_int_ height

Sets the size of the view panel to the dimensions specified by _width_ and _height_.

[ViewlinkContainer](#toc)
-------------------------

**Methods**

Name

Result

Arguments

load

_string_ [URL](#_URL)

[Viewport](#toc)
----------------

Items of this class represent one of the 2D or 3D editing viewports of the application.

* * *

**References:** [PickedPoint](#_PickedPoint)(1), [UI](#_UI)(3), [ViewPanel](#_ViewPanel)(1)

**Properties**

Name

Type

Notes

cameraFrame

[CoordinateFrame](#_CoordinateFrame)

read only

Specifies the [CoordinateFrame](#_CoordinateFrame) object defining the position and orientation of the camera for the viewport.

cameraPt

[Point](#_Point)

Specifies the position of the camera for the viewport.

cplane

[CoordinateFrame](#_CoordinateFrame)

Specifies the [CoordinateFrame](#_CoordinateFrame) object defining the construction plane for the viewport.

is3DView

boolean

read only

Specifies whether the viewport is a 3D or 2D view. If _true_, the viewport displays a 3D view of the scene. If _false_, the viewport displays a 2D orthographic view of the scene.

fieldOfViewAngle

float

Example: `moi.ui.mainWindow.viewpanel.getViewport('3D').fieldOfViewAngle;`

leftRightAngle

float

name

string

read only

Specifies the name of this viewport. The possible values are:

*   3D
*   Top
*   Front
*   Right

projection

string

Specifies the type of projection used by the viewport. The possible values are:

*   Perspective
*   Parallel

Note that setting a value of _Perspective_ on a 2D viewport will have no effect. However, the 3D viewport can be changed between a _Parallel_ and _Perspective_ projection.

targetFrame

[CoordinateFrame](#_CoordinateFrame)

read only

Specified the [CoordinateFrame](#_CoordinateFrame) object at which viewport camera is aimed.

targetPt

[Point](#_Point)

Specifies the [Point](#_Point) at which the viewport camera is pointed.

tiltAngle

float

upDownAngle

float

viewPanel

[ViewPanel](#_ViewPanel)

read only

Specifies the [ViewPanel](#_ViewPanel) this viewport is part of.

  

**Methods**

Name

Result

Arguments

interactiveViewChange

_string_ type  
_boolean_ immediateModal = false

type is one of 'zoomarea', 'zoom', 'pan', or 'rotate'

  

The way view.interactiveViewChange() works by default is that it posts a message and then lets the current call stack unwind and doesn't start the view change loop until when the message is processed. If immediateModal is true it goes into its modal loop immediately rather than posting a message. This allows a script to proceed after interactiveViewChange() is finished.

pan

_float_ rightLeft,  
_float_ upDown,  
_float_ backwardsForwards = **0.0**

Pans the viewport _camera_ in the amount specified by _rightLeft_, _upDown_ and _backwardsForwards_. As you might expect, the _backwardsForwards_ amount only applies to viewports using a _Perspective_ projection.

render

[Image](#_Image)

_int_ width,  
_int_ height

Renders the contents of the viewport as an image object that can the be saved to disk. The size of the rendered image is specified by _width_ and _height_.

Example:

    
    var vp = moi.ui.getLastClickedViewport();
    if (!vp) { vp = moi.ui.mainWindow.viewpanel.getViewport('3D'); }
    var filename = moi.filesystem.GetSaveFileName('Save', ' (*.png)|*.png');
    var st = [], settings = ['view.viewportBackgroundColor', 'view.lineWidth', 'grid.display', 'grid.showXYAxes', 'view.showAxisIcon', 'view.meshAngle'];
    for (var sv in settings) { st.push(moi[settings[sv].split('.')[0]][settings[sv].split('.')[1]]); }
    moi.view.viewportBackgroundColor = 0xFFFFFF;
    moi.view.lineWidth = 3;
    moi.grid.display = false;
    moi.grid.showXYAxes = false;
    moi.view.showAxisIcon = false;
    moi.view.meshAngle = 3;
    vp.render(4000, 2500).save(filename);
    for (var sv in settings) { moi[settings[sv].split('.')[0]][settings[sv].split('.')[1]] = st.shift(); }     
    

renderToClipboard

_int_ width,  
_int_ height

Renders the contents of the viewport as an image to the system clipboard. The size of the rendered image is specified by _width_ and _height_. If _width_ and _height_ do not match the aspect ratio of the viewport, the rendered image will be clipped.

reset

Resets the viewport camera and target back to their default positions.

rotate

_string_ direction,  
_float_ angleDegrees = **0.0**

Rotates the viewport camera toward _direction_ by the number of degrees specified by _angleDegrees_. The possible values for _direction_ are:

*   left
*   right
*   up
*   down

setAngles

_float_ upDownAngleDegrees = **0.0**,  
_float_ leftRightAngleDegrees = **0.0**,  
_float_ tiltAngleDegrees = **0.0**

setCameraAndTarget

_[Point](#_Point)_ newCamera,  
_[Point](#_Point)_ newTarget,  
_[Point](#_Point) vector_ upDirection = **Null**

Sets a new position _newCamera_ for the viewport camera, and a new position _newTarget_ at which it is aimed. Even though _upDirection_ is optional, it should generally be included to avoid unexpected flipping of the camera orientation when the world Z axis is pointing downward or when rotation style is free rotation. _upDirection_ generally corresponds with cameraFrame.yaxis

zoom

_float_ zoomFactor

Zooms the contents of the viewport by the amount specified by _zoomFactor_. Note that a _zoomFactor_ of _1.0_ has no effect, while values less than _1.0_ zoom into the view, and values greater than _1.0_ zoom out from the view.

wheelZoom

_boolean_ true for zooming in a step; false for zooming out

works the same as turning the mouse wheel for zooming in or out, including focusing the zoom on the mouse cursor's current location

  

Examples:

`script: /* Zoom in a step */ var vp = moi.ui.getActiveViewport(); if ( vp != null ) vp.wheelZoom( true );`  
`script: /* Zoom out a step */ var vp = moi.ui.getActiveViewport(); if ( vp != null ) vp.wheelZoom( false );`

[WaitableObject](#toc)
----------------------

Items of this class allow a script to wait until some user event occurs, then resume execution in order to process the event.

* * *

**References:** [CommandUIContainer\*](#_CommandUIContainer)(1), [ObjectPicker\*](#_ObjectPicker)(1), [PointPicker\*](#_PointPicker)(1), [PointStreamPicker\*](#_PointStreamPicker)(1), [UI](#_UI)(2), [WaitableWindow\*](#_WaitableWindow)(1)

**Properties**

Name

Type

Notes

cancelReason

string

read only

Specifies the reason why a command was cancelled such as 'newcommandstarting'. This value is available after a call to the **waitForEvent** method returns _false_.

event

string

read only

Specifies the type of event that caused the most recent call to the **waitForEvent** method to return. This value is available after a call to **waitForEvent** returns _true_. The possible values are:

*   **done**: The user has indicated that the operation or request is done.
*   **finished**: The operation or request is finished.

Other values can also be returned that depend upon the user interface environment in which the object is running. These events can be:

*   Shortcut keys defined for the command.
*   Control ids for user interface elements such as buttons or checkboxes.

  

**Methods**

Name

Result

Arguments

allowNestedCancel

_boolean_ newAllow = **\-1**

On WaitableObjject you can call object.allowNestedCancel() which will then cause Esc or the Cancel button to cancel just that object's wait instead of doing a full command cancel which is the default behavior.

cancel

waitForEvent

boolean

Suspends the caller until some type of event occurs. A _true_ result indicates that a valid event occurred. In this case, the **event** property contains the type of event that occurred. A _false_ result indicates that the operation was cancelled. In this case, the **cancelReason** property contains the reason the operation was cancelled.

[WaitableWindow](#toc) ( [WaitableObject](#_WaitableObject) )
-------------------------------------------------------------

**References:** [UI](#_UI)(2)

**Properties**

Name

Type

Notes

htmlDocument

object

read only

htmlWindow

object

read only

window

[Window](#_Window)

read only

[Window](#toc)
--------------

Items of this class represent application windows that appear on the display. This includes the main **MoI** application window as well as any pop-up or dialog windows.

* * *

**References:** [UI](#_UI)(1), [WaitableWindow](#_WaitableWindow)(1)

**Properties**

Name

Type

Notes

dialogReturnValue

any

read only

Specifies the value returned as the result of the dialog when the **endDialog** method was called.

isClosed

boolean

read only

Specifies whether or not the window has been closed. If _true_, then the window has been closed. If _false_, the window is still open.

isMaximized

boolean

read only

Specifies whether or not the window is in the _maximized_ state. If _true_, the window is currently maximized. If _false_, the window is not maximized.

isMinimized

boolean

read only

Specifies whether or not the window is in the _minimized_ state. If _true_, the window is currently minimized. If _false_, the window is not minimized.

isRestored

boolean

read only

Specifies whether or not the window is in the _restored_ state. If _true_, the window is restored (i.e. neither in the _minimized_ or _maximized_ state). If _false_, the window is not in the restored state.

viewpanel

[ViewPanel](#_ViewPanel)

  

**Methods**

Name

Result

Arguments

canChangeMaximizedSize

boolean

close

Closes the window. If the **contentChanged** method has been called on the window previously, the user will prompted if they want to save the contents of the window before closing it, and will be given the opportunity to cancel the close request.

contentChanged

Marks the contents of the window as having been modified. If the user attempts to close the window, or the **close** method is called, the user will be prompted if they want to save the contents of the window before closing it.

doModal

any

Makes the window into a modal dialog and suspends the caller until the dialog has completed. The result returned is the value passed as the argument to the **doModal** method used to terminate the dialog.

    
    var dialog = moi.ui.createDialog( 'moi://commands/AssignNameDialog.htm', 'resizeable,defaultWidth:300,defaultHeight:520' );
    
    var result = dialog.window.doModal();
    if ( result == -1 ) // Canceled
        return;
    

endDialog

_any_ varDialogReturnValue

Terminates a modal dialog window and specifies _varDialogReturnValue_ as the result to be returned by the **doModal** method used to start the modal dialog.

getPosition

object

win.getPosition() - returns an object with .x and .y properties for the window's screen coordinates.

getSize

object

win.getSize() - returns an object with .width and .height properties for the window's client area width and height.

getFrameSize

object

win.getFrameSize() - returns an object with .width and .height properties for the window frame's width and height.

maximize

Maximizes the window to full screen. If the window is already maximized, the method has no effect.

minimize

Minimizes the window to the system task bar. If the window is already minimized, the method has no effect.

move

_float_ x,  
_float_ y

win.move( x, y ); - move the window to the given x,y screen coordinates. Can be given either one argument of an object with x,y properties, or 2 numeric arguments. If a script calls window.move(x,y) before the window has been loaded, record the given position or size and apply them when the window is finished loading.

resize

_float_ width,  
_float_ height

win.resize( width, height ) - resize the client area of a window to the given width and height. Can be given either one argument with x,y or width,height properties, or 2 numeric arguments. If a script calls window.resize(w,h) before the window has been loaded, record the given position or size and apply them when the window is finished loading.

restore

Restores the original size and position of the window from the _minimized_ or _maximized_ state. If the window is already in the restored state, the method has no effect.

[addpoint](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Is corner

boolean

  

**Methods**

Name

Result

Arguments

.setSnapFunc()

  

**Example**

    
    var factory = moi.command.createFactory('addpoint');
    moi.ui.bindUIToInput('makecorner', 'value', factory.getInput(0));
    
    var pointpicker = moi.ui.createPointPicker();
    pointpicker.disableStraightSnap = true;
    pointpicker.disableObjectSnap = true;
    pointpicker.enableOnObjectSnap = true;
    pointpicker.allowMidObjectSnap = true;
    
    factory.setSnapFunc(pointpicker);
    
    if (!GetPoint(pointpicker))
        return;
    
    if (pointpicker.controlDown)
        factory.setInput(0, true);
    
    factory.update();
    factory.commit();
    

[addpointsrf](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Surface

[GeomObject](#_GeomObject)

1

Point

[Point](#_Point)

2

Direction

string

"both", "u", "v"

3

Symmetrical

boolean

  

**Example**

    
    // adds control points to selected face that will only be visible if
    // face is standalone (not joined to any other face)
    
    var face = moi.geometryDatabase.getSelectedObjects().getFaces().item(0);
    
    // find UV coordinates of midpoint of face and put them into a 2D point
    var min = face.domainMin;
    var max = face.domainMax;
    var midpoint = {};
    midpoint.x = (max.x + min.x) * 0.5;
    midpoint.y = (max.y + min.y) * 0.5;
    
    // convert 2D point in UV space to 3D point in object space
    var midpoint3D = face.evaluatePoint(midpoint);
    
    var factory = moi.command.createFactory('addpointsrf');
    factory.setInput(0, face);
    factory.setInput(1, midpoint3D);
    factory.setInput(2, 'both');
    factory.setInput(3, true);
    factory.commit();
    

[align](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Alignment pt

[CoordinateFrame](#_CoordinateFrame)

2

Align mode

string

"HorizontalCenter", "HorizontalTop", "HorizontalBottom", "VerticalCenter", "VerticalLeft", "VerticalRight"

3

Move as group

boolean

  

**Properties**

Name

Type

Comments

showMoveAsGroup

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    var factory = moi.command.createFactory( 'align' );
    factory.setInput( 0, objects );
    factory.setInput( 1, moi.vectorMath.createFrame() );
    factory.setInput( 2, "HorizontalCenter" );
    factory.setInput( 3, false );
    factory.commit();
    

[alignbackgroundimage](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

P1

[Point](#_Point)

1

P2

[Point](#_Point)

2

P3

[Point](#_Point)

3

P4

[Point](#_Point)

  

**Methods**

Name

Result

Arguments

.setImage( image )

[Image](#_Image) image

[annotationtext](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base frame

[CoordinateFrame](#_CoordinateFrame)

1

Text

string

2

Preset index

integer

optional

  

**Example**

    
    var frame = moi.view.getCPlane();
    var string = 'test' + '\n' + 'text';
    
    var factory = moi.command.createFactory('annotationtext');
    factory.setInput(0, frame);
    factory.setInput(1, string);
    factory.commit();
    

[dimaligned](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base frame

[CoordinateFrame](#_CoordinateFrame)

1

End pt

[Point](#_Point)

2

Location pt

[Point](#_Point)

3

Preset index

integer

  

**Properties**

Name

Type

Comments

isZDir

  

**Methods**

Name

Result

Arguments

.initFromObject( curve )

[Curve](#_Curve) curve

start and end points of dimension are set to the start and end points of _curve_

  

**Example**

    
    var factory = moi.command.createFactory( 'dimaligned' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 1, moi.vectorMath.createPoint(25, -20, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(10, 10, 0) );
    factory.setInput( 3, 0 );
    factory.commit();
    

[dimangle](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Center frame

[CoordinateFrame](#_CoordinateFrame)

1

First pt

[Point](#_Point)

2

Second pt

[Point](#_Point)

3

Location pt

[Point](#_Point)

4

Preset index

integer

  

**Properties**

Name

Type

Comments

angle

  

**Methods**

Name

Result

Arguments

.initFirstLine( curve )

[Curve](#_Curve) curve

.initSecondLine( curve )

[Curve](#_Curve) curve

  

**Example**

    
    var factory = moi.command.createFactory( 'dimangle' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 1, moi.vectorMath.createPoint(25, -20, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(10, 10, 0) );
    factory.setInput( 3, moi.vectorMath.createPoint(5, 5, 0) );
    factory.setInput( 4, 0 );
    factory.commit();
    

[dimhorizontal](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base frame

[CoordinateFrame](#_CoordinateFrame)

1

End pt

[Point](#_Point)

2

Location pt

[Point](#_Point)

3

Preset index

integer

  

**Properties**

Name

Type

Comments

isZDir

  

**Methods**

Name

Result

Arguments

.initFromObject( curve )

[Curve](#_Curve) curve

start and end points of dimension are set to the start and end points of _curve_

  

**Example**

    
    var factory = moi.command.createFactory( 'dimhorizontal' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 1, moi.vectorMath.createPoint(20, 10, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(0, 5, 0) );
    factory.setInput( 3, 0 );
    factory.commit();
    

[dimradius](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Object

[GeomObject](#_GeomObject)

1

Type

string

"FromPreset", "Radius", "Diameter"

2

Arrow pt

[Point](#_Point)

3

Text pt

[Point](#_Point)

4

Preset index

integer

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    
    var factory = moi.command.createFactory( 'dimradius' );
    factory.setInput( 0, objects.item(0) );
    factory.setInput( 1, "FromPreset" );
    factory.setInput( 2, moi.vectorMath.createPoint(10, 10, 0) );
    factory.setInput( 3, moi.vectorMath.createPoint(15, -15, 0) );
    factory.setInput( 4, 0 );
    factory.commit();
    
    

[dimvertical](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base frame

[CoordinateFrame](#_CoordinateFrame)

1

End pt

[Point](#_Point)

2

Location pt

[Point](#_Point)

3

Preset index

integer

  

**Properties**

Name

Type

Comments

isZDir

  

**Methods**

Name

Result

Arguments

.initFromObject( curve )

[Curve](#_Curve) curve

start and end points of dimension are set to the start and end points of _curve_

  

**Example**

    
    var factory = moi.command.createFactory( 'dimvertical' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 1, moi.vectorMath.createPoint(10, 20, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(5, 0, 0) );
    factory.setInput( 3, 0 );
    factory.commit();
    

[leader](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base frame

[CoordinateFrame](#_CoordinateFrame)

base frame for plane and first point

1

Text

string

2

Preset index

integer

3+

additional points

[Point](#_Point)

`factory.createInput('point');` must be used to create each of these inputs starting with the 2nd point

  

**Example**

    
    var factory = moi.command.createFactory('leader');
    factory.setInput(0, moi.vectorMath.createTopFrame());
    factory.setInput(1, 'Leader');
    factory.setInput(2, 0);
    
    factory.createInput('point');
    factory.createInput('point');
    factory.createInput('point');
    factory.setInput(3, moi.vectorMath.createPoint(5, 0, 0));
    factory.setInput(4, moi.vectorMath.createPoint(5, 10, 0));
    factory.setInput(5, moi.vectorMath.createPoint(15, 15, 0));
    factory.commit();
    

[arc3pt](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt A

[Point](#_Point)

1

Pt B

[Point](#_Point)

2

Pt C

[Point](#_Point)

3

Style

string

"Start, End, On", "Start, On, End"

  

**Example**

    
    var factory = moi.command.createFactory( 'arc3pt' );
    factory.setInput( 0, moi.vectorMath.createPoint(10, 5, 0) );
    factory.setInput( 1, moi.vectorMath.createPoint(0, 0, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(-10, 15, 0) );
    factory.setInput( 3, "Start, End, On" );
    factory.commit();
    

[arccenter](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Center

[CoordinateFrame](#_CoordinateFrame)

1

Start

[Point](#_Point)

2

End

[Point](#_Point)

3

Angle

float

4

Elliptical

boolean

  

**Properties**

Name

Type

Comments

angle

length

  

**Example**

    
    var factory = moi.command.createFactory( 'arccenter' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 1, moi.vectorMath.createPoint(20, 5, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(-10, 15, 0) );
    factory.setInput( 3, 30 );
    factory.setInput( 4, false );
    factory.commit();
    

[arccontinue](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Start pt

[Point](#_Point)

1

End pt

[Point](#_Point)

2

Angle

float

  

**Properties**

Name

Type

Comments

angle

[arctangent](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Is radius

boolean

1

Pt A

[Point](#_Point)

2

Pt B

[Point](#_Point)

3

Pt C

[Point](#_Point)

4

Radius

float

5

Side pt

[Point](#_Point)

  

**Properties**

Name

Type

Comments

frame

lastRadius

[arraycircular](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------------

The array commands don't actually create full object copies during calls to .update() and instead make a special lightweight "proxy" object (sort of like an instance) that can be constructed more quickly than an actual full object copy and so that keeps the display more interactive while doing some large number of arrayed items and placing points around.

  

This means that to get the output of an array command it is necessary to do .calculate() on the array factory rather than update/getCreatedObjects/commit.

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Center pt

[CoordinateFrame](#_CoordinateFrame)

2

Num items

integer

3

Angle

float

4

Vertical step

float

5

Radial step

float

6

Angle mode

string

"fill", "step"

  

**Methods**

Name

Result

Arguments

.getAngleToggleValue()

  

**Example**

    
    var factory = moi.command.createFactory( 'arraycircular' );
    var objects = moi.geometryDatabase.getSelectedObjects();
    factory.setInput(0, objects);
    factory.setInput(1, moi.vectorMath.createFrame());
    factory.setInput(2, 8);
    factory.setInput(3, 360);
    factory.setInput(4, 0);
    factory.setInput(5, 0);
    factory.setInput(6, "fill");
    factory.commit();
    

[arraycurve](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

The array commands don't actually create full object copies during calls to .update() and instead make a special lightweight "proxy" object (sort of like an instance) that can be constructed more quickly than an actual full object copy and so that keeps the display more interactive while doing some large number of arrayed items and placing points around.

  

This means that to get the output of an array command it is necessary to do .calculate() on the array factory rather than update/getCreatedObjects/commit.

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Path

[GeomObject](#_GeomObject)

2

Mode

string

"NumItems", "Distance"

3

Num items

integer

4

Distance

float

5

Rotation mode

string

"Freeform", "Flat", "None"

6

Orientation

[List](#_List)

7

Alignment surface

[GeomObject](#_GeomObject)

  

**Properties**

Name

Type

Comments

distance

numItems

hitTestResult

  

**Methods**

Name

Result

Arguments

.snapFunc()

.dragBaseFunc()

.dragOffsetFunc()

[arraydir](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

The array commands don't actually create full object copies during calls to .update() and instead make a special lightweight "proxy" object (sort of like an instance) that can be constructed more quickly than an actual full object copy and so that keeps the display more interactive while doing some large number of arrayed items and placing points around.

  

This means that to get the output of an array command it is necessary to do .calculate() on the array factory rather than update/getCreatedObjects/commit.

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

objects to be arrayed

1

Num items

integer

number of items to make in the array (the original object is included in this count, so for example num items = 3 will actually make 2 copies)

2

BasePt

[Point](#_Point)

3

OffsetPt

[Point](#_Point)

4

ExtentPt

[Point](#_Point)

5

Mode

string

can be one of: "Offset, Count" or "Extent, Count" or "Offset, Extent"

  

**Properties**

Name

Type

Comments

numItems

  

**Example**

    
    var arrayfactory = moi.command.createFactory( 'arraydir' );
    arrayfactory.setInput( 0, linklist1 );
    arrayfactory.setInput( 1, 5 );
    arrayfactory.setInput( 2, baseStartPt );
    arrayfactory.setInput( 3, offsetPt2 );
    arrayfactory.setInput( 4, baseExtentEndPt );
    arrayfactory.setInput( 5, "Offset, Extent" );
    
    var chainobj = arrayfactory.calculate();   // <<<<<
    moi.geometryDatabase.addObjects( chainobj ); // <<<<<
    

[arraygem](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

The array commands don't actually create full object copies during calls to .update() and instead make a special lightweight "proxy" object (sort of like an instance) that can be constructed more quickly than an actual full object copy and so that keeps the display more interactive while doing some large number of arrayed items and placing points around.

  

This means that to get the output of an array command it is necessary to do .calculate() on the array factory rather than update/getCreatedObjects/commit.

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Path curves and surface

[ObjectList](#_ObjectList)

2

Spacing

float

[arraygrid](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

The array commands don't actually create full object copies during calls to .update() and instead make a special lightweight "proxy" object (sort of like an instance) that can be constructed more quickly than an actual full object copy and so that keeps the display more interactive while doing some large number of arrayed items and placing points around.

  

This means that to get the output of an array command it is necessary to do .calculate() on the array factory rather than update/getCreatedObjects/commit.

**Inputs**

Index

Name

Type

Comments

0

Base pt

[CoordinateFrame](#_CoordinateFrame)

1

Corner pt

[Point](#_Point)

2

Width

float

3

Height

float

4

Extrusion

float

5

Extrusion pt

[Point](#_Point)

6

NumCopies X

integer

7

NumCopies Y

integer

8

NumCopies Z

integer

9

Objects

[ObjectList](#_ObjectList)

  

**Properties**

Name

Type

Comments

extrusionBasePt

rectFrame

  

**Methods**

Name

Result

Arguments

.setupBoxSnaps( pointpicker )

[PointPicker](#_PointPicker) pointpicker

.squareSnap()

[arrow3d](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Start pt

[Point](#_Point)

1

End pt

[Point](#_Point)

  

**Example**

    
    var startpt = moi.vectorMath.createPoint(5,5,5);
    var endpt = moi.vectorMath.createPoint(10,10,10);
    var factory = moi.command.createFactory( 'arrow3d' );
    factory.setInput( 0, startpt );
    factory.setInput( 1, endpt );
    var arrow = factory.calculate().item(0);
    moi.geometryDatabase.addObject( arrow );
    factory.cancel();
    

[backgroundimage](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

FileName

string

1

Base

[CoordinateFrame](#_CoordinateFrame)

2

Corner

[Point](#_Point)

  

**Methods**

Name

Result

Arguments

.getOpenFileName()

.addSnaps( pointpicker )

[PointPicker](#_PointPicker) pointpicker

[blend](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

objects to blend (either curves or edges)

1

Orientations

[List](#_List)

determines direction flipping and also seam position for surface blend between closed edges

2

Continuity

string

string of 'G1', 'G2', or 'G3'

3

Bulge

float

bulge factor

4

Sync points

[List](#_List)

optional list of [Points](#_Point) for surface blend

5

Planar sections direction

[Point](#_Point)

optional x,y,z vector for surface blend planar sections direction

  

**Methods**

Name

Result

Arguments

.getRails()

[booleandifference](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base objects

[ObjectList](#_ObjectList)

1

Cutting objects

[ObjectList](#_ObjectList)

2

Keep cutting objects

boolean

  

**Example**

    
    /*make cylinder 1*/
    frame = moi.vectorMath.createTopFrame();
    frame.origin = moi.vectorMath.createPoint(0, 0, 0);
    factory = moi.command.createFactory('cylinder');
    factory.setInput(1, frame);
    factory.setInput(3, 30);
    factory.setInput(4, moi.vectorMath.createPoint(0, 0, 60));
    factory.update();
    var cyl1 = factory.getCreatedObjects();
    factory.commit();
    
    /*make cylinder 2*/
    frame = moi.vectorMath.createTopFrame();
    frame.origin = moi.vectorMath.createPoint(0, 0, 0);
    factory = moi.command.createFactory('cylinder');
    factory.setInput(1, frame);
    factory.setInput(3, 60);
    factory.setInput(4, moi.vectorMath.createPoint(0, 0, 30));
    factory.update();
    var cyl2 = factory.getCreatedObjects();
    factory.commit();
    
    /*cyl2 minus cyl1*/
    moi.geometryDatabase.deselectAll();
    factory = moi.command.createFactory('booleandifference');
    factory.setInput(0, cyl2);
    factory.setInput(1, cyl1);
    factory.setInput(2, false);
    var result = factory.calculate();
    moi.geometryDatabase.addObjects(result);
    moi.geometryDatabase.removeObjects(cyl2);
    moi.geometryDatabase.removeObjects(cyl1);
    
    /*make cylinder 3*/
    frame = moi.vectorMath.createTopFrame();
    frame.origin = moi.vectorMath.createPoint(25, 0, 0);
    factory = moi.command.createFactory('cylinder');
    factory.setInput(1, frame);
    factory.setInput(3, 30);
    factory.setInput(4, moi.vectorMath.createPoint(25, 0, 30));
    factory.update();
    var cyl3 = factory.getCreatedObjects();
    factory.commit();
    
    moi.geometryDatabase.selectAll();
    moi.view.resetAll();
    
    /*result minus cyl3*/
    moi.geometryDatabase.deselectAll();
    factory = moi.command.createFactory('booleandifference');
    factory.setInput(0, result);
    factory.setInput(1, cyl3);
    factory.setInput(2, false);
    factory.commit();
    

[booleanintersection](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base objects

[ObjectList](#_ObjectList)

1

Intersectors

[ObjectList](#_ObjectList)

2

Union sets

boolean

[booleanmerge](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[booleanunion](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[boundingbox](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    var factory = moi.command.createFactory( 'boundingbox' );
    factory.setInput( 0, objects );
    factory.commit();
    

[boundingboxcenter](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    var factory = moi.command.createFactory( 'boundingboxcenter' );
    factory.setInput( 0, objects );
    factory.commit();
    

[box](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base pt

[CoordinateFrame](#_CoordinateFrame)

1

Corner pt

[Point](#_Point)

2

Width

float

3

Height

float

4

Extrusion

float

5

Extrusion pt

[Point](#_Point)

  

**Properties**

Name

Type

Comments

extrusionBasePt

rectFrame

  

**Methods**

Name

Result

Arguments

.setupBoxSnaps( pointpicker )

[PointPicker](#_PointPicker) pointpicker

.squareSnap()

  

**Example**

    
    //Draw a box
    var factory = moi.command.createFactory( 'box' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 2, 20 );
    factory.setInput( 3, 20 );
    factory.setInput( 4, 20 );
    factory.commit();
    

[box3pts](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt A

[Point](#_Point)

1

Pt B

[Point](#_Point)

2

Pt C

[Point](#_Point)

3

Width

float

4

Height

float

5

Extrusion

float

6

Extrusion pt

[Point](#_Point)

  

**Properties**

Name

Type

Comments

rectFrame

rectWidth

rectHeight

extrusionBasePt

  

**Methods**

Name

Result

Arguments

.customSnap()

.setupBoxSnaps( pointpicker )

[PointPicker](#_PointPicker) pointpicker

  

**Example**

    
    var factory = moi.command.createFactory( 'box3pts' );
    factory.setInput( 0, moi.vectorMath.createPoint(0, 0, 0) );
    factory.setInput( 1, moi.vectorMath.createPoint(10, 0, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(10, 10, 0) );
    factory.setInput( 3, 20 );
    factory.setInput( 4, 20 );
    factory.setInput( 5, 10 );
    factory.commit();
    
    moi.ui.alert(factory.rectWidth);
    

[boxcenter](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base pt

[CoordinateFrame](#_CoordinateFrame)

1

Corner pt

[Point](#_Point)

2

Width

float

3

Height

float

4

Extrusion

float

5

Extrusion pt

[Point](#_Point)

  

**Properties**

Name

Type

Comments

extrusionBasePt

rectFrame

[CoordinateFrame](#_CoordinateFrame)

  

**Methods**

Name

Result

Arguments

.setupBoxSnaps( pointpicker )

[PointPicker](#_PointPicker) pointpicker

.squareSnap()

  

**Example**

    
    var factory = moi.command.createFactory( 'boxcenter' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 2, 20 );
    factory.setInput( 3, 20 );
    factory.setInput( 4, 40 );
    factory.commit();
    

[calcarea](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Area

float

fills in index 1 with the result value asynchronously. You have to call factory.waitForAsyncUpdate()

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    
    var factory = moi.command.createFactory('calcArea');
    factory.setInput(0, objects);
    factory.update();
    factory.waitForAsyncUpdate();
    
    var result = factory.getInput(1).getValue();
    moi.ui.alert(result);
    

[calclength](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Length

float

fills in index 1 with the result value asynchronously. You have to call factory.waitForAsyncUpdate()

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    
    var factory = moi.command.createFactory('calcLength');
    factory.setInput(0, objects);
    factory.update();
    factory.waitForAsyncUpdate();
    
    var result = factory.getInput(1).getValue();
    moi.ui.alert(result);
    

[calcvolume](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Volume

float

fills in index 1 with the result value asynchronously. You have to call factory.waitForAsyncUpdate()

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    
    var factory = moi.command.createFactory('calcVolume');
    factory.setInput(0, objects);
    factory.update();
    factory.waitForAsyncUpdate();
    
    var result = factory.getInput(1).getValue();
    moi.ui.alert(result);
    

[chamfer](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Straight corners

boolean

Straight corners, true = Do straight corners (only applies to brep filleting)

2

Corners

[List](#_List)

Corners - If filleting a single multi-segment curve, list of corners true = fillet this corner.

3

Dist A

float

4

Dist B

float

  

**Properties**

Name

Type

Comments

doingEdges

doingCurves

numVertices

library

  

**Methods**

Name

Result

Arguments

.generateVertices()

[ObjectList](#_ObjectList)

returns an object list of [Points](#_Point), one at each sharp corner of the curve

.finishedPickingVertices()

.showPointSet( filletSet )

_integer_ index

[circle](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Is radius

boolean

1

Center

[CoordinateFrame](#_CoordinateFrame)

2

Radius pt

[Point](#_Point)

3

Radius

float

4

Vertical

boolean

  

**Example**

    
    //Draw a circle on xz (Front) plane 
    var factory = moi.command.createFactory( 'circle' );
    factory.setInput( 1, moi.vectorMath.createFrontFrame() );
    factory.setInput( 3, 10 );
    factory.commit();
    

[circle3pt](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt A

[Point](#_Point)

1

Pt B

[Point](#_Point)

2

Pt C

[Point](#_Point)

[circlediameter](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt A

[CoordinateFrame](#_CoordinateFrame)

1

Pt B

[Point](#_Point)

2

Vertical

boolean

[circletangent](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Is radius

boolean

1

Pt A

[Point](#_Point)

2

Pt B

[Point](#_Point)

3

Pt C

[Point](#_Point)

4

Radius

float

  

**Properties**

Name

Type

Comments

frame

lastRadius

[cone](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Is radius

boolean

1

Base pt

[CoordinateFrame](#_CoordinateFrame)

2

Radius pt

[Point](#_Point)

3

Radius

float

4

End pt

[Point](#_Point)

5

Height

float

[conic](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Start pt

[Point](#_Point)

1

End pt

[Point](#_Point)

2

Apex pt

[Point](#_Point)

3

Through pt

[Point](#_Point)

optional: don't set if a rho value is set

4

Rho

float

optional: don't set if through point is set

  

**Properties**

Name

Type

Comments

rho

  

**Methods**

Name

Result

Arguments

.setTanTanSnapPt( pointpicker )

[PointPicker](#_PointPicker) pointpicker

.setPlane( pointpicker )

[PointPicker](#_PointPicker) pointpicker

  

**Example**

    
    //hyperbola 
    var conic_factory = moi.command.createFactory('conic');
    
    conic_factory.setInput(0, p1); // Conic command start point.
    conic_factory.setInput(1, p2); // Conic command end point.
    conic_factory.setInput(2, p3); // Conic command apex point.
    conic_factory.setInput(3, p4); // Conic command through pt.
    
    conic_factory.update();
    
    conic_factory.commit();
    
    
    //parabola
    var conic_factory = moi.command.createFactory('conic');
    
    conic_factory.setInput(0, p1); // Conic command start point.
    conic_factory.setInput(1, p2); // Conic command end point.
    conic_factory.setInput(2, p3); // Conic command apex point.
    conic_factory.setInput(4, 0.5); // Conic command rho value.
    
    conic_factory.update();
    
    conic_factory.commit()
    

[copy](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Base pt

[Point](#_Point)

2

Offset pt

[Point](#_Point)

3

Make copies

boolean

4

Distance from edge

float

5

From edge cplane

[CoordinateFrame](#_CoordinateFrame)

[curve](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

0

point

[Point](#_Point)

1

corner?

boolean

2+

additional points and booleans

  

**Example**

    
    var factory = moi.command.createFactory('curve');
    for (var p = 0; p < pts.length; ++p)
    {
        factory.createInput('point');
        factory.setInput(factory.numInputs - 1, pts.item(p).pt);
        factory.createInput('bool');
        factory.setInput(factory.numInputs - 1, true);
    }
    factory.commit();
    

[cylinder](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Is radius

boolean

boolean value true = distance input is radius, false = distance input is diameter

1

Base pt

[CoordinateFrame](#_CoordinateFrame)

frame for cylinder bottom base point and axis directions

2

Radius pt

[Point](#_Point)

point that defines the radius, this can be left out if a numeric radius is supplied instead

3

Radius

float

numeric radius (or diameter) value

4

End pt

[Point](#_Point)

top point of the cylinder, this is required and also the orientation of the cylinder will be modified to point towards this point

5

Height

float

optional numeric height input, if this is supplied the cylinder will point towards the top point but will be this specific height instead of touching the top point

  

**Example**

    
    frame = moi.vectorMath.createTopFrame();
    frame.origin = moi.vectorMath.createPoint(0, 0, 0);
    factory = moi.command.createFactory('cylinder');
    factory.setInput(1, frame);
    factory.setInput(3, 100); //diameter
    factory.setInput(4, moi.vectorMath.createPoint(0, 0, 300)); //length
    factory.commit();
    
    //You can't use input 5 without input 4 setting.
    var radius = 10;
    var height = 15;
    var frame = moi.vectorMath.createFrame();
    var direction = frame.evaluate(0, 0, 1);
    factory = moi.command.createFactory('cylinder');
    factory.setInput(1, frame);
    factory.setInput(3, radius);
    factory.setInput(4, direction);
    factory.setInput(5, height);
    factory.commit();
    

[delete](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[drag](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Base pt

[Point](#_Point)

2

Offset pt

[Point](#_Point)

3

Make copies

boolean

4

Distance from edge

float

5

From edge cplane

[CoordinateFrame](#_CoordinateFrame)

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    
    var factory = moi.command.createFactory( 'drag' );
    factory.setInput( 0, objects );
    factory.setInput( 1, moi.vectorMath.createPoint(0, 0, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(10, 15, 0) );
    factory.setInput( 3, true );
    factory.setInput( 4, 5 );
    factory.setInput( 5, moi.vectorMath.createFrame() );
    factory.commit();
    

[ellipse](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Center pt

[Point](#_Point)

1

First axis pt

[Point](#_Point)

2

Second axis pt

[Point](#_Point)

3

Width

float

4

Height

float

  

**Properties**

Name

Type

Comments

lastCalculatedWidth

lastCalculatedHeight

  

**Example**

    
    var factory = moi.command.createFactory('ellipse');
    factory.setInput(0, moi.vectorMath.createPoint(0, 0, 0));
    factory.setInput(1, moi.vectorMath.createPoint(-20, 40, 0));
    factory.setInput(2, moi.vectorMath.createPoint(20, 5, 0));
    factory.setInput(3, 60);
    factory.setInput(4, 10);
    factory.commit();
    

[ellipsecorner](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base corner

[CoordinateFrame](#_CoordinateFrame)

1

Other corner

[Point](#_Point)

2

Width

float

3

Height

float

  

**Example**

    
    var factory = moi.command.createFactory('ellipsecorner');
    factory.setInput(0, moi.vectorMath.createFrame());
    factory.setInput(1, moi.vectorMath.createPoint(-10, 20, 0));
    factory.setInput(2, 60);
    factory.setInput(3, 10);
    factory.commit();
    

[ellipsediameter](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

First axis start

[Point](#_Point)

1

First axis end

[Point](#_Point)

2

Second axis pt

[Point](#_Point)

[explodemove](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Scale factor

float

2

Origin

[Point](#_Point)

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    var factory = moi.command.createFactory( 'explodemove' );
    factory.setInput( 0, objects );
    factory.setInput( 1, 1.5 );
    factory.setInput( 2, moi.vectorMath.createPoint(0, 0, 0) );
    factory.commit();
    

[extend](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Boundaries

[ObjectList](#_ObjectList)

[extrude](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

Objects to extrude

1

Distance pt

[Point](#_Point)

Point defining the distance. Ignored if explicit distance is set.

2

Distance

float

Explicit distance setting

3

Dir A

[Point](#_Point)

Custom direction, first point.

4

Dir B

[Point](#_Point)

Custom direction, second point.

5

Cap ends

boolean

True = cap ends, false = leave ends open

6

Both sides

boolean

True = both sides

7

Path

[GeomObject](#_GeomObject)

Path curve for tensor product style

8

Path reversed

boolean

Is the path curve reversed from its original orientation

9

To point

boolean

If true do pyramid style extrusion collapsing to a singluar point instead of a linear extrusion.

10

Draft angle

float

If set do draft angle extrusion

11

Draft flip

boolean

If true reverse draft angle

12

Keep separate

boolean

If true keep face extrusions separate from their parent object rather than auto booleaning them.

  

**Methods**

Name

Result

Arguments

.getExtrusionPlane()

  

**Example**

    
    function drawpolygon() {
    polygonfactory = moi.command.createFactory('polygon');
    var frame = moi.vectorMath.createFrame(); //erzeugt das Koordinatensystem für den Zylinder
    frame.origin = moi.vectorMath.createPoint(0, 0, 0); //Uhrsprungspunkt
    var direction = frame.evaluate(7.2, 0, 0); //Radius des Poligon
    polygonfactory.setInput(0, frame);
    polygonfactory.setInput(1, direction);
    polygonfactory.setInput(2, 6);
    
    polygonfactory.update();
    
    var objects = polygonfactory.getCreatedObjects();
    
    polygonfactory.commit();
    
    return objects;
    }
    
    var objects = drawpolygon(); //until here It works, I see the polygon
    
    
    var extrudefactory = moi.command.createFactory('extrude');
    extrudefactory.setInput(0, objects);  //in my mind this should take the selected polygon to extrude
    extrudefactory.setInput(2, 5); // distance 5mm
    extrudefactory.setInput(3, moi.vectorMath.createPoint(0, 0, 1)); //direction to extrude
    extrudefactory.setInput(5, true); //cap ends? yes
    extrudefactory.commit();
    

[fillet](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Straight corners

boolean

Straight corners, true = Do straight corners (only applies to brep filleting)

2

Corners

[List](#_List)

list of bool - Corners - If filleting a single multi-segment curve, list of corners true = fillet this corner

3

Radius

float

fillet radius or distance for ConstantDistance mode.

4

Shape

string

one of 'Circular', 'ConstantDistance', 'G1', 'G2', 'G3'

5

BlendScale

float

Scale factor for G1-3 blend shapes

6,7,8

For variable radius fillet, there can be additional inputs consisting of a point list, radius number value, and string options group.

  

**Properties**

Name

Type

Comments

doingEdges

doingCurves

numVertices

library

  

**Methods**

Name

Result

Arguments

.generateVertices()

[ObjectList](#_ObjectList)

get an object list of [Point](#_Point) objects, one at each sharp corner of the curve

.finishedPickingVertices()

.showPointSet()

  

**Example**

    
    function GetCorners(crvs) {
    var factory = moi.command.createFactory('fillet');
    
    factory.setInput(0, crvs); // Set an object list with one curve in it.
    factory.generateVertices();
    
    var corners = factory.getCreatedObjects();
    
    factory.cancel();
    
    return corners;
    }
    
    function TestGetCorners() {
    var crvs = moi.geometryDatabase.getSelectedObjects().getCurves();
    if (crvs.length != 1) {
        moi.ui.alert('Select a curve before running this command.');
        return;
    }
    
    var corners = GetCorners(crvs);
    
    moi.ui.alert('Got ' + corners.length + ' corners');
    }
    
    TestGetCorners();
    

[flip](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[flow](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

objects to deform

1

Base object

[GeomObject](#_GeomObject)

2

Target object

[GeomObject](#_GeomObject)

3

Delete inputs

boolean

4

Stretch

boolean

5

Rigid

boolean

6

Orientations

[List](#_List)

7

Swap UV

boolean

8

Flip U

boolean

9

Flip V

boolean

10

Flip Normal

boolean

11

Projective

boolean

12

Straight

boolean

for projective

  

**Example**

[https://moi3d.com/forum/lmessages.php?webtag=MOI&msg=9747.21](https://moi3d.com/forum/lmessages.php?webtag=MOI&msg=9747.21)

[group](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[ungroup](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

only returns the objects that are inside of top-most groups present in input; output DOES NOT include non-group objects present at input

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[ungroupall](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[helix](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base point

[CoordinateFrame](#_CoordinateFrame)

1

End point

[Point](#_Point)

2

Helix start point

[Point](#_Point)

3

Start radius

float

4

End radius point

[Point](#_Point)

5

End radius

float

6

Num turns

float

7

Pitch

float

8

Mode

string

"turns", "pitch"

9

Reverse twist

boolean

  

**Methods**

Name

Result

Arguments

.getStartPlane()

.getEndPlane()

.getStartRadius()

.getEndRadius()

.getHeight()

  

**Example**

    
    var factory = moi.command.createFactory( 'helix' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 1, moi.vectorMath.createPoint(0, 0, 40) );
    factory.setInput( 2, moi.vectorMath.createPoint(0, 10, 0) );
    factory.setInput( 3, 5 );
    factory.setInput( 4, moi.vectorMath.createPoint(0, 10, 0) );
    factory.setInput( 5, 20 );
    factory.setInput( 6, 3 );
    factory.setInput( 8, "turns" );
    factory.setInput( 9, true );
    factory.commit();
    

[inset](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Thickness

float

2

Direction

string

'Inwards' or 'Outwards'

3

Expand

boolean

4

Separate height

boolean

5

Height

float

6

Grooved

boolean

7

Groove width

float

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    var factory = moi.command.createFactory( 'inset' );
    factory.setInput( 0, objects );
    factory.setInput( 1, 1 );
    factory.setInput( 2, "Inwards" );
    factory.setInput( 3, false );
    factory.setInput( 4, true );
    factory.setInput( 5, 2 );
    factory.setInput( 6, true );
    factory.setInput( 7, 1 );
    factory.commit();
    

[interpcurve](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0+

point

[Point](#_Point)

  

**Example**

    
    var factory = moi.command.createFactory( 'interpcurve' );
    var p = moi.geometryDatabase.getSelectedObjects().getPoints();
    for(var i=0;i<p.length;i++)
    {
        factory.createInput('point');
        factory.setInput(i,  p.item(i).pt);
    }
    factory.commit();
    

[intersect](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

  

**Properties**

Name

Type

Comments

noCurveFrom2Views

[isocurve](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

face

[GeomObject](#_GeomObject)

1

pt

[Point](#_Point)

2

dir

string

"both", "u", "v"

  

**Example**

    
    var face = moi.geometryDatabase.getSelectedObjects().getFaces().item(0);
    
    // find UV coordinates of midpoint of face and put them into a 2D point
    var min = face.domainMin;
    var max = face.domainMax;
    var midpoint = {};
    midpoint.x = (max.x + min.x) * 0.5;
    midpoint.y = (max.y + min.y) * 0.5;
    
    // convert 2D point in UV space to 3D point in object space
    var midpoint3D = face.evaluatePoint(midpoint);
    
    var factory = moi.command.createFactory('isocurve');
    factory.setInput(0, face);
    factory.setInput(1, midpoint3D);
    factory.setInput(2, 'both');
    factory.commit();
    

[join](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

  

**Example**

    
    // join the selected objects 
    var selObjList = moi.geometryDatabase.getSelectedObjects();
    
    var factory = moi.command.createFactory('join');
    factory.setInput(0, selObjList);
    factory.commit();
    

[label](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt

[Point](#_Point)

1

Label

string

  

**Example**

    
    var factory = moi.command.createFactory( 'label' );
    factory.setInput( 0, moi.vectorMath.createPoint(0, 0, 10) );
    factory.setInput( 1, "Moi Label" );
    factory.commit();
    

[line](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Start

[Point](#_Point)

1

End

[Point](#_Point)

2

BothSides

boolean

  

**Example**

    
    //Draw a line 
    var factory = moi.command.createFactory( "line" );
    factory.setInput( 0, moi.vectorMath.createPoint( 0, 0, 0 ) );
    factory.setInput( 1, moi.vectorMath.createPoint( 40, 40, 40 ) );
    factory.commit();
    

[loft](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Sections

[ObjectList](#_ObjectList)

1

Orientations

[List](#_List)

2

Style

string

"normal", "loose", "straight"

3

Cap ends

boolean

4

Closed

boolean

5

Profile synch type

string

"Auto", "Exact", "Refit", "NumPoints"

6

Num Profile Points

integer

  

**Properties**

Name

Type

Comments

canHaveCaps

boolean

[make2d](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

View

string

"3D", "Top", "Front", "Right", "Active"

2

Resolution

float

3

Generate hidden lines

boolean

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    var factory = moi.command.createFactory( 'make2d' );
    factory.setInput( 0, objects );
    factory.setInput( 1, "3D" );
    factory.setInput( 2, 25 );
    factory.setInput( 3, false );
    factory.commit();
    

[merge](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[mirror](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

objects to mirror

1

Base pt

[CoordinateFrame](#_CoordinateFrame)

First point and plane for mirror line

2

End pt

[Point](#_Point)

Second point of mirror line

3

Delete inputs

boolean

Whether to delete input objects or not

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    
    var factory = moi.command.createFactory( 'mirror' );
    factory.setInput( 0, objects );
    factory.setInput( 1, moi.vectorMath.createFrame() );
    factory.setInput( 2, moi.vectorMath.createPoint(0, 10, 0) );
    factory.setInput( 3, false );
    factory.commit();
    

[move](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Base pt

[Point](#_Point)

2

Offset pt

[Point](#_Point)

3

Make copies

boolean

4

Distance from edge

float

5

From edge cplane

[CoordinateFrame](#_CoordinateFrame)

[network](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

U curves

[ObjectList](#_ObjectList)

1

V curves

[ObjectList](#_ObjectList)

2

U orientations

[List](#_List)

List of curve orientation values - U orientations, each has a "flipped" bool value and a "seam" parameter value

3

V orientations

[List](#_List)

List of curve orientation values - V orientations

4

Mode

string

one of "normal", "lighter", "custom", "uniform"

5

Custom tolerance

float

Fitting tolerance to use when mode = "custom"

6

Uniform Num Points

integer

Number of interior points to use when mode = "uniform"

  

**Properties**

Name

Type

Comments

canDoCoonsPatch

boolean

  

**Example**

    
    function drawLine(x1, y1, z1, x2, y2, z2) {
    var linefactory = moi.command.createFactory("line");
    linefactory.setInput(0, moi.vectorMath.createPoint(x1, y1, z1));
    linefactory.setInput(1, moi.vectorMath.createPoint(x2, y2, z2));
    
    var objlist = linefactory.calculate();
    var line = objlist.item(0);
    
    moi.geometryDatabase.addObject(line);
    return line;
    }
    
    var linea = drawLine(0, 0, 0, 10, 0, 0);
    var lineb = drawLine(10, 0, 0, 10, 10, 0);
    var linec = drawLine(10, 10, 0, 0, 0, 0);
    
    // Make an object list and put the 3 new lines into it.
    var objlist = moi.geometryDatabase.createObjectList();
    objlist.addObject(linea);
    objlist.addObject(lineb);
    objlist.addObject(linec);
    
    
    var factory = moi.command.createFactory('network');
    factory.setInput(0, objlist);
    
    factory.commit();
    

[nsided](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Curves

[ObjectList](#_ObjectList)

loop of edge curves

1

Bulge

float

2

Point count U

integer

3

Point count V

integer

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects().getEdges();
    var factory = moi.command.createFactory( 'nsided' );
    factory.setInput( 0, objects );
    factory.setInput( 1, 1 );
    factory.setInput( 2, 20 );
    factory.setInput( 3, 20 );
    factory.commit();
    

[offset](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

objects to offset

1

Distance

float

distance to offset for distance mode, leave unset for "through point" mode

2

Offset pt

[CoordinateFrame](#_CoordinateFrame)

point and coordinate frame for "through point" or "which-side" point for distance mode with curve offset

3

Corner type

string

corner type for curve offset either "sharp" or "round"

4

Trim

boolean

Trim, true = trim curve results

5

Flip

boolean

Flip, true = flip offset side (for solid/surface offsets not curve offsets)

6

Both sides

boolean

Both sides, true = offset curves to both sides

7

Cap ends

boolean

Cap ends, true = add line segments between ends of open offsets

8

curveOffsetDistance

float

  

**Properties**

Name

Type

Comments

curveOffsetDistance

float?

read only?

the distance used by offset in through point mode.

anyOpenCurves

boolean

  

**Methods**

Name

Result

Arguments

.getCurvePlane()

  

**Example**

    
    var factory = moi.command.createFactory('line');
    factory.setInput(0, moi.vectorMath.createPoint(3, 1, 0));
    factory.setInput(1, moi.vectorMath.createPoint(10, 10, 0));
    var output = factory.calculate();
    moi.geometryDatabase.addObjects(output);
    
    // Calculating the offset of line
    var factory = moi.command.createFactory('offset');
    factory.setInput(0, output);
    factory.setInput(1, 3);
    
    // Creates a coordinate frame with origin at 0,0,0 and with x/y axes along world x/y axis directions.
    var frame = moi.vectorMath.createTopFrame();
    factory.setInput(2, frame);
    
    factory.commit();
    

[orient](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Base frame

[CoordinateFrame](#_CoordinateFrame)

2

Target frame

[CoordinateFrame](#_CoordinateFrame)

3

Make copies

boolean

  

**Methods**

Name

Result

Arguments

.commitAndPrepOther( newFactory )

[GeometryFactory](#_GeometryFactory) newFactory

Commit the existing factory and hide the input objects on the new one in one batch to avoid flickering. Used for dropping copies.

.getViewFrame( pointpicker )

[PointPicker](#_PointPicker) pointpicker

[orientlinetoline](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Base start point

[Point](#_Point)

2

Base end point

[Point](#_Point)

3

Target start point

[Point](#_Point)

4

Target end point

[Point](#_Point)

5

Make copies

boolean

6

Scaling

string

"uniform", "stretch", "none"

7

Last used normal

[Point](#_Point)

  

**Methods**

Name

Result

Arguments

.commitAndPrepOther( newFactory )

[GeometryFactory](#_GeometryFactory) newFactory

Commit the existing factory and hide the input objects on the new one in one batch to avoid flickering. Used for dropping copies.

[planarsrf](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[plane](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base pt

[CoordinateFrame](#_CoordinateFrame)

1

Corner pt

[Point](#_Point)

2

Width

float

3

Height

float

  

**Methods**

Name

Result

Arguments

.squareSnap()

[plane3pts](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt A

[Point](#_Point)

1

Pt B

[Point](#_Point)

2

Pt C

[Point](#_Point)

3

Width

float

4

Height

float

  

**Properties**

Name

Type

Comments

rectWidth

rectHeight

  

**Methods**

Name

Result

Arguments

.customSnap()

[planecenter](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base pt

[CoordinateFrame](#_CoordinateFrame)

1

Corner pt

[Point](#_Point)

2

Width

float

3

Height

float

  

**Methods**

Name

Result

Arguments

.squareSnap()

[point](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt

[Point](#_Point)

[polygon](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Center

[CoordinateFrame](#_CoordinateFrame)

1

Radius

[Point](#_Point)

2

Num sides

integer

3

Circumscribed

boolean

  

**Example**

    
    function drawpolygon() {
    polygonfactory = moi.command.createFactory('polygon');
    var frame = moi.vectorMath.createFrame(); //erzeugt das Koordinatensystem für den Zylinder
    frame.origin = moi.vectorMath.createPoint(0, 0, 0); //Uhrsprungspunkt
    var direction = frame.evaluate(7.2, 0, 0); //Radius des Poligon
    polygonfactory.setInput(0, frame);
    polygonfactory.setInput(1, direction);
    polygonfactory.setInput(2, 6);
    
    polygonfactory.update();
    
    var objects = polygonfactory.getCreatedObjects();
    
    polygonfactory.commit();
    
    return objects;
    }
    

[polygonedge](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt A

[CoordinateFrame](#_CoordinateFrame)

1

Pt B

[Point](#_Point)

2

Num sides

integer

3

Flip

boolean

[polygonstar](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Center

[CoordinateFrame](#_CoordinateFrame)

1

Radius

[Point](#_Point)

2

Num sides

integer

3

Second radius

[Point](#_Point)

[polyline](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

basePt

[Point](#_Point)

1+

additional point

[Point](#_Point)

  

**Example**

    
    var factory = moi.command.createFactory( 'polyline' );
    var p = moi.geometryDatabase.getSelectedObjects().getPoints();
    for(var i=0;i<p.length;i++)
    {
        factory.createInput('point');
        factory.setInput(i,  p.item(i).pt);
    }
    factory.commit();
    

[project](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

BaseObjects

[ObjectList](#_ObjectList)

1

TargetObjects

[ObjectList](#_ObjectList)

2

Mode

string

"direction", "closestpt"

3

Direction start pt

[Point](#_Point)

4

Direction end pt

[Point](#_Point)

5

Delete inputs

boolean

6

Projection plane

[CoordinateFrame](#_CoordinateFrame)

When set project to this plane rather than onto target objects

  

**Methods**

Name

Result

Arguments

.setDefaultDirection()

[railrevolve](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Profile

[GeomObject](#_GeomObject)

1

Rail

[GeomObject](#_GeomObject)

2

Axis start

[Point](#_Point)

3

Axis end

[Point](#_Point)

4

Cap ends

boolean

[rebuildcurve](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Mode

string

"refit", "numpoints", or "endpoints"

2

Tolerance

float

3

Point count

integer

4

Delete inputs

boolean

5

Keep corners

boolean

6

Break angle

float

7

Points

string

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects().getStandaloneCurves();
    var factory = moi.command.createFactory( 'rebuildcurve' );
    factory.setInput(0, objects );
    factory.setInput(1, "refit" );
    factory.setInput(2, 1.0 );
    factory.setInput(3, null );
    factory.setInput(4, true );
    factory.setInput(5, true );
    factory.setInput(6, 15 );
    factory.commit();
    

[rect3pts](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Pt A

[Point](#_Point)

1

Pt B

[Point](#_Point)

2

Pt C

[Point](#_Point)

3

Width

float

4

Height

float

5

Rounded

boolean

6

Round pt

[Point](#_Point)

7

Round radius

float

  

**Properties**

Name

Type

Comments

pointRadius

rectFrame

rectWidth

rectHeight

  

**Methods**

Name

Result

Arguments

.customSnap()

[rectangle](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base pt

[CoordinateFrame](#_CoordinateFrame)

1

Corner pt

[Point](#_Point)

2

Width

float

3

Height

float

4

Rounded

boolean

5

Round pt

[Point](#_Point)

6

Round radius

float

  

**Properties**

Name

Type

Comments

pointRadius

  

**Methods**

Name

Result

Arguments

.squareSnap()

  

**Example**

    
    var factory = moi.command.createFactory( 'rectangle' );
    factory.setInput( 0, moi.vectorMath.createFrame() );
    factory.setInput( 1, null );
    factory.setInput( 2, 20 );
    factory.setInput( 3, 20 );
    factory.setInput( 4, false );
    factory.commit();
    

[rectcenter](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base pt

[CoordinateFrame](#_CoordinateFrame)

1

Corner pt

[Point](#_Point)

2

Width

float

3

Height

float

4

Rounded

boolean

5

Round pt

[Point](#_Point)

6

Round radius

float

  

**Properties**

Name

Type

Comments

pointRadius

  

**Methods**

Name

Result

Arguments

.squareSnap()

[removeduplicates](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

curves

1

Tolerance

float

  

**Example**

        `var objects = moi.geometryDatabase.getSelectedObjects().getStandaloneCurves();         var factory = moi.command.createFactory( 'removeduplicates' );         factory.setInput( 0, objects );         factory.setInput( 1, 0.01 );         factory.commit();`
        
            

[revolve](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Axis start

[Point](#_Point)

2

Axis end

[Point](#_Point)

3

Angle

float

4

Cap ends

boolean

[rotate](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Center

[CoordinateFrame](#_CoordinateFrame)

2

Angle

float

3

Ref A

[Point](#_Point)

4

Ref B

[Point](#_Point)

5

Make copies

boolean

  

**Properties**

Name

Type

Comments

angle

[rotateaxis](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Axis start

[Point](#_Point)

2

Axis end

[Point](#_Point)

3

Angle

float

4

Ref A

[Point](#_Point)

5

Ref B

[Point](#_Point)

6

Make copies

boolean

  

**Properties**

Name

Type

Comments

plane

angle

[scale](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Origin

[Point](#_Point)

2

Scale factor

float

3

Ref A

[Point](#_Point)

4

Ref B

[Point](#_Point)

5

Make copies

boolean

  

**Properties**

Name

Type

Comments

scale

[scale1d](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Origin

[Point](#_Point)

2

Scale factor

float

3

Ref A

[Point](#_Point)

4

Ref B

[Point](#_Point)

5

Make copies

boolean

  

**Properties**

Name

Type

Comments

scale

[scale2d](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Origin

[CoordinateFrame](#_CoordinateFrame)

2

Scale factor

float

3

Ref A

[Point](#_Point)

4

Ref B

[Point](#_Point)

5

Make copies

boolean

  

**Properties**

Name

Type

Comments

scale

[scalenonuniform](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

OriginFrame

[CoordinateFrame](#_CoordinateFrame)

2

XScale

float

3

YScale

float

4

ZScale

float

[separate](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-----------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[shell](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Distance

float

2

Direction

string

"Normal", "Flip", "Centerline"

  

**Example**

    
    var objects = moi.geometryDatabase.getSelectedObjects();
    
    var factory = moi.command.createFactory( 'shell' );
    factory.setInput( 0, objects );
    factory.setInput( 1, 1 );
    factory.setInput( 2, "Normal" );
    factory.commit();
    

[shrinktrimmedsrf](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

[silhouette](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Camera

[Point](#_Point)

location of camera

2

Direction

[Point](#_Point)

point displaced from origin along direction that camera is pointing

3

Perspective

boolean

4

Include edges

boolean

  

**Example**

    
    var cameraFrame = moi.ui.mainWindow.viewpanel.getViewport("3d").cameraFrame;
    var objects = moi.geometryDatabase.getSelectedObjects();
    var factory = moi.command.createFactory( 'silhouette' );
    factory.setInput( 0, objects );
    factory.setInput( 1, cameraFrame.origin );
    
    // set the forward direction
    var dir = cameraFrame.zaxis;
    dir.scale( -1.0 );
    factory.setInput( 2, dir );
    
    factory.setInput( 3, true );
    factory.setInput( 4, true );
    factory.commit();
    

[sketchcurve](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

[sphere](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
---------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Is radius

boolean

1

Center

[CoordinateFrame](#_CoordinateFrame)

2

Radius pt

[Point](#_Point)

3

Radius

float

  

**Example**

    
    var factory = moi.command.createFactory( 'sphere' );
    factory.setInput( 1, moi.vectorMath.createFrame() );
    factory.setInput( 3, 10 );
    factory.commit();
    

[sweep](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Profiles

[ObjectList](#_ObjectList)

Profile curves

1

Rails

[ObjectList](#_ObjectList)

Rail curves

2

Orientations

[List](#_List)

List of IMoiCurveOrientation objects for profiles, for history updates leave empty on first run

3

RailOrientations

[List](#_List)

List of IMoiCurveOrientation objects for rails, for history updates leave empty on first run

4

Pointy ends

string

Point end mode, one of: 'none', 'pointystart', 'pointyend', or 'pointystartandend'

5

Twist

string

twist type - 'freeform' or 'flat'

6

Maintain height

boolean

Maintain height true = maintain height for two-rail sweep (stretch profiles instead of uniformly scale).

7

Cap ends

boolean

cap ends true = do planar end caps

8

Maintain tangent

boolean

Maintain tangent - true = use tangent preserving sweep if possible

9

Scaling rail

[GeomObject](#_GeomObject)

scaling rail - If set this defines a scaling curve

10

Profile synch type

string

Profile synch type - Options for synchronizing profiles: Auto, Exact, Refit, or NumPoints

11

Num Profile Points

integer

Number of points to use for profile numpoints synchronization mode

12

Flat direction

[Point](#_Point)

Direction vector for twist=flat mode

  

**Properties**

Name

Type

Comments

showCapEnds

[text](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Base point

[CoordinateFrame](#_CoordinateFrame)

1

Text

string

2

Font

string

3

Bold

boolean

4

Italic

boolean

5

Type

string

"solids", "surfaces", "curves"

6

Height

float

7

Extrusion

float

8

PreviewMode

boolean

9

Style

string

10

Align

string

  

**Methods**

Name

Result

Arguments

.getFonts()

.getFontStyles()

  

**Example**

    
    // Draw some text
    var factory = moi.command.createFactory( 'text' );
    factory.setInput( 0, moi.vectorMath.createTopFrame() );
    factory.setInput( 1, "Hello World" ); 
    factory.setInput( 2, "Arial" ); 
    factory.setInput( 3, false ); 
    factory.setInput( 4, false );
    factory.setInput( 5, 'Curves' );
    factory.setInput( 6, 10 ); 
    factory.commit();
    

[trim](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
-------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

Objects to trim

1

Cutters

[ObjectList](#_ObjectList)

Cutting objects

2

Fragments

[ObjectList](#_ObjectList)

Selected fragments to keep or remove, can be an empty list to keep all fragments but it can't be left just unset.

3

Mode

string

"remove" or "keep"

4

Extend lines

boolean

5

Use proj intersections

boolean

6

Trim pts

[List](#_List)

Optional list of picked points for curve trimming, used by the "Add trim points" function in the Trim command.

7

Delete cutting objects

boolean

8

Keep all joined

boolean

  

**Properties**

Name

Type

Comments

allowDeleteWholeCurve

  

**Methods**

Name

Result

Arguments

.generateFragments()

.finishedPickingFragments()

  

**Example**

    
    var linefactory = moi.command.createFactory('line');
    linefactory.setInput(0, moi.vectorMath.createPoint(0, 0, 0));
    linefactory.setInput(1, moi.vectorMath.createPoint(10, 0, 0));
    var linelist = linefactory.calculate();
    
    var pointfactory = moi.command.createFactory('point');
    pointfactory.setInput(0, moi.vectorMath.createPoint(8, 0, 0));
    var pointlist = pointfactory.calculate();
    
    var trimfactory = moi.command.createFactory('trim');
    
    trimfactory.setInput(0, linelist);
    trimfactory.setInput(1, pointlist);
    trimfactory.setInput(2, moi.geometryDatabase.createObjectList());
    
    /*
    Note - the trim factory is heavily based on the trim command workflow and works a little
    different than the standard behavior. You need to call the custom functions
    .generateFragments() and finishedPickingFragments() for it to finish and because of
    the .generateFragments() step puts objects in the geometry database it won't work to
    call calculate() to generate "loose" objects that aren't in the geometry database as
    is normally possible.
    */
    
    trimfactory.generateFragments();
    trimfactory.finishedPickingFragments();
    
    trimfactory.update();
    
    var objs = trimfactory.getCreatedObjects();
    moi.ui.alert(objs.length + ' objects created');
    
    trimfactory.commit();
    

[twist](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

1

Axis start

[Point](#_Point)

2

Axis end

[Point](#_Point)

3

Angle

float

4

Limit to axis

boolean

5

Ease in

float

6

Ease out

float

  

**Example**

    
    var boxFactory = moi.command.createFactory( 'boxcenter' );
    boxFactory.setInput( 0, moi.vectorMath.createFrame() );
    boxFactory.setInput( 2, 20 );
    boxFactory.setInput( 3, 20 );
    boxFactory.setInput( 4, 40 );
    boxFactory.commit();
    moi.geometryDatabase.selectAll();
    
    var objects = moi.geometryDatabase.getSelectedObjects();
    var factory = moi.command.createFactory( 'twist' );
    factory.setInput( 0, objects );
    factory.setInput( 1, moi.vectorMath.createPoint(0, 0, 0) );
    factory.setInput( 2, moi.vectorMath.createPoint(0, 0, 40) );
    factory.setInput( 3, 90 );
    factory.setInput( 4, true );
    factory.setInput( 5, 0.01 );
    factory.setInput( 6, 0.01 );
    factory.commit();
    

[viewproject](#gftoc) ( [GeometryFactory](#_GeometryFactory) )
--------------------------------------------------------------

**Inputs**

Index

Name

Type

Comments

0

Objects

[ObjectList](#_ObjectList)

About This Document
-------------------

This document contains information about the Javascript interface to the [Moment of Inspiration](http://moi3d.com/) NURBS-based 3D modeling application.

It contains information gleaned directly from the program intermixed with descriptive comments added by various people based upon study of the MoI user interface files, testing, and, in some cases, educated or wild guesses. If you find information which appears to be missing or incorrect, you should try asking for help on the Moment of Inspiration [discussion forum](http://moi3d.com/forum/). Once you get a solid answer, please add it to this document and post your improved version.

The Document Structure
----------------------

This document is divided into five major sections:

*   The document title.
*   The table of contents for the Moment of Inspiration classes (excluding GeometryFactory subclasses).
*   The table of contents for the Moment of Inspiration GeometryFactory subclasses.
*   The list of Moment of Inspiration classes (excluding GeometryFactory subclasses).
*   The list of Moment of Inspiration GeometryFactory subclasses.

Note that GeometryFactory subclasses are handled separately:

*   Because of the way information about GeometryFactory subclasses is gleaned from the Moment of Inspiration program structure.
*   Because of the large number of GeometryFactory subclasses defined. The total number of GeometryFactory subclasses exceeds the total number of all other Moment of Inspiration classes combined.
*   Because of the different technique needed to access and use GeometryFactory subclasses compared to the other Moment of Inspiration classes.

The Top-Level Classes Table of Contents
---------------------------------------

Located just below the document title is the section labeled **Moment of Inspiration Javascript Classes**, which contains links to information about each of the Moment of Inspiration Javascript accessible classes. Simply click on any class name in this section to go to the section of the document describing that class.

The GeometryFactory Subclasses Table of Contents
------------------------------------------------

The GeometryFactory subclasses section is similar to the **Moment of Inspiration Javascript Classes** section, but contains links to the description of each of the GeometryFactory subclasses.

The List of Top-Level Classes
-----------------------------

Following the two table of content sections is an alphabetical list of all Javascript accessible Moment of Inspiration classes (excluding the GeometryFactory subclasses, which immediately follow this list).

Each description is divided into three main sections:

*   **Class Name**: This section contains the name of the class followed by the name of the parent class it subclasses (in parentheses). Both the class and parent class names are links. Clicking the class name returns you to the class table of contents located at the top of the document. Clicking the parent class name takes you to the description of the parent class.
    
    If in _Show detailed_ class description mode, the section will also contain a brief description of the purpose and use of the class, as well as a list of other classes which reference the class along with the number of references (in parentheses). Clicking on any referencing class will take you to the description of that class. Note that an asterisk next to a referencing class name indicates that the class is a subclass of the class being described.
    
*   **Properties**: An alphabetical list containing the name and type of all properties defined by the class. If the type of the property is another Moment of Inspiration class, you can click on the class name to go to the description for that class. If _Show detailed_ mode is on, the **Notes** column displays a description of each property's value.
    
*   **Methods**: An alphabetical list of all methods defined by the class. In addition to the method name, each entry in the list also displays the type of the result returned by the method, as well as the name, type and possible default value for each of the arguments defined by the method. If any return or argument type is a Moment of Inspiration class, clicking on the class name will take you to a description of the class. If _Show detailed_ mode is on, the **Arguments** column will also contain a description of the function of the method. If the description references a Moment of Inspiration class, you can also click on the class name in the description to be taken to the description of that class.

The List of GeometryFactory Subclasses
--------------------------------------

Following the list of all top-level Javascript class descriptions is an alpabetical list of all GeometryFactory subclass descriptions. These descriptions are different from those of the other Moment of Inspiration classes because, as the name implies, these classes are _factory_ classes used to create instances of the various types of _geometry_ supported by Moment of Inspiration.

As such, these classes have no properties or methods, but only a set of _construction arguments_ (referred to as _Inputs_) that must be defined in order to create a new piece of geometry. The inputs are numbered consecutively from 0 to _n_, where _n_ varies from class to class. The class description contains a list of the inputs for the class, including the input index, name and data type. If the type is another Moment of Inspiration class, clicking on the class name will take to you the description of that class.

About the Author
----------------

David C. Morrill was born and grew up in Vermont (Burlington, South Burlington), and now lives in the Philippines (Minglanilla), after spending time in New York (Plattsburgh, Rochester, Brooklyn, Endicott, Poughkeepsie, Kingston, Peekskill, Yorktown Heights), Minnesota (Rochester), Florida (Boca Raton) and Texas (Round Rock).

His current goals are to finally learn how to play the piano, become a decent digital artist, and revolutionize the way programmers and users develop and use applications based upon the many ideas and techniques he's developed during 40 years of thinking about and writing software. Sadly, only the latter seems the least bit likely to happen.

### September 1, 2023
