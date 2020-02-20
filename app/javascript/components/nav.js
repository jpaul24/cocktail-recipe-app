const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.nav');
  const topOfNav = navbar.offsetTop;
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 10) {
        navbar.classList.add('nav-white');
      } else if (window.scrollY <= topOfNav) {
        navbar.classList.remove('nav-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };

