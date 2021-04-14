/**
 * Adds the fade in effect when scrolling down the page.
 * @param {}
 * @returns {}
 */
function fadeIn() {
  let textPosition1 = document.querySelector(".aboutText").getBoundingClientRect().y;
  let textPosition2 = document.querySelector(".iceCreamText").getBoundingClientRect().y;

  let scrolled = window.pageYOffset;

  if (scrolled >= textPosition1) {
    document.querySelector(".aboutText").classList.add("animation");
  }

  if (scrolled >= textPosition2) {
    document.querySelector(".iceCreamText").classList.add("animation");
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("scroll", fadeIn);
});
