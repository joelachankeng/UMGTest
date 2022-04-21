let $youtubeSlider = $('.youtube-slider');
if ($youtubeSlider.length) {
    $youtubeSlider.each(function (index, value) {
        $(this).find('.video-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '200px',
            centerMode: true,
            prevArrow: '<button class="fal fa-chevron-circle-left slick-prev"></button>',
            nextArrow: '<button class="fal fa-chevron-circle-right slick-next"></button>',
            responsive: [{
                    breakpoint: 769,
                    settings: {
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0',
                    }
                },
            ]
        });
    });
}

// get youtube to thumbnail
// let $youtube_url = "https://www.youtube.com/watch?v=ED8LlE7mDgE";
// let $youtube_thumbnail = "https://img.youtube.com/vi/"+ youtube_parser($youtube_url) +"/maxresdefault.jpg";
// console.log($youtube_thumbnail);
// Parse youtube video url for ID
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

// open video modal when clicked
$('.youtube-slider .play-video').click(function() {
    let $videoID = $(this).parent().attr('data-youtube-id');
    if (typeof $videoID !== typeof undefined && $videoID !== false) {    
        $('.youtube-modal iframe').attr('src', 'https://www.youtube.com/embed/'+ $videoID );
        $('.youtube-modal').slideToggle(function() {
            if ($(this).is(':visible'))
                $(this).css('display','flex');
        });
    }
});

$('.youtube-slider .youtube-modal .exit-modal').click(function() {
    $('.youtube-modal').slideToggle();
}); 