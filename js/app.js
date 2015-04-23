

$(document).ready(function(){

	$(".list_item--folder").on("click",function(){
		var $folder = $(this).parent(".list-row");
		var $folderItems = $folder.find(".list--sub");
		$(this).toggleClass("is-open");
		$folderItems.toggleClass("is-hidden");
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

	$(".controlbar button").on("click",function(){

		$(this).toggleClass("is-active");
	});

	// demo purposes
	var checkedItems = 0;
	$(".list_item_column-checkbox input").on("click",function(){
		if($(this).prop("checked")){
			checkedItems = checkedItems + 1;
			
			
		}
		else {
			checkedItems = checkedItems - 1;

		}
		if (checkedItems){
			$(".toolbar").addClass('is-hidden');
			$("#toolbarSelected").removeClass("is-hidden");

		}
		else{
			$(".toolbar").removeClass('is-hidden');
			$("#toolbarSelected").addClass("is-hidden");
		}

		$(".badge").html(checkedItems);
		
		
	});

	$(".hs").on({
	    mouseenter: function () {
	    	$(this).addClass("is-hovered");
	        console.log("mouse in");
	    },
	    mouseleave: function () {
	        console.log("mouse out");
	        $(this).removeClass("is-hovered");
	    }
	});

	$(".hitspot-middle").on("click",function(){
		$(".present_header").toggleClass("hs-header");
		$(".present_body").toggleClass("hs-body");
		$(".controlbar").toggleClass("hs-controlbar");

	});

	$(".help").on("click",function(){
		$(this).find("i").toggleClass("icon-help icon-close")
		var $instructions = $(".instruction-hitspots");
		$instructions.toggleClass("is-active");

	});

	
});
