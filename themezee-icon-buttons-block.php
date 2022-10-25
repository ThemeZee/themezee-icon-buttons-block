<?php
/**
 * Plugin Name:       ThemeZee Icon Buttons Block
 * Description:       Display a SVG icon.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            ThemeZee
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       themezee-icon-buttons-block
 *
 * @package           ThemeZee Icon Buttons Block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function register_themezee_icon_buttons_block() {
	register_block_type( __DIR__ . '/build/icon-button' );
	register_block_type( __DIR__ . '/build/icon-buttons' );
}
add_action( 'init', 'register_themezee_icon_buttons_block' );
