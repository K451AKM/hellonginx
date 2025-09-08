// Crear partículas flotantes
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Tamaño aleatorio
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Posición horizontal aleatoria
        particle.style.left = Math.random() * 100 + '%';
        
        // Duración de animación aleatoria
        const duration = Math.random() * 3 + 4;
        particle.style.animationDuration = duration + 's';
        
        // Retraso aleatorio
        const delay = Math.random() * 2;
        particle.style.animationDelay = delay + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Efecto de hover en la tarjeta
function addCardInteraction() {
    const card = document.querySelector('.card');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
}

// Animación del texto
function animateText() {
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    
    setTimeout(() => {
        title.style.animation = 'fadeInUp 0.8s ease-out';
    }, 200);
    
    setTimeout(() => {
        subtitle.style.animation = 'fadeInUp 0.8s ease-out';
    }, 400);
}

// Efecto de click en el botón
function addButtonEffect() {
    const btn = document.querySelector('.btn');
    
    btn.addEventListener('click', (e) => {
        // Crear efecto de ondas
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Agregar animación de ripple al CSS dinámicamente
function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Inicializar todas las funciones cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    addCardInteraction();
    animateText();
    addButtonEffect();
    addRippleAnimation();
    
    // Mensaje de bienvenida en la consola
    console.log('🚀 ¡Hola! Nginx está funcionando correctamente');
    console.log('📦 Repositorio: https://github.com/K451AKM/hellonginx.git');
});

// Recrear partículas cada 10 segundos para mantener el efecto
setInterval(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => particle.remove());
    createParticles();
}, 10000);