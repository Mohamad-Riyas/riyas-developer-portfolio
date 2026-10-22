
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");

// Mobile navigation
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

// Light/dark theme with saved preference
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

function updateThemeButton() {
  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const theme = document.body.classList.contains("light")
    ? "light"
    : "dark";

  localStorage.setItem("portfolio-theme", theme);
  updateThemeButton();
});

// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();


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

const projectModal = document.getElementById("project-modal");

document.querySelectorAll(".project-details").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.project];
    if (!project) return;

    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-description").textContent =
      project.description;
    document.getElementById("modal-tech").textContent = project.tech;
    document.getElementById("modal-link").href = project.link;

    projectModal.showModal();
  });
});

document.getElementById("modal-close").addEventListener("click", () => {
  projectModal.close();
});

projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    projectModal.close();
  }
});
