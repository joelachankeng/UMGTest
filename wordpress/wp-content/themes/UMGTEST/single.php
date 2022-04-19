<?php
/**
 * The template for displaying posts.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

<div id="primary">
	<main id="main" role="main">
		<?php
		// Start the loop.
		while ( have_posts() ) :
			the_post();

			// Include the page content template.
            get_template_part( 'template-parts/content', 'post' );			
            
			// End of the loop.
		endwhile;
		?>

	</main><!-- .site-main -->	

</div><!-- .content-area -->

<?php get_footer(); ?>
