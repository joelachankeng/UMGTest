<?php

/**
 * Youtube Slider Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$block_name = "youtube-slider";

// Create id attribute allowing for custom "anchor" value.
$id = $block_name.'-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className"
$className = $block_name;
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}

// Load values and assign defaults.
$slides = get_field('slides');

?>

<section class="block-youtube-slider <?php echo $className; ?>" id="<?php echo $id; ?>">
    <div class="">
        <div class="video-slider">
            <?php foreach($slides as $slide): 
                preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", $slide['youtube_link'], $matches);
                if(!isset($matches[0])) {
                    continue;
                }
                $videoID = $matches[0];
                $videoThumbnail = "https://img.youtube.com/vi/" . $videoID . "/maxresdefault.jpg";
           ?>
                <div class="slide" data-youtube-id="<?php echo $videoID; ?>"
                    style="background-image: url('<?php echo $videoThumbnail; ?>')"
                >
                    <button class="play-video">
                        <i class="fal fa-play"></i>
                        <i class="fa fa-play filled"></i>
                    </button>
                </div>
            <?php endforeach; ?>
           
        </div>
    </div>
    <div class="youtube-modal hidden">
        <div class="container">
            <button class="exit-modal">
                <i class="fal fa-times"></i>
            </button>
            <div class="video-content">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/" frameborder="0" allowfullscreen></iframe>
            </div>

        </div>
    </div>
</section>
