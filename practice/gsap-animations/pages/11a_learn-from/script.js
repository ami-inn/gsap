import gsap from "gsap";

// gsap.from('.card-1',{
//     // animAte from new state
//     y: 60,
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.5,
//     ease: "power4.out",
//     delay: 0.2,
// })

// gsap.from('.card-2',{
//     y: 60,
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.5,
//     ease: "power4.out",
//     delay: 0.4,
// })

// gsap.from('.card-3',{
//     y: 60,
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.5,
//     ease: "power4.out",
//     delay: 0.6,
// })

const repeat = document.querySelector(".repeat");

const Animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  scale: 0.8,
  duration: 0.5,
  ease: "power4.out",
  delay: 0.2,
  stagger: 0.2, // Automatically stagger the animation for each card
});


repeat.addEventListener("click", () => {
    Animation.restart();
})
