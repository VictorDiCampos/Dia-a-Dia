// var scroll = document.getElementsByTagName('a');
// function pageScroll() {
//   window.scrollBy(0,50);
//   scrolldelay = setTimeout('pageScroll()',100); // scrolls every x milliseconds
// }
// scroll.addEventListener('click', pageScroll);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/////////////////////////////////////////////////////////// 
$(window).scroll(function() {
 console.log(this);
 if ($(this).scrollTop() >= 208) {
  $('#nav').addClass("nav-fixed");
  $('#nav-right').addClass("nav-right-fixed");
  $('.aside').addClass("aside-fixed");
 } else {
  $('#nav').removeClass("nav-fixed");
  $('#nav-right').removeClass("nav-right-fixed");
  $('.aside').removeClass("aside-fixed");
 }
});

// var scrollNavbar = function(){
//    var scrollar = document.documentElement.scrollTop;
//    var navLeft = document.getElementById('nav');
//    var navRight = document.getElementById('nav-right');
//    var top = navLeft.style.top; 
//    top = top - scrollar;
//    navLeft.style.top = top + "px";
//    navRight.style.top = top + "px";
// }
// $(window).scroll(scrollNavbar);