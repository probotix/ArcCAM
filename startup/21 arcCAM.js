var title = "ArcCAM";
var title2 = "OrderCurves";
var title3 = "PointCoord";
var html='<moi:Spacer/>';

moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:Spacer/><moi:CommandButton icon="icons/arcCAMIcon.png" command="arcCAM">'+title+'</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="icons/OrderIcon.png" command="OrderCurves">'+title2+'</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="icons/PointIcon.png" command="_PointCoord">'+title3+'</moi:/andButton>');