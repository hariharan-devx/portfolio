// Mobile menu toggle
const menuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".skill-card, .timeline-item").forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});
