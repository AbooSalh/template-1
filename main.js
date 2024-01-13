const otherBtn = document.querySelector(".other");
const link = document.querySelectorAll("a");
const megaMenu = document.querySelector(".mega-menu");
const landingContainer = document.querySelector(".landing .container");

const toggleMegaMenu = () => {
  if (!megaMenu.classList.contains("active")) {
    setTimeout(() => megaMenu.classList.add("sactive"), 0);
    setTimeout(() => megaMenu.classList.add("active"), 50);
  } else {
    setTimeout(() => megaMenu.classList.remove("sactive"), 50);
    setTimeout(() => megaMenu.classList.remove("active"));
  }

  landingContainer.classList.toggle("active");
};

otherBtn.addEventListener("click", toggleMegaMenu);

link.forEach((l) => {
  l.addEventListener("click", () => {
    megaMenu.classList.remove("active");
    landingContainer.classList.remove("active");
  });
});

const closeMegaMenu = (event) => {
  const isOutsideMegaMenu =
    !megaMenu.contains(event.target) &&
    !otherBtn.contains(event.target) &&
    !event.target.closest(".mega-menu") &&
    !megaMenu.isSameNode(event.target);

  if (isOutsideMegaMenu) {
    megaMenu.classList.remove("active");
    landingContainer.classList.remove("active");
  }
};

document.addEventListener("click", closeMegaMenu);

// Optional: Prevent click propagation within megaMenu
megaMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// s heading
const sHeadings = document.querySelectorAll(".s-heading");
sHeadings.forEach((sheading) => {
  // stop before and after
  sheading.addEventListener("mouseenter", (e) => {
    addAnimationClass("animate", 0);
    addAnimationClass("sanimate", 30);
    e.stopPropagation();
  });
  sheading.addEventListener("mouseleave", (e) => {
    removeAnimationClass("sanimate", 0);
    removeAnimationClass("animate", 30);
    e.stopPropagation();
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

  // debug when the sanimate class without animate
  setInterval(() => {
    if (
      sheading.classList.contains("sanimate") &&
      !sheading.classList.contains("animate")
    ) {
      removeAnimationClass("sanimate", 0);
    }
  });
}, 30);
// end s heading
