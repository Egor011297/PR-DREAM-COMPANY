
var mixer = mixitup('.portfolio__content');

$(function() {
    $(".slider-block__inner").slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>'
    });
});