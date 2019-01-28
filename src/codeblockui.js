/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module code-block/codeblockui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import codeBlockIcon from '../theme/icons/codeblock.svg';
import '../theme/codeBlock.css';

/**
 * The code block UI plugin.
 *
 * It introduces the `'codeBlock'` button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class CodeBlockUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( 'codeBlock', locale => {
			const command = editor.commands.get( 'codeBlock' );
			const buttonView = new ButtonView( locale );

			buttonView.set( {
				label: t( 'Code block' ),
				icon: codeBlockIcon,
				tooltip: true
			} );

			// Bind button model to command.
			buttonView.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( buttonView, 'execute', () => editor.execute( 'codeBlock' ) );

			return buttonView;
		} );
	}
}
