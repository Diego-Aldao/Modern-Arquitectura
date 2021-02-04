var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    loop:true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.swiper-container-dos', {
      autoplay: true,
      speed: 1000,
  });

  var swiper = new Swiper('.swiper-container-tres',{
    autoplay:true,
    speed: 100,
    breakpoints:{
      580:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1240:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1440:{
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }
  });
  var swiper = new Swiper('.swiper-container-cuatro',{
    autoplay:true,
    speed: 1000,
  });
  var swiper = new Swiper('.swiper-container-cinco', {
    spaceBetween: 60,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
      1024:{
        slidesPerView: 2,
        spaceBetween: 80,
      },
    }
  });
  var swiper = new Swiper('.swiper-container-seis', {
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });