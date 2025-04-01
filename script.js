// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav ul");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Menu";
  toggleBtn.style.display = "none";
  toggleBtn.style.background = "#6b48ff";
  toggleBtn.style.color = "white";
  toggleBtn.style.padding = "0.5rem 1rem";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "5px";
  document.querySelector("nav").prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  function updateNav() {
    if (window.innerWidth <= 768) {
      toggleBtn.style.display = "block";
      nav.style.display = "none";
    } else {
      toggleBtn.style.display = "none";
      nav.style.display = "flex";
    }
  }

  updateNav();
  window.addEventListener("resize", updateNav);

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
    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
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

  window.addEventListener("scroll", () => {
    checkStatsInView();
    checkElementsInView();
  });

  checkStatsInView();
  checkElementsInView();
});
