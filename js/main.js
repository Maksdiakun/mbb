$(document).ready(function () {

  // menu on screen 768
  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn_active');
    $('.menu').slideToggle(600).toggleClass('open');
    $('.nav').addClass('bg-green');
    if ($('.nav').hasClass('bg-green') && $('.menu').hasClass('open')) {
      $(".nav").addClass('bg-green');
    } else {
      setTimeout(function () {
        $(".nav").removeClass('bg-green');
      }, 500);
    }
  });

  $(window).resize(function () {
    if ($(window).width() >= 768) {
      $('.menu').addClass('d-flex');
    } else if ($(window).width() <= 767) {
      $('.menu').removeClass('d-flex');
    }
  });
  // menu on screen 768


  // hover
  function hoverEffectOnLinkGoods() {
    if ($(window).width() >= 1200) {
      $('.slider .slider__item').hover(function () {
        $(this).addClass('big-img');
        $(this).closest('a').siblings('a').removeClass('big-img');
      })
    }
  }
  hoverEffectOnLinkGoods();

  $(window).resize(function () {
    if ($(window).width() > 1200) {
      hoverEffectOnLinkGoods();
    } else if ($(window).width() <= 1199) {
      $('.slider__item').removeClass('big-img');
    }
  });

  // slider start
  function slideDetect() {
    $(".slider").not('.slick-initialized').slick({
      dots: false,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 99999,
          settings: "unslick"
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
            infinite: true
          }
        },
        {
          breakpoint: 922,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '60px'
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '50px'
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '40px'
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '30px'
          }
        }
      ]
    });
  }

  slideDetect();

  $(window).resize(function () {
    if ($(window).width() > 1200) {
      $('.slider').slick('unslick');
    } else if ($(window).width() <= 1199) {
      slideDetect()
    }
  });
  // slider end

});

function initMap() {
  // The location of Uluru
  var uluru = {lat: 48.8878223, lng: 24.1620070};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
};