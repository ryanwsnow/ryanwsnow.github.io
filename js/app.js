


$(document).ready(function(){
	$(".list-row").click(function(){
		$(this).toggleClass("is-active");
	});

	$( ".list-row" ).hover(
  		function() {
    			$( this ).addClass( "is-hovered" );
  		}, function() {
    			$( this ).removeClass( "is-hovered" );
  	});
});


$(document).ready(function(){
	$(".list_item--folder").click(function(){
		console.log("clicked");
		$(this).toggleClass("is-open");
		$(this).parent(".list-row").children(".list-sub").toggleClass("is-hidden");
	});

	$("input").focus(function() {
		$(this).parent(".form-field").addClass("is-focused");
		  $("label[for='" + this.id + "']").addClass("labelfocus");
		}).blur(function() {
		  $("label").removeClass("labelfocus");
		  $(this).parent(".form-field").removeClass("is-focused");
		});
	$("textarea").focus(function() {
		$(this).parent(".form-field").addClass("is-focused");
		  $("label[for='" + this.id + "']").addClass("labelfocus");
		}).blur(function() {
		  $("label").removeClass("labelfocus");
		  $(this).parent(".form-field").removeClass("is-focused");
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