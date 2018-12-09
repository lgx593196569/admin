var chageurl = document.getElementsByClassName('chageurl')[0];
var iconsvg = document.getElementsByClassName('iconsvg')[0];
var lis = chageurl.getElementsByTagName('li');
var xx = true;
var zz = true;
for (var i = 0; i < lis.length - 1; i++) {
    lis[i].onclick = function () {
        for (var j = 0; j < lis.length - 1; j++) {
            lis[j].className = "";
        }
        // console.log($(this).attr("data-url"));
        iframe.src = $(this).attr("data-url");
        this.className = "active";
    }
}
iconsvg.onclick = function () {
    if (xx) {
        $(".biaoqian").show();
        $(".addmd").hide();
        $(".add").hide();
        adds = true;
        xx = false;
        zz = true;
    } else {
        $(".biaoqian").hide();
        xx = true;
    }
}
more.onclick = function () {
    if (zz) {
        $(".addmd").show();
        $(".biaoqian").hide();
        $(".add").hide();
        adds = true;
        xx = true;
        zz = false;
    } else {
        $(".addmd").hide();
        zz = true;
    }
}
var bt = true;
$(".bianqian").on("click", function () {
    if (bt) {
        this.style.backgroundPosition = '-23px -24px';
        bt = false;
    } else {
        this.style.backgroundPosition = '-5px -24px';
        bt = true;
    }

})
var zia = true;
$(".zia").on("click", function () {
    if (zia) {
        this.style.backgroundPosition = '-258px -2390px';
        zia = false;
    } else {
        this.style.backgroundPosition = '-231px -2390px';
        zia = true;
    }

})
var hd = true;
$(".huodong").on("click", function () {
    if (hd) {
        this.style.backgroundPosition = '-195px -4px';
        hd = false;
    } else {
        this.style.backgroundPosition = '-245px -4px';
        hd = true;
    }

})
var zj = true;
$(".zuijin").on("click", function () {
    if (zj) {
        this.style.backgroundPosition = '-170px -3px';
        zj = false;
    } else {
        this.style.backgroundPosition = '-220px -3px';
        zj = true;
    }
})
$(".sousuo").on("click", function () {
    $(".banben").hide();
    $(".addmd").hide();
    $(".biaoqian").hide();
    $(this).hide();
    $(".tianjia").css("margin-left", '24px');
    $(".kuang").show();
    $(".add").hide();
    xx = true;
    zz = true;
    adds = true;
})
$(".close").on("click", function () {
    $(".sousuo").show();
    $(".banben").show();
    $(".kuang").hide();
    $(".tianjia").css("margin-left", '0');
})
var adds = true;
$(".tianjia").on("click", function () {
    if (adds) {
        $(".add").show();
        $(".biaoqian").hide();
        $(".addmd").hide();
        xx = true;
        zz = true;
        adds = false;
    } else {
        $(".add").hide();
        adds = true;
    }
})
$("#chuangjian").on("click", function () {
    $(".yqfather").css("display", "block");
    $(".biaoqian").hide();
    xx = true;
})
$(".closed").on("click", function () {
    $(".yqfather").css("display", "none");
})
$(".btn1").on("click", function () {
    $(".yqfather").css("display", "none");
})
$(".btn2").on("click", function () {
    $(".yqfather").css("display", "none");
})
$(".convalue").on("focus", function () {
    $(this).parent().css("border-bottom", "1px solid #69cff3");
})
$(".convalue").on("blur", function () {
    $(this).parent().css("border-bottom", "none");
})

var checked = document.getElementsByClassName("checked");
var check;
for (var i = 0; i < checked.length; i++) {
    checked[i].onclick = function () {
        console.log($(this).attr("data-check"))
        check = $(this).attr("data-check");
        if (check == 'true') {
            $(this).next().css("background-position", "-76px -588px");
            $(this).attr("data-check", false);
        } else {
            $(this).next().css("background-position", "-55px -588px");
            $(this).attr("data-check", true);
        }


    }

}