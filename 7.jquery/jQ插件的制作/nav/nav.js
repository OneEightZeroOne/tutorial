jQuery.fn.extend({
	xnav: function(option) {
		console.log(this);
		return this.each(function() {
			//html
			$.ajax({
				type: "get",
				url: "nav/nav.html",
				success: function(data) {
					$(this).html(data);
					
					$(".dropdown-toggle").click(function(){
						$(".dropdown-menu").toggle(1000,"linear");
					})
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