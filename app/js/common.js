$(document).ready(function(){


//btn menu mobile
    $('.btn_nav').click(function(){
        $(this).toggleClass('active');
    });
    $('.btn_nav').click(function(){
        $('nav').slideToggle();
    });

//    owlCarousel
    $("#owl-carousel").owlCarousel({
        navigation : true, 
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        items : 1,
        loop:true,
        autoplay:true,
        smartSpeed:1500,
        autoplayTimeout:4000,
        autoplayHoverPause: true,
        itemsMobile : true,
        margin:50,
        nav:true,
        navText:'',
        autoplayHoverPause: true
    });
    
//    magnificPopup
    $('.header_call, .header_price, .link_card_product').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 300

    });

    
});