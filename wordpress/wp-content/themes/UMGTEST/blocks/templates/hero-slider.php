<?php

/**
 * Hero Slider Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$block_name = "hero-slider";

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
<section class="block-hero-slider <?php echo $className; ?>" id="<?php echo $id; ?>">
    <div class="container mx-auto">
        <div class="hero-slider overflow-hidden rounded-2xl">
            <?php foreach($slides as $slide): ?>
                <div class="slide flex flex-col justify-center items-center text-center bg-cover bg-no-repeat bg-center " 
                    style="background-image: url(' <?php echo $slide['background_image']; ?>')">
                    <h1 class="slide-title">
                        <?php echo $slide['title']; ?>
                    </h1>
                    <div class="content">
                        <?php echo $slide['description']; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>


