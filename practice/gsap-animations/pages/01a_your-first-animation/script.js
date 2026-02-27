gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 3,
  onComplete: () => {
    // what you want to do after the animation is complete
    // alert("Animation complete!");
    gsap.to(".card", {
        y:-30, // y axis and move up by 30px
        repeat: -1, // repeat infinitely
        yoyo: true, // reverse the animation on every other repeat
        duration: 0.5,
    })
  }
});
