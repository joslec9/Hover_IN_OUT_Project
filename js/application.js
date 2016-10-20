$(document).ready(function() {
			$('#box').hover(function() {
				$('img.'+this.id).fadeOut()}, function() {
				$('img').fadeIn();
			});
		});