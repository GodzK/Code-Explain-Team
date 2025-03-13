// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Multi-Layer Parallax
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;

    // Hero Section Parallax
    const heroLayers = document.querySelectorAll('.hero .parallax-layer img');
    heroLayers.forEach((layer, index) => {
        const speed = [0.1, 0.3, 0.5, 0.7][index];
        layer.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    // About Section Parallax
    const aboutSection = document.querySelector('.about');
    const aboutOffset = aboutSection.offsetTop;
    if (scrollPosition > aboutOffset - window.innerHeight) {
        const aboutLayers = document.querySelectorAll('.about .parallax-layer img');
        aboutLayers.forEach((layer, index) => {
            const speed = [0.2, 0.4, 0.6][index];
            const relativeScroll = scrollPosition - aboutOffset;
            layer.style.transform = `translateY(${relativeScroll * speed}px)`;
        });
    }

    // Courses Section Parallax
    const coursesSection = document.querySelector('.courses');
    const coursesOffset = coursesSection.offsetTop;
    if (scrollPosition > coursesOffset - window.innerHeight) {
        const coursesLayers = document.querySelectorAll('.courses .parallax-layer img');
        coursesLayers.forEach((layer, index) => {
            const speed = [0.2, 0.5][index];
            const relativeScroll = scrollPosition - coursesOffset;
            layer.style.transform = `translateY(${relativeScroll * speed}px)`;
        });
    }

    // Why Us Section Parallax
    const whyUsSection = document.querySelector('.why-us');
    const whyUsOffset = whyUsSection.offsetTop;
    if (scrollPosition > whyUsOffset - window.innerHeight) {
        const whyUsLayers = document.querySelectorAll('.why-us .parallax-layer img');
        whyUsLayers.forEach((layer, index) => {
            const speed = [0.2, 0.4][index];
            const relativeScroll = scrollPosition - whyUsOffset;
            layer.style.transform = `translateY(${relativeScroll * speed}px)`;
        });
    }

    // Testimonials Section Parallax
    const testimonialsSection = document.querySelector('.testimonials');
    const testimonialsOffset = testimonialsSection.offsetTop;
    if (scrollPosition > testimonialsOffset - window.innerHeight) {
        const testimonialsLayers = document.querySelectorAll('.testimonials .parallax-layer img');
        testimonialsLayers.forEach((layer, index) => {
            const speed = [0.2, 0.3, 0.5][index];
            const relativeScroll = scrollPosition - testimonialsOffset;
            layer.style.transform = `translateY(${relativeScroll * speed}px)`;
        });
    }

    // Call to Action Section Parallax
    const ctaSection = document.querySelector('.cta');
    const ctaOffset = ctaSection.offsetTop;
    if (scrollPosition > ctaOffset - window.innerHeight) {
        const ctaLayers = document.querySelectorAll('.cta .parallax-layer img');
        ctaLayers.forEach((layer, index) => {
            const speed = [0.2, 0.4][index];
            const relativeScroll = scrollPosition - ctaOffset;
            layer.style.transform = `translateY(${relativeScroll * speed}px)`;
        });
    }

    // Footer Parallax
    const footerSection = document.querySelector('footer');
    const footerOffset = footerSection.offsetTop;
    if (scrollPosition > footerOffset - window.innerHeight) {
        const footerLayers = document.querySelectorAll('footer .parallax-layer img');
        footerLayers.forEach((layer, index) => {
            const speed = [0.2, 0.5][index];
            const relativeScroll = scrollPosition - footerOffset;
            layer.style.transform = `translateY(${relativeScroll * speed}px)`;
        });
    }
});

// Intersection Observer for Fade In
const elements = document.querySelectorAll('.team-member, .course-item, .reason, .testimonial');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
elements.forEach(el => observer.observe(el));