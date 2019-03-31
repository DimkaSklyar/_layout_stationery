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
    responsive:{
        0:{
            items:1,
            dots: true
        },
        576:{
            items:2,
            dots: true
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
    responsive:{
        0:{
            items:1,
            dots: true
        },
        576:{
            items:2,
            dots: true
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
    responsive:{
        0:{
            items:1,
            dots: true
        },
        576:{
            items:2,
            dots: true
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

// var size = 100;

// $(".product-description").each(function () {
//     if ($(this).text() != '') {
//         $(this).text($(this).text().substring(0, size) + "...");
//     }
// });

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


// form callback
$('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
        beforeOpen: function() {
            if($(window).width() < 700) {
                this.st.focus = false;
            } else {
                this.st.focus = '#name';
            }
        }
    }
});



// product-form
var price;
var quality;

$("a[href='#product-dialog']").click(function () {
    price = +$(this).closest(".product-item").find(".price").text() * 100;
    $("#product-form-price").text(parseFloat(price / 100).toFixed(2));
    $("#count-product").val(1);
    $("#product-img").attr("src",  $(this).closest(".product-item").find("img").attr("src"));
    $("#product-name").text($(this).closest(".product-item").find(".name-product").text());
    $("#product-description").text($(this).closest(".product-item").find(".product-description").text())
});

$("a[href='#product-dialog-sale']").click(function () {
    price = +$(this).siblings(".price").text() * 100;
    $("#product-form-sale-price").text(parseFloat(price / 100).toFixed(2));
    $("#count-product").val(1);
    $("#product-img-sale").attr("src",  $(this).find("img").attr("src"));
    $("#product-name-sale").text($(this).closest(".submenu-sale-wrapper").find(".product-name-sale").text());
    $("#product-description-sale").text($(this).closest(".submenu-sale-wrapper").find(".product-description-sale").text())
});

$(".plus").click(function () { 
    if (($(this).siblings("#count-product").val() == 1)) {
        quality = price;
    }
    $(this).siblings("#count-product").val(+$(this).siblings("#count-product").val()+1);
    
    quality = +quality + +price;
    $(this).parent().parent().children(".price").text(parseFloat(quality / 100).toFixed(2));
});

$(".minus").click(function () { 
    if ($(this).siblings("#count-product").val() > 1) {
        if (($(this).siblings("#count-product").val() == 1)) {
            quality = price;
        }
        $(this).siblings("#count-product").val(+$(this).siblings("#count-product").val()-1);
        
        quality = +quality - +price;
        $(this).parent().parent().children(".price").text(parseFloat(quality / 100).toFixed(2));
    }
});

$("#consult").click(function () { 
    $("#callback-header").text($(this).text());
});

$("#call-me").click(function () { 
    $("#callback-header").text("Заказать звонок");
});


// mixitup

$(".category-href").click(function(){
    var getValue = $(this).attr('id');
    // console.log(getValue);
    localStorage.setItem('button', getValue);
});


var mixer = mixitup('.catalog-container');
var selectSort = document.querySelector('.select-sort');

selectSort.addEventListener('change', function() {
    var order = selectSort.value;

    mixer.sort(order);
});

var buttonNameClick = localStorage.getItem('button');

var a = $('.catalog-category');

for (let i = 0; i < a.length; i++) {
    if ($(a[i]).data('filter').substring(1) == buttonNameClick) {
        $(a[i]).trigger('click');
    }
    switch (buttonNameClick) {
        case 'all':
            $(".sort-category-wrapper").hide();
            break;
        case 'peppers': 
            $(".sort-category-wrapper").show();
            $(".sort-category-pepper").show();
            break;
        case 'office':
            $(".sort-category-wrapper").show();
            $(".sort-category-office").show();
            break;
        case 'writing':
            $(".sort-category-wrapper").show();
            $(".sort-category-writing").show();
            break;
        case 'development':
            $(".sort-category-wrapper").show();
            $(".sort-category-development").show();
            break;
        case 'school':
            $(".sort-category-wrapper").show();
            $(".sort-category-school").show();
            break;
    }
}

$("#all").click(function () { 
    $(".sort-category-wrapper").hide();
});

$("#peppers").click(function () { 
    $(".sort-category-wrapper").show().children().hide();
    $(".sort-category-pepper").show();
});

$("#office").click(function () { 
    $(".sort-category-wrapper").show().children().hide();
    $(".sort-category-office").show();
});

$("#writing").click(function () { 
    $(".sort-category-wrapper").show().children().hide();
    $(".sort-category-writing").show();
});

$("#development").click(function () { 
    $(".sort-category-wrapper").show().children().hide();
    $(".sort-category-development").show();
});

$("#school").click(function () { 
    $(".sort-category-wrapper").show().children().hide();
    $(".sort-category-school").show();
});

});