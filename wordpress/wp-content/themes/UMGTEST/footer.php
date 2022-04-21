<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $custom_logo_url = wp_get_attachment_image_src( $custom_logo_id , 'full' )[0];
?>


    <footer class="footer">
        <div class="container mx-auto">
            <div class="copyright-column w-full">
                <div class="logo">
                        <a href="/">
                            <img src="<?php echo $custom_logo_url;?>" alt="<?php echo get_bloginfo('name');?> " class="h-full w-full object-contain">
                        </a>
                </div>
                <p class="copyright-text">
                    © <?php echo date("Y"); ?> Joelparkin Achankeng, All Rights Reserved
                </p>
            </div>
            <div class="social-menu-column w-full">
                <?php
                    wp_nav_menu( array( 
                        'theme_location' => 'social-menu', 
                        'container_class' => 'social-menu',
                        'menu_class' => 'flex items-center ' 
                        ) 
                    ); 
                ?>
            </div>

        </div>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>