import { animate } from "https://cdn.jsdelivr.net/npm/motion@10.16.2/+esm";

/* HERO ANIMATION */

animate(
  "#head-name",
  { opacity: [0, 1], y: [40, 0] },
  { duration: 1, easing: "ease-out" }
);

animate(
  "#subtitle",
  { opacity: [0, 1], y: [30, 0] },
  { duration: 1, delay: 0.3 }
);

animate(
  "#scroll-indicator",
  { y: [0, 10, 0] },
  { duration: 1.8, repeat: Infinity }
);

/* SCROLL TO PROJECTS */

const scrollIndicator = document.querySelector("#scroll-indicator");
const projectsSection = document.querySelector("#projects");

scrollIndicator.addEventListener("click", () => {
  projectsSection.scrollIntoView({
    behavior: "smooth",
  });
});

/* SCROLL REVEAL ANIMATION */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(
          entry.target,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.6, easing: "ease-out" }
        );

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".project-card, .skill-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";

  observer.observe(el);
});

/* APPLE-LIKE FIRST SCROLL EFFECT */

let hasScrolled = false;

window.addEventListener("scroll", () => {
  if (!hasScrolled && window.scrollY > 40) {
    document.body.classList.add("scrolled");
    hasScrolled = true;
  }
});
