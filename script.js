// Welcome message
console.log("Welcome to Ismaeel's personal website!");

// Toggle dark mode
function toggleMode() {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "Dark Mode" : "Light Mode";
  console.log(`Switched to ${mode}`);
}

// Toggle responsive menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Smooth scroll to sections
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Add event listeners for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
  });
});

// Dynamic greeting based on time of day
function dynamicGreeting() {
  const hours = new Date().getHours();
  let greeting = "Welcome!";
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning!";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon!";
  } else if (hours >= 18 && hours < 22) {
    greeting = "Good Evening!";
  } else {
    greeting = "Good Night!";
  }
  console.log(greeting);
}
dynamicGreeting();

// Lazy load images (if applicable)
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => observer.observe(img));
});