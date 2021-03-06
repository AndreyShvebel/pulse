$(document).ready(function(){
    $('.carousel__inner').slick({
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"> <img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="../icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });