import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");// if you are using react, you can use useRef to get the button element

let isFloating = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        button.classList.add("show");
        if(!isFloating) {
            gsap.to(button, {
                y: -10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.out",
            });
            isFloating = true;
        }
    } else {
        button.classList.remove("show");
        if(isFloating) {
            gsap.to(button, {
                y: 0,
                duration: 0.5,
                ease: "sine.out",
            });
            isFloating = false;
        }
    }
});

button.addEventListener("mouseenter", () => {
    gsap.to(button, {
        scale: 1.2,
        duration: 0.3,
        ease: "sine.out",
    });
});
button.addEventListener("mouseleave", () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "sine.out",
    });
});

button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});