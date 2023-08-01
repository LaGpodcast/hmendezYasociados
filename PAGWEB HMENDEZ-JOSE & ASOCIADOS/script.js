// Script para hacer la página interactiva
    
    // Agregar interactividad al menú de navegación
    const menuItems = document.querySelectorAll("nav a");

    menuItems.forEach(item => {
      item.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
      event.preventDefault();
      const targetSectionId = event.target.getAttribute("href");
      const targetSection = document.querySelector(targetSectionId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Agregar interacción a los botones de compra
    const comprarButtons = document.querySelectorAll("section div button");

    comprarButtons.forEach(button => {
      button.addEventListener("click", handleCompraButtonClick);
    });

    function handleCompraButtonClick(event) {
      const productName = event.target.parentNode.querySelector("h3").innerText;
      alert(`¡Has comprado ${productName}!`);
    }

    // Agregar interacción al formulario de inscripción
    const formularioInscripcion = document.querySelector("section#cursos form");

    formularioInscripcion.addEventListener("submit", handleFormSubmit);

    function handleFormSubmit(event) {
      event.preventDefault();
      const nombre = event.target.nombre.value;
      const email = event.target.email.value;
      alert(`¡Gracias, ${nombre}! Te has inscrito con éxito. Nos pondremos en contacto contigo en ${email}.`);
      event.target.reset();
    }
// Cuando el documento está listo
    document.addEventListener("DOMContentLoaded", function() {
      // Agregar eventos a los botones de compra
      var comprarButtons = document.querySelectorAll("button");
      comprarButtons.forEach(function(button) {
        button.addEventListener("click", function() {
          alert("¡Compra realizada con éxito!");
        });
      });

      // Desplazamiento suave al hacer clic en los enlaces del menú de navegación
      var navLinks = document.querySelectorAll("nav a");
      navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
          event.preventDefault(); // Evita el comportamiento predeterminado del enlace
          var targetSection = document.querySelector(link.getAttribute("href"));
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        });
      });
    });
//-------------------------------------------------------------
function buscarEnGoogle() {
    const searchTerm = document.getElementById("google").value;
    if (searchTerm.trim() !== "") {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      window.location.href = `https://www.google.com/search?q=${encodedSearchTerm}`;
    }
  }

  // Agrega un evento click al botón para que llame a la función buscarEnGoogle cuando se presione
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario, ya que usaremos JavaScript para realizar la búsqueda
    buscarEnGoogle();
  });

  const logo = document.getElementById('logo');

  let rotateAngle = 0;
  let isRotating = false;
  
  logo.addEventListener('mouseover', () => {
      if (!isRotating) {
          isRotating = true;
          rotateLogo();
      }
  });
  
  logo.addEventListener('mouseout', () => {
      isRotating = false;
  });
  
  function rotateLogo() {
      if (isRotating) {
          rotateAngle += 1;
          logo.style.transform = `rotate(${rotateAngle}deg)`;
          requestAnimationFrame(rotateLogo);
      }
  }