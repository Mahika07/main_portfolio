document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");


    navItems[0].classList.add("active");


});

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const billingPeriod = document.getElementById('billingPeriod');
    const prices = document.querySelectorAll('.price');

    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // billingPeriod.textContent = 'Yearly';
            prices.forEach(price => {
                const yearlyPrice = price.getAttribute('data-yearly');
                price.textContent = `$${yearlyPrice}/year`;
            });
        } else {
            // billingPeriod.textContent = 'Monthly';
            prices.forEach(price => {
                const monthlyPrice = price.getAttribute('data-monthly');
                price.textContent = `$${monthlyPrice}/month`;
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {

    const initialImage = document.querySelector('.full_screen_img');
    const smallImages = document.querySelector('.small_images');
    const leftDiv = document.querySelector('.left_div');
    const rightDiv = document.querySelector('.right_div');
    const mainImage = document.querySelector('.main_image');

    // Initial state
    initialImage.style.opacity = '1'; // Show initial full screen image

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        initialImage.style.display = 'none'
        if (scrollPosition > 0) {
            initialImage.style.opacity = '0'; // Fade out initial full screen image
            smallImages.style.opacity = '1'; // Fade in small images section
        }

        if (scrollPosition > window.innerHeight) {
            leftDiv.classList.add('move-left'); // Move left div to the left
            rightDiv.classList.add('move-right'); // Move right div to the right
            mainImage.style.opacity = '1'; // Fade in main image section
        } else {
            leftDiv.classList.remove('move-left');
            rightDiv.classList.remove('move-right');
            mainImage.style.opacity = '0';
            smallImages.style.opacity = '1';
        }
    });
});
