
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");

// Mobile navigation
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after selecting a section
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Light/dark theme with saved preference
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

function updateThemeButton() {
  if (!themeToggle) return;

  const isLight = document.body.classList.contains("light");

  themeToggle.textContent = isLight ? "🌙" : "☀️";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

updateThemeButton();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const theme = document.body.classList.contains("light")
      ? "light"
      : "dark";

    localStorage.setItem("portfolio-theme", theme);
    updateThemeButton();
  });
}

// Automatically update copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Project details
const projectData = {
  syncspace: {
    title: "SyncSpace",
    description:
      "A collaborative workspace featuring interview mode, recording, and integrated coding and whiteboard tools.",
    tech: "React · Node.js · Socket.IO · MongoDB",
    link: "https://github.com/Nivo16/SyncSpace_Workplace_AxleroProject1"
  },

  securefy: {
    title: "Securefy Smart Locker System",
    description:
      "A smart locker platform for checking availability, managing bookings, and supporting QR-based access.",
    tech: "React · Firebase · Firestore",
    link: "https://securefy.online"
  },

  naviguard: {
    title: "NaviGuard",
    description:
      "An Android application project focused on live location tracking and map-based features.",
    tech: "Kotlin · Jetpack Compose · Firebase · Google Maps",
    link: "https://github.com/Mohamad-Riyas"
  }
};

// Project modal elements
const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const modalLink = document.getElementById("modal-link");

// Open project details
document.querySelectorAll(".project-details").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.project];

    if (
      !project ||
      !projectModal ||
      !modalTitle ||
      !modalDescription ||
      !modalTech ||
      !modalLink
    ) {
      console.error("Project modal HTML elements are missing.");
      return;
    }

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTech.textContent = project.tech;
    modalLink.href = project.link;

    projectModal.showModal();
  });
});

// Close modal using the X button
if (modalClose && projectModal) {
  modalClose.addEventListener("click", () => {
    projectModal.close();
  });
}

// Close modal by clicking outside its content
if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      projectModal.close();
    }
  });
}
