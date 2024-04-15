$(function () {
    // Initialize feather icons
    feather.replace();

    // Navbar coloring on mobile
    $(document).ready(function () {
        // Listen for the show event on #navbarCollapse
        $('#navbarCollapse').on('show.bs.collapse', function () {
            $('.smart-scroll').addClass('opened');
        });

        // Listen for the hide event on #navbarCollapse
        $('#navbarCollapse').on('hide.bs.collapse', function () {
            $('.smart-scroll').removeClass('opened');
        });
    });

    // Navbar scrolling to anchors
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // Navbar show/hide toggle
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        // Adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // Adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // Scroll to top clicks
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    // Initialize slick carousel
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
    });
});