console.log("Website Design & Developed By Aryan Sejani");


var lastScrollTop = 0;
navBar = document.getElementById('navbar')

window.addEventListener('scroll', function () {
    var scrollTop = window.pageYoffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
        navBar.style.top = "-10vh"
    }
    else {
        navBar.style.top = "0"
    }
    lastScrollTop = scrollTop
})


function enableScroll() {
    window.onscroll = function () { };
}

let OrderNowBtn = document.getElementById("order-now-btn")

OrderNowBtn.addEventListener('click', function () {
    var x = document.getElementById("order-online");
    if (x.style.top === "10vh") {
        x.style.top = "-60vh";
    } else {
        x.style.top = "10vh";
    }
})

OrderNowBtn.addEventListener('click', function () {
    if (OrderNowBtn.innerHTML === "Close") {
        OrderNowBtn.innerHTML = "Order Now";
    } else {
        OrderNowBtn.innerHTML = "Close";
    }
})
OrderNowBtn.addEventListener('click', function () {
    if (document.body.style.overflowY === "hidden") {
        document.body.style.overflowY = "unset";
    } else {
        document.body.style.overflowY = "hidden";
    }
})

let OrderNowBtnCta = document.getElementById("order-now-btn-cta")

OrderNowBtnCta.addEventListener('click', function () {
    var x = document.getElementById("order-online");
    if (x.style.top === "0vh") {
        x.style.top = "-60vh";
    } else {
        x.style.top = "0vh";
    }
})

OrderNowBtnCta.addEventListener('click', function () {
    if (OrderNowBtnCta.innerHTML === "Close") {
        OrderNowBtnCta.innerHTML = "Order Now";
    } else {
        OrderNowBtnCta.innerHTML = "Close";
    }
})
OrderNowBtnCta.addEventListener('click', function () {
    if (document.body.style.overflowY === "hidden") {
        document.body.style.overflowY = "unset";
    } else {
        document.body.style.overflowY = "hidden";
    }
})

document.getElementById('exit-order-online').addEventListener('click', function () {
    var x = document.getElementById("order-online");
    x.style.top = "-60vh";
    document.body.style.overflowY = "unset";
    document.getElementById("order-now-btn-cta").innerHTML = "Order Now";
    document.getElementById("order-now-btn").innerHTML = "Order Now";
})

gsap.registerPlugin(ScrollTrigger);


gsap.to("#hero-image-wrapper-left", {
    width: "0",
    scrollTrigger: {
        trigger: "#hero",
        start: "0%",
        end: "10%",
        scrub: 2,
        // pinSpacing: false,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})
gsap.to("#hero-image-wrapper-right", {
    width: "0",
    scrollTrigger: {
        trigger: "#hero",
        start: "0%",
        end: "10%",
        scrub: 2,
        // pinSpacing: false,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})
gsap.to("#hero-image-wrapper-top", {
    height: "0",
    scrollTrigger: {
        trigger: "#hero",
        start: "10%",
        end: "50%",
        scrub: 2,
        // pinSpacing: false,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})

document.querySelector("#hero-image").style.backgroundPosition = "50% 0px";

gsap.to("#hero-image", {
    backgroundPosition: `50% ${innerHeight / 3}px`,
    ease: "none",
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});



ScrollTrigger.matchMedia({

    "(max-width:900px )": function () {
        gsap.to("#home-img", {
            top: "20%",
            scrollTrigger: {
                trigger: "#home",
                start: "0%",
                end: "30%",
                scrub: 2,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

    "(min-width:901px)": function () {
        gsap.to("#home-img", {
            top: "20%",
            scrollTrigger: {
                trigger: "#home",
                start: "10%",
                end: "50%",
                scrub: 2,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

});

ScrollTrigger.matchMedia({

    "(max-width:900px )": function () {
        gsap.to("#info-img-1", {
            rotate: 0,
            scrollTrigger: {
                trigger: "#info",
                start: "-10%",
                end: "-10%",
                scrub: 3,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

    "(min-width:901px)": function () {
        gsap.to("#info-img-1", {
            rotate: 0,
            scrollTrigger: {
                trigger: "#info",
                start: "-50%",
                end: "-50%",
                scrub: 3,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

});
ScrollTrigger.matchMedia({

    "(max-width:900px )": function () {
        gsap.to("#info-img-2", {
            rotate: 0,
            scrollTrigger: {
                trigger: "#info",
                start: "20%",
                end: "20%",
                scrub: 3,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

    "(min-width:901px)": function () {
        gsap.to("#info-img-2", {
            rotate: 0,
            scrollTrigger: {
                trigger: "#info",
                start: "10%",
                end: "10%",
                scrub: 3,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

});


gsap.to("#info-2-img img", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    scrollTrigger: {
        trigger: "#info-2",
        start: "40% bottom",
        end: "40% bottom",
        scrub: 1,
        // pinSpacing: false,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})


ScrollTrigger.matchMedia({

    "(max-width:900px )": function () {
        gsap.to("#horizontal-scroll-container", {
            left: "-400%",
            scrollTrigger: {
                trigger: "#horizontal-scroll",
                start: "0%",
                end: "150%",
                scrub: 2,
                pin: true,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

    "(min-width:901px)": function () {
        gsap.to("#horizontal-scroll-container", {
            left: "-200%",
            scrollTrigger: {
                trigger: "#horizontal-scroll",
                start: "0%",
                end: "150%",
                scrub: 2,
                pin: true,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

});

ScrollTrigger.matchMedia({

    "(max-width:900px )": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#horizontal-scroll-container",
                start: "125%",
                end: "125%",
                scrub: 2,
                // pin: true,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
        tl.fromTo("#horizontal-scroll-intro h1 span", { opacity: 0, y: "100%" }, { opacity: 1, y: "-5%" })
    },

    "(min-width:901px)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#horizontal-scroll-container",
                start: "110%",
                end: "110%",
                scrub: 2,
                // pin: true,
                // pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
        tl.fromTo("#horizontal-scroll-intro h1 span", { opacity: 0, y: "100%" }, { opacity: 1, y: "-5%" })
    },

});


RestroMainImg = document.querySelector("#restro-main-img-box");

RestroMainImg.style.backgroundPosition = `50% ${-innerHeight / 5}px`;

gsap.to(RestroMainImg, {
    backgroundPosition: `50% ${innerHeight / 5}px`,
    ease: "none",
    scrollTrigger: {
        trigger: "#restro-main-img-box",
        scrub: true,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
});

var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

gsap.to("#restro-img-slider-box", {
    bottom: "10%",
    scrollTrigger: {
        trigger: "#restro-img",
        start: "0%",
        end: "70%",
        scrub: 1,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})

ScrollTrigger.create({
    trigger: "#footer-section",
    start: "top",
    toggleClass: { targets: "#contact-main", className: "visibility-visible" },
});
