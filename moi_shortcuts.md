A[#](#a)
--------

**Alt+A** = `ArrayDir`

**Ctrl+A** = `script:moi.geometryDatabase.selectAll();`

**Shift+A** = `script:moi.view.resetAll();`

**Shift+Alt+A** = `ArrayCurve`

**Ctrl+Shift+A** = `ArrayCircular`

* * *

B[#](#b)
--------

**B** = `Fillet`

**Alt+B** = `sBridge`

* * *

C[#](#c)
--------

**C** = `Rebuild`

**Ctrl+C** = `CopyClipboard`

**Ctrl+Alt+C** = `ODCopyToExternal`

**Alt+C** = `script: moi.view.setCPlaneInteractive();`

**Ctrl+Shift+C** = `CopyClipboardWithOrigin`

**Shift+Alt+C** = `script: /* Align CPlane with 3D view 1.0 */ var cp = moi.view.getCPlane(), tp = moi.ui.mainWindow.viewpanel.getViewport('3D').targetFrame, tl = moi.VectorMath.pointsWithinTolerance; if (tl(cp.origin,tp.origin) && tl(cp.zaxis,tp.zaxis)) { moi.view.resetCPlane() } else {moi.view.setCPlane(tp, false)}`

**Shift+C** = `script: /* Toggle visibility of all curves */ var objs = moi.geometryDatabase.getObjects().getCurves(); var ishidden = objs.length > 0 ? objs.item(0).hidden : false; objs.setProperty( 'hidden', !ishidden );`

* * *

D[#](#d)
--------

**D** = `DelCorners`

**Alt+D** = `Distribute`

**Ctrl+D** = `script: /* Duplicate selected objects */ var gd = moi.geometryDatabase; var objs = gd.getSelectedObjects(); if ( objs.length ! = 0 ) gd.copyToClipboard( objs ); moi.command.execCommand( 'paste' );`

* * *

E[#](#e)
--------

**E** = `Rotate`

**Ctrl+E** = `Export`

**Ctrl+Shift+E** = `_sScale`

* * *

F[#](#f)
--------

**F** = `Chamfer`

**Alt+F** = `Flow`

* * *

G[#](#g)
--------

**G** = `script: /* Toggle Grid Snap */ moi.drawingAids.gridSnap = !moi.drawingAids.gridSnap;`

**Shift+G** = `script: /* Toggle grid and axis lines */ moi.grid.display = !moi.grid.display; moi.grid.showXYAxes = moi.grid.display;`

* * *

H[#](#h)
--------

**H** = `script: /* Hide selection */ moi.geometryDatabase.hide();`

**Alt+H** = `script: /* Toggle using hidden edge display for selected objects only */ moi.view.hiddenLinesSelectedOnly = !moi.view.hiddenLinesSelectedOnly;`

* * *

I[#](#i)
--------

**I** = `script: /* Isolate selection */ moi.geometryDatabase.isolate();`

**Alt+I** = `script:moi.geometryDatabase.invertSelection(); /Invert/`

* * *

J[#](#j)
--------

**J** = `Join`

Shift+J = `script: /* Show naked edges */ var gd = moi.geometryDatabase; gd.deselectAll(); var breps = gd.getObjects().getBreps(); for ( var i = 0; i < breps.length; ++i ) breps.item(i).getNakedEdges().setProperty( 'selected', true );`

* * *

L[#](#l)
--------

**L** = `Polyline`

**Shift+L** = `Loft`

**Alt+L** = `script: /* Select edges v1.4 */ var gd = moi.geometryDatabase, so = gd.getSelectedObjects(); function ss(o,v){o.setProperty("selected",v)} function sl(o){ for ( var i = 0; i<o.length; ++i ) o.item(i).getEdges().invertProperty("selected");} gd.selectLoop(); sl(so.getFaces()); sl(so.getSolids()); sl(so.getOpenBReps()); sl(so.getSingleFaceBReps()); ss(so.getBReps(),0); ss(so.getFaces(),0);`

**Ctrl+Alt+L** = `script: /* Loop selection */ moi.geometryDatabase.selectLoop();`

**Ctrl+Shift+L** = `script: /*! Show-hide edges on selected objects */var breps = moi.geometryDatabase.getSelectedObjects().getBreps(); for ( var i = 0; i < breps.length; ++i ) {var brep = breps.item(i);brep.getEdges().invertProperty( 'hidden');}`

**Shift+Alt+L** = `script: /* Highlight naked edges */ var gd = moi.geometryDatabase; gd.deselectAll(); var breps = gd.getObjects().getBreps(); for ( var i = 0; i < breps.length; ++i ) breps.item(i).getNakedEdges().setProperty( 'selected', true );`

* * *

M[#](#m)
--------

**M** = `Mirror`

**Ctrl+M** = `Merge`

**Alt+M** = `unwrapcurve`

* * *

N[#](#n)
--------

**Ctrl+N** = `New`

**Alt+N** = `orient`

* * *

O[#](#o)
--------

**O** = `Offset`

**Ctrl+O** = `Open`

* * *

P[#](#p)
--------

**P** = `PlanarSrf`

* * *

Q[#](#q)
--------

**Alt+Q** = `script:moi.ui.mainWindow.viewpanel.reverseView( moi.ui.getActiveViewport().name );`

* * *

R[#](#r)
--------

**R** = `Scale`

**Alt+R** = `Scale2d`

**Ctrl+Alt+R** = `Scale1d`

**Ctrl+R** = `RailRevolve`

**Ctrl+Shift+R** = `Revolve`

**Shift+R** = `ScaleIndividual`

* * *

S[#](#s)
--------

**S** = `script: /* Scale, switch between center and regular */ var didcenter = false; try { didcenter = moi.command.getOption( 'scale_center' ); } catch(e){} if ( didcenter ) { moi.command.execCommand( 'Scale' ); } else { moi.command.execCommand( 'Scale BoundingBoxCenter' ); } moi.command.setOption( 'scale_center', !didcenter );`

**Ctrl+Shift+S** = `SaveAs`

**Ctrl+S** = `Save`

**Ctrl+Alt+S** = `IncrementalSave`

**Shift+S** = `Sweep`

* * *

T[#](#t)
--------

**T** = `Trim`

**Ctrl+Shift+T** = `_sSplit`

**Alt+T** = `script: /* Toggle both sides for offset or extrude */ if ( moi.command.currentCommandName ) { if ( moi.ui.commandUI.curvebothsides ) moi.ui.commandUI.curvebothsides.click(); if ( moi.ui.commandUI.bothsides ) moi.ui.commandUI.bothsides.click(); }`

**Ctrl+T** = `script: /* Toggle cap ends for offset or extrude */ if ( moi.command.currentCommandName ) { if ( moi.ui.commandUI.curvecapends ) moi.ui.commandUI.curvecapends.click(); if ( moi.ui.commandUI.capends ) moi.ui.commandUI.capends.click(); }`

* * *

U[#](#u)
--------

**U** = `script:var gd = moi.geometryDatabase; gd.deselectAll(); var objects = gd.getObjects(); for ( var i = 0; i < objects.length; ++i ) { var obj = objects.item(i); if ( obj.name = = '' ) { obj.selected = true; } }`

* * *

V[#](#v)
--------

**Ctrl+V** = `Paste`

**Ctrl+Alt+V** = `ODPasteFromExternal`

**Ctrl+Shift+V** = `PastePart`

* * *

W[#](#w)
--------

**Alt+W** = `script:/* Wireframe v1.0 */ var gd = moi.geometryDatabase, so = gd.getSelectedObjects(); if (so.length>0) { so.setProperty( 'displayMode',1); so.setProperty( 'selected', 0); } else { gd.getObjects().setProperty( 'displayMode',0); }`

**Shift+W** = `move boundingboxcenter`

**W** = `script: /* Move, switch between center and regular */ var didcenter = false; try { didcenter = moi.command.getOption( 'move_center' ); } catch(e){} if ( didcenter ) { moi.command.execCommand( 'Move' ); } else { moi.command.execCommand( 'Move BoundingBoxCenter' ); } moi.command.setOption( 'move_center', !didcenter );`

* * *

X[#](#x)
--------

**X** = `Extrude`

**Ctrl+Shift+X** = `ExplodeMove`

**Ctrl+X** = `Cut`

* * *

Y[#](#y)
--------

**Ctrl+Y** = `script:moi.command.redo();`

* * *

Z[#](#z)
--------

**Ctrl+Z** = `script:moi.command.undo();`

**Shift+Z** = `script: /* Toggle edge display */ var breps = moi.geometryDatabase.getObjects().getBReps(); var hide = true; for ( var i = 0; i < breps.length; ++i ) { var edges = breps.item(i).getEdges(); if ( i = = 0 ) hide = !edges.item(0).hidden; edges.setProperty( 'hidden', hide ); }`

**Ctrl+Shift+Z** = `script:moi.command.redo();`

* * *

Numbers[#](#numbers)
--------------------

**5** = `script:/* Wireframe v1.0 */ var gd = moi.geometryDatabase, so = gd.getSelectedObjects(); if (so.length>0) { so.setProperty( 'displayMode',1); so.setProperty( 'selected', 0); } else { gd.getObjects().setProperty( 'displayMode',0); }`

* * *

Numpad[#](#numpad)
------------------

**Numpad-** = `BooleanDifference`

**Numpad\*** = `BooleanUnion`

**Numpad/** = `BooleanIntersection`

**Numpad+** = `BooleanMerge`

**Numpad5** = `script: /* Toggle between Parallel and Perspective view */ var vp = moi.ui.mainWindow.viewpanel.getViewport('3D'); vp.projection = (vp.projection == 'Perspective' ? 'Parallel': 'Perspective');`

**Numpad7** = `script: /* Top view */ var vname = 'Top'; var vp = moi.ui.mainWindow.viewpanel; vp.mode = vname; if ( vp.getViewport(vname).name != vname ) vp.reverseView( vname );`

**Alt+Numpad1** = `script: /* Top view */ var vname = 'Top'; var vp = moi.ui.mainWindow.viewpanel; vp.mode = vname; if ( vp.getViewport(vname).name ! = vname ) vp.reverseView( vname );`

**Alt+Numpad2** = `script: /* Front view */ var vname = 'Front'; var vp = moi.ui.mainWindow.viewpanel; vp.mode = vname; if ( vp.getViewport(vname).name ! = vname ) vp.reverseView( vname );`

**Alt+Numpad3** = `script: /* Right view */ var vname = 'Right'; var vp = moi.ui.mainWindow.viewpanel; vp.mode = vname; if ( vp.getViewport(vname).name ! = vname ) vp.reverseView( vname );`

**Ctrl+Numpad-** = `script:/* Shrink selection 1.0 */ function es(edg){ var i,f; for (i = 0; i<edg.length; i++) {f = edg.item(i).getFacesOfEdge(); f.setProperty('selected',0);}} var gd = moi.geometryDatabase; gd.invertSelection(); var so = gd.getSelectedObjects(), sf = so.getFaces(), i; gd.invertSelection(); for ( i = 0; i<sf.length;i++) es(sf.item(i).getEdges());`

**Ctrl+Numpad+** = `script:/* Expand selection 1.0 */ function es(edg){ var i,f; for (i = 0; i<edg.length; i++) {f = edg.item(i).getFacesOfEdge(); f.setProperty('selected',1);}} var so = moi.geometryDatabase.getSelectedObjects(), sf = so.getFaces(), i; for ( i = 0; i<sf.length;i++) es(sf.item(i).getEdges()); es(so.getEdges());`

* * *

Function[#](#function)
----------------------

**F1** = `script:moi.launchHelp();`

**Alt+F1** = `script: moi.ui.createDialog( 'Options.htm', 'resizeable,defaultWidth:43em,defaultHeight:32em' );`

**F2** = `script: /* Edit object name */ var pp = moi.ui.propertiesPanel; if (pp.show && pp.numSelectedObjects > 0) { pp.editName(); }`

**F3** = `script:/* Object Library Dialog*/ moi.ui.createDialog( 'moi://appdata/customui/ObjLibrary.menu.htm' );`

**F10** = `script: /* Untrim the selected surface */ var gd = moi.geometryDatabase; srfs = gd.getSelectedObjects().getSingleFaceBReps(); gd.deselectAll(); for ( var i = 0; i < srfs.length; ++i ) srfs.item(i).getEdges().setProperty( 'selected', true ); moi.command.execCommand( 'delete' );`

**F11** = `script: /* Open Add New Style dialog */ var gd = moi.geometryDatabase; gd.styleEditorOpened(); var dialog = moi.ui.createDialog( 'EditStyleDialog.htm?titleid = Add style dialog title&index = -1', '', moi.ui.mainWindow ); if ( dialog.window.doModal() ! = -1 ) { var styles = gd.getObjectStyles(); if ( styles.length> 0 ) moi.ui.propertiesPanel.editStyleIndex( styles.length - 1 ); } gd.styleEditorClosed();`

**F12** = `var p = moi.ui.getUIPanel( 'moi://ui/BrowserPane.htm' ); if ( p ) { var w = p.document.body.style.width; if ( w = = '' || w = = '15em' ) { w = '20em'; } else if ( w = = '20em' ) { w = '30em' } else { w = '15em' } p.document.body.style.width = w; }`

* * *

Punctuation[#](#punctuation)
----------------------------

**\-** = `script:/* Calculate length of selected curves and copy to the clipboard as text */ var crvs = moi.geometryDatabase.getSelectedObjects().getCurves(); var len = 0.0; for ( var i = 0; i < crvs.length; ++i ) len + = crvs.item(i).getLength(); moi.copyTextToClipboard( len );`

**\`**\= `script: /* 3D view (perspective or isometric) */ moi.ui.mainWindow.viewpanel.mode = '3D';`

**Alt+.** = `ShowPoints`

**Ctrl+.** = `AddPoint`

**Backspace** = `Delete`

**Delete** = `Delete`

**Space** = `script:if ( moi.ui.mainWindow.viewpanel.mode ! = 'split' ) { moi.ui.mainWindow.viewpanel.mode = 'split' } else { var viewport = moi.ui.getViewportUnderMouse(); if ( viewport ) viewport.viewpanel.mode = viewport.name; }`

* * *

Arrows[#](#arrows)
------------------

**Alt+RightArrow** = `script:moi.view.setCPlane( moi.vectorMath.createRightFrame() );`

**Alt+UpArrow** = `script:moi.view.resetCPlane();`

**Alt+DownArrow** = `script:moi.view.setCPlane( moi.vectorMath.createFrontFrame() );`

**Alt+LeftArrow** = `script: /* Align CPlane with 3D view 1.0 */ var cp = moi.view.getCPlane(), tp = moi.ui.mainWindow.viewpanel.getViewport('3D').targetFrame, tl = moi.VectorMath.pointsWithinTolerance; if (tl(cp.origin,tp.origin) && tl(cp.zaxis,tp.zaxis)) { moi.view.resetCPlane() } else {moi.view.setCPlane(tp, false)}`

**DownArrow** = Nudge Down

**LeftArrow** = Nudge Left

**RightArrow** = Nudge Right

**UpArrow** = Nudge Up

**Shift+LeftArrow** = Nudge Left Small

**Shift+RightArrow** = Nudge Right Small

**Shift+UpArrow** = Nudge Up Small

**Shift+DownArrow** = Nudge Down Small

**PageDown** = Nudge ZDown

**PageUp** = Nudge ZUP

**Shift+PageUp** = Nudge ZUp Small

**Shift+PageDown** = Nudge ZDown Small

* * *

MacBook[#](#macbook)
--------------------

**Ctr+Alt+D** = `BooleanDifference`

**Ctr+Alt+U** = `BooleanUnion`

**Ctr+Alt+I** = `BooleanIntersection`
