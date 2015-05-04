// super janky code for demonostration purposes only 

$(document).ready(function(){

	$(".list_item--folder").on("click",function(){
		var $folder = $(this).parent(".list-row");
		var $folderItems = $folder.find(".list-sub");
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

	$("#controls > button").on("click",function(){

		$(this).toggleClass("is-active");
		if ($(this).hasClass("play"))
			{
				$(this).find("i").toggleClass("icon-play-arrow icon-pause")
			}
	});
// Content List
	$(".list_item").on({
	    mouseenter: function () {
	    	$(this).addClass("is-hovered");
	       
	    },
	    mouseleave: function () {
	      
	        $(this).removeClass("is-hovered");
	    }
	});
	$(".list_item > .selectArea").on("click",function(){
		listItem = $(this).parent(".list_item");
		$(listItem).closest(".list").find(".is-active").removeClass("is-active");

		$(listItem).addClass("is-active");

		thisContent = "." + $(listItem).data("target");
		console.log(thisContent);
		$(thisContent).closest(".l-inset").find(".is-active").toggleClass("is-active is-hidden");
		$(thisContent).toggleClass("is-active is-hidden");
		


		
	});
//Menu Hover 

	$(".menu > li").on({
	    mouseenter: function () {
	    	$(this).addClass("is-hovered");
	       
	    },
	    mouseleave: function () {
	      
	        $(this).removeClass("is-hovered");
	    }
	});

	$("#searchButton").on("click",function(){
		$(this).toggleClass("is-active");

		$(".search-field").toggleClass("is-hidden");
		$(".toolbar_actions-utility").toggleClass("is-active");
		$(".form-field > input").focus();

		console.log("search clicked");
		
	});

//scroll bar thingy 
	$.fn.hasScrollBar = function() {
        return this.get(0) ? this.get(0).scrollHeight > this.innerHeight() : false;
    };

    	$(".scrollable").on({
	    mouseenter: function () {
	    	thisHeader = $(this).data("target");
	    	
	    	if($(this).hasScrollBar())
	    	{
	    		    		
	    		$('.' + thisHeader).addClass("z-depth-v");
	    	}
	    },
	    mouseleave: function () {
	    		$('.' + thisHeader).removeClass("z-depth-v");
	    	}
	});

// Selecting items
	var checkedItems = 0;
	$(".checkable").on("click",function(){
		if($(this).prop("checked")){
			checkedItems = checkedItems + 1;
		}
		else {
			checkedItems = checkedItems - 1;
		}
		if (checkedItems){
			$(".toolbar").addClass("is-hidden");
			$("#toolbarSelected").removeClass("is-hidden");

		}
		else{
			$(".toolbar").removeClass("is-hidden");
			$("#toolbarSelected").addClass("is-hidden");
		}
		$(".badge").html(checkedItems);
	});

	$(".hs").on({
	    mouseenter: function () {
	    	$(this).addClass("is-hovered");
	    	// if ($(this).hasClass("hitspot-middle"))
	    	// {
	    	// 	console.log("middle hovered");
	    	// 	$(".present_header").toggleClass("hs-header");
	    	// 	$(".present_body").toggleClass("hs-body-menu");
	    	// }
	       
	    },
	    mouseleave: function () {
	      
	        $(this).removeClass("is-hovered");
	     //    if ($(this).hasClass("hitspot-middle"))
	    	// {
	    	// 	$(".present_header").toggleClass("hs-header");
	    	// 	$(".present_body").toggleClass("hs-body-menu");
	    	// }
	    }
	});

	$("#addContent").on("click",function(){
		// $(".present_header").toggleClass("hs-header");
		$(".present_body").toggleClass("hs-body");
		$(".controlbar").toggleClass("hs-controlbar");
		$(".instruction-hitspots").toggleClass("is-hidden");
		$(this).parent(".hs-helpbar").toggleClass("nudge");
		$(this).find("i").toggleClass("icon-expand-more icon-expand-less")

	});

	$("#smsHelp").on("click",function(){
		// $(".present_header").toggleClass("hs-header");
		$(this).toggleClass("expand");
		$(this).find(".smsbar_instructions-full").toggleClass("is-hidden");
	});


	
});
