// Navigation
const hamburger = document.querySelector(".hamburger");
const hamburger_icon = hamburger.querySelector("span");
const mobile_menu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger_icon.innerText =
    hamburger_icon.innerText === "sort" ? "close" : "sort";
  mobile_menu.classList.toggle("is-open");
});

// Filters section
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    var designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "inline-block";
    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    var marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-coding").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
    loadMore.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "inline-block";
    loadMore.style.display = "flex";
  });
}

//   Pagination
const loadMore = document.querySelector(".load-more");

let currentItems = 6;
loadMore.addEventListener("click", (e) => {
  const elementList = [
    ...document.querySelectorAll(".container .box-container .box"),
  ];
  e.target.classList.add("show-loader");

  for (let i = currentItems; i < currentItems + 6; i++) {
    setTimeout(function () {
      e.target.classList.remove("show-loader");
      if (elementList[i]) {
        elementList[i].style.display = "inline-block";
      }
    }, 1000);
  }
  currentItems += 6;

  if (currentItems >= boxes.length) {
    Event.target.classList.add("loaded");
    loaded.style.display = "none";
  }
});
