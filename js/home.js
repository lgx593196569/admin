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
        xx = false;
    }else{
        $(".biaoqian").hide();
        xx = true;
    }
}
more.onclick = function(){
    if(zz){
        $(".addmd").show();
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
        bt = false;
    }else{
        this.style.backgroundPosition = '-5px -24px';
        bt = true;
    }
    
})
var zia = true;
$(".zia").on("click",function(){
    if(zia){
        this.style.backgroundPosition = '-258px -2390px';
        zia = false;
    }else{
        this.style.backgroundPosition = '-231px -2390px';
        zia = true;
    }
    
})
var hd = true;
$(".huodong").on("click",function(){
    if(hd){
        this.style.backgroundPosition = '-195px -4px';
        hd = false;
    }else{
        this.style.backgroundPosition = '-245px -4px';
        hd = true;
    }
    
})
var zj = true;
$(".zuijin").on("click",function(){
    if(zj){
        this.style.backgroundPosition = '-170px -3px';
        zj = false;
    }else{
        this.style.backgroundPosition = '-220px -3px';
        zj = true;
    }
})