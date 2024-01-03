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