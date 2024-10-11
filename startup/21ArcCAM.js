var title = "ArcCAM";
var title2 = "OrderCurves";
var title3 = "PointCoord";
var title4 = "FixCircles";
var title5 = "SetCurveStart";
var html='<moi:Spacer/>';

moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:Spacer/><moi:CommandButton icon="moi://appdata/icons/ArcCAMIcon.png" command="arcCAM">&nbsp;&nbsp;&nbsp;&nbsp;ArcCAM&nbsp;&nbsp;&nbsp;&nbsp;</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="moi://appdata/icons/SetCurveStartIcon.png" command="SetCurveStart">SetCurveStart</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="moi://appdata/icons/OrderCurvesIcon.png" command="OrderCurves">OrderCurves</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="moi://appdata/icons/SetCirclesIcon.png" command="SetCircles">SetCircles</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="moi://appdata/icons/RepairCirclesIcon.png" command="RepairCircles">RepairCircles</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="moi://appdata/icons/PointCoordsIcon.png" command="PointCoord">PointCoord</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="moi://appdata/icons/LeadInOutIcon.png" command="CreateLeadInOut">LeadInOut</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="moi://appdata/icons/PocketOffsetIcon.png" command="PocketOffset">PocketOffset</moi:/andButton>');

