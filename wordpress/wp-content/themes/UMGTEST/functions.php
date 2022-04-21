<?php

    // Add ACF custom blocks
    require_once "blocks/blocks.php";

    // Register WP menus
    function register_my_menus() {
        register_nav_menus(
            array(
            'main-menu' => __( 'Main Menu' ),
            'social-menu' => __( 'Social Menu'),
            'footer-menu' => __( 'Footer Menu'),
            )
        );
    }
    add_action( 'init', 'register_my_menus' );

    // Add Custom CSS and JS files
    function theme_enqueue_scripts() {
        wp_enqueue_style('main-css', get_stylesheet_directory_uri() . '/dist/main.min.css', false, null);
        wp_enqueue_script('jquery-js','https://code.jquery.com/jquery-3.6.0.min.js', [], null, false);
        wp_enqueue_script('main-js', get_stylesheet_directory_uri() . '/dist/main.min.js', [], null, true);
    }
    add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts');

    // Add Custom Logo Theme support
    add_theme_support( 'custom-logo', array(
        'height'      => 500,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
    ) );

    // Allow SVGs uploads
    function custom_mime_types( $mimes ) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }
    add_filter( 'upload_mimes', 'custom_mime_types' );

    add_filter( 'wp_check_filetype_and_ext', function( $mime, $file, $filename, $mimes ) {
        $wp_filetype = wp_check_filetype( $filename, $mimes );
        if ( in_array( $wp_filetype['ext'], [ 'svg' ] ) ) {
            $mime['ext']  = true;
            $mime['type'] = true;
        }
        return $mime;
    }, 10, 4 );

    
?>