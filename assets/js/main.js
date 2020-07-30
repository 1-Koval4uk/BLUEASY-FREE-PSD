$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 20) {
        $('.header').addClass('header-active');
    }
    else {
        $('.header').removeClass('header-active');
    };
});