
		$(document).ready(function() {
			/*
			 *  Simple image gallery. Uses default settings
			 */

			$(&#39;.fancybox&#39;).fancybox();

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(&quot;.fancybox-effects-a&quot;).fancybox({
				helpers: {
					title : {
						type : &#39;outside&#39;
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(&quot;.fancybox-effects-b&quot;).fancybox({
				openEffect  : &#39;none&#39;,
				closeEffect	: &#39;none&#39;,

				helpers : {
					title : {
						type : &#39;over&#39;
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(&quot;.fancybox-effects-c&quot;).fancybox({
				wrapCSS    : &#39;fancybox-custom&#39;,
				closeClick : true,

				openEffect : &#39;none&#39;,

				helpers : {
					title : {
						type : &#39;inside&#39;
					},
					overlay : {
						css : {
							&#39;background&#39; : &#39;rgba(238,238,238,0.85)&#39;
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(&quot;.fancybox-effects-d&quot;).fancybox({
				padding: 0,

				openEffect : &#39;elastic&#39;,
				openSpeed  : 150,

				closeEffect : &#39;elastic&#39;,
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			$(document).ready(function() {
	$(&quot;.fancybox-button&quot;).fancybox({
		prevEffect		: &#39;none&#39;,
		nextEffect		: &#39;none&#39;,
		closeBtn		: false,
		helpers		: {
			title	: { type : &#39;inside&#39; },
			buttons	: {}
		}
	});
});


			/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$(document).ready(function() {
	$(&quot;.fancybox-thumb&quot;).fancybox({
		prevEffect	: &#39;none&#39;,
		nextEffect	: &#39;none&#39;,
		helpers	: {
			title	: {
				type: &#39;outside&#39;
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});
             /*
			 *  Media helper. single.
			*/

$(document).ready(function() {
    $(&quot;#single_1&quot;).fancybox({
          helpers: {
              title : {
                  type : &#39;float&#39;
              }
          }
      });

    $(&quot;#single_2&quot;).fancybox({
    	openEffect	: &#39;elastic&#39;,
    	closeEffect	: &#39;elastic&#39;,

    	helpers : {
    		title : {
    			type : &#39;inside&#39;
    		}
    	}
    });

    $(&quot;#single_3&quot;).fancybox({
    	openEffect : &#39;none&#39;,
    	closeEffect	: &#39;none&#39;,
    	helpers : {
    		title : {
    			type : &#39;outside&#39;
    		}
    	}
    });

    $(&quot;#single_4&quot;).fancybox({
    	helpers : {
    		title : {
    			type : &#39;over&#39;
    		}
    	}
    });
});
			/*
			 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
			*/
			$(&#39;.fancybox-media&#39;)
				.attr(&#39;rel&#39;, &#39;media-gallery&#39;)
				.fancybox({
					openEffect : &#39;none&#39;,
					closeEffect : &#39;none&#39;,
					prevEffect : &#39;none&#39;,
					nextEffect : &#39;none&#39;,

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});




$(document).ready(function() {
    $(&quot;#single_1&quot;).fancybox({
          helpers: {
              title : {
                  type : &#39;float&#39;
              }
          }
      });

    $(&quot;#single_2&quot;).fancybox({
    	openEffect	: &#39;elastic&#39;,
    	closeEffect	: &#39;elastic&#39;,

    	helpers : {
    		title : {
    			type : &#39;inside&#39;
    		}
    	}
    });

    $(&quot;#single_3&quot;).fancybox({
    	openEffect : &#39;none&#39;,
    	closeEffect	: &#39;none&#39;,
    	helpers : {
    		title : {
    			type : &#39;outside&#39;
    		}
    	}
    });

    $(&quot;#single_4&quot;).fancybox({
    	helpers : {
    		title : {
    			type : &#39;over&#39;
    		}
    	}
    });
});


$(document).ready(function() {
 $(&quot;.various&quot;).fancybox({
  maxWidth : 800,
  maxHeight : 600,
  fitToView : false,
  width  : &#39;70%&#39;,
  height  : &#39;70%&#39;,
  autoSize : false,
  closeClick : false,
  openEffect : &#39;none&#39;,
  closeEffect : &#39;none&#39;
 });
});






			/*
			 *  Open manually
			 */

			$(&quot;#fancybox-manual-a&quot;).click(function() {
				$.fancybox.open(&#39;1_b.jpg&#39;);
			});

			$(&quot;#fancybox-manual-b&quot;).click(function() {
				$.fancybox.open({
					href : &#39;iframe.html&#39;,
					type : &#39;iframe&#39;,
					padding : 5
				});
			});

			$(&quot;#fancybox-manual-c&quot;).click(function() {
				$.fancybox.open([
					{
						href : &#39;1_b.jpg&#39;,
						title : &#39;My title&#39;
					}, {
						href : &#39;2_b.jpg&#39;,
						title : &#39;2nd title&#39;
					}, {
						href : &#39;3_b.jpg&#39;
					}
				], {
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
			});


		});
	
