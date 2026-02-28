import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  x: 100, // Move the box 200 pixels to the right
  //   y: 100, // Move the box 100 pixels down
  duration: 3, // non css property
 delay: 0.5, // non css property delay the animation by 0.5 seconds
  rotation: 360, // Rotate the box 360 degrees
//   rotationY: 360, // Rotate the box 360 degrees around the Y-axis
  // rotateX: 360, // Rotate the box 360 degrees around the X-axis
  background: "#ff6f61", // Animate the background gradient
  borderRadius: "50%", // Animate the border radius to make it circular
  ease: "power1.inOut",
  scale: 1, // Animate the scale to make it grow to its original size
  //   scaleX: 1, // Animate the scaleX to make it grow to its original width
  //   scaleY: 1, // Animate the scaleY to make it grow to its original height
  repeat: -1, // Repeat the animation indefinitely
  yoyo: true, // Make the animation reverse on every other repeat
  repeatDelay: 0.5, // Add a delay between repeats
  paused: false, // Start the animation immediately
  stagger: 0.2, // Stagger the animation of multiple elements with a delay of 0.2 seconds
});
