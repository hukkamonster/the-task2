$(function () {
  let burger = document.querySelector(".burger__menu");
  let menu = document.querySelector(".header__bottom");
  burger.addEventListener("click", function (e) {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("menu--close");
  });

  $(".slider__track").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    nextArrow: document.querySelector(".btn-next"),
    prevArrow: document.querySelector(".btn-prev"),
  });

  let accordionTitle = document.getElementsByClassName("accordion__title");
  for (var j = 0; j < accordionTitle.length; j++) {
    accordionTitle[j].addEventListener("click", function (e) {
      if (!this.classList.contains("active")) {
        for (var j = 0; j < accordionTitle.length; j++) {
          accordionTitle[j].classList.toggle("active");
        }
        this.classList.add("active");
      }
    });
  }
  setTimeout(function () {
    var preloader = document.querySelector(".preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 500);
});
