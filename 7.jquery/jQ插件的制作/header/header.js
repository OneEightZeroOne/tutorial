jQuery.fn.extend({
	
	//js
	xheader: function(option) {
		console.log(this);
		return this.each(function() {
			//html
			$.ajax({
				type: "get",
				url: "header/header.html",
				success: function(data) {
					$(this).html(data);
					$("header").text(option.title);
				}.bind(this)
			});

			//css
			$.ajax({
				type: "get",
				url: "header/header.css",
				success: function(data) {
					$("head style").append(data)
				}.bind(this)
			});

		});
	}
});