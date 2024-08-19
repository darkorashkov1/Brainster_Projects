(function () {
  // Check if the user is signed in
  function isUserSignedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }

  // Toggle badge visibility
  function updateBadgeVisibility() {
    const badge1 = document.querySelector("#badge_1");
    const badge2 = document.querySelector("#badge_2");
    const badge3 = document.querySelector("#badge_3");
    const badge4 = document.querySelector("#badge_4");
    const badge5 = document.querySelector("#badge_5");
    const badge6 = document.querySelector("#badge_6");

    // Hide all badges initially
    [badge1, badge2, badge3, badge4, badge5, badge6].forEach((badge) => {
      badge.style.display = "none";
    });

    // Only show badges based on conditions
    if (isUserSignedIn()) {
      badge1.style.display = "block";
    }

    if (localStorage.getItem("playButtonClickCount") >= 5) {
      badge2.style.display = "block";
    }

    if (localStorage.getItem("playButtonClickCount") >= 10) {
      badge3.style.display = "block";
    }

    if (localStorage.getItem("playButtonClickCount") >= 20) {
      badge4.style.display = "block";
    }

    if (localStorage.getItem("commentAdded") === "true") {
      badge5.style.display = "block";
    }

    if (
      localStorage.getItem("cardClickCount") >= 10 &&
      localStorage.getItem("modalOpened") === "true"
    ) {
      badge6.style.display = "block";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateBadgeVisibility();

    // Track clicks on the play button in the infoPage section
    const playButtons = document.querySelectorAll(".play-button");
    playButtons.forEach((button) => {
      button.addEventListener("click", function () {
        let playButtonClickCount =
          parseInt(localStorage.getItem("playButtonClickCount")) || 0;
        playButtonClickCount++;
        localStorage.setItem("playButtonClickCount", playButtonClickCount);
        updateBadgeVisibility();
      });
    });

    // Track comment in discussionBoard section
    document.addEventListener("addComment", function () {
      localStorage.setItem("commentAdded", "true");
      updateBadgeVisibility();
    });

    // Track clicks on cards in infoPage section
    const infoPageCards = document.querySelectorAll(".info-card");
    infoPageCards.forEach((card) => {
      card.addEventListener("click", function () {
        let cardClickCount =
          parseInt(localStorage.getItem("cardClickCount")) || 0;
        cardClickCount++;
        localStorage.setItem("cardClickCount", cardClickCount);
        updateBadgeVisibility();
      });
    });

    // Track opening of modal window
    document.addEventListener("modalOpened", function () {
      localStorage.setItem("modalOpened", "true");
      updateBadgeVisibility();
    });
  });

  // Add event listeners to edit profile information
  const emailInput = document.getElementById("email");
  const birthYearInput = document.getElementById("birthYear");

  emailInput.addEventListener("input", function () {
    const newEmail = emailInput.value;
    localStorage.setItem("userEmail", newEmail);
  });

  birthYearInput.addEventListener("input", function () {
    const newBirthYear = birthYearInput.value;
    localStorage.setItem("userBirthYear", newBirthYear);
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

  function signInUser() {
    localStorage.setItem("isLoggedIn", "true");
    updateBadgeVisibility();
  }

  function signOutUser() {
    localStorage.setItem("isLoggedIn", "false");
    updateBadgeVisibility();
  }

  signInUser();
})();
