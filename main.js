// Animación de aparición al hacer scroll (Intersection Observer)
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null, // usa la pantalla como referencia
    threshold: 0.15 // se activa cuando el 15% del elemento es visible
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Opcional: deja de observar una vez que ya apareció
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Selecciona todos los elementos con la clase .reveal
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => revealObserver.observe(el));
});
// Efecto de iluminación interactiva (Spotlight Hover)
document.addEventListener('DOMContentLoaded', () => {
  const spotlightCards = document.querySelectorAll('.contact-card, .spotlight, .step-card, .project-card');

  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      // Calculamos la posición del cursor dentro de la tarjeta
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Actualizamos las variables CSS en tiempo real
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('header nav a');

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');

    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label',
        isOpen ? 'Cerrar menú' : 'Abrir menú'
    );
});

// Seleccionar opción y cerrar menú
navLinks.forEach(link => {
    link.addEventListener('click', () => {

        // Quitar selección anterior
        navLinks.forEach(item => {
            item.classList.remove('active-link');
        });

        // Marcar opción seleccionada
        link.classList.add('active-link');

        // Cerrar menú
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
    });
});


