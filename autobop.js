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
			// alert(str);
		}
	};
	if (typeof w.clearInterval === 'undefined') {
		w.clearInterval = function() {};
	}
	log('Loading AutoBop..');
	if (typeof w.jQuery == 'undefined') {
		log('Error: jQuery not loaded!');
		return;
	}
	var $ = w.jQuery;
	var findAwesome = function() {
		var btnSize = [126, 44];
		var btnPos = [370, 555];
		var $b = false;
		log('findAwesome');
		$('a').each(function(idx, el) {
			if ($b) {
				return;
			}
			log('Checking element:');
			log(el);
			var btnOffset = $(el).position();
			if (btnOffset.left != btnPos[0] || btnOffset.top != btnPos[1]) {
				log('Position mismatch. Elem:');
				log(btnOffset);
				return;
			}
			if ($(el).width() != btnSize[0] || $(el).height() != btnSize[1]) {
				log('Width/Height mismatch. Elem: ' + $(el).width() + 'x' + $(el).height());
				return;
			}
			$b = $(el);
			log('Found awesome button');
		});
		return $b;
	};
	var c = function() {
		//var $b = $('a#btn_upvote');
		var $b = findAwesome();
		if ($b && $b.size()) {
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
			w.clearInterval();
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


