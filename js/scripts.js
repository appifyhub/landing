function initializeSite() {
    const menuButton = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#navbarCollapse');
    const smartScroll = document.querySelector('.smart-scroll');
    const scrollTopButton = document.querySelector('.scroll-top');

    const closeMenu = () => {
        if (!menuButton || !menu) {
            return;
        }

        menu.classList.remove('show');
        menuButton.setAttribute('aria-expanded', 'false');
        smartScroll?.classList.remove('opened');
        document.body.classList.remove('mobile-menu-open');
    };

    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('show');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            smartScroll?.classList.toggle('opened', isOpen);
            document.body.classList.toggle('mobile-menu-open', isOpen);
        });

        menu.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
                menuButton.focus();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 800) {
                closeMenu();
            }
        });
    }

    if (smartScroll || scrollTopButton) {
        let previousScrollTop = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollTop = window.scrollY;

            if (smartScroll && !document.body.classList.contains('mobile-menu-open')) {
                if (currentScrollTop > 80) {
                    smartScroll.classList.add('scrolling');
                    smartScroll.classList.toggle('up', currentScrollTop <= previousScrollTop);
                } else {
                    smartScroll.classList.remove('scrolling', 'up');
                }
            }

            scrollTopButton?.classList.toggle('active', currentScrollTop >= 600);
            previousScrollTop = currentScrollTop;
        }, { passive: true });
    }

    scrollTopButton?.addEventListener('click', () => {
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        window.scrollTo({ top: 0, behavior });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSite);
} else {
    initializeSite();
}
