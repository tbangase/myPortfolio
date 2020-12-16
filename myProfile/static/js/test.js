$(function() {
    $('h1').on('click', function () {
        alert('Clickされました');
    });
});

$(window).on('scroll', function(){

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 1.5;

    debugger;
  
    if(bgPosition){
      $('#top').css('background-position', 'center bottom -'+ bgPosition + 'px');
    }
});
