$(document).ready(function () {
    $('.control-next').click(function (event) {
        var slide_sau = $('.active').next();
        $('.active').addClass('bien-mat-ben-trai')
        slide_sau.addClass('active').addClass('di-vao-ben-phai')
    });
});