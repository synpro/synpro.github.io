jQuery(document).ready(function($) {
  // scrolling
  $('#nav-main').scrollspy();

  // Localscrolling
  $('#nav-main, .brand').localScroll();
  $('#news, .container').localScroll();

  // disclaimer
  $("a#toggleDisclaimer").click(function() {
    $("#disclaimerContent").toggle();
    return true;
  });

});
