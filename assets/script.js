$('body').on('click', '.button', function () {
    $('.wrapper').toggleClass("directionChange");
});

$('body').on('click', '.icon', function () {
    $('.icon').removeClass('active');
    $(this).addClass('active');
});