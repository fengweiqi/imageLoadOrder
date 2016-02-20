;(function(factory) {
	if (typeof define === "function" && define.amd) {
		// AMD模式
		define(["jquery"], factory);
	} else {
		// 全局模式
		factory(jQuery, window, document, undefined);
	}
}(function($, window, document,undefined) {

	var pluginName = 'imageLoadOrder';  //插件名称

    var Privateclass = function(el) {//私有类
			this.el=el;
			this.opts=el.data(pluginName);//获取插件参数
			this.data=function(dataName,opts){
				el.data(dataName,opts);
			}
			this.init();
	}
	Privateclass.prototype = {

		init:function(){
			var that =this;
			

			var imgAddresses = [];
			that.el.each(function(index, el) {
				var src = $(this).attr('data-lazy');
				imgAddresses.push(src);

			});

			var COUNTER = 0;
			
			function loadImage(counter) {
				//Break out if no more images
				if (counter == imgAddresses.length) {
					return;
				}


				
				
				var I = new Image();
					

				//Monitor load or error events, moving on to next image in either case
				I.onload = I.onerror = function() {

						loadImage(COUNTER++);
					

				}


				//Change source (then wait for event)
				I.src = imgAddresses[counter];

			
			
				if(that.el.eq(counter).get(0).nodeName == 'IMG'){

					that.el.eq(counter).attr('src',imgAddresses[counter]);
				}
				else{
					that.el.eq(counter).css('background-image','url('+imgAddresses[counter]+')');
				}


			}

			loadImage(COUNTER);
	}
}
	var privateclass=[];//用于私有类实例化

	var methods = {//对外接口

		init: function(options){

			    var that = this;
		

				var $this = $(this);

				var opts = $this.data(pluginName);

				if(typeof(opts) == 'undefined') {

					var defaults = {
						
					   };

					opts = $.extend({}, defaults, options);

					$this.data(pluginName, opts);

				} else {

					opts = $.extend({}, opts, options);

				}

				opts.id=new Date().getTime();

				privateclass[opts.id]=new Privateclass($this);
				// 代码在这里运行
				


		}
	};
	$.fn[pluginName] = function() {
		var method = arguments[0];

		if(methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if( typeof(method) == 'object' || !method ) {
			method = methods.init;
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.easySlide' );
			return this;
		}
		
		return method.apply(this, arguments);

	}
}));

