document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Opsional: tambahkan kelas 'active'
            document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Menambahkan kelas 'active' pada navigasi saat scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - sectionHeight / 3) { // Sesuaikan offset jika perlu
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Jika ada efek interaktif lain, tambahkan di sini
    // Contoh: Animasi fade-in saat scroll (membutuhkan CSS tambahan)
    const fadeInElements = document.querySelectorAll('.hero-content, .hero-image, .about-content, .about-image, .research-card, .business-card, .contact-content');
    const options = {
        threshold: 0.1 // Ketika 10% dari elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
});