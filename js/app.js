


$(document).ready(function(){
	$(".list__row").click(function(){
		$(this).toggleClass("is-active");
	});

	$( ".list__row" ).hover(
  		function() {
    			$( this ).addClass( "is-hovered" );
  		}, function() {
    			$( this ).removeClass( "is-hovered" );
  	});
});

// $(document).ready(function() {
// 	$( ".preview .icon-close" ).click(function() {
// 	  $( ".l-section-preview-container" ).animate({
// 	    width: "0%"
	    
// 	  }, {
// 	    duration: 100,
// 	    specialEasing: {
// 	      width: "linear"
// 	    }

// 	  });
// 	});
// });