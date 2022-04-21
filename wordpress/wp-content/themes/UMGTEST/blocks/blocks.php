<?php

    //Create Block Category for UMG
    function umg_block_category( $categories, $post ) {
        return array_merge(
            array(
                array(
                    'slug' => 'umg',
                    'title' => 'UMG',
                ),
            ),
            $categories,
        );
    }
    add_filter( 'block_categories_all', 'umg_block_category', 10, 2);

    //Register Blocks
    add_action('init', 'register_my_blocks');
    function register_my_blocks() {

        // Check function exists.
        if( function_exists('acf_register_block_type') ) {

            // register the hero slider block.
            acf_register_block_type(array(
                'name'              => 'Hero Slider',
                'title'             => __('Hero Slider'),
                'description'       => __('A Hero Slider block.'),
                'render_template'   => dirname(__FILE__) .'/templates/hero-slider.php',
                'category'          => 'umg',
                'icon'              => 'slides',
                'keywords'          => array( 'hero', 'slider' ),
                'mode'	            => 'edit',
                'supports'          => array(
                    'anchor'        => true,
                    'mode'          => false,
                    'align'         =>false
                ),
            ));

            acf_register_block_type(array(
                'name'              => 'Music Bar',
                'title'             => __('Music Bar'),
                'description'       => __('A Music Bar block.'),
                'render_template'   => dirname(__FILE__) .'/templates/music-bar.php',
                'category'          => 'umg',
                'icon'              => 'audio',
                'keywords'          => array( 'music', 'bar' ),
                'mode'	=> 'edit',
                'supports' => array(
                    'anchor'        => true,
                    'mode'          => false,
                    'align'         =>false
                ),
            ));

            acf_register_block_type(array(
                'name'              => 'Section Heading',
                'title'             => __('Section Heading'),
                'description'       => __('A Section Heading block.'),
                'render_template'   => dirname(__FILE__) .'/templates/section-heading.php',
                'category'          => 'umg',
                'icon'              => 'dashicons-heading',
                'keywords'          => array( 'Section Heading', ),
                'mode'	=> 'edit',
                'supports' => array(
                    'anchor'        => true,
                    'mode'          => false,
                    'align'         =>false
                ),
            ));

            acf_register_block_type(array(
                'name'              => 'Discography',
                'title'             => __('Discography'),
                'description'       => __('A Discography block.'),
                'render_template'   => dirname(__FILE__) .'/templates/block-discography.php',
                'category'          => 'umg',
                'icon'              => 'dashicons-database',
                'keywords'          => array( 'Discography', ),
                'mode'	=> 'edit',
                'supports' => array(
                    'anchor'        => true,
                    'mode'          => false,
                    'align'         =>false
                ),
            ));

            acf_register_block_type(array(
                'name'              => 'Tours',
                'title'             => __('Tours'),
                'description'       => __('A Tours block.'),
                'render_template'   => dirname(__FILE__) .'/templates/block-tours.php',
                'category'          => 'umg',
                'icon'              => 'car',
                'keywords'          => array( 'Tours', ),
                'mode'	=> 'edit',
                'supports' => array(
                    'anchor'        => true,
                    'mode'          => false,
                    'align'         =>false
                ),
            ));

            acf_register_block_type(array(
                'name'              => 'Youtube Slider',
                'title'             => __('Youtube Slider'),
                'description'       => __('A Youtube Slider block.'),
                'render_template'   => dirname(__FILE__) .'/templates/youtube-slider.php',
                'category'          => 'umg',
                'icon'              => 'video',
                'keywords'          => array( 'youtube', 'slider' ),
                'mode'	            => 'edit',
                'supports'          => array(
                    'anchor'        => true,
                    'mode'          => false,
                    'align'         =>false
                ),
            ));
        }
    }

?>