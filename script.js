// ===== PRODUCTS SWIPER =====
const swiperProducts = new Swiper('.swiper-products', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    grabCursor: true,
    loop: true,                          // Infinite scroll
    loopAdditionalSlides: 2,            // Pre-clones extra slides for smoother loop
    speed: 600,                         // Transition speed (ms)
    autoplay: {
        delay: 2500,                    // 2.5 seconds between slides
        disableOnInteraction: false,    // Keeps autoplay after user swipes
        pauseOnMouseEnter: true,        // Pauses when hovering (nice UX)
    },
    pagination: {
        el: '.swiper-products .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-products .swiper-button-next',
        prevEl: '.swiper-products .swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
    },
});
        // ── Navbar scroll shadow
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        });

        // ── Mobile nav toggle
        const hamBtn = document.getElementById('hamburger');
        const hamIcon = document.getElementById('ham-icon');
        const mobileNav = document.getElementById('mobileNav');
        hamBtn.addEventListener('click', () => {
            const open = mobileNav.classList.toggle('show');
            hamIcon.className = open ? 'bi bi-x-lg' : 'bi bi-list';
        });
        mobileNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobileNav.classList.remove('show');
                hamIcon.className = 'bi bi-list';
            });
        });

        // ── Swiper Testimonials
        new Swiper('.swiper-testi', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: { delay: 4500, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });

        // ── Scroll reveal
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  