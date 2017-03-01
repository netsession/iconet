// Our dialog definition.
CKEDITOR.dialog.add('iconetDialog', function (editor){
			return {
				title : 'Iconet | Font-Icon',
				minWidth : 400,
				minHeight : 200,
				contents :[{
						id : 'tab1',
						label : 'Basic Settings',
						elements :[{
								type : 'text',
								id : 'name',
								label : 'Icon Name',
								validate : CKEDITOR.dialog.validate.notEmpty("Icon Name darf nicht leer sein")
							}]
					}],

				onOk : function(){
					var dialog = this;

					editor.insertElement(CKEDITOR.dom.element.createFromHtml(
						'<span class="icon-' + dialog.getValueOf( 'tab1', 'name' ) + '">&nbsp;</span>'));
				}
			};
		});
