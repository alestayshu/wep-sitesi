
var isNS = (navigator.appName == "Netscape") ? 1 : 0;
var EnableRightClick = 0;
if (isNS)
    document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
function mischandler() {
    if (EnableRightClick == 1) { return true; }
    else { return false; }
}
function mousehandler(e) {
    if (EnableRightClick == 1) { return true; }
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}
function keyhandler(e) {
    var myevent = (isNS) ? e : window.event;
    if (myevent.keyCode == 96)
        EnableRightClick = 1;
    return;
}
document.oncontextmenu = mischandler;
document.onkeypress = keyhandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;



function IE(e) {
    if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
        alert('ŞŞ ABİSİ');
        return false;
    }
}
function NS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == "2" || e.which == "3") {
            alert('Doğru Dur Lan');
            return false;
        }
    }
}
document.onmousedown = IE; document.onmouseup = NS; document.oncontextmenu = new Function("return false");
