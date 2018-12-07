var off = true;
document.onclick = function (evt) {
    var event = evt || window.event;
    var a = event.target || event.srcElement;
    if (a.id == "rybclick") {
        $("#rybbian").css("display", "block");
        $("#rybBoxShadowMask").css("display", "none");
        $("#rybBoxShadowContain").css("display", "none");
    } else if (a.id == "rybNavOne") {
        if (off) {
            off = false;
            $("#rybBoxShadowContain").css("display", "block");
            $("#rybbian").css("display", "none");
            $("#rybBoxShadowMask").css("display", "none");
        } else {
            $("#rybbian").css("display", "none");
            $("#rybBoxShadowMask").css("display", "none");
            $("#rybBoxShadowContain").css("display", "none");
            off = true;
        }
    } else if (a.id == "rybTopNavDaoru") {
        $("#rybBoxShadowMask").css("display", "block");
        $("#rybbian").css("display", "none");
        $("#rybBoxShadowContain").css("display", "none");
    } else {
        off = true;
        $("#rybbian").css("display", "none");
        $("#rybBoxShadowMask").css("display", "none");
        $("#rybBoxShadowContain").css("display", "none");
    }
};
$("#rybContentForm ul li input").on("click", function () {
    var nextHeight = parseInt($(this).next().next().height());
    var a = $(this).parent("li").height();
    if ($(this).prop("checked")) {
        a = a + nextHeight;
        $(this).parent("li").css("height", a + "px");
    } else {
        $(this).parent("li").css("height", "29px");
    }
    for (var i = 0; i < $("#rybContentForm ul li input").length; i++) {
        if ($(this).prop("checked") == true) {
            $(".ryb_lv_filter_options").css("display", "block");
            break;
        } else {
            $(".ryb_lv_filter_options").css("display", "none");
            break;
        }
    }
});
$(document).ready(function () {
    $(".newwhitebtn").click(function () {
        $(".ryb_boxShadowMask").slideDown(500);
    });
    $("#rybclick").click(function () {
        $("#rybbian").slideDown(500);
    });
});
var c = document.documentElement.clientHeight;
window.onload = function () {
    $("#rybContentForm").css("height", c * 0.9 + "px");
    $("#rybContentForm ul").css("height", "80%");
}
window.onresize = function () {
    c = document.documentElement.clientHeight;
    console.log(1);
    $("#rybContentForm").css("height", c * 0.9 + "px");
    console.log($("#rybContentForm").height());
    $("#rybContentForm ul").css("height", "80%");
}