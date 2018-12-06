$(document).click(function () {
    $(".h_lists").hide();
    $("#toolsId").hide();
});

$("#stage").click(function (event) {
    event.stopPropagation(); //不在派发事件
    if ($(".h_lists").css("display") == "none") {
        $(".h_lists").css("display", "block");
    }
});
$("#cv_tools").click(function (event) {
    event.stopPropagation(); //不在派发事件
    if ($("#toolsId").css("display") == "none") {
        $("#toolsId").css("display", "block");
    }
});
var flag = true;
$('.h_box').on('click', function () {
    fn();
})
function fn() {
    if (flag) {
        if ($("#optionsHolder").css("display") == "none") {
            $("#optionsHolder").css("display", "block");
        }
        flag = false;
    } else {
        $("#optionsHolder").hide();
        flag = true;
    }
}

$('.mt12').on('click', function () {
    $('#filter').show();
    $('.mt12').hide();
});

$('.setupsearch').on('input', function () {
    var val = $('.setupsearch').val();
    if (val == '') {
        $('#search_clear').hide();
    } else {
        $('#search_clear').show();
    }
})

$('#search_clear').on('click', function () {
    $('.setupsearch').val('');
    $(this).hide();
})