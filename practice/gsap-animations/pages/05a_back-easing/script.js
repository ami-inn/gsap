import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const inidicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

// updae indicator function

function updateIndicator(target) {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();
  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left; // how much we need to move the indicator from the left edge of the row
  gsap.to(inidicator, {
    width,
    x: offset,
    duration: 0.5,
    ease: "back.out(1.7)", // powerinout without bound
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(tab);
  });
});
