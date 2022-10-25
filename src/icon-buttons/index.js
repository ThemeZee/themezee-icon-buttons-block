/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { SVG, Path } from '@wordpress/components';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';

const icon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
		<Path d="M14.35 12.15q-1.05 0-1.775.725-.725.725-.725 1.775 0 1.05.725 1.775.725.725 1.775.725 1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775-.725-.725-1.775-.725Zm0 20.7q-1.05 0-1.775.725-.725.725-.725 1.775 0 1.05.725 1.775.725.725 1.775.725 1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775-.725-.725-1.775-.725ZM7.7 6.05h32.55q.8 0 1.275.475Q42 7 42 7.8v13.45q0 .85-.475 1.45t-1.275.6H7.7q-.75 0-1.225-.6Q6 22.1 6 21.25V7.8q0-.8.475-1.275Q6.95 6.05 7.7 6.05Zm1.3 3V20.3h30V9.05ZM7.7 26.7h32.35q.75 0 1.35.625.6.625.6 1.425v13.2q0 1-.6 1.525-.6.525-1.35.525H7.95q-.8 0-1.375-.525T6 41.95v-13.2q0-.8.475-1.425T7.7 26.7Zm1.3 3V41h30V29.7ZM9 9.05V20.3ZM9 29.7V41Z"/>
	</SVG>
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon,
	example: {
		innerBlocks: [
			{
				name: 'themezee/icon-button',
				attributes: { text: __( 'Find out more' ) },
				innerBlocks: [ { 
					name: 'themezee/icon', 
					attributes: {
						iconName: "info",
						iconLibrary: "wordpress",
						iconWidth: "1.2em",
						iconHeight: "1.2em",
					}
				} ]
			},
			{
				name: 'themezee/icon-button',
				attributes: { text: __( 'Contact us' ) },
				innerBlocks: [ { 
					name: 'themezee/icon', 
					attributes: {
						iconName: "atSymbol",
						iconLibrary: "wordpress",
						iconWidth: "1.2em",
						iconHeight: "1.2em",
					}
				} ]
			},
		],
	},
	edit,
	save,
} );