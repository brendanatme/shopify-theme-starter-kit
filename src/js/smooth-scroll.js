// smooth scroll on hash clicks
(function($) {

'use strict';

$(function() {
  $(document).on('click', 'a[href*="#"]:not([href="#"])', function() {
    if (
      location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

})(window.theme.jQuery);
