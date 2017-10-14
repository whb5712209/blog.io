$(document).ready(function() {

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').addClass('fadeIn');
            } else {
                $('#back-top').removeClass('fadeIn')
            }
        });

        // scroll body to 0px on click
        // $('#back-top a').click(function() {
        //     $('body,html').animate({
        //         scrollTop: 0
        //     }, 800);
        //     return false;
        // });
    });

});
