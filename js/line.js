$("#stage").click(function (event) {
    fn(".h_lists");
});
$("#cv_tools").click(function (event) {
    fn("#toolsId");
});
var flag = true;
$('.h_box').on('click', function () {
    fn("#optionsHolder");
})
function fn(obj) {
    if (flag) {
        if ($(obj).css("display") == "none") {
            $(obj).css("display", "block");
        }
        flag = false;
    } else {
        $(obj).hide();
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

$(".check_box").change(function () {
    var check = $(this).is(":checked");
    console.log(check);
    if (check == true) {
        $(this).next().next().slideDown("slow");
        $('#filters').show();
        // $('.down').css('display', 'block');
    } else {
        $(this).next().next().slideUp("slow");
        // $('.down').css('display', 'none');
        $('#filters').hide();
    }
})