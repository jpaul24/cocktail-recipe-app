window.onscroll = function() {fixNav()};

const nav = document.querySelector('#main-nav');
const sticky = nav.offsetTop;

function fixNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

// export { fixNav };
