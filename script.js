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
$(function(){

});
$(window).scroll(function() {
  if ($(this).scrollTop() < 210) {
    $("#nav").removeClass("nav-fixed");
    $("#nav-right").removeClass("nav-right-fixed");
    $(".aside").removeClass("aside-fixed");
    $("#dPai").css("margin-top", "30px");
  } else {
    $("#nav").addClass("nav-fixed");
    $("#nav-right").addClass("nav-right-fixed");
    $(".aside").addClass("aside-fixed");
    $("#dPai").css("margin-top", "82px");
  }
});


// trying to fix the bug of refresh and
// disappear the fixed elements

// $(document).ready(function() {
//   console.log(this);
//   if ($(this).scrollTop() >= 210) {
//     $("#nav").addClass("nav-fixed");
//     $("#nav-right").addClass("nav-right-fixed");
//     $(".aside").addClass("aside-fixed");
//     $("#dPai").css("margin-top", "82px");
//   } else {
//     $("#nav").removeClass("nav-fixed");
//     $("#nav-right").removeClass("nav-right-fixed");
//     $(".aside").removeClass("aside-fixed");
//     $("#dPai").css("margin-top", "30px");
//   }
// });