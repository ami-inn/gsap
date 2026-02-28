import gsap from "gsap";

// Create a GSAP timeline and pause it initially
const tl = gsap.timeline({ paused: true });

tl.from(".box", {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    ease: "back.out",
})
.to(".box", {
    rotation: 360,
    duration: 1.5,
    ease: "power2.inOut",
}, 0);

document.querySelector(".play").addEventListener("click", () => tl.play());
document.querySelector(".pause").addEventListener("click", () => tl.pause());
document.querySelector(".resume").addEventListener("click", () => tl.resume());
document.querySelector(".restart").addEventListener("click", () => tl.restart());
document.querySelector(".reverse").addEventListener("click", () => tl.reverse());
document.querySelector(".kill").addEventListener("click", () => tl.kill());
document.querySelector(".yoyo").addEventListener("click", () => {
    tl.yoyo(true).restart();
});