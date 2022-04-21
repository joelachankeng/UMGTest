<?php

/**
 * Discography Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$block_name = "discography";

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
$artist_id = get_field('artist_id');

?>

<section class="block-discography <?php echo $className; ?>" id="<?php echo $id; ?>"
        data-artist-id="<?php echo $artist_id; ?>"
>
    <div class="container mx-auto">
        <ul class="albums"></ul>
        <div class="view-more-container flex justify-center w-full my-2 ">
            <a href="#" class="view-more button hidden">View More</a>
        </div>
       
    </div>
</section>