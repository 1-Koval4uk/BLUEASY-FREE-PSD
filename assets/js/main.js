$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 20) {
        $('.header').addClass('header-active');
    }
    else {
        $('.header').removeClass('header-active');
    };
});

$('.filter-button').click(function(){
    var value =$(this).attr("data-filter");
    if(value =='all'){
        $('.filter').show('1000');
    }
    else{
        $(".filter").not('.'+value).hide('1000');
        $(".filter").filter('.'+value).show('1000');
    }
})
