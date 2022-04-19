<?php
/**
 * Template Name: Full Width No Title
 */

get_header(); ?>

<div id="primary">
	<main id="main" role="main">
		<?php
		// Start the loop.
		while ( have_posts() ) :
			the_post();

			// Include the page content template.
            get_template_part( 'template-parts/content', 'page-fullwidth' );			
            
			// End of the loop.
		endwhile;
		?>

	</main><!-- .site-main -->	

</div><!-- .content-area -->

<?php get_footer(); ?>
