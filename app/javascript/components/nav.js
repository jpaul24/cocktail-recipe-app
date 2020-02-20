const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('nav-white');
      } else {
        navbar.classList.remove('nav-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
