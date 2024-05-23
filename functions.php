<?php

/** Register Enhanced Conversions - Custom JS File - Footer **/

function enqueue_custom_script() {
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/js/enhanced-conversions.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_script');

?>