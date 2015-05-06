// super janky code for demonostration purposes only 

$(document).ready(function(){

	$(".list_item--folder").on("click",function(){
		var $folder = $(this).parent(".list-row");
		var $folderItems = $folder.find(".list-sub");
		$(this).toggleClass("is-open");
		$folderItems.toggleClass("is-hidden");
	});

	$("input[type=text]").focus(function() {
		thisLabel = "label[for='" + this.id + "']";
		$(this).parent(".form-field").addClass("is-focused");
		  $(thisLabel).addClass("labelfocus");
		  if($(this).siblings().hasClass("form-msg"))
		  {
		  	$(this).parent(".form-field").addClass("has-msg");
		  	$(this).siblings(".form-msg").removeClass("is-hidden");
		  }
		}).blur(function() {
		  $(thisLabel).removeClass("labelfocus");
		  $(this).parent(".form-field").removeClass("is-focused");
		  if($(this).siblings().hasClass("form-msg"))
		  {
		  	$(this).parent(".form-field").removeClass("has-msg");
		  	$(this).siblings(".form-msg").addClass("is-hidden");
		  }
		});
	$("textarea").focus(function() {
		thisLabel = "label[for='" + this.id + "']";
		$(this).parent(".form-field").addClass("is-focused");
		  $(thisLabel).addClass("labelfocus");
		  if($(this).siblings().hasClass("form-msg"))
		  {
		  	$(this).parent(".form-field").addClass("has-msg");
		  	$(this).siblings(".form-msg").removeClass("is-hidden");
		  }
		}).blur(function() {
		  $(thisLabel).removeClass("labelfocus");
		  $(this).parent(".form-field").removeClass("is-focused");
		  if($(this).siblings().hasClass("form-msg"))
		  {
		  	$(this).parent(".form-field").removeClass("has-msg");
		  	$(this).siblings(".form-msg").addClass("is-hidden");
		  }
		});
	//checking
	$("input[type=checkbox]").on("click",function(){
		
		if($(this).prop("checked")) {
			$(this).parent("label").addClass("is-checked");
		}
		else {
			$(this).parent("label").removeClass("is-checked");
		}
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
		//change list item active state
		$(listItem).closest(".list").find(".is-active").removeClass("is-active");

		$(listItem).addClass("is-active");
		//show item's content in preview pane

		thisContent = "." + $(listItem).data("target");
		console.log(thisContent);
		$(thisContent).closest(".l-inset").find(".is-active").toggleClass("is-active is-hidden");
		$(thisContent).toggleClass("is-active is-hidden");
	
	});

// thumb List
	$(".card--thumb").on({
	    mouseenter: function () {
	    	$(this).addClass("is-hovered");
	       
	    },
	    mouseleave: function () {
	      
	        $(this).removeClass("is-hovered");
	    }
	});
	$(".card--thumb > .selectArea").on("click",function(){
		listItem = $(this).parent(".card--thumb");
		//change list item active state
		$(listItem).closest(".thumb-list_body").find(".is-active").removeClass("is-active");

		$(listItem).addClass("is-active");
		//show item's content in preview pane

		thisContent = "#" + $(listItem).data("target");
		console.log(thisContent);
		$(thisContent).closest(".card--present_body").children(".is-active").toggleClass("is-active is-hidden");
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
		if($(this).prop("checked")) {
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
	    	$(this).parent().addClass("is-hovered");
	    	// if ($(this).hasClass("hitspot-middle"))
	    	// {
	    	// 	console.log("middle hovered");
	    	// 	$(".present_header").toggleClass("hs-header");
	    	// 	$(".present_body").toggleClass("hs-body-menu");
	    	// }
	       
	    },
	    mouseleave: function () {
	      
	        $(this).parent().removeClass("is-hovered");
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
		$(".present_footer").toggleClass("hs-footer");
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
