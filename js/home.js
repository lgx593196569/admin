var chageurl = document.getElementsByClassName('chageurl')[0];
var iconsvg = document.getElementsByClassName('iconsvg')[0];
var lis = chageurl.getElementsByTagName('li');
var xx = true;
var zz = true;
for(var i = 0;i < lis.length-1;i++){
    lis[i].onclick = function(){
        for(var j = 0;j < lis.length-1;j++){
            lis[j].className = "";
        }
        // console.log($(this).attr("data-url"));
        iframe.src = $(this).attr("data-url");
        this.className = "active";
    }
}
iconsvg.onclick = function(){
    if(xx){
        $(".biaoqian").show();
        $(".addmd").hide();
        $(".add").hide();
        $(".userfile").hide();
        users = true;
        adds = true;
        xx = false;
        zz = true;
    }else{
        $(".biaoqian").hide();
        xx = true;
    }
}
more.onclick = function(){
    if(zz){
        $(".addmd").show();
        $(".biaoqian").hide();
        $(".add").hide();
        $(".userfile").hide();
        users = true;
        adds = true;
        xx = true;
        zz = false;
    }else{
        $(".addmd").hide();
        zz = true;
    }
}
var bt = true;
$(".bianqian").on("click",function(){
    if(bt){
        this.style.backgroundPosition = '-23px -24px';
        $(".ziacon").hide();
        $(".zia").css("background-position","-231px -2390px");
        $(".huodong").css("background-position","-195px -4px");
        $(".zuijin").css("background-position","-170px -3px");
        bt = false;
        zia = true;
        hd = true;
        zj = true;
    }else{
        this.style.backgroundPosition = '-5px -24px';
        bt = true;
    }
    
})
var zia = true;
$(".zia").on("click",function(){
    if(zia){
        this.style.backgroundPosition = '-258px -2390px';
        $(".bianqian").css("background-position","-5px -24px");
        $(".huodong").css("background-position","-195px -4px");
        $(".zuijin").css("background-position","-170px -3px");
        $(".ziacon").show();
        setTimeout(function(){
            $(".ziacon").css("opacity","1");
        },100);
        zia = false;
        bt = true;
        hd = true;
        zj = true;
    }else{
        this.style.backgroundPosition = '-231px -2390px';
        $(".ziacon").css("opacity","0");
        setTimeout(function(){
            $(".ziacon").hide(); 
         },500);
        zia = true;
    }
    
})
var hd = true;
$(".huodong").on("click",function(){
    if(hd){
        this.style.backgroundPosition = '-245px -4px';
        $(".bianqian").css("background-position","-5px -24px");
        $(".zia").css("background-position","-231px -2390px");
        $(".zuijin").css("background-position","-170px -3px");
        $(".ziacon").hide();
        $(".hdcon").show();
        setTimeout(function(){
            $(".hdcon").css("opacity","1");
        },100);
        hd = false;
        zia = true;
        bt = true;
        zj = true;
    }else{
        this.style.backgroundPosition = '-195px -4px';
        $(".hdcon").css("opacity","0");
        setTimeout(function(){
           $(".hdcon").hide(); 
        },500);
        hd = true;
        
    }
    
})
var zj = true;
$(".zuijin").on("click",function(){
    if(zj){
        this.style.backgroundPosition = '-220px -3px';
        $(".bianqian").css("background-position","-5px -24px");
        $(".zia").css("background-position","-231px -2390px");
        $(".huodong").css("background-position","-195px -4px");
        $(".ziacon").hide();
        hd = true;
        zia = true;
        bt = true;
        zj = false;
        $(".zia").css("background-position","-231px -2390px");
    }else{
        this.style.backgroundPosition = '-170px -3px';
        zj = true;
        
    }
})
$(".sousuo").on("click",function(){
    $(".banben").hide();
    $(".addmd").hide();
    $(".biaoqian").hide();
    $(this).hide();
    $(".tianjia").css("margin-left",'24px');
    $(".kuang").show();
    $(".add").hide();
    $(".userfile").hide();
    users = true;
    xx = true;
    zz = true;
    adds = true;
})
$(".close").on("click",function(){
    $(".sousuo").show();
    $(".banben").show();
    $(".kuang").hide();
    $(".tianjia").css("margin-left",'0');
})
var adds = true;
$(".tianjia").on("click",function(){
    if(adds){
        $(".add").show();
        $(".biaoqian").hide();
        $(".addmd").hide();
        $(".userfile").hide();
        users = true;
        xx = true;
        zz = true;
        adds = false;
    }else{
        $(".add").hide(); 
        adds = true;
    }
})
var _height = document.documentElement.clientHeight;
var _width = document.documentElement.clientWidth;
// console.log(_height);
window.onload = function () {
    $("#iframe").css("height", _height* 0.92 + "px");
}
window.onresize = function () {
    _height = document.documentElement.clientHeight;
    _width = document.documentElement.clientWidth;
    $("#iframe").css("height", _height * 0.92 + "px");
}
$("#chuangjian").on("click",function(){
    $(".yqfather").show();
    setTimeout(function(){
        $(".yqfather").css("opacity","1");
    },100)
    $(".biaoqian").hide();
    xx = true;
})
$(".closed").on("click",function(){
    $(".yqfather").css("opacity","0");
    setTimeout(function(){
        $(".yqfather").hi;
    },500)
})
$(".btn1").on("click",function(){
    $(".yqfather").css("opacity","0");
    setTimeout(function(){
        $(".yqfather").hi;
    },500)
})
$(".btn2").on("click",function(){
    $(".yqfather").css("opacity","0");
    setTimeout(function(){
        $(".yqfather").hi;
    },500)
})
$(".convalue").on("focus",function(){
    $(this).parent().css("border-bottom","1px solid #69cff3");
})
$(".convalue").on("blur",function(){
    $(this).parent().css("border-bottom","none");
})

var checked = document.getElementsByClassName("checked");
var check;
for(var i = 0;i < checked.length;i++){   
    checked[i].onclick = function(){
        console.log($(this).attr("data-check"))
        check = $(this).attr("data-check");
        if(check == 'true'){
            $(this).next().css("background-position","-76px -588px");
            $(this).attr("data-check",false);
        }else{
            $(this).next().css("background-position","-55px -588px");
            $(this).attr("data-check",true);
        }       
    }
}
$("#guanli").on("click",function(){
    $(".yqzufather").show();
    setTimeout(function(){
        $(".yqzufather").css("opacity","1");
    },100)
    $(".biaoqian").hide();
})
$(".closed1").on("click",function(){
    $(".yqzufather").css("opacity","0");
    setTimeout(function(){
        $(".yqzufather").hide();
    },500)
    xx = true;
})
var users = true;
$(".learn").on("click",function(){
    if(users){
        $(".userfile").show();
        $(".biaoqian").hide();
        $(".addmd").hide();
        $(".add").hide();
        users = false;
        adds = true;
        xx = true;
        zz = true;
    }else{
        $(".userfile").hide();
        users = true;
    }
})
$(".ctrls").on("click",function(){
    $(".bigcon").show();
    setTimeout(function(){
        $(".bigcon").css("opacity","1");
    },100)
})
$(".closed").on("click",function(){
    $(".bigcon").css("opacity","0");
    setTimeout(function(){
        $(".bigcon").hide();
    },500)
})
var lt = true;
$(".lt").on("click",function(){
    if(lt){
        $("#ltlxr").show();
        $(this).css("color","#208aed");
        $("#ltlxr1").hide();
        $(".lxr").css("color","#b2b2b2");
        lt1 = true;
        lt = false;
    }else{
        $("#ltlxr").hide();
        $(this).css("color","#b2b2b2");
        lt = true;
    }   
})
var lt1 = true;
$(".lxr").on("click",function(){
    if(lt1){
        $("#ltlxr1").show();
        $(this).css("color","#208aed");
        $("#ltlxr").hide();
        $(".lt").css("color","#b2b2b2");
        lt = true;
        lt1 = false;
    }else{
        $("#ltlxr1").hide();
        $(this).css("color","#b2b2b2");
        lt1 = true;
    }
})
var sx = true;
$("#suoxiao").on("click",function(){
    if(sx){
        $("#ltlxr").show();
        $(".lt").css("color","#208aed");
        $("#ltlxr1").hide();
        $(".lxr").css("color","#b2b2b2");
        sx1 = true;
        sx = false;
        lt = true;
    }else{
        $("#ltlxr").hide();
        $(".lt").css("color","#b2b2b2");
        sx = true;
    }   
})
var sx1 = true;
$("#suoxiao1").on("click",function(){
    if(sx1){
        $("#ltlxr1").show();
        $(".lxr").css("color","#208aed");
        $("#ltlxr").hide();
        $(".lt").css("color","#b2b2b2");
        sx = true;
        sx1 = false;
        lt1 = true;
    }else{
        $("#ltlxr1").hide();
        $(".lxr").css("color","#b2b2b2");
        sx1 = true;
    }
})
$("#sousuo").on("click",function(){
    $(".ziacon").css("opacity","0");
    setTimeout(function(){
        $(".ziacon").hide(); 
     },500);
    zia = true;
})
$(".closeds").on("click",function(){
    $(".hdcon").css("opacity","0");
    setTimeout(function(){
        $(".hdcon").hide(); 
     },500);
    hd = true;
})