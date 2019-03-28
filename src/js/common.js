$(document).ready(function () {

$('.slider-wrapper').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3500
});



var owl = $('.popular-product').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    loop: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            loop: true,
            dots: false,
        },
        1200:{
            items:4,
            loop:false
        }
    }
});

var owl2 = $('.office-product').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    loop: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            loop: true,
            dots: false,
        },
        1200:{
            items:4,
            loop:false
        }
    }
});

var owl3 = $('.papper-product').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    loop: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:3,
            loop: true,
            dots: false,
        },
        1200:{
            items:4,
            loop:false
        }
    }
});


$('.product-next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.product-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.product-2-next').click(function() {
    owl2.trigger('next.owl.carousel');
});

$('.product-2-prev').click(function() {
    owl2.trigger('prev.owl.carousel');
});

$('.product-3-next').click(function() {
    owl3.trigger('next.owl.carousel');
});

$('.product-3-prev').click(function() {
    owl3.trigger('prev.owl.carousel');
});


$(".menu-item").hover(function(){
    $(this).children(".submenu").show().addClass("active");
}, function() {
    $(this).children(".submenu").hide().removeClass("active");
});

$(".menu-item-mobile").click(function () { 
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    }
    else {
        $(this).addClass("active");
    }
    $(this).siblings(".submenu").slideToggle();
});

$(".name-page").click(function () { 
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    }
    else {
        $(this).addClass("active");
    }
    $(this).siblings(".menu-mobile").slideToggle();
});

var size = 100;

$(".product-description").each(function () {
    if ($(this).text() != '') {
        $(this).text($(this).text().substring(0, size) + "...");
    }
});

$(".product-inner").each(function () {
    if($(this).children(".old-price").length > 0) {
        $(this).parent().addClass("product-sale");
    }
});


// video

$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});

	$('.popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

});