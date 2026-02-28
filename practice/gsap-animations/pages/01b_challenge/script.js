// //     Challenge yourself to create a pulsing glow animation using GSAP.
//             Yes, make the cube glow. Make it softly pulse with light. Nothing
//             crazy, just a smooth glowing effect that makes it feel more cool.
import gsap from "gsap";
gsap.to(".card", {
  boxShadow: "0px 0px 20px 5px rgba(0, 255, 0, 0.7)",
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power3.inOut",
});
