$(function() {
    function scrollToAnchor(id) {
        debugger;
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
});

$(window).on('scroll', function(){

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 1.5;

  
    if(bgPosition){
      $('#top').css('background-position', 'center bottom -'+ bgPosition + 'px');
    }
});





