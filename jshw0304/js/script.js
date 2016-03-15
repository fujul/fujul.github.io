var obj = {
 elementi:{
	form:{
	nameChild:'form',
	nameClassChild:"form-horizontal",
	setAttribute1:"action",
	setAttribute2:"#",
	nameParent:"body",
	kolIter:1	
	},
	div:{
	nameChild:'div',
	nameClassChild:"form-group",
	nameParent:".form-horizontal",
	kolIter:1	
	},
	div1:{
	nameChild:'div',
	nameClassChild:"col-sm-offset-2 col-sm-10",
	nameParent:".form-group",
	kolIter:1	
	},
	h3:{
	nameChild:'h3',
	nameClassChild:"h3",
	nameParent:".col-sm-10",
	innerHTML1:'Тест по программированию',
	setAttribute1:"align",
	setAttribute2:"center",
	kolIter:1	
	},
	menu:{
	nameChild:'ul',
	nameClassChild:"menu",
	nameParent:".col-sm-10",
	setAttribute1:"type",
	setAttribute2:"none",
	kolIter:1	
	},
	item_menu:{
	nameChild:'li',
	nameClassChild:"item_menu",
	nameParent:".menu",
	kolIter:3
	},
	h4:{
	nameChild:'h4',
	nameClassChild:"h4",
	nameParent:".item_menu",
	innerHTML1:'0. Вопрос №0',
	kolIter:1,
  schetchik:3	
	},
	podmenu:{
	nameChild:'ul',
	nameClassChild:"menu podmenu",
	nameParent:".item_menu",
	kolIter:1	
	},
	item_podmenu:{
	nameChild:'li',
	nameClassChild:"checkbox",
	nameParent:".podmenu",
	kolIter:3
	},
	input:{
	nameChild:'input',
	nameClassChild:"",
	nameParent:".checkbox",
	setAttribute1:'type',
	setAttribute2:'checkbox',
	kolIter:1
	},
	label:{
	nameChild:'label',
	nameClassChild:"",
	nameParent:".checkbox",
	innerHTML1:'Вариант ответа №0',
	kolIter:1,
	schetchik:3
	},
	button:{
	nameChild:'button',
	nameClassChild:"btn btn-default",
	nameParent:".col-sm-10",
	setAttribute1:'type',
	setAttribute2:'submit',
	kolIter:1
	},
	h41:{
	nameChild:'h4',
	nameParent:".btn-default",
	innerHTML1:'Проверить мои результаты',
	kolIter:1
	}
 },	

	createChild: function() { 
	var x=0;
	if (this.elementi[this.key].nameParent){
	  var tegParent=document.querySelectorAll(this.elementi[this.key].nameParent);
	  for(var i = 0; i < tegParent.length; i++){
			if (this.elementi[this.key].schetchik){if(x < this.elementi[this.key].schetchik){x++;}else{x=1;}}
			for(var j = 1; j <= this.elementi[this.key].kolIter; j++){
				var teg = document.createElement(this.elementi[this.key].nameChild);
				if (this.elementi[this.key].nameClassChild){teg.className = this.elementi[this.key].nameClassChild;}
				if (this.elementi[this.key].innerHTML1){teg.innerHTML = this.elementi[this.key].innerHTML1.replace(/0/g,x+'');}
				if (this.elementi[this.key].setAttribute1){teg.setAttribute(this.elementi[this.key].setAttribute1,this.elementi[this.key].setAttribute2);}	
				tegParent[i].appendChild(teg);	
			}
    }
	}
	},
	InsertElementi: function() { 
		for( this.key in this.elementi){
			this.createChild();
		}
	}
}

obj.InsertElementi();

	
