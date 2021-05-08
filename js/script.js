$('.owl-carousel').owlCarousel({
  loop: true,
  // stagePadding: 50,
  center: true,
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
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

$(document).ready(function () {
  $(".btn1").click(function () {
    window.open("./pages/products.html", "_self");
  }),
    $(".navbar-brand").click(function () {
      window.open("../index.html", "_self");
    }),
    $(".btn-warning").click(function(){
      swal("Order Placed!", "Your order has been successfully placed.", "success");
    });
});

let modalBtns = [...document.querySelectorAll("#quote")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal)
      .style.display = "block";
  }
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}