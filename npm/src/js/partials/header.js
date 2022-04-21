// Add Sticky Header
let headerOffsetTop = $('header').offset().top;

$(window).scroll(function () {

    if ($(this).scrollTop() >= headerOffsetTop) {
        $('header').addClass('pre-sticky').addClass('sticky');
    } else {
        $('header').removeClass('pre-sticky').removeClass('sticky');
    }

});


// Smooth Scrolling for anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    if($.attr(this, 'href') == "#") {
        return;
    }
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 200
    }, 500);
});

// Mobile Menu Functionality
$('.mobile-menu').click(function () {
    $(this).toggleClass('menu-open');
    $('header .header-mobile-navigation').slideToggle();
    if ($(this).hasClass('menu-open')) {

    } else {

    }
});

// Close mobile menu if browser resizes
$(window).on('resize', function () {
    if ($(this).width() >= 769) {
        if ($('.mobile-menu').hasClass('menu-open')) {
            $('.mobile-menu').removeClass('menu-open');
            $('header .header-mobile-navigation').slideUp();
        }
    }
});