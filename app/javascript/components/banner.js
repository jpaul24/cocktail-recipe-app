import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["party", "celebration", "solo drinking session"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
