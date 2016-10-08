	$(document).ready(function() {
		//tabbs
		$(".tabb_container").each(function() {
			//$('<pre class="prettyprint"></pre>').text( $.trim( $(this).children().html() ) ).hide().appendTo( $(this) );
			$('<pre class="prettyprint"></pre>').text( $.trim( $(this).next().html() ) ).hide().appendTo( $(this) );
		});

		$(".tabbs a").click(function() {
			$(this).parent().siblings().removeClass('active').end().addClass('active');
			
			$(this).parents('ul').next().children().hide().eq( $(this).parent().index() ).show();
		});

		
	})();
