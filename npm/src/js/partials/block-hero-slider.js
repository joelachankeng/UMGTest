// Block Hero Slider Functionality

let $heroSliders = $('.block-hero-slider');
if ($heroSliders.length) {
    $heroSliders.each(function (index, value) {
        $(this).find('.hero-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            prevArrow: '<button class="fal fa-chevron-circle-left slick-prev"></button>',
            nextArrow: '<button class="fal fa-chevron-circle-right slick-next"></button>',
        });
    });
}

