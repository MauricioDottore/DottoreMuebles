document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider ul');
    const slides = document.querySelectorAll('.slider ul li');
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const newPosition = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${newPosition}px)`;
    }

    setInterval(nextSlide, 3000); // Cambia de slide cada 3.5 segundos
});

/*CATALOGO*/
// En el archivo script.js

document.addEventListener("DOMContentLoaded", function() {
    // Configuración del carrusel de fotos
    $('.photo-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

/*NUestra empresa*/
document.addEventListener('DOMContentLoaded', function() {
    const seccionEmpresa = document.querySelector('.empresa-section');
    const cuadrosEmpresa = document.querySelectorAll('.empresa-section > div');

    cuadrosEmpresa.forEach(function(cuadro) {
        cuadro.addEventListener('mouseenter', function() {
            cuadro.style.transform = 'scale(1.05)';
        });

        cuadro.addEventListener('mouseleave', function() {
            cuadro.style.transform = 'scale(1)';
        });
    });
});

/*Contacto*/
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar lógica para enviar el formulario, como enviar datos a un servidor o mostrar un mensaje de éxito
        alert('Mensaje enviado correctamente');
        contactForm.reset(); // Limpiar el formulario después de enviarlo
    });
});

/* HAMBURGESA*/
// Toggle burger menu on click with smooth animation
document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
    document.querySelector('.nav-menu-right').classList.toggle('active');
});

/*Obras realizadas*/
/*Servicios*/
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".servicios .nav-menu a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

/*Servicios*/
const botones = document.querySelectorAll('.servicios button');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const contenido = boton.nextElementSibling;
    contenido.classList.toggle('oculto');
  });
});


/*Catalogo*/
document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo img');
    photos.forEach(function(photo) {
        photo.addEventListener('click', function() {
            expandImage(photo);
        });
    });
});

function expandImage(img) {
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.onclick = function () {
        overlay.parentNode.removeChild(overlay);
    };

    var imgClone = img.cloneNode();
    imgClone.style.maxWidth = '90%';
    imgClone.style.maxHeight = '90%';
    overlay.appendChild(imgClone);

    document.body.appendChild(overlay);
}



