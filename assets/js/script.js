$(document).ready(function(){

    // home page banner slider
    $('.page-banner-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    });

    // companies logo slider
    $('.companies-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
    });

    // organization slider
    $('.orgn-slider .banner-slider-container').slick({
      dots: false,
      infinite: false,
      arrows: true,
      speed: 300,
      slidesToShow: 9,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
  });

  // chapter committee slider
  $('.ch-com-slider .banner-slider-container').slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
  ]
});


});