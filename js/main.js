// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const ctaButton = document.querySelector('.cta-button');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Alterna la clase 'show'
    ctaButton.style.display = ctaButton.style.display === 'block' ? 'none' : 'block';
});

// Responsive menu reset on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show'); // Elimina la clase 'show' en pantallas grandes
        navLinks.style.display = 'flex'; // Asegúrate de que los enlaces se muestren en flex
        ctaButton.style.display = 'block';
    } else {
        navLinks.classList.remove('show'); // Elimina la clase 'show' en pantallas pequeñas
        navLinks.style.display = 'none'; // Oculta los enlaces
    }
});