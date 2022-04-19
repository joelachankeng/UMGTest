<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 */


	$custom_logo_id = get_theme_mod( 'custom_logo' );
	$custom_logo_url = wp_get_attachment_image_src( $custom_logo_id , 'full' )[0];


?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html <?php language_attributes(); ?> xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<link rel="profile" href="http://gmpg.org/xfn/11">	
	<?php 
		wp_head();
		wp_site_icon();

	?>
	<title>
		<?php 
			echo get_bloginfo('name'); 
			if ( is_front_page() || is_home() ) {

				
			} else {
				echo " - ".get_the_title();
			}
		?>
	</title>
</head>
<body class="<?php if ( is_front_page() ) { echo "page-homepage";}?> <?php  echo esc_attr( implode( ' ', get_post_class())) ; ?> " id="post-<?php echo the_ID(); ?>">
	<header>
		<div class="container mx-auto flex items-center ">
			<div class="logo">
				<img src="<?php echo $custom_logo_url;?>" alt="<?php echo get_bloginfo('name');?> " class="h-full w-full object-contain">
			</div>
			<nav class="header-navigation w-full">
				<?php
					wp_nav_menu( array( 
						'theme_location' => 'main-menu', 
						'container_class' => 'main-menu',
						'menu_class' => 'flex items-center justify-between '
						) 
					); 
				?>
			</nav>

		</div>
	</header>