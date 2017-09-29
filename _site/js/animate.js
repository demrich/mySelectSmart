var $win = $(window);

// $win.on('scroll', function () {
//   var top = $win.scrollTop() / 3;
//            if ($(this).scrollTop() > 750) {
//                $('.remote').fadeIn(600);
//            } else {
//                $('.remote').fadeOut(600);
//            }
//
//    });



//Correct way of managing responsive web animations

 function log(txt) {
    $("#log").html("location : <b>" + txt + "</b> px")
  }

  
  $(function() {
    var remoteTop = $('#remote').offset().top; //get the offset top of the element
  
    $(window).scroll(function() { //when window is scrolled
        var remote = remoteTop - $(window).scrollTop();

        if (remote < 440) {
            $('.remote3').fadeIn(600);
        } else {
            $('.remote3').fadeOut(600);
        };

        if (remote < 320) {
            $('.remote2').fadeIn(750);
        } else {
            $('.remote2').fadeOut(750);
        };


        if (remote < 250) {
            $('.remote').fadeIn(900);
        } else {
            $('.remote').fadeOut(900);
        };
    });


    var lampTop = $('#lamp').offset().top; //get the offset top of the element    
    $(window).scroll(function() { //when window is scrolled
        var lamp = lampTop - $(window).scrollTop();

        if (lamp < 250) {
            $('#lamp .lamp-on').fadeIn(600);
        } else {
            $('#lamp .lamp-on').fadeOut(600);
        };

        if (lamp < 190) {
            $('#lamp .light-lines').fadeIn(600);
        } else {
            $('#lamp .light-lines').fadeOut(600);
        };

    });
  });

  var doorTop = $('#door_swap').offset().top; //get the offset top of the element    
  $(window).scroll(function() { //when window is scrolled
      var door = doorTop - $(window).scrollTop();
          
      if(door < 350){
        $('#door_swap').css('background', "url(./img/svg/door-open-14.svg) no-repeat center center");

      } else
      {      
        $('#door_swap').css('background', "url(./img/svg/door-closed-13.svg) no-repeat center center");       
      }

 
  });

  var lampTop1 = $('#lamp1').offset().top; //get the offset top of the element    
  $(window).scroll(function() { //when window is scrolled
      var lamp1 = lampTop1 - $(window).scrollTop();
      

      if (lamp1 < 250) {
          $('#lamp1 .lamp-on').fadeIn(600);
      } else {
          $('#lamp1 .lamp-on').fadeOut(600);
      };

      if (lamp1 < 190) {
          $('#lamp1 .light-lines').fadeIn(600);
      } else {
          $('#lamp1 .light-lines').fadeOut(600);
      };

  });

  var motionSensorTop = $('#motion-control').offset().top;
  $(window).scroll(function(){
    var motionSensor = motionSensorTop -$(window).scrollTop();
    log(motionSensor);

    function shiftMan() {
        $('.man-fill').fadeIn(800);
    }


    if (motionSensor < 190) {
        shiftMan();
    }

    if (motionSensor > 190) {
        $('.man-fill').fadeOut(800);
    }


  });



