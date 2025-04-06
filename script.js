// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");

// Toggle mobile menu
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  closeBtn?.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Contact form submission (static demo)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted! (Static demo - no backend)");
    form.reset();
  });
}

// Counter animation for stats
const counters = document.querySelectorAll(".counter");
const speed = 200;

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  });
};

// Trigger counter animation when stats section is in view
const statsSection = document.querySelector(".stats");
let hasAnimated = false;

const checkStatsInView = () => {
  if (!statsSection || hasAnimated) return;

  const rect = statsSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    animateCounters();
    hasAnimated = true;
  }
};

// Fade-in animation for sections
const elementsToAnimate = document.querySelectorAll(".animate-fade-in");

const checkElementsInView = () => {
  elementsToAnimate.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
      element.classList.add("visible");
    }
  });
};

// Ensure animations are triggered on page load
document.addEventListener("DOMContentLoaded", () => {
  checkElementsInView();
  checkStatsInView();
});

// Scroll event listener
window.addEventListener("scroll", () => {
  checkStatsInView();
  checkElementsInView();
});
