$.extend({
    gotoTop : function(set) {
        var config = $.extend({ 			
			gotoTop : ''  
        }, set);
		config.gotoTop.bind('click',function(){
			$("html, body").animate({
                scrollTop: 0
            }, 120);	
		})
    },
	closeLogin : function(set){
		var config = $.extend({  
			noLogin : '',
			closeBtn : ''  
        }, set);
		config.closeBtn.bind('click',function(){
			config.noLogin.hide();
		})
	},
	moreList : function(set){
		var config = $.extend({  
			moreBtn : '',
			closeBtn : '',
			Listbox : '',
			otherList:''
        }, set);
		config.moreBtn.bind('click',function(){
			config.Listbox.css({height:'auto'});
			config.closeBtn.css({display:'inline-block'})
			config.moreBtn.css({display:'none'})
			config.otherList.hide();
		})
		config.closeBtn.bind('click',function(){
			config.Listbox.css({height:73});
			config.moreBtn.css({display:'inline-block'})
			config.closeBtn.css({display:'none'})
			config.otherList.show();
		})
	}
});

