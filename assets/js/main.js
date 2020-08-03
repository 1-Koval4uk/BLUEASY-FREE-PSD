$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 20) {
        $('.header').addClass('header-active');
    }else if(wScroll > 50){
        $('.serv').addClass('active');
    }
    else {
        $('.header').removeClass('header-active');
    }
});
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 300) {
        $('.home').removeClass('active');
        $('.serv').addClass('active');
    }else{
        $('.serv').removeClass('active');
        $('.home').addClass('active');
    }
});
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 1000) {
        $('.serv').removeClass('active');
        $('.portf').addClass('active');
    }else{
        $('.portf').removeClass('active');
    }
});
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 1600) {
        $('.portf').removeClass('active');
        $('.feat').addClass('active');
    }else{
        $('.feat').removeClass('active');
    }
});
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 3400) {
        $('.feat').removeClass('active');
        $('.cont').addClass('active');
    }else{
        $('.cont').removeClass('active');
    }
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
});
