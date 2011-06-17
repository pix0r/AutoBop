(function(w) {
	var log = function(str) {
		if (typeof w.console != 'undefined') {
			w.console.log(str);
		} else {
			alert(str);
		}
	};
	log('loading..');
	if (typeof w.jQuery == 'undefined') {
		log('jQuery not loaded on this page');
		return;
	}
	var $ = w.jQuery;
	var c = function() {
		var $b = $('a#btn_upvote');
		if ($b.size()) {
			log('Found ' + $b.size() + ' AWESOME buttons');
			$b.each(function(idx, el) {
				var btnOffset = $(el).offset();
				var e = $.Event('click');
				e.target = el;
				var r = Math.floor(Math.random() * 20);
				e.pageX = btnOffset.left + r;
				e.pageY = btnOffset.top + r;
				e.relatedTarget = $(el).parent().get(0);
				log('Click button:');
				log(el);
				$(el).trigger(e);
				log('Clicked with event:');
				log(e);
			});
			//$b.click();
			//log('clicked');
		} else {
			log('Couldn\'t find button to click');
			clearInterval();
			return false;
		}
		return true;
	};
	log('attempting to run..');
	if (c()) {
		log('success; setting timer for 15 seconds');
		setInterval(c, 15000);
	} else {
		log('failure; not setting timer');
	}
	log('finished loading');
})(window);


