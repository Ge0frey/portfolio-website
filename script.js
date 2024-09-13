function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// new function for nav transition
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateSections() {
  const sections = document.querySelectorAll('#about .section-container, #skills .details-container, #projects .color-container');
  
  sections.forEach(section => {
    if (isElementInViewport(section)) {
      section.classList.add('animate');
    }
  });
}

function animateSections() {
  const sections = document.querySelectorAll('#profile .section__text__p1, #profile .title, #profile .section__text__p2, #profile .btn-container, #socials-container, #about .section-container, #skills .details-container, #projects .color-container');
  
  sections.forEach(section => {
    if (isElementInViewport(section)) {
      section.classList.add('animate');
    } else {
      section.classList.remove('animate');
    }
  });
}

// Make sure to call animateSections on load and scroll
window.addEventListener('load', animateSections);
window.addEventListener('scroll', animateSections);