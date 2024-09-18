var title = "arcCAM";
var title2 = "OrderCurves";
var html='<moi:Spacer/>';
//html += '<moi:Spacer/><moi:CommandButton icon="icons/CPlaneIcon.png" onbuttonclick=""><moi:Text textid="arcCAM"/></moi:CommandButton>';
//moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", html);
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:Spacer/><moi:CommandButton icon="icons/arcCAMIcon.png" command="arcCAM">'+title+'</moi:/andButton>');
moi.ui.commandBar.CommandBarCustomUI.insertAdjacentHTML( "beforeEnd", '<moi:Spacer/><moi:CommandButton icon="icons/OrderIcon.png" command="OrderCurves">'+title2+'</moi:/andButton>');