$(document).ready(function() {
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

    $('.tooltipped').tooltip({delay: 50});
});