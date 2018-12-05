var rybNavOne = document.getElementById("rybNavOne");
var rybBoxShadowContain = document.getElementById("rybBoxShadowContain");
var rybNavOffOn = true;
function test() {
    console.log(1);
    if (rybNavOffOn) {
        rybNavOne.addEventListener("click", test1, true);
    } else {
        test1();
    }
}
function test1() {
    if (rybNavOffOn) {
        rybBoxShadowContain.style.cssText = "display:block;";
        rybNavOffOn = false;
        rybNavOne.removeEventListener("click", test1, true);
    } else {
        rybNavOffOn = true;
        rybBoxShadowContain.style.cssText = "display:none;";
        document.removeEventListener("click", test1, true);
    }
}
document.addEventListener("click", test, true);