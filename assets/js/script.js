/**
 * Adds the fade in effect when scrolling down the page.
 * @param {}
 * @returns {}
 */
function fadeIn() {
  let aboutTextPosition = document.querySelector(".aboutText").getBoundingClientRect().y;
  let iceCreamTextPosition = document.querySelector(".iceCreamText").getBoundingClientRect().y;

  let scrolled = window.pageYOffset;

  if (scrolled >= aboutTextPosition) {
    document.querySelector(".aboutText").classList.add("animation");
  }

  if (scrolled >= iceCreamTextPosition) {
    document.querySelector(".iceCreamText").classList.add("animation");
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("scroll", fadeIn);
});
