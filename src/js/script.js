document.addEventListener('DOMContentLoaded', function () {
    // mobile menu
    const body = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function () {
        body.classList.toggle('menu-active');
    });

    // fancybox
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
});
