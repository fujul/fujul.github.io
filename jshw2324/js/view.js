define(
'view',
['module1','tmpl','jquery'],
	function (model,text_alert) {
		
		return {
			
			View: function (model,text_alert) {
				var self=this;
				function init(){
					var wrapper = tmpl($('#wrapper-template').html());
					$('body').append(wrapper);
					self.elements={
						input:$('.item-value'),
						addBtn:$('.item-add'),
						updateBtn:$('.item-update'),
						listContainer:$('.item-list'),
						itemDelete:$('.item-delete'),
						itemup:$('.itemup')
					};
					self.renderList(model.dat);
					self.appendValue('');
					self.poiskValue('');
					
				};
				self.renderList = function(dat){
					var list = tmpl($('#list-template').html(),{data:dat});
					self.elements.listContainer.html(list);
				};
				self.appendValue = function(item){
					self.elements.input.val(item);
				};
				self.poiskValue = function(item){
				if (model.poiskItem(item)>=0){alert(text_alert);return true};
				return false;
				};
				init();
			}
		}
	}
);