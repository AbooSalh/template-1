// header
const otherBtn = document.querySelector(".other");
const link = document.querySelectorAll("a");
const megaMenu = document.querySelector(".mega-menu");
const landingContainer = document.querySelector(".landing .container");
// Event listener for the "other link" to toggle the mega menu

otherBtn.addEventListener("click", (_) => {
  megaMenu.classList.toggle("active");
  landingContainer.classList.toggle("active");
});
link.forEach((l) => {
  l.addEventListener("click", (_) => {
    megaMenu.classList.remove("active");
    landingContainer.classList.remove("active");
  });
});
// Event listener for clicks outside the mega menu and "other link"
document.addEventListener("click", (event) => {
  if (
    !megaMenu.contains(event.target) &&
    !otherBtn.contains(event.target) &&
    !event.target.closest(".mega-menu") && // Adjusted condition
    !megaMenu.isSameNode(event.target)
  ) {
    megaMenu.classList.remove("active");
    landingContainer.classList.remove("active");
  }
});

// Optional: Prevent click propagation within megaMenu
megaMenu.addEventListener("click", (event) => {
  event.stopPropagation(); // Or event.stopImmediatePropagation();
});
// header
// s heading
const sHeadings = document.querySelectorAll(".s-heading");
sHeadings.forEach((sheading) => {
  sheading.addEventListener("mouseenter", (e) => {
    addAnimationClass("animate", 0);
    addAnimationClass("sanimate", 30);
    e.stopPropagation();
  });
  sheading.addEventListener("mouseleave", (e) => {
    if (sheading.classList.contains("sanimate")) {
      removeAnimationClass("animate", 30);
      removeAnimationClass("sanimate", 0);
      removeAnimationClass("animate", 30);
      removeAnimationClass("sanimate", 0);
      e.stopPropagation();
    } else {
      removeAnimationClass("sanimate", 0);
      removeAnimationClass("animate", 30);
      e.stopPropagation();
    }
  });
  function addAnimationClass(className, delay) {
    setTimeout(() => {
      sheading.classList.add(className);
    }, delay);
  }
  function removeAnimationClass(className, delay) {
    setTimeout(() => {
      sheading.classList.remove(className);
    }, delay);
  }
});
// end s heading