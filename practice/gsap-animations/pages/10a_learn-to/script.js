import gsap from "gsap";


const showToastLoop = () => {
    gsap.to(".toast", {
        y: -150,
        opacity: 1,
        duration: 0.5,
        scale: 1,
        ease: "power4.out",
        onComplete: () => {
            gsap.to(".toast", {
                y: 0,
                opacity: 0,
                duration: 0.5,
                scale: 0.5,
                ease: "power2.in",
                delay: 2, // Keep the toast visible for a while before hiding
                // onComplete: showToastLoop, // Loop the animation
            });
        },
    });
}

// check gsap callbacks

showToastLoop();