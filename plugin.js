/**
 * CKEditor Plugin Insert Icon Font
 */

// Register the plugin within the editor.
CKEDITOR.plugins.add( 'iconet', {

	// Register the icons.
	icons: 'iconet',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		// Define an editor command that opens our dialog window.
		editor.addCommand( 'iconet', new CKEDITOR.dialogCommand( 'iconetDialog' ) );

		// Create a toolbar button that executes the above command.
		editor.ui.addButton( 'Iconet', {

			// The text part of the button (if available) and the tooltip.
			label: 'Icon einfügen',

			// The command to execute on click.
			command: 'iconet',

			// The button placement in the toolbar (toolbar group name).
			toolbar: 'insert'
		});

		// Register our dialog file -- this.path is the plugin folder path.
		CKEDITOR.dialog.add( 'iconetDialog', this.path + 'dialogs/iconet.js' );
	}
});
