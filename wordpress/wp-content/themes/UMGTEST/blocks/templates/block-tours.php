<?php

/**
 * Tours Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$block_name = "tours";

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
$tours = get_field('tours');

?>

<section class="block-tour-list <?php echo $className; ?>" id="<?php echo $id; ?>">
    <div class="container mx-auto">
        <ul class="tours">
            <?php foreach($tours as $tour):
                $tour_date = DateTime::createFromFormat('d/m/Y', $tour['date'])->format('d M');
            ?>
                <li class="tour">
                    <p class="tour-date">
                        <?php echo $tour_date; ?>
                    </p>
                    <div class="tour-location">
                        <p class="tour-building">
                            <?php echo $tour['address']; ?>
                        </p>
                        <div class="flex">
                            <p class="tour-city">
                                <?php echo $tour['state']; ?> 
                            </p>
                            <p class="tour-country">
                                <?php echo $tour['country']; ?>
                            </p>
                        </div>
                    </div>
                    <a href="<?php echo $tour['ticket_link']; ?>" class="tour-cta button button-sm">Buy Tickets</a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</section>