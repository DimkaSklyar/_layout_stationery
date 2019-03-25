$(document).ready(function () {

$('.slider-wrapper').owlCarousel({
    items: 1,
    loop: true,
    margin: 30
});

var owl = $('.popular-product').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    loop: true
});

var owl2 = $('.office-product').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    loop: true
});

var owl3 = $('.papper-product').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    loop: true
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


});