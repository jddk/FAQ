<script src="jquery-1.8.3.min.js" type="text/javascript" charset="utf-8"></script>
		<script>
	        $(function(){
	            function resetRootFontSize(){
	                var winWidth=$(window).width();
	                $('html').css('font-size',winWidth/20);
	            }
	            resetRootFontSize();
	            $(window).resize(function(){
	                resetRootFontSize();
	            });
	        });
	        //值的计算：  高度或宽度或文字大小/（640/20）===  高度或宽度或文字大小/32
	        //当前屏幕的尺寸，一般情况下设计稿的宽度为640
	        //20---这个数 自己可以随意定
	        //1rem=32px;
	        //以这个例子为例   header高为80px   80/32=2.5rem     2.5*32=80
	        //           字体大小为: 40px   40/32=1.25rem                     1.25*32=40px;

	     
		</script>