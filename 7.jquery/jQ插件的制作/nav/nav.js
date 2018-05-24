;(function(jQuery) {
	var b = 1;
	jQuery.fn.extend({
		xnav: function(option) {
			return this.each(function() {
				//html
				$.ajax({
					type: "get",
					url: "nav/nav.html",
					cache: true,
					success: function(data) {
						console.log(this);
						$(this).html(data);
						$(this).find(".dropdown-toggle").click(function() {
							$(this).find(".dropdown-menu").toggle(1000, "linear");
						}.bind(this))
					}.bind(this)
				});

				//css
				/*$.ajax({
					type: "get",
					url: "nav/nav.css",
					success: function(data) {
						$("head style").append(data)
					}.bind(this)
				});*/
			});
		}
	});
})(jQuery);