$(function(){

    $('.topslider').slick({
        dots: true,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: false
    });

    $(window).scroll( function(){
        // Check the location of the object
        $('.fade-in').each( function(){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
    
            // If the object is inside the window, fade it in!
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
            }
        }); 

    });


    // ------ Navigation ---------
    $('#openNav1').click(function(){
        $('#myNav1').css('width', '100%')
    });

    $('#closeNav1').click(function(){
        $('#myNav1').css('width', '0%')
    });   


    // ------- banner ---------
   







    // ----- Home ----

    $('#test1').click(function(){
        $('.elephant-overlay').show(function(){
           elephantSlide();
        });
    });

    function elephantSlide (){
        $('#elephant-content').animate({
            top: '150px',
            opacity: '1',
        }, 'slow');
    }

    $('.closeNav').click(function(){
        $('.overlay').hide();
    });    
     


    $('#test2').click(function(){
        $('.tiger-overlay').show(function(){
           tigerSlide();
        });
    });

    function tigerSlide (){
        $('#tiger-content').animate({
            top: '150px',
            opacity: '1',
        }, 'slow');
    }


    $('#test3').click(function(){
        $('.elephant2-overlay').show(function(){
           elephant2Slide();
        });
    });

    function elephant2Slide (){
        $('#elephant2-content').animate({
            top: '150px',
            opacity: '1',
        }, 'slow');
    }


    $('#test4').click(function(){
        $('.giraffe-overlay').show(function(){
           giraffeSlide();
        });
    });

    function giraffeSlide (){
        $('#giraffe-content').animate({
            top: '150px',
            opacity: '1',
        }, 'slow');
    }



    // ----- Animals -----

    // $('.ani-gallery1').hide();
    //     $('#page1').show();

    // $('#animals1').click(function(){
    //     $('.ani-gallery1').hide();
    //     $('#page1').show();
    // });

    // $('#animals2').click(function(){
    //     $('.ani-gallery1').hide();
    //     $('#page2').show();
    // });

    // $('#animals3').click(function(){
    //     $('.ani-gallery1').hide();
    //     $('#page3').show();
    // });
    // ok, we will not use this code, we will use animation, because we want to move the box, okay?

    $('#animals1').click(function(){
        $('.ani-gallery').animate({
            left: '0px'
        });
    });
    
    $('#animals2').click(function(){
        $('.ani-gallery').animate({
            left: '-1200px'
        });
    });

    $('#animals3').click(function(){
        $('.ani-gallery').animate({
            left: '-2400px'
        });
    });


    $('#animals4').click(function(){
        $('.ani-gallery').animate({
            left: '0px'
        });
    });
    
    $('#animals5').click(function(){
        $('.ani-gallery').animate({
            left: '-1200px'
        });
    });

    $('#animals6').click(function(){
        $('.ani-gallery').animate({
            left: '-2400px'
        });
    });





// -------- Tours --------
    $('.flip').click(function(){
        $('.panel').slideUp('fast');
        $(this).next().slideToggle('fast');
    });

    // $('.tab-con').hide();
    //     $('#price1').show();

    // $('#price-1').click(function(){
    //     $('.tab-con').hide();
    //     $('#price1').show();
    // });

    // $('#package-1').click(function(){
    //     $('.tab-con').hide();
    //     $('#package1').show();
    // });

        $('#price-btn1').parent().siblings('.price1').show();
        $('#price-btn1').parent().siblings('.package1').hide();

        $('#price-btn2').parent().siblings('.price1').show();
        $('#price-btn2').parent().siblings('.package1').hide();

        $('#price-btn3').parent().siblings('.price1').show();
        $('#price-btn3').parent().siblings('.package1').hide();

        $('#price-btn4').parent().siblings('.price1').show();
        $('#price-btn4').parent().siblings('.package1').hide();

        $('#price-btn5').parent().siblings('.price1').show();
        $('#price-btn5').parent().siblings('.package1').hide();

        $('#price-btn6').parent().siblings('.price1').show();
        $('#price-btn6').parent().siblings('.package1').hide();

        $('#price-btn7').parent().siblings('.price1').show();
        $('#price-btn7').parent().siblings('.package1').hide();

        $('#price-btn8').parent().siblings('.price1').show();
        $('#price-btn8').parent().siblings('.package1').hide();

        $('#price-btn9').parent().siblings('.price1').show();
        $('#price-btn9').parent().siblings('.package1').hide();

        $('#price-btn10').parent().siblings('.price1').show();
        $('#price-btn10').parent().siblings('.package1').hide();


    $('.price').click(function(){
        $(this).parent().siblings('.price1').show();
        $(this).parent().siblings('.package1').hide();
    });
    $('.package').click(function(){
        $(this).parent().siblings('.package1').show();
        $(this).parent().siblings('.price1').hide();
    });





    // -------- Reservation -----------

    
    
    

    $('#res-btn').click(function(){
        var yourname = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var people = $('#people').val();
        var resDate = $('#checkin-date').val();
        var tour = $('#tour-selection').val();
        console.log(yourname+email+phone+people+resDate+tour);
        if(yourname.length > 0 && email.length > 0 && phone.length > 0 && people.length > 0 && resDate.length > 0 && tour.length > 0){
            $('.res-overlay').show(function(){
                reservationSlide();
             }); } else{
                alert('please complete to fill out');
            }
    });

    function reservationSlide (){
        $('.aft-submit').animate({
            opacity: '1',
        }, 'slow', function(){
            var yourname = $('#name').val();
            var people = $('#people').val();
            var resDate = $('#checkin-date').val();
            var tour = $('#tour-selection').val();
            $('#res-details').html('<strong>Dear <span class="res-text">'+ yourname+'</span></strong>');
            $('#res-text').html('Your information of <span class="res-info">'+tour +'</span> on <span class="res-info">'+resDate+'</span> for <span class="res-info">'+people+ '</span> people has sent to us.')
        });
    }

    $('.closeNav').click(function(){
        $('.overlay').hide();
    });    
     
    // var yourname = $('#name').val();

    // if(yourname.length > 0 && age.length > 0 ){

    // }else{
    //     alert('please input something');
    // }

});