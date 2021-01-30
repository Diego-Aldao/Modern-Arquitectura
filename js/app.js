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