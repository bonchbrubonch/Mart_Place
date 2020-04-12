$(function(){
  $(".icon-th-list").on("click", function () {
    $(".products__item").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th").removeClass("active");
  });
  $(".icon-th").on("click", function() {
    $(".products__item").removeClass("list");
    $(".icon-th").addClass("active");
    $(".icon-th-list").removeClass("active");
  });

  $(".icon-th-list").on("click", function () {
    $(".products__item--favorites").addClass("list-favorites");
  });
  $(".icon-th").on("click", function () {
    $(".products__item--favorites").removeClass("list-favorites");
  });

  $(".icon-angle-left").on("click", function () {
    $(".icon-angle-left").addClass("active");
    $(".icon-angle-right").removeClass("active");
  });
  $(".icon-angle-right").on("click", function () {
    $(".icon-angle-right").addClass("active");
    $(".icon-angle-left").removeClass("active");
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 350,
    from: 30,
    to: 300,
    prefix: "$"
  });

  $('.product__slider-wraper').slick({
    infinite: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/chevron-left.png"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/chevron-right.png"></img>',
  });

  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn-active");
    $(".menu__list").slideToggle();
  });

  $(".acordion__header").click(function () {
    $(this).toggleClass("in").next().slideToggle();
    $(".acordion__header").not(this).removeClass("in").next().slideUp();
  });

$('.followers__slider-wraper--inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/chevron-left.png"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/chevron-right.png"></img>',
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
  });

  $('.single-product__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.single-product__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('select').styler();

  var mixer = mixitup('.products__innner');

});


