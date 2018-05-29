define(['jquery', 'text!bsfooter.html', 'text!bsfooter.css'], function($, html, css) {
	console.log(html);
	console.log(css);
	return $.fn.extend({
		bsfooter: function() {
			return this.each(function() {
				$(this).html(html)
			})
		}
	})
})