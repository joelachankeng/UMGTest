<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

	<div id="primary home-page">
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