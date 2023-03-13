$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
  }); 