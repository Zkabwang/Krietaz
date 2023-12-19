/**PRELOADER */
$(window).on('load', function () {
    $('#status').fadeOut(1000);
    $('#preloader').delay(350).fadeOut(1000);
});

/**TEAM =========================
  ==================*/

  $(function(){
    $("team-members").owlCarousel({
        item: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
    });
  });