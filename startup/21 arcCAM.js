var title = "ArcCAM";
var title2 = "OrderCurves";
var title3 = "PointCoord";
var title4 = "FixCircles";
var title5 = "SetCurveStart";
var html='<moi:Spacer/>';

moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:Spacer/><moi:CommandButton icon="icons/arcCAMIcon.png" command="arcCAM">ArcCAM</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="icons/SetCurveStartIcon.png" command="SetCurveStart">SetCurveStart</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="icons/OrderIcon.png" command="OrderCurves">OrderCurves</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="icons/SetCirclesIcon.png" command="SetCircles">SetCircles</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="icons/RepairCirclesIcon.png" command="RepairCircles">RepairCircles</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="icons/PointIcon.png" command="_PointCoord">PointCoord</moi:/andButton>');
