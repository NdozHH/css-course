const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);

    modal.classList.add("open");
  });
}

function closeModal() {
  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 200);

  if (modal) {
    modal.classList.remove("open");
  }
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", function () {
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
  mobileNav.classList.add("open");
});

ctaButton.addEventListener("animationstart", function () {
  console.log("works");
});
