# imageLoadOrder

load img by order

##html
``html
  <div class="a" style="background-position:50% 0%;" data-lazy="http://tw.img.tg.gm99.com/u/2016/0121/21102327rix5B.jpg"></div>
	
	<div class="d" tyle="background-position:50% 0%;"  data-lazy="http://tw.img.tg.gm99.com/u/2016/0121/211053264uVDq.jpg"></div>

	<img src="" alt="" data-lazy="http://tw.img.tg.gm99.com/u/2016/0113/13152755UhpMT.jpg">

	<img src="" alt=""  data-lazy="http://tw.img.tg.gm99.com/u/2016/0113/13162229YLYuh.jpg">
``html

##simply use
``javascript
  	<script>
			$('div,img').imageLoadOrder();
	</script>
``javascript
