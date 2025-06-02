window.addEventListener('scroll', function() {
  const nav = document.querySelector('.nav');
  const scrollPosition = window.scrollY || window.pageYOffset;
  
  if (scrollPosition > 10) {
    nav.classList.add('scrolled-top');
  } else {
    nav.classList.remove('scrolled-top');
  }
});

// Also check on page load in case we're already at top
window.addEventListener('load', function() {
  if (window.scrollY === 0) {
    document.querySelector('.nav').classList.add('scrolled-top');
  }
});