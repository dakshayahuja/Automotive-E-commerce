$('.owl-carousel').owlCarousel({
  loop: true,
  stagePadding:60,
  // center:true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  animateOut: 'fadeOut',
  dots: false,
  // nav: true,
  // navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

document.getElementById("btn1").onclick = function () {
  window.open("../pages/products.html", "_blank");
};

