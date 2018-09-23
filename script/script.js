$(document).ready(function(){
    console.log(screen.width);    
    
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



// START OF COMMENT BOX
var count = 0;
var commentobj = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var textarea = document.getElementById("textarea").value;
    if(name!="" && name.substring(0, 1) !== '[0-9]' && email != "" && textarea != "") {
      alert("Thank You " + name + " for Your Valuable comment");  
    }
    else{
        name.focus();
    }    
    return email;
}

function emailPrint() {    
    
    if(count == 0) {
      document.getElementById("email").insertAdjacentHTML("afterend","<p style='color:blue;margin-left:10%'>Your email id will not be shared with anyone</p>");
        count++;  
    }
}

document.getElementById("email").addEventListener("keydown",emailPrint);
document.getElementById("submit").addEventListener("click", commentobj);

//END OF COMMENT BOX

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

