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

let sectionSlider = document.querySelector(".section-4-row");

let f = 0;

if (sectionSlider.classList.contains('slick-is-active')) {
    f = 1;
}
else {
    f = 0;
}

if ((window.innerWidth < 1680
    || document.documentElement.clientWidth < 1680
    || document.body.clientWidth < 1680) && f == 0) {
    sectionSlider.classList.add("slick-is-active");
    $('.section-4-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}

if ((window.innerWidth > 1680
    || document.documentElement.clientWidth > 1680
    || document.body.clientWidth > 1680) && f == 1) {
    $('.section-4-slider').slick('unslick');
    sectionSlider.classList.remove("slick-is-active");
}

window.addEventListener("resize", () => {
    if (sectionSlider.classList.contains('slick-is-active')) {
        f = 1;
    }
    else {
        f = 0;
    }

    if ((window.innerWidth < 1680
        || document.documentElement.clientWidth < 1680
        || document.body.clientWidth < 1680) && f == 0) {
        sectionSlider.classList.add("slick-is-active");
        $('.section-4-slider').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            arrows: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    if ((window.innerWidth > 1680
        || document.documentElement.clientWidth > 1680
        || document.body.clientWidth > 1680) && f == 1) {
        $('.section-4-slider').slick('unslick');
        sectionSlider.classList.remove("slick-is-active");
    }
})

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