$('.owl-carousel').owlCarousel({
  loop: true,
  stagePadding:60,
  // center:true,
  margin: 20,
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

$(document).on('click','#btn1',function() {
  window.open("./pages/products.html", "_self");
});

$(document).on('click','#next-btn',function() {
  window.open("./products2.html", "_self");
});  

$(document).on('click','#prev-btn',function() {
  window.open("./products.html", "_self");
});  

$(document).on('click','.navbar-brand',function() {
  window.open("../index.html", "_self");
});