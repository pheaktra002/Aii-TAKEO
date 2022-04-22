
$(function () {
    /*=========================================================
    |                Dropdown
    ==========================================================*/
    $('.nav-list .nav-list-item').find('.sub-nav-list').hide();
    $('.nav-list .nav-list-item').hover(function () {
        $(this).find('.sub-nav-list').fadeIn(100);
    }, function () {
        $(this).find('.sub-nav-list').fadeOut(50);
    });
    /////////////// Sub menu one /////////////////////////////
    $('.has-sub-nav-one').find('.sub-nav-one').hide();
    $('.has-sub-nav-one').hover(function () {
        $(this).find('.sub-nav-one').fadeIn(100);
    }, function () {
        $(this).find('.sub-nav-one').fadeOut(50);
    });
    //////////////////////////////////////////////////////////


    /*=========================================================
    |                Carousel
    ==========================================================*/
    $(".header-slide-items").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 500,
        autoplayHoverPause: false,
    });
});