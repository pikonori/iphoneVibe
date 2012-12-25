(function() {
    $.iphoneVibe = function() {
	this.OPTION = {
	    min: -3,
	    max: 3,
	    speed: 20
	};
	this.GLOBAL = {
	    loop: null
	};
	this.dom = null;
	return this;
    };

    $.iphoneVibe.prototype = {
	_extends: function(option) {
	    this.OPTION = $.extend(this.OPTION, option);
	    return this;
	},
	_vibeEnd: function(dom){
	    clearInterval(this.GLOBAL.loop);
	    $(dom).rotate({
		angle: 0,
	    });
	},
	_vibeStart: function(dom){
	    var flg = "max";
	    var angle = 0;
	    var self = this;
	    this.GLOBAL.loop = setInterval(function(){
		if(angle == self.OPTION.max ) flg = "max";
		if(angle == self.OPTION.min ) flg = "min";
		if(flg == "max"){
		    angle-=1;
		}else if(flg == "min"){
		    angle+=1;
		}
		$(dom).rotate(angle);
	    },this.OPTION.speed);
	}
    }

    $.fn.iphoneVibe = function(option) {
	var instance;
	instance = new $.iphoneVibe();
	instance._extends(option);

	this.bind("mouseover", function(){
	    instance._vibeStart(this);
	}).bind("mouseout", function(){
	    instance._vibeEnd(this);
	})



    };
}).call(this);


