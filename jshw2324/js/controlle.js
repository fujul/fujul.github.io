define(
'controlle',
['jquery','module1','view'],
	function (model,view) {
		return {
			Controller: function (model,view) {
					var self=this;
					var tekelem;
					view.elements.addBtn.click(addItem);
					view.elements.updateBtn.click(updateItem);
					view.elements.listContainer.on('click','.item-delete',removeItem);
					view.elements.listContainer.on('click','.itemup',appendItem);
					function addItem(){
						var newItem = view.elements.input.val();
						if (view.poiskValue(newItem)===false){
						model.addItem(newItem);
						view.renderList(model.dat);
						view.elements.input.val('');
						};
					}
					function removeItem(){
						var item = $(this).attr('data-value');
						model.removeItem(item);
						view.renderList(model.dat);
					}
					function updateItem(){
						var updateItem = view.elements.input.val();
						if (view.poiskValue(updateItem)===false){
						model.updateItem(tekelem,updateItem);
						view.renderList(model.dat);
						view.elements.input.val('');
						}
					}
					function appendItem(){
						tekelem = $(this).text();
						view.appendValue(tekelem);
						$('.itemup').css("color","black");
						$(this).css("color","blue");
					}
			}
		}
	}
);