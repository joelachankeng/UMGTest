// discography animation functionality
function startFloatAnimation() {
    $($(".discography .container .album").get().reverse()).each(function(index, value) {
        setTimeout(function() {
            $(value).addClass('floating');
        }, 1000 * index);
    });
}
$('.block-discography').bind('discographyUpdated', function(){
    startFloatAnimation();
});


$(".discography .container .album").mouseenter(function() {
    $(this).removeClass('floating');
});
$(".discography .container .album").mouseleave(function() {
    $(this).addClass('floating');
});

