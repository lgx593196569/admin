// $("#btn1").on("click",function(){
//     $(".bb_one input").css("check")
// })

$(".list ul li a").on("click",function(){
    $(this).css(
        "color","#d4dbe1"
    )
})
$(".list ul li").on("click",function(){
    $(this).css("background-color","#68abe3");
    $(this).children(css("color","#d4dbe1"));
})