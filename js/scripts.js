function initializeSite() {
    if (window.lucide?.createIcons) {
        window.lucide.createIcons();
    }

    const $ = window.jQuery;
    if (!$) {
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animationDuration = prefersReducedMotion ? 0 : 1000;
    const navbarCollapse = $('#navbarCollapse');
    const smartScroll = $('.smart-scroll');
    const scrollTopButton = $('.scroll-top');

    if (navbarCollapse.length && smartScroll.length) {
        navbarCollapse.on('show.bs.collapse', function () {
            smartScroll.addClass('opened');
            $('body').addClass('mobile-menu-open');
        });

        navbarCollapse.on('hide.bs.collapse', function () {
            smartScroll.removeClass('opened');
            $('body').removeClass('mobile-menu-open');
        });
    }

    $('.page-scroll[href^="#"]').on('click', function (event) {
        const target = document.querySelector(this.hash);
        if (!target) {
            return;
        }

        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 20
        }, animationDuration);
    });

    if (smartScroll.length || scrollTopButton.length) {
        let previousScrollTop = 0;

        $(window).on('scroll', function () {
            const currentScrollTop = $(window).scrollTop();

            if (smartScroll.length) {
                if (currentScrollTop > 80) {
                    smartScroll.addClass('scrolling').toggleClass('up', currentScrollTop <= previousScrollTop);
                } else {
                    smartScroll.removeClass('scrolling up');
                }
            }

            scrollTopButton.toggleClass('active', currentScrollTop >= 600);
            previousScrollTop = currentScrollTop;
        });
    }

    if (scrollTopButton.length) {
        scrollTopButton.on('click', function () {
            $('html, body').stop().animate({ scrollTop: 0 }, animationDuration);
        });
    }

    const slickSlider = $('.slick-about');
    if (slickSlider.length && typeof $.fn.slick === 'function') {
        slickSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: !prefersReducedMotion,
            autoplaySpeed: 5000,
            dots: false,
            arrows: false
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSite);
} else {
    initializeSite();
}
