const signInForm = document.querySelector(".signInForm");
const usernameInput = document.getElementById("userName");
const passwordInput = document.getElementById("password");
const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");
const logInBtnMobile = document.getElementById("logInBtnMobile");
const logOutBtnMobile = document.getElementById("logOutBtnMobile");
const profileButton = document.getElementById("profileButton");
const profileButtonMobile = document.getElementById("profileButtonMobile");

const validUsers = [
  { username: "User123", password: "Pass123" },
  { username: "User456", password: "Pass456" },
  { username: "User789", password: "Pass789" },
];

// Function to handle user login
function handleLogin(username) {
  usernameInput.value = "";
  passwordInput.value = "";

  signInButton.classList.add("d-none");
  signOutButton.classList.remove("d-none");
  profileButton.classList.remove("d-none");

  const userShareCard = document.querySelector(".user-share-card");
  if (userShareCard) {
    userShareCard.classList.remove("d-none");
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("loggedInUser", username);

  if (!localStorage.getItem("welcomeModalShown")) {
    const modal = document.getElementById("myModalWelcome");
    modal.style.display = "block";

    const modalBtn = document.querySelector(".modalBtnWelcome");
    modalBtn.addEventListener("click", function () {
      modal.style.display = "none";
      location.hash = HASH_ROUTES.infoPage;
      localStorage.setItem("welcomeModalShown", "true"); // Set the flag after showing the modal
    });
  }
}

// Function to handle user logout
function handleLogout() {
  signInButton.classList.remove("d-none");
  signOutButton.classList.add("d-none");
  profileButton.classList.add("d-none");

  const userShareCard = document.querySelector(".user-share-card");
  if (userShareCard) {
    userShareCard.classList.add("d-none");
  }

  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("welcomeModalShown");

  location.hash = HASH_ROUTES.landingPage;
}

document.addEventListener("DOMContentLoaded", function () {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (localStorage.getItem("isLoggedIn") === "true") {
    const username = localStorage.getItem("loggedInUser");
    handleLogin(username);
  }

  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    const requestData = {
      username: enteredUsername,
      password: enteredPassword,
    };

    fetch("http://127.0.0.1:5000/api/authentication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful login
        handleLogin(data);
      })
      .catch((error) => {
        console.error("Login error:", error);

        // Clear input fields
        usernameInput.value = "";
        passwordInput.value = "";

        alert("Login unsuccessful, username or password incorrect!");
      });
  });

  signOutButton.addEventListener("click", function () {
    alert("User logged out successfully!");
    handleLogout();
  });
  logOutBtnMobile.addEventListener("click", function () {
    alert("User logged out successfully!");
    handleLogout();
  });
});

// ROUTING

const HASH_ROUTES = {
  signIn: "signIn",
  landingPage: "landingPage",
  infoPage: "infoPage",
  discussionBoard: "discussionBoard",
  contactPage: "contactPage",
  profilePage: "profilePage",
  notFoundPage: "notFoundPage",
};

const hideAllSections = () => {
  document
    .querySelectorAll("section")
    .forEach((sectionElement) => sectionElement.classList.add("displayNone"));
};

const showSection = (sectionId) => {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    section.classList.remove("displayNone");
    window.scrollTo(0, 0); // Scroll to the top of the page
  }
};

const handleRouteChange = () => {
  const hashRoute = location.hash.slice(1) || HASH_ROUTES.landingPage;
  const allowedRoutes = Object.values(HASH_ROUTES);

  hideAllSections();

  if (allowedRoutes.includes(hashRoute)) {
    showSection(hashRoute);
  } else {
    showSection(HASH_ROUTES.notFoundPage); // Show 404 page for invalid routes
  }
};

window.addEventListener("hashchange", handleRouteChange);

// Navigation
const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerIcon = hamburgerBtn.querySelector(".material-icons");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector("header");

hamburgerBtn.addEventListener("click", () => {
  hamburgerIcon.innerText =
    hamburgerIcon.innerText === "menu" ? "close" : "menu";
  mobileMenu.classList.toggle("is-open");
  mobileMenu.classList.toggle("displayNone");
});

// VIDEO PLAY BUTTON

const video = document.getElementById("landingPageVideo");
const playButton = document.getElementById("playButtonLanding");

playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  }
});

playButton.addEventListener("mouseenter", function () {
  playButton.style.opacity = "1";
});

playButton.addEventListener("mouseleave", function () {
  playButton.style.opacity = "0";
});

// PASSWORD SECTION

// Password visibility

const showPassword = document.querySelector("#showPassword");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  this.classList.toggle("fa-eye");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

// INPUTS AND EDIT BUTTONS
const inputWrappers = document.querySelectorAll(".input-wrapper input");

inputWrappers.forEach((input) => {
  input.addEventListener("mouseenter", function () {
    this.style.border = "1px solid";
    this.style.borderRadius = "7px";
  });

  input.addEventListener("mouseleave", function () {
    this.style.border = "1px solid #ced4da";
    this.style.borderRadius = "0";
  });
});
