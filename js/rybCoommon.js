var off = true;
$("#quanxuan2").on("click", function () {
    if ($("#quanxuan2").prop("checked") == true) {
        $("#tableContent input[type='checkbox']").prop("checked", true);
        $("#tableContent tr").css("background", "#fff7ea");
    } else {
        $("#tableContent input[type='checkbox']").prop("checked", false);
        $("#tableContent tr").css("background", "#fff")
    }
});
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
        $(this).next().next().css("display", "block");
    } else {
        $(this).next().next().css("display", "none");
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
var b = document.documentElement.clientWidth;
window.onload = function () {
    $("#rybContentForm").css("height", c * 0.9 + "px");
    $(".ryb_contentList").css("height", c * 0.9 + "px");
    $(".ryb_contentList").css("width", b - 250 + "px");
    $(".ryb_contentList2").css("height", c * 0.9 + "px");
    $(".ryb_contentList2").css("width", b - 250 + "px");
    $("#rybContentForm ul").css("height", "80%");
}
window.onresize = function () {
    c = document.documentElement.clientHeight;
    b = document.documentElement.clientWidth;
    $("#rybContentForm").css("height", c * 0.9 + "px");
    $(".ryb_contentList").css("height", c * 0.9 + "px");
    $(".ryb_contentList").css("width", b - 250 + "px");
    $(".ryb_contentList2").css("height", c * 0.9 + "px");
    $(".ryb_contentList2").css("width", b - 250 + "px");
    $("#rybContentForm ul").css("height", "80%");
}
$("#qingkong").on("click", function () {
    $("input[type='checkbox']").prop("checked", false);
    $("div[class='ryb_lv_filter_options']").css("display", "none");
    $(".ryb_contentForm ul li").css("height", "29px");
    $(".ryb_facet").css("display", "none");
});
