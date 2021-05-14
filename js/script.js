//OWL CAROUSEL WORKING (PRODUCTS DIV ON MAIN PAGE)

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

//USE OF JQUERY FOR EVENTS

$(document).ready(function () {
  $(".btn1").click(function () {
    window.open("./pages/products.html", "_self");
  }),
    $(".navbar-brand").click(function () {
      window.open("../index.html", "_self");
    }),
    
    //ANIMATION ON CHECKOUT BUTTON
    $(".btn-warning").click(function () {
      swal("Order Placed!", "Your order has been successfully placed.", "success");
    });
});


// OPENING OF POP-UP FORM ON CLICK
let modalBtns = [...document.querySelectorAll(".btn")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

//CLOSING OF POP-UP FORM ON CLICK
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