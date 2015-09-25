$(document).ready(function() {
  $('.collapsible').collapsible({
    accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
  /* ScrollTop on anchor */
  $('a.l-scroll').on('click', function(evt) {
    evt.preventDefault();
    var target = $(this).attr('href');
    if (target == '#l-top')
      $('html, body')
      .stop()
      .animate({
        scrollTop: $(target).offset().top - 1000
      }, 1000);
    else
      $('html, body')
      .stop()
      .animate({
        scrollTop: $(target).offset().top - 35
      }, 1000);
  });

  $('.tooltipped').tooltip({
    delay: 50
  });
});