;(function(jQuery) {
	var b = 1;
	jQuery.fn.extend({
		xnav: function(option) {
			console.log(option)
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
						}.bind(this));
						$(this).find("li").eq(0).text(option.title).css("color",option.color);
						console.log($(this).find("li").eq(0))
						//$("li",this).eq(0).title(option.title);
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