'use strict';

$(document).ready(function() {

$('#jumbo-name').addClass('jumbo-name');

//elemets appearing smoothly
    $(window).scroll(function() {
      let windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        let objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(600,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(600,0);}
        }
      });
    });


    //progress bars loading on 1st scroll
    $(window).scroll(function() {
        let windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $('.progress').each(function() {
          /* Check the location of each desired element */
          let objectBottom = $(this).offset().top + $(this).outerHeight();
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
           $('.bar').addClass('appear');
          }
        });
      });

      //smooth scrolling from navbar
      

      $(window).scroll(function() {
          let navheight = $('#navigation').height();
          console.log(navheight);
        let scrollPos = $(document).scrollTop() + navheight;
        
        $('#navbarNav a').each(function(){
            let currLink = $(this);
            let refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

                $('#navbarNav ul li a').removeClass("active");
                            currLink.addClass("active");
                        }
                        else{
                            currLink.removeClass("active");
                        }
                    });
                
            });

            $('a').on('click', function(event) {
                if (this.hash !== "") {
                  event.preventDefault();
                  let hash = this.hash;
                  $('html, body').animate({
                    scrollTop: ($(hash).offset().top - $('#navigation').height()+ 'px')
                  }, 800, function(){
                    window.location.hash = hash - $('#navigation').height()+ 'px';
                  });
                }
              });

     // 


});
