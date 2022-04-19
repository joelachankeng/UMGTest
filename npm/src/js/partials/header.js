// Add Sticky Header
let headerOffsetTop = $('header').offset().top;
$(window).scroll(function () {

    if ($(this).scrollTop() >= headerOffsetTop) {
        $('header').addClass('pre-sticky').addClass('sticky');
    } else {
        $('header').removeClass('pre-sticky').removeClass('sticky');
    }

});