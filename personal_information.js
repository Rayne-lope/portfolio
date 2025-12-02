// personal_information.js

// 1. Initialize Lucide Icons
lucide.createIcons();

// 2. Update Footer Year
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// 3. Mobile Menu Logic
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    mobileMenu.classList.remove("hidden");
    menuBtn.innerHTML = '<i data-lucide="x"></i>';
    lucide.createIcons();
  } else {
    mobileMenu.classList.add("hidden");
    menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    lucide.createIcons();
  }
}

if (menuBtn) {
  menuBtn.addEventListener("click", toggleMenu);
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) toggleMenu();
  });
});

// 4. Modal Logic (Profile Details)
const profileCard = document.getElementById("profile-card");
const detailModal = document.getElementById("detail-modal");
const closeModal = document.getElementById("close-modal");

if (profileCard && detailModal && closeModal) {
  const modalContent = detailModal.querySelector("div");

  function openProfileModal() {
    detailModal.classList.remove("hidden");
    detailModal.classList.add("flex");
    void detailModal.offsetWidth;
    detailModal.classList.remove("opacity-0");
    detailModal.classList.add("opacity-100");
    modalContent.classList.remove("scale-95");
    modalContent.classList.add("scale-100");
  }

  function hideProfileModal() {
    detailModal.classList.remove("opacity-100");
    detailModal.classList.add("opacity-0");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");
    setTimeout(() => {
      detailModal.classList.remove("flex");
      detailModal.classList.add("hidden");
    }, 300);
  }

  profileCard.addEventListener("click", openProfileModal);
  closeModal.addEventListener("click", hideProfileModal);
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) hideProfileModal();
  });
}

// 5. Projects Modal Logic
const projectsCard = document.getElementById("projects-card");
const projectsModal = document.getElementById("projects-modal");
const closeProjectsModal = document.getElementById("close-projects-modal");

if (projectsCard && projectsModal && closeProjectsModal) {
  const projectsModalContent = projectsModal.querySelector("div");

  function openProjectsModal() {
    projectsModal.classList.remove("hidden");
    projectsModal.classList.add("flex");
    void projectsModal.offsetWidth;
    projectsModal.classList.remove("opacity-0");
    projectsModal.classList.add("opacity-100");
    projectsModalContent.classList.remove("scale-95");
    projectsModalContent.classList.add("scale-100");
  }

  function hideProjectsModal() {
    projectsModal.classList.remove("opacity-100");
    projectsModal.classList.add("opacity-0");
    projectsModalContent.classList.remove("scale-100");
    projectsModalContent.classList.add("scale-95");
    setTimeout(() => {
      projectsModal.classList.remove("flex");
      projectsModal.classList.add("hidden");
    }, 300);
  }

  projectsCard.addEventListener("click", openProjectsModal);
  closeProjectsModal.addEventListener("click", hideProjectsModal);
  projectsModal.addEventListener("click", (e) => {
    if (e.target === projectsModal) hideProjectsModal();
  });
}

// 6. Planify Detail Modal Logic & Slider
const btnPlanify = document.getElementById("btn-planify");
const planifyModal = document.getElementById("planify-modal");
const closePlanifyModal = document.getElementById("close-planify-modal");
const slider = document.getElementById("planify-slider");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;
const totalSlides = 7; // As per your folder structure 1.jpeg to 7.jpeg

if (btnPlanify && planifyModal && closePlanifyModal) {
  function openPlanifyModal() {
    planifyModal.classList.remove("hidden");
    planifyModal.classList.add("flex");
    // Animation
    void planifyModal.offsetWidth;
    planifyModal.classList.remove("opacity-0");
    planifyModal.classList.add("opacity-100");
    planifyModal.firstElementChild.classList.remove("scale-95");
    planifyModal.firstElementChild.classList.add("scale-100");
    updateSlider(); // Ensure slider starts at 0
  }

  function hidePlanifyModal() {
    planifyModal.classList.remove("opacity-100");
    planifyModal.classList.add("opacity-0");
    planifyModal.firstElementChild.classList.remove("scale-100");
    planifyModal.firstElementChild.classList.add("scale-95");
    setTimeout(() => {
      planifyModal.classList.remove("flex");
      planifyModal.classList.add("hidden");
    }, 300);
  }

  // Slider Logic
  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    // Update dots
    indicators.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.remove("opacity-30");
        dot.classList.add("opacity-100");
      } else {
        dot.classList.remove("opacity-100");
        dot.classList.add("opacity-30");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  btnPlanify.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent bubbling if needed
    openPlanifyModal();
  });

  closePlanifyModal.addEventListener("click", hidePlanifyModal);

  planifyModal.addEventListener("click", (e) => {
    if (e.target === planifyModal) hidePlanifyModal();
  });
}
