function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add this new function for nav transition
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});

function isElementPartiallyInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if at least 25% of the element is in the viewport
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
  const visibleArea = visibleHeight * visibleWidth;
  const elementArea = rect.height * rect.width;

  return visibleArea > elementArea * 0.25;
}

function animateSections() {
  const sections = document.querySelectorAll('#profile .section__text__p1, #profile .title, #profile .section__text__p2, #profile .btn-container, #socials-container, #about .section-container, #skills .details-container, #projects .color-container');
  
  sections.forEach(section => {
    if (isElementPartiallyInViewport(section)) {
      section.classList.add('animate');
    }
  });
}

// Initial animation check
animateSections();

// Throttle function to limit how often animateSections is called on scroll
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Add throttled scroll listener
window.addEventListener('scroll', throttle(animateSections, 100));

// Add resize listener
window.addEventListener('resize', animateSections);