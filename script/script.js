
$(document).ready(function(){
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $(".navbar").addClass("nav-bar");
        }
        else{
          $(".navbar").removeClass("nav-bar");
        }
  })
    
    $('a[href^="#"]').on('click', function(){
    $('html, body').animate({
        'scrollTop': $( $(this).attr('href') ).offset().top
    }, 1000, 'swing');
    
    return false;
});
    
   function blinker() {
    $('.blink_me').fadeOut(600);
    $('.blink_me').fadeIn(600);
}
setInterval(blinker, 1000);

});
