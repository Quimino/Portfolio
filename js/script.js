/*========================== toggle icon navbar ===============================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========================== scroll sections active link ===============================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*========================== sticky navbar ===============================================*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*========================== remove toggle icon and navbar when click navbar link (scroll) =======*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*========================== scroll reveal ===============================================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========================== typed js ===============================================*/
// Verifica se o elemento existe antes de inicializar o Typed
/*
const multipleTextElement = document.querySelector('.multiple-text');

if (multipleTextElement) {
    const typed = new Typed('.multiple-text', {
        strings: ['Engenheiro de Software', 'Formador Profissional'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}*/

// Fechar menu ao clicar em um link (usando as variáveis já declaradas)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

/* ========================== SKILLS ENHANCEMENTS =============================================== */
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skills li');
    
    skillItems.forEach(item => {
        // Efeito de digitação para os títulos
        const title = item.querySelector('.skill-title');
        const originalText = title.textContent;
        
        item.addEventListener('mouseenter', function() {
            title.style.color = 'var(--main-color)';
        });
        
        item.addEventListener('mouseleave', function() {
            title.style.color = 'var(--text-color)';
        });
    });
    
    // Intersection Observer para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });
    
    skillItems.forEach(item => {
        observer.observe(item);
    });
});