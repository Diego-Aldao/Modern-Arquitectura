var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    loop:true,
    speed: 1000,
    autoplay: {
        delay: 115000,
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
    speed: 100,
    loop:true,
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
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

var swiper = new Swiper('.swiper-container-cuatro',{
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
    breakpoints:{
      520:{
        slidesPerView: 3,
      },
      768:{
        slidesPerView: 4,
      },
    }
  });
  var swiper = new Swiper('.swiper-blog-principal',{
    autoplay:true,
    speed: 1000,
    loop:true,
    breakpoints:{
      1024:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
  var swiper = new Swiper('.swiper-blog-post-relacionados',{
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop:true,
    breakpoints:{
      480:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });


  //ANIMACIONES GSAP

  //ANIMACIONES PROYECTOS
  const slidesAnimadas = document.querySelectorAll(".slides-animadas");
 slidesAnimadas.forEach(slide => {
  slide.addEventListener("mouseenter", () =>{
    gsap.to(slide, {
      opacity: 1,
      duration: 0.5,
    });
  });

  slide.addEventListener("mouseleave", () =>{
    gsap.to(slide, {
      opacity: 0,
      duration: 0.5,
    });
  });
   
 });

 //ANIMACIONES EQUIPO
 const redesPersona = document.querySelectorAll(".redes-persona");
 redesPersona.forEach(slide => {
  slide.addEventListener("mouseenter", () =>{
    gsap.to(slide, {
      opacity: 1,
      duration: 0.3,
    });
  });

  slide.addEventListener("mouseleave", () =>{
    gsap.to(slide, {
      opacity: 0,
      duration: 0.3,
    });
  });
   
 });

 //ANIMACIONES DESPLEGABLE
 const btnAbrirDesplegable = document.querySelector(".menu-hamburguesa");
 const menuDesplegable = document.querySelector(".menu-desplegable");
 const btnCerrarDesplegable = document.querySelector(".btn-cerrar");
 const lineaBtnUno = document.querySelector(".linea-btn-uno");
 const lineaBtnDos = document.querySelector(".linea-btn-dos");


 btnAbrirDesplegable.addEventListener("click", () => {
   gsap.to(menuDesplegable, {
     right: 0,
   });
   gsap.to(lineaBtnDos, {
    transform: "rotate(45deg)",
  });  
  gsap.to(lineaBtnUno, {
    transform: "rotate(-45deg)",
  }); 
 });

 btnCerrarDesplegable.addEventListener("click", () => {
  gsap.to(menuDesplegable, {
    right: "-100%",
    delay: 0.5,
  });  
    gsap.to(lineaBtnDos, {
      transform: "rotate(-45deg)",
    });  
    gsap.to(lineaBtnUno, {
      transform: "rotate(45deg)",
    });  
});

//CONTADOR
function animarValor(obj, inicio, final, duracion) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progreso = Math.min((timestamp - startTimestamp) / duracion, 1);
    obj.innerHTML = Math.floor(progreso * (final - inicio) + inicio);
    if (progreso < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const clientes = document.querySelector(".clientes");
animarValor(clientes, 0, 250, 15000);
const trabajos = document.querySelector(".trabajos");
animarValor(trabajos, 0, 75, 15000);
const dias = document.querySelector(".dias");
animarValor(dias, 0, 3250, 15000);

//API INTESERCTION OBSERVER
const crearObservador = (animacion, nuevaClase) => {
  const secciones = document.querySelectorAll(animacion);

  const options = {
    root: null, //es el default, todo el viewport
    threshold: 0.3, // 0 dispara en el momento que el elemento entra al observador, 1 dispara cuando todo el elemento ya esta dentro del observador
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } //si no esta en la pantalla, termina la funcion
      entry.target.classList.add(nuevaClase);

      observer.unobserve(entry.target); //para que las animaciones solo se ejecuten la primera vez que se entra en la seccion.
    });
  }, options);
  secciones.forEach((section) => {
    observer.observe(section); //al usar querySelectorAll tengo un array con las secciones, y lo que quiero lograr es observar uno por uno
  });
};

crearObservador(".animacion-uno", "final-uno");
crearObservador(".animacion-dos", "final-dos");
crearObservador(".animacion-tres", "final-tres");
crearObservador(".animacion-cuatro", "final-cuatro");
crearObservador(".animacion-cinco", "final-cinco");
crearObservador(".animacion-seis", "final-seis");
crearObservador(".animacion-siete", "final-siete");