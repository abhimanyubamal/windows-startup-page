$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.slider-next-button',
    prevArrow: '.slider-prev-button',
    responsive: [
        {
            breakpoints: 992,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
            }
        }
    ]
});

// NAVBAR

let label = document.querySelector("label");
let menu = document.getElementById("nav-menu");
let flag = 0;
let aTags = document.querySelectorAll(".menu a");

label.addEventListener("click", () => {
    label.classList.toggle("switch-label");
    document.body.classList.toggle("overflow-hidden")
    if (flag == 0) {
        menu.style.right = 0;
        flag++;
    }
    else {
        menu.style.right = '-100%';
        flag--;
    }
});

aTags.forEach((x) => {
    x.addEventListener("click", () => {
        if (flag == 1) {
            label.classList.toggle("switch-label");
            document.body.classList.toggle("overflow-hidden")
            menu.style.right = '-100%';
            flag--;
        }
    });
});

// TO-TOP BUTTON 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.style.display = "flex";
    }
    else {
        toTop.style.display = "none";
    }
});