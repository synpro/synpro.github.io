jQuery(document).ready(function($) {
  // scrolling
  //$('#nav-main').scrollspy()

  // Localscrolling
  $('#nav-main, .brand').localScroll();
  $('#news, .container').localScroll();

  // disclaimer
  $(".link").click(function() {
    $(".disclaimerContent").toggle();
    return true;
  });

  $('#news, .container').localScroll();
});
