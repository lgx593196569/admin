var rybNavOffOn = document.getElementById("rybNavOne");
var rybBoxShadowMask = document.getElementById("rybBoxShadowMask");
var rybTopNavDaoru = document.getElementById("rybTopNavDaoru");
var rybBoxShadowContain = document.getElementById("rybBoxShadowContain");
var rybclick = document.getElementById("rybclick");
var rybbian = document.getElementById("rybbian");
var off = true;
document.onclick = function (evt) {
    var event = evt || window.event;
    console.log(event);
    var a = event.target || event.srcElement;
    if (a.id == "rybclick") {
        rybbian.style.cssText = "display:block;";
        rybBoxShadowMask.style.cssText = "display:none;";
        rybBoxShadowContain.style.cssText = "display:none;";
    } else if (a.id == "rybNavOne") {
        if (off) {
            off = false;
            rybBoxShadowContain.style.cssText = "display:block;";
            rybbian.style.cssText = "display:none;";
            rybBoxShadowMask.style.cssText = "display:none;";
        } else {
            rybbian.style.cssText = "display:none;";
            rybBoxShadowMask.style.cssText = "display:none;";
            rybBoxShadowContain.style.cssText = "display:none;";
            off = true;
        }
    } else if (a.id == "rybTopNavDaoru") {
        rybBoxShadowMask.style.cssText = "display:block;";
        rybbian.style.cssText = "display:none;";
        rybBoxShadowContain.style.cssText = "display:none;";
    } else {
        rybbian.style.cssText = "display:none;";
        rybBoxShadowMask.style.cssText = "display:none;";
        rybBoxShadowContain.style.cssText = "display:none;";
    }
}