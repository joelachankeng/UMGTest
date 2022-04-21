// Music bar Volume control
//Slider mousedown (with mousemove and mouseup) handler.
$('.block-music-bar .volume-bar ').on('mousedown', function (e) {
    
    if (e.which == 1) {
        //Vars.
        var $bar = $('.block-music-bar .volume-bar .volume-bar-icon');
        var $fill = $('.block-music-bar .volume-bar .volume-bar-progress');
        var barWidth = $bar.outerWidth();
        var sliderWidth = $(this).outerWidth();
        var sliderX = $(this).offset().left;
        var downX = e.clientX - sliderX; //mousedown xpos within slider
        var multiplier = 100 / sliderWidth;
        var curPercent = downX * multiplier;
        // console.log('down: '+downX+', '+curPercent);
        moveSliderBar($bar, $fill, curPercent, barWidth);
        //Window mousemove handler.
        $(window).on('mousemove.slider', function (e) {
                var diffX = (e.clientX - sliderX) - downX;
                var newPercent = curPercent + (diffX * multiplier);
                if (newPercent <= 0) {
                    newPercent = 0;
                }
                if (newPercent >= 100) {
                    newPercent = 100;
                }
                // console.log('move: '+newPercent+', '+diffX);
                moveSliderBar($bar, $fill, newPercent, barWidth);
            })
            //Window mouseup handler.
            .on('mouseup.slider', function (e) {
                // console.log('up');
                $(window).off('mousemove.slider mouseup.slider');
                $('.block-music-bar .volume-bar-progress').trigger('volumeChanged');
                // console.log($fill.width(), $('.volume-bar').width());
                // console.log(($fill.width()* 100 / $('.volume-bar').width()) + '%');
            });

        
    }
});

//Moves slider bar.
function moveSliderBar($bar, $fill, percent, barWidth) {
    $bar.css('left', 'calc(' + percent + '% - ' + (barWidth / 2) + 'px)');
    $fill.css('width', 'calc(' + percent + '% - ' + (barWidth / 2) + 'px)');
    
}