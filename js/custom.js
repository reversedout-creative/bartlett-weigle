(function($) {
	
	/* Go up */
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 300 ) {
	    	jQuery(".go-up").css("bottom","0px");
		}
		else {
	   		jQuery(".go-up").css("bottom","-60px");
		}
	});
		jQuery(".go-up").click(function(){
		jQuery("html,body").animate({scrollTop:0},500);
		return false;
	 });
 

	/* Slime Menu */
	jQuery('.slimmenu').slimmenu({
		resizeWidth: '991',
		collapserTitle: '',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '<i class="fa fa-chevron-right"></i>'
	});
	// Close Effect Menu
	jQuery(function() {
		jQuery('.collapse-button').click(function() {
			jQuery('.collapse-button').toggleClass('close-menu');
		});
	});
	/* End Slime Menu*/
	
	
	
	/* --------------------------------------------------
	 * document ready
	 * --------------------------------------------------*/
	jQuery(document).ready(function() {
		$("body").show();
		jQuery(window).on("scroll", function() {
			/* fade base scroll position */
			// custom page with background on side
			jQuery('.side-bg').each(function() {
				jQuery(this).find(".image-container").css("height", jQuery(this).find(".image-container").parent().css("height"));
			});
			/* go to anchor */
		});
	});
	
	/* WOW */
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
	
	/* END WOW */
	
	// Top Search bar JS
  $(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });

// End Top Search bar JS


/* --------------------------------------------------
	 * document ready
	 * --------------------------------------------------*/
	//jQuery(document).ready(function() {
	//	$("body").show();
	//	jQuery(window).on("scroll", function() {
			/* fade base scroll position */
			// custom page with background on side
		//	jQuery('.side-bg').each(function() {
			//	jQuery(this).find(".image-container").css("height", jQuery(this).find(".image-container").parent().css("height"));
		//	});
			/* go to anchor */
		//});
	//});

	jQuery(document).ready(function() {
		var owl = jQuery("#SideTestimonials");
			owl.owlCarousel({
			stopOnHover : true,
			navigation:true,
			autoPlay : 4000,
			autoHeight : true,
			items :1,
			itemsDesktop : [1000,1], //2 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // 2 items betweem 900px and 601px
			itemsTablet: [600,1], //2 items between 600 and 0;
			itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});
		// Custom Navigation Events
		jQuery(".next2").click(function(){
			owl.trigger('owl.next');
		})
		jQuery(".prev2").click(function(){
			owl.trigger('owl.prev');
		})
	});
	
	
	jQuery(document).ready(function() {
		var owl = jQuery("#SideBlogposts");
			owl.owlCarousel({
			stopOnHover : true,
			navigation:true,
			autoPlay : 4000,
			autoHeight : true,
			items :1,
			itemsDesktop : [1000,1], //2 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // 2 items betweem 900px and 601px
			itemsTablet: [600,1], //2 items between 600 and 0;
			itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});
		// Custom Navigation Events
		jQuery(".next2").click(function(){
			owl.trigger('owl.next');
		})
		jQuery(".prev2").click(function(){
			owl.trigger('owl.prev');
		})
	});

	//
	jQuery(document).ready(function() {
		var owl = jQuery("#SideTestimonials1");
			owl.owlCarousel({
			stopOnHover : true,
			navigation:true,
			autoPlay : 4000,
			autoHeight : true,
			items :1,
			itemsDesktop : [1000,1], //2 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // 2 items betweem 900px and 601px
			itemsTablet: [600,1], //2 items between 600 and 0;
			itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});
		// Custom Navigation Events
		jQuery(".next2").click(function(){
			owl.trigger('owl.next');
		})
		jQuery(".prev2").click(function(){
			owl.trigger('owl.prev');
		})
	});
	
	jQuery(document).ready(function() {
		var owl = jQuery("#SideBlogposts1");
			owl.owlCarousel({
			stopOnHover : true,
			navigation:true,
			autoPlay : 4000,
			autoHeight : true,
			items :1,
			itemsDesktop : [1000,1], //2 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // 2 items betweem 900px and 601px
			itemsTablet: [600,1], //2 items between 600 and 0;
			itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});
		// Custom Navigation Events
		jQuery(".next2").click(function(){
			owl.trigger('owl.next');
		})
		jQuery(".prev2").click(function(){
			owl.trigger('owl.prev');
		})
	});
})(jQuery);