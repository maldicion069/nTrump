(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'http://ep01.epimg.net/elpais/imagenes/2017/02/19/videos/1487523506_657441_1487524043_miniatura_normal.jpg',
			'http://www.revistameta.com.ar/wp-content/uploads/2017/02/160518-trump-portrait-jsw-145p_1c226e6636be4572928409c157f0d50a.nbcnews-ux-2880-1000.jpg',
			'http://entreparentesis.org/wp-content/uploads/donald-trump.jpg',
			'http://media.eldestapeweb.com/adjuntos/177/imagenes/000/201/0000201848.jpg',
			'http://www.eldesconcierto.cl/wp-content/uploads/2016/08/donald.jpg',
			'https://s-media-cache-ak0.pinimg.com/564x/3c/92/f0/3c92f081a457d71c827277c7533d3239.jpg',
			'https://thekittyshed.files.wordpress.com/2016/05/trump-combover.jpg',
			'https://ozmud.files.wordpress.com/2015/10/trump-bun.jpg?w=510',
			'http://therealnews.com/media/trn_2015-07-01/thedges0728trump.jpg',
			'http://www.thewrap.com/wp-content/uploads/2016/08/GettyImages-501018436.jpg',
			'http://www.hollywoodreporter.com/sites/default/files/imagecache/landscape_928x523/2015/08/donald_trump_gop_debate.jpg',
			'https://img.ifcdn.com/images/f1e2fd563c3a6b4cfa94ed52b92c9d1a8d740af6d063a494bb50309ba5097c37_1.jpg'
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 