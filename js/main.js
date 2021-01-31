jQuery(document).ready(function($) {

  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
      },
      {
        breakpoint: 760,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
          }     
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1219,
        settings: "unslick",
      }
    ],
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  });

  const toggles = document.querySelectorAll(".benefits__item-title");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.parentNode.classList.toggle("active");
  });
});

});