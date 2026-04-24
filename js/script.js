// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();


// =========================
// Mobile menu
// =========================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});


// =========================
// Theme toggle with localStorage
// =========================
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

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


// =========================
// Dynamic Feature: Project Filter
// =========================
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".card");
const emptyState = document.getElementById("emptyState");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    // active button style
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.hidden = false;
        visibleCount++;
      } else {
        card.hidden = true;
      }
    });

    emptyState.hidden = visibleCount !== 0;
  });
});


// =========================
// Data Handling + User Feedback:
// Form validation
// =========================
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

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isValid = true;

  // reset form message
  formMsg.textContent = "";
  formMsg.classList.remove("show");

  // Name validation
  if (nameValue === "") {
    setError(nameInput, nameError, "Please enter your name.");
    isValid = false;
  } else if (nameValue.length < 2) {
    setError(nameInput, nameError, "Name must be at least 2 characters.");
    isValid = false;
  } else {
    setSuccess(nameInput, nameError);
  }

  // Email validation
  if (emailValue === "") {
    setError(emailInput, emailError, "Please enter your email.");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    setSuccess(emailInput, emailError);
  }

  // Message validation
  if (messageValue === "") {
    setError(messageInput, messageError, "Please enter your message.");
    isValid = false;
  } else if (messageValue.length < 10) {
    setError(messageInput, messageError, "Message must be at least 10 characters.");
    isValid = false;
  } else {
    setSuccess(messageInput, messageError);
  }

  // Final feedback
  if (isValid) {
    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "#16a34a";
    formMsg.classList.add("show");
    contactForm.reset();

    // remove success borders after reset
    [nameInput, emailInput, messageInput].forEach((input) => {
      input.classList.remove("success");
    });
  } else {
    formMsg.textContent = "Please fix the errors above and try again.";
    formMsg.style.color = "#dc2626";
    formMsg.classList.add("show");
  }
});


// =========================
// Assignment 3 Additions: Projects filter + sort + remembered state
// =========================
const sortProjects = document.getElementById("sortProjects");
const projectsContainer = document.querySelector("#projects .cards");
const projectCardsArray = Array.from(document.querySelectorAll("#projects .card"));

let currentFilter = localStorage.getItem("projectFilter") || "all";
let currentSort = localStorage.getItem("projectSort") || "default";

function applyProjectControls() {
  let visibleCards = [...projectCardsArray];

  // Filter
  visibleCards.forEach((card) => {
    const matches = currentFilter === "all" || card.dataset.category === currentFilter;
    card.hidden = !matches;
  });

  // Sort only visible cards
  const filteredCards = projectCardsArray.filter((card) => !card.hidden);

  if (currentSort === "az") {
    filteredCards.sort((a, b) =>
      a.dataset.title.localeCompare(b.dataset.title)
    );
  } else if (currentSort === "za") {
    filteredCards.sort((a, b) =>
      b.dataset.title.localeCompare(a.dataset.title)
    );
  }

  filteredCards.forEach((card) => projectsContainer.appendChild(card));

  // update active button
  filterButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === currentFilter);
  });

  sortProjects.value = currentSort;

  localStorage.setItem("projectFilter", currentFilter);
  localStorage.setItem("projectSort", currentSort);

  emptyState.hidden = filteredCards.length !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    applyProjectControls();
  });
});

sortProjects.addEventListener("change", () => {
  currentSort = sortProjects.value;
  applyProjectControls();
});

applyProjectControls();

// =========================
// GitHub API integration
// =========================
const repoContainer = document.getElementById("repoContainer");
const repoStatus = document.getElementById("repoStatus");

// My GitHub username
const githubUsername = "Lama-AlThunayyan";

async function loadGitHubRepos() {
  try {
    repoStatus.textContent = "Loading repositories...";

    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`);

    if (!response.ok) {
      throw new Error("Failed to fetch repositories.");
    }

    const repos = await response.json();

    repoContainer.innerHTML = "";

    if (repos.length === 0) {
      repoStatus.textContent = "No repositories found.";
      return;
    }

    const topRepos = repos.slice(0, 4);

    topRepos.forEach((repo) => {
      const card = document.createElement("article");
      card.className = "repo-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "No description available."}</p>
        <p class="muted">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View Repository</a>
      `;

      repoContainer.appendChild(card);
    });

    repoStatus.textContent = "";
  } catch (error) {
    repoStatus.textContent = "Unable to load GitHub repositories right now. Please try again later.";
    console.error(error);
  }
}

loadGitHubRepos();