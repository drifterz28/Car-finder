$(function () {
    'use strict';
    var el_pos = $('.js-fixed').offset();
    console.log(el_pos);
    $(window).scroll(function() {
        if ($(this).scrollTop() > el_pos.top) {
            $('.js-fixed').addClass('fixed').css({'left': el_pos.left, 'margin-top': 0});
        } else {
            $('.js-fixed').removeClass('fixed').css({'margin-top': '-40px'});
        }
    });
});
