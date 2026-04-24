/* =========================
   Footer year
========================= */
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

/* =========================
   Mobile navigation menu
========================= */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close mobile menu after clicking a navigation link
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});

/* =========================
   Theme toggle with localStorage
========================= */
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

// Apply saved theme when the page loads
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeBtn.textContent = isDark ? "☀️" : "🌙";
});

/* =========================
   Time-based greeting
========================= */
const greetingMessage = document.getElementById("greetingMessage");

if (greetingMessage) {
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  greetingMessage.textContent = `👋 ${greeting}! Welcome to my portfolio.`;
}

/* =========================
   Project filtering, sorting, and saved state
========================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const sortProjects = document.getElementById("sortProjects");
const projectsContainer = document.querySelector("#projects .cards");
const projectCards = Array.from(document.querySelectorAll("#projects .card"));
const emptyState = document.getElementById("emptyState");

// Load saved project controls, or use defaults
let currentFilter = localStorage.getItem("projectFilter") || "all";
let currentSort = localStorage.getItem("projectSort") || "default";

function updateProjectCards() {
  // First, filter cards by category
  projectCards.forEach((card) => {
    const matchesFilter =
      currentFilter === "all" || card.dataset.category === currentFilter;

    card.hidden = !matchesFilter;
  });

  // Then, sort only the visible cards
  const visibleCards = projectCards.filter((card) => !card.hidden);

  if (currentSort === "az") {
    visibleCards.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
  } else if (currentSort === "za") {
    visibleCards.sort((a, b) => b.dataset.title.localeCompare(a.dataset.title));
  }

  // Re-append visible cards in the selected order
  visibleCards.forEach((card) => {
    projectsContainer.appendChild(card);
  });

  // Update active filter button
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === currentFilter);
  });

  // Update dropdown value
  sortProjects.value = currentSort;

  // Save user choices
  localStorage.setItem("projectFilter", currentFilter);
  localStorage.setItem("projectSort", currentSort);

  // Show message if no projects match the filter
  emptyState.hidden = visibleCards.length !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    updateProjectCards();
  });
});

sortProjects.addEventListener("change", () => {
  currentSort = sortProjects.value;
  updateProjectCards();
});

// Apply saved filter and sort when the page loads
updateProjectCards();

/* =========================
   Contact form validation
========================= */
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function setError(input, errorElement, message) {
  input.classList.add("error");
  input.classList.remove("success");
  errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("success");
  errorElement.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isValid = true;

  formMsg.textContent = "";
  formMsg.classList.remove("show");

  // Validate name
  if (nameValue === "") {
    setError(nameInput, nameError, "Please enter your name.");
    isValid = false;
  } else if (nameValue.length < 2) {
    setError(nameInput, nameError, "Name must be at least 2 characters.");
    isValid = false;
  } else {
    setSuccess(nameInput, nameError);
  }

  // Validate email
  if (emailValue === "") {
    setError(emailInput, emailError, "Please enter your email.");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    setSuccess(emailInput, emailError);
  }

  // Validate message
  if (messageValue === "") {
    setError(messageInput, messageError, "Please enter your message.");
    isValid = false;
  } else if (messageValue.length < 10) {
    setError(messageInput, messageError, "Message must be at least 10 characters.");
    isValid = false;
  } else {
    setSuccess(messageInput, messageError);
  }

  // Show final feedback
  if (isValid) {
    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "#16a34a";
    formMsg.classList.add("show");

    contactForm.reset();

    [nameInput, emailInput, messageInput].forEach((input) => {
      input.classList.remove("success");
    });
  } else {
    formMsg.textContent = "Please fix the errors above and try again.";
    formMsg.style.color = "#dc2626";
    formMsg.classList.add("show");
  }
});

/* =========================
   GitHub API integration
========================= */
const repoContainer = document.getElementById("repoContainer");
const repoStatus = document.getElementById("repoStatus");
const githubUsername = "Lama-AlThunayyan";

async function loadGitHubRepos() {
  try {
    repoStatus.textContent = "Loading repositories...";

    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories.");
    }

    const repos = await response.json();

    repoContainer.innerHTML = "";

    if (repos.length === 0) {
      repoStatus.textContent = "No repositories found.";
      return;
    }

    // Show only the most recently updated repositories
    const topRepos = repos.slice(0, 4);

    topRepos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "repo-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available."}</p>
        <p class="muted">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      `;

      repoContainer.appendChild(card);
    });

    repoStatus.textContent = "";
  } catch (error) {
    repoStatus.textContent =
      "Unable to load GitHub repositories right now. Please try again later.";

    console.error(error);
  }
}

loadGitHubRepos();

/* =========================
   Project details modal
========================= */
const projectModal = document.getElementById("projectModal");
const closeModalBtn = document.querySelector(".close-btn");

const modalTitle = document.getElementById("modalTitle");
const modalProblem = document.getElementById("modalProblem");
const modalSolution = document.getElementById("modalSolution");
const modalFeatures = document.getElementById("modalFeatures");
const modalTech = document.getElementById("modalTech");
const modalLink = document.getElementById("modalLink");

const viewButtons = document.querySelectorAll(".view-btn");

function fillList(element, commaSeparatedText) {
  element.innerHTML = "";

  commaSeparatedText.split(",").forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.trim();
    element.appendChild(li);
  });
}

function openProjectModal(button) {
  modalTitle.textContent = button.dataset.title;
  modalProblem.textContent = button.dataset.problem;
  modalSolution.textContent = button.dataset.solution;

  fillList(modalFeatures, button.dataset.features);
  fillList(modalTech, button.dataset.tech);

  modalLink.href = button.dataset.link;

  projectModal.classList.add("show");
  projectModal.setAttribute("aria-hidden", "false");
}

function closeProjectModal() {
  projectModal.classList.remove("show");
  projectModal.setAttribute("aria-hidden", "true");
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openProjectModal(button);
  });
});

closeModalBtn.addEventListener("click", closeProjectModal);

// Close modal when clicking outside the modal box
projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    closeProjectModal();
  }
});

// Close modal using Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal.classList.contains("show")) {
    closeProjectModal();
  }
});