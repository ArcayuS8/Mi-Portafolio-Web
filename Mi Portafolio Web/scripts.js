// scripts.js

// Esta función agrega las estrellas a los elementos .stars según su atributo data-rating
function addStars() {
    const skills = document.querySelectorAll('.skills .skill');
    
    skills.forEach(skill => {
        const rating = parseInt(skill.getAttribute('data-rating'));
        const starsContainer = skill.querySelector('.stars');
        
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            if (i < rating) {
                star.classList.add('filled');
            }
            starsContainer.appendChild(star);
        }
    });
}

// Esperar a que se cargue el contenido antes de agregar las estrellas
document.addEventListener('DOMContentLoaded', addStars);
