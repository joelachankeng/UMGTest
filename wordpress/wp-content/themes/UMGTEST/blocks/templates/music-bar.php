<?php

/**
 * Music Bar Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$block_name = "music-bar";

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
$display_music_bar = get_field('display_music_bar');
if(!$display_music_bar) {
    return;
}

?>

<section class="block-music-bar <?php echo $className; ?>" id="<?php echo $id; ?>">
    <div class="container mx-auto rounded-2xl bg-white">
        <div class="info-column w-full">
            <div class="music-image">
                <img src="/wp-content/uploads/2022/04/main-album-img-7.jpg" alt="Album Cover">
            </div>
            <a class="song-title">
                Black Hole Sun
            </a>
            <a class="album-title"> 
                The Eldritch Truth
            </a>
        </div>
        <div class="controls-column w-full flex">
            <div class="music-time w-full">
                <p class="current-time">00:00</p> /
                <p class="total-time">00:21</p>
            </div>
            <div class="control-container w-full">
                <button class="song-prev">
                    <i class="fal fa-step-backward"></i>
                </button>
                <button class="song-play">
                    <i class="fal fa-play"></i>
                    <i class="fal fa-pause"></i>
                </button>
                <button class="song-next">
                    <i class="fal fa-step-forward"></i>
                </button>
            </div>
            <div class="volume-controls w-full">
                <button class="song-mute">
                    <i class="fal fa-volume"></i>
                    <i class="fal fa-volume-slash"></i>
                </button>
                <div class="volume-bar">
                    <div class="volume-bar-icon"></div>
                    <div class="volume-bar-progress"></div>
                </div>
            </div>
        </div>

    </div>
</section>