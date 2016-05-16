define(
	
	'module1',
	[],
	
	function (dat) {
		
		return {
			
			Model: function (dat) {
				
				var self=this;
				
				self.dat=dat;
				
				self.addItem = function(item) {
					if (item.lenght===0||item==='') {
						return
					};
					self.dat.push(item);
					return self.dat;
				};
				
				self.removeItem = function(item){
					var index = self.dat.indexOf(item);
					if (index === -1){
						return
					};
					self.dat.splice(index,1);	
					return self.dat;
				};
				
				self.updateItem = function(item, newItem) {
					var index = self.dat.indexOf(item);
					if (index === -1||newItem===''){
						return
					};
					self.dat[index]=newItem;		
					return self.dat;
				};
				
				self.poiskItem = function(item) {
					var index = self.dat.indexOf(item);
					return index;
				};
				
			}
		}
	}
	
);