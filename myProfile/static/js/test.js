$(function() {
    function scrollToAnchor(id) {
        var aTag = $(id);
        $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
    }

    $('h1').on('click', function () {
        alert('Clickされました');
    });

    $("#contactLink").on('click', function(){
        scrollToAnchor('#contact');
    });

    $("#portfolioLink").on('click', function(){
        scrollToAnchor('#portfolio');
    });

    $("#skillLink").on('click', function(){
        scrollToAnchor('#skill');
    });

    $("#profileLink").on('click', function(){
        scrollToAnchor('#profile');
    });

    $("#topLink").on('click', function(){
        scrollToAnchor('#top');
    });

    $(".menu-btn").on('click', function(){
        $(".menu-bar").toggleClass('is-active');
    });
});

$(window).on('scroll', function(){

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 1.2;
    var skillPosTop = $('#skill-bg').position().top;
    var skillBgPos = (scrollTop - skillPosTop) / 1.2;
    var pfPosTop = $('#portfolio-bg').position().top;
    var pfBgPos = (scrollTop - pfPosTop) / 1.2;

    if(bgPosition){
      $('#top').css('background-position', 'center bottom -'+ bgPosition + 'px');
      
    }

    $('#portfolio-bg').css('background-position', 'center '+ pfBgPos + 'px');
    $('#skill-bg').css('background-position', 'center '+ skillBgPos + 'px');
    
});





