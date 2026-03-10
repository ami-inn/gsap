import gsap from "gsap";


gsap.set('.gsap-box',{
    scale: 0.5,
    opacity: 0,
    y: 60,
    x: 100,
})

gsap.to('.gsap-box',{
    scale: 1,
    opacity: 1,
    y: 0,
    x: 0,
    duration: 0.5,
    ease: "power4.out",
    stagger: 0.2, // Automatically stagger the animation for each box
})