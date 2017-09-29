
function main () {

  (function () {
    'use strict'


    // Preloader */
    $(window).load(function () {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove()

  	}) 

   // Page scroll
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    // anchor reveal

                            
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('.anchor-img').fadeIn(500);
            } else {
                $('.anchor-img').fadeOut(500);
            }
        });
    

//Fades Home Menus

$('ul.nav li.dropdown').hover(function() {
  $(this).find('#dropdown-item').stop(true, true).delay(200).fadeIn('fast');
}, function() {
  $(this).find('#dropdown-item').stop(true, true).delay(200).fadeOut('fast');
});


//Fades Carousel Buttons

$('.carousel-control').hover(function() {
  $(this).find('#car-right, #car-left').stop(true, true).delay(200).fadeIn('fast')
}, function() {
  $(this).find('#car-right, #car-left').stop(true, true).delay(200).fadeOut('fast')
});




// Cart Button

      $('.button-cart').on('click', function(){
          $(this).addClass('selected')
          $(this).attr("disabled", true)
          $(this).html('&#10003; Added!')
          $('#view-cart').fadeIn('slow')
      })
 
 
$('.button-cart').keyup()

// End Cart


      $(window).scroll(function(){
    $(".topHead").css("opacity", 1 - $(window).scrollTop() / 400)
  })
  
  
    $(window).on('load', function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".innerHeaders").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        
        
        
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })



  	// Portfolio Isotope Filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
  
    

 

  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());



    

}
main();