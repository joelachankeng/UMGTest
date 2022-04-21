<?php

/**
 * Section Heading Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$block_name = "section-heading";

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
$heading = get_field('heading');
$subtitle = get_field('subtitle');

?>

<section class="block-section-heading <?php echo $className; ?>" id="<?php echo $id; ?>">
    <div class="container mx-auto">
        <h2 class="section-title">
            <?php echo $heading; ?>
        </h2>
        <?php if(!empty($subtitle)) : ?>
            <p class="subtitle">
                <?php echo $subtitle; ?>
            </p>    
        <?php endif; ?>
    </div>
</section>