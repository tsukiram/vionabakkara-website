// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.research-card, .business-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Business Modal functionality
const modal = document.getElementById('businessModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Business data
const businessData = {
    'menara-defable': {
        title: 'Menara Defable',
        subtitle: 'Yayasan Rumah Kreasi Menara Disabilitas',
        description: 'Menara Defable is a foundation dedicated to empowering individuals with disabilities through creative and innovative solutions. We believe that everyone deserves equal opportunities to showcase their talents and contribute meaningfully to society.',
        mission: 'To create an inclusive environment where individuals with disabilities can develop their creative potential and achieve independence through various programs and initiatives.',
        features: [
            'Creative workshops and training programs',
            'Skill development initiatives',
            'Community outreach programs',
            'Accessibility consulting services',
            'Advocacy for disability rights'
        ],
        impact: 'Since our establishment, we have helped over 200 individuals with disabilities develop new skills and find meaningful employment opportunities.',
        contact: 'For partnerships and collaboration opportunities, please reach out through our main contact channels.'
    },
    'md-honey': {
        title: 'MDHoney',
        subtitle: 'Premium Natural Honey Products',
        description: 'MDHoney is a sustainable honey business that sources premium quality honey directly from local beekeepers. We are committed to promoting sustainable agriculture while providing customers with the purest, most nutritious honey products.',
        mission: 'To support local beekeepers while delivering premium quality honey products that promote health and wellness in our community.',
        features: [
            'Pure, unprocessed natural honey',
            'Direct sourcing from local beekeepers',
            'Sustainable and eco-friendly practices',
            'Multiple honey varieties available',
            'Custom packaging for special occasions'
        ],
        impact: 'We work with 15+ local beekeeping families, helping them achieve better income while preserving traditional beekeeping methods.',
        contact: 'Available for wholesale orders, custom packaging, and special events. Contact us for bulk pricing and seasonal varieties.'
    },
    'md-florist': {
        title: 'MDFlorist',
        subtitle: 'Beautiful Flower Bucket Arrangements',
        description: 'MDFlorist specializes in creating stunning flower bucket arrangements for all occasions. From romantic gestures to corporate events, we craft beautiful arrangements that convey emotions and create memorable moments.',
        mission: 'To bring joy and beauty into peoples lives through carefully crafted floral arrangements that celebrate life\'s special moments.',
        features: [
            'Custom flower bucket designs',
            'Fresh flowers sourced daily',
            'Same-day delivery available',
            'Wedding and event packages',
            'Corporate arrangement services'
        ],
        impact: 'We have created over 500 beautiful arrangements for weddings, birthdays, anniversaries, and corporate events, spreading joy across our community.',
        contact: 'Book your custom arrangement today! We offer consultation services to create the perfect floral design for your special occasion.'
    }
};

function openBusinessModal(businessId) {
    const business = businessData[businessId];
    if (business) {
        modalContent.innerHTML = `
            <h3>${business.title}</h3>
            <p class="business-subtitle" style="color: #3498db; font-weight: 600; margin-bottom: 1.5rem;">${business.subtitle}</p>
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${business.description}</p>
            
            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
                <h4 style="color: #2c3e50; margin-bottom: 1rem;">Our Mission</h4>
                <p style="color: #666; font-style: italic;">${business.mission}</p>
            </div>

            <h4 style="color: #2c3e50; margin: 1.5rem 0 1rem 0;">Key Features & Services</h4>
            <ul class="modal-features">
                ${business.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>

            <div style="background: linear-gradient(135deg, #3498db, #2980b9); color: white; padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
                <h4 style="margin-bottom: 1rem;">Our Impact</h4>
                <p style="margin: 0;">${business.impact}</p>
            </div>

            <div style="border-left: 4px solid #3498db; padding-left: 1rem; margin: 1.5rem 0;">
                <h4 style="color: #2c3e50; margin-bottom: 0.5rem;">Get In Touch</h4>
                <p style="color: #666; margin: 0;">${business.contact}</p>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal events
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    const heroSubtitle = document.querySelector('.hero-text h2');
    
    if (heroTitle && heroSubtitle) {
        const titleText = heroTitle.textContent;
        const subtitleText = heroSubtitle.textContent;
        
        // Start typing animation after a short delay
        setTimeout(() => {
            typeWriter(heroTitle, titleText, 80);
        }, 500);
        
        setTimeout(() => {
            typeWriter(heroSubtitle, subtitleText, 60);
        }, 2000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroShapes = document.querySelectorAll('.shape');
    
    heroShapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current) + '+';
        
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS class for loaded state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .loaded .hero-text > * {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .loaded .hero-image {
        animation: fadeInRight 0.8s ease 0.3s forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth reveal animations for sections
const revealElements = document.querySelectorAll('.section-header, .about-info, .about-skills');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    revealObserver.observe(el);
});

// Add hover effects to cards
document.querySelectorAll('.research-card, .business-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Social media link tracking
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function() {
        const platform = this.classList.contains('instagram') ? 'Instagram' : 
                        this.classList.contains('blog') ? 'Blog' : 'Google Scholar';
        console.log(`Clicked ${platform} link`);
    });
});

// Research link tracking
document.querySelectorAll('.research-link').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Research publication viewed:', this.previousElementSibling.previousElementSibling.textContent);
    });
});

console.log('Portfolio website loaded successfully! 🎉');