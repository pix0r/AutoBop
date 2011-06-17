/**
 * AutoBop
 * http://pixor.net/AutoBop/
 * Author: Mike Matz <mike@pixor.net>
 */
(function(w) {
	var log = function(str) {
		if (typeof w.console != 'undefined') {
			w.console.log(str);
		} else {
			alert(str);
		}
	};
	log('Loading AutoBop..');
	if (typeof w.jQuery == 'undefined') {
		log('Error: jQuery not loaded!');
		return;
	}
	var $ = w.jQuery;
	var c = function() {
		var $b = $('a#btn_upvote');
		if ($b.size()) {
			log('Clicking AWESOME! button');
			$b.each(function(idx, el) {
				var btnOffset = $(el).offset();
				var e = $.Event('click');
				e.target = el;
				var r = Math.floor(Math.random() * 20);
				e.pageX = btnOffset.left + r;
				e.pageY = btnOffset.top + r;
				e.relatedTarget = $(el).parent().get(0);
				$(el).trigger(e);
				log('Clicked!');
			});
		} else {
			log('Error: Couldn\'t find any buttons to click');
			clearInterval();
			return false;
		}
		return true;
	};
	log('Attempting first run..');
	if (c()) {
		log('That seemed to work; setting up the timer');
		setInterval(c, 15000);
	} else {
		log('Error clicking button; not setting timer');
	}
	log('AutoBop load complete');
})(window);


