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