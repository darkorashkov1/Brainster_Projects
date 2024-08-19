const cards = [
  {
    videoSrc: "./img/Content_page_videos/Card_1_liveStreaming.mp4",
    poster: "./img/Content_page_videos/Card_1_liveStreaming_Poster.jpeg",
    title: `Лоши навики при "Live streaming"`,
    id: "1",
    category: "Најгледани",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем и...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_2_voiceMessages.mp4",
    poster: "./img/Content_page_videos/Card_2_voiceMessages_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_2.png",
    title: `Праќање на звучни пораки`,
    id: "2",
    category: "Актуелно",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем ипсум бил индустриски стандард...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_3_appSafety.mp4",
    poster: "./img/Content_page_videos/Card_3_appSafety_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_3.png",
    title: `Безбедност при користење на апликации`,
    id: "3",
    category: "Најнови",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем и...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_4_devices.mp4",
    poster: "./img/Content_page_videos/Card_4_devices_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_4.png",
    title: `Различни уреди, различни проблеми`,
    id: "4",
    category: "Најгледани",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем и...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_5_surfing.mp4",
    poster: "./img/Content_page_videos/Card_5_surfing_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_5.png",
    title: `Што се случува во позадина додека сурфаш`,
    id: "5",
    category: "Најгледани",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем и...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_6_recordSmb.mp4",
    poster: "./img/Content_page_videos/Card_6_recordSmb_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_6.png",
    title: `Што е важно кога снимаш некој друг?`,
    id: "6",
    category: "Актуелно",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем и...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_7_onOffSafety.mp4",
    poster: "./img/Content_page_videos/Card_7_onOffSafety_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_7.png",
    title: `Безбедност онлајн и офлајн`,
    id: "7",
    category: "Приватност",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем ипсум бил индустриски стандард...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_8_internetActivity.mp4",
    poster: "./img/Content_page_videos/Card_8_internetActivity_Poster.jpg",
    imgSrc: "./img/Content_page/Card_8.png",
    title: `Кој може да ја следи твојата активност преку интернет`,
    id: "8",
    category: "Приватност",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем и...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_9_useInsta.mp4",
    poster: "./img/Content_page_videos/Card_9_useInsta_Poster.jpg",
    imgSrc: "./img/Content_page/Card_9.png",
    title: `Како да (не) го користиш Инстаграм`,
    id: "9",
    category: "Интернет",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем и...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_10_contentSharing.mp4",
    poster: "./img/Content_page_videos/Card_10_contentSharing_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_10.png",
    title: `Споделување на содржини`,
    id: "10",
    category: "Актуелно",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем ипсум бил индустриски стандард...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_11_hackAttacks.mp4",
    poster: "./img/Content_page_videos/Card_11_hackAttacks_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_11.png",
    title: `Хакерски напади`,
    id: "11",
    category: "Опасност",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем ипсум бил индустриски стандард...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_12_internetRisks.mp4",
    poster: "./img/Content_page_videos/Card_12_internetRisks_Poster.jpg",
    imgSrc: "./img/Content_page/Card_12.png",
    title: `Ризици при работење преку интернет`,
    id: "12",
    category: "Најгледани",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем и...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_13_sharingLaptop.mp4",
    poster: "./img/Content_page_videos/Card_13_sharingLaptop_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_13.png",
    title: `На што да внимаваш кога користиш туѓ лаптоп или десктоп компјутер`,
    id: "13",
    category: "Приватност",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печат...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_14_computerViruses.mp4",
    poster: "./img/Content_page_videos/Card_14_computerViruses_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_14.png",
    title: `Компјутерски вируси`,
    id: "14",
    category: "Опасност",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем ипсум бил индустриски стандард...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_15_worldOnDisplay.mp4",
    poster: "./img/Content_page_videos/Card_15_worldOnDisplay_Poster.jpeg",
    imgSrc: "./img/Content_page/Card_15.png",
    title: `Целиот свет на твојот екран`,
    id: "15",
    category: "Најнови",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем ипсум бил индустриски стандард...",
    date: "Објавено на 28/05/23",
  },
  {
    videoSrc: "./img/Content_page_videos/Card_16_whatIsInternet.mp4",
    poster: "./img/Content_page_videos/Card_16_whatIsInternet.jpg",
    imgSrc: "./img/Content_page/Card_16.png",
    title: `Што всушност е интернетот?`,
    id: "16",
    category: "Актуелно",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индуструја. Лорем ипсум бил индустриски стандард...",
    date: "Објавено на 28/05/23",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initializeCards();
  addFilterListeners();
  addGlobalEventListeners();
});

const handleUserLogout = () => {
  // Clear localStorage when user logs out
  localStorage.clear();
};

const addUserLogoutEventListener = () => {
  const logoutButton = document.getElementById("signOutButton");
  logoutButton.addEventListener("click", handleUserLogout);
};

// Function to handle click on modal play button
const handleModalPlayButtonClick = (event) => {
  let playButtonClickCount = localStorage.getItem("playButtonClickCount") || 0;
  playButtonClickCount++;
  localStorage.setItem("playButtonClickCount", playButtonClickCount);
};

const addModalPlayButtonEventListener = () => {
  // Track clicks on the modal play button
  const modalPlayButton = document.getElementById("modalPlayButton");
  modalPlayButton.addEventListener("click", handleModalPlayButtonClick);
};

const renderCard = ({ id, videoSrc, poster, title, description, date }) => `
  <div class="custom-card shadow-md radius-card" data-id="${id}">
    <video loop muted class="back-video radius-card bd-placeholder-img card-img-top"
      aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"
      poster="${poster}">
      <source src="${videoSrc}" type="video/mp4" />
    </video>
    <button title="playButton" class="play-button" id="playButton${id}">
      <i class="fa-solid fa-play fa-2xl"></i>
    </button>
    <div class="overlay radius-text p-3">
      <h3 class="textCard h5 mb-3">${title}</h3>
      <p class="card-text mb-3">${description}</p>
      <div class="d-flex justify-content-between align-items-center">
        <small class="text-body-secondary">${date}</small>
      </div>
    </div>
  </div>
`;

const createCard = (card) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col", "mb-4");
  cardDiv.innerHTML = renderCard(card);
  return cardDiv;
};

const updateContainer = (cards) => {
  const container = document.querySelector(
    ".row-cols-1.row-cols-sm-2.row-cols-md-2.row-cols-lg-4"
  );
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  cards.forEach((card) => fragment.appendChild(createCard(card)));
  container.appendChild(fragment);
};

const filterCards = (selectedCategories) => {
  const filteredCards = allCards.filter((card) =>
    selectedCategories.includes(card.category)
  );
  updateContainer(filteredCards);
};

const handleFilterClick = (event) => {
  const selectedCategories = Array.from(
    document.querySelectorAll(".badges.btn.selected")
  ).map((badge) => badge.id);
  localStorage.setItem(
    "selectedCategories",
    JSON.stringify(selectedCategories)
  );
  selectedCategories.length
    ? filterCards(selectedCategories)
    : updateContainer(allCards);
};

const addFilterListeners = () => {
  document.querySelectorAll(".badges.btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.classList.toggle("selected");
      handleFilterClick(event);
    });
  });
};

const initializeCards = () => {
  allCards = [...cards];
  const selectedCategories =
    JSON.parse(localStorage.getItem("selectedCategories")) || [];
  selectedCategories.forEach((category) =>
    document.getElementById(category)?.classList.add("selected")
  );
  selectedCategories.length
    ? filterCards(selectedCategories)
    : updateContainer(allCards);
};

const renderComment = ({ text, author }) => `
  <div class="custom-comment-card mb-4 bg-blank">
    <div class="mx-3 mt-4">
      <div class="form-control bg-transparent rounded-0 border-0 p-0 border-bottom border-dark mx-0">${text}</div>
    </div>
    <div class="d-flex justify-content-between align-items-center p-3">
      <div class="d-flex media align-items-center">
        <div><img src="./img/Discussion Board/Person_0.png" class="d-block ui-w-40 rounded-circle" alt=""></div>
        <div class="mx-3">${author}</div>
      </div>
    </div>
  </div>
`;

const handleGlobalClick = (event) => {
  const cardElement = event.target.closest(".custom-card");
  if (cardElement && !event.target.closest(".video-section")) {
    event.preventDefault();
    const cardId = cardElement.dataset.id;
    const selectedCard = allCards.find((card) => card.id === cardId);
    if (selectedCard) {
      const modalTitle = document.getElementById("videoModalLabel");
      const modalVideo = document.getElementById("modalVideo");
      const commentsDiv = document.getElementById("comments");
      const videoDescription = document.getElementById("videoDescription");

      modalTitle.textContent = selectedCard.title;
      modalVideo.src = selectedCard.videoSrc;
      videoDescription.textContent = selectedCard.description;
      commentsDiv.innerHTML =
        selectedCard.comments && selectedCard.comments.length
          ? selectedCard.comments
              .map((comment) => renderComment(comment))
              .join("")
          : "<p>No comments yet.</p>";

      const videoModal = new bootstrap.Modal(
        document.getElementById("videoModal")
      );
      videoModal.show();
      document.getElementById("commentInput").value = "";
      document.getElementById("videoModal").dataset.cardId = cardId;
    }
  }
};

const handleCommentInput = (event) => {
  if (event.key === "Enter") {
    const commentText = event.target.value.trim();
    if (commentText !== "") {
      const cardId = document.getElementById("videoModal").dataset.cardId;
      const card = allCards.find((card) => card.id === cardId);
      if (card) {
        card.comments = card.comments || [];

        const userName = localStorage.getItem("userName");
        const newComment = {
          text: commentText,
          author: userName || "Unknown User",
        };

        card.comments.push(newComment);
        document.getElementById("comments").innerHTML +=
          renderComment(newComment);
        event.target.value = "";
      }
    }
  }
};

const handleModalPlayButton = () => {
  const video = document.getElementById("modalVideo");
  const playButton = document.getElementById("modalPlayButton");
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "block";
  }
};

const handleVideoPlay = () => {
  document.getElementById("modalPlayButton").style.display = "none";
};

const handleVideoPause = () => {
  document.getElementById("modalPlayButton").style.display = "block";
};

document
  .getElementById("modalPlayButton")
  .addEventListener("click", handleModalPlayButton);
document.getElementById("modalVideo").addEventListener("play", handleVideoPlay);
document
  .getElementById("modalVideo")
  .addEventListener("pause", handleVideoPause);

const handleMouseOverOut = (event) => {
  if (event.target.closest(".custom-card")) {
    const playButton = event.target
      .closest(".custom-card")
      .querySelector(".play-button");
    playButton.style.display = event.type === "mouseover" ? "block" : "none";
  }
};

const hideModalOnClickOutside = (event) => {
  const modalElement = document.getElementById("videoModal");
  const modalDialog = document.querySelector(".modal-dialog");
  if (
    modalElement.classList.contains("show") &&
    !modalDialog.contains(event.target) &&
    event.target !== modalDialog
  ) {
    const videoModal = bootstrap.Modal.getInstance(modalElement);
    videoModal.hide();
  }
};

const addGlobalEventListeners = () => {
  document.addEventListener("click", handleGlobalClick);
  document
    .getElementById("commentInput")
    .addEventListener("keydown", handleCommentInput);
  document.addEventListener("mouseover", handleMouseOverOut);
  document.addEventListener("mouseout", handleMouseOverOut);
  document.addEventListener("click", hideModalOnClickOutside);
};

addModalPlayButtonEventListener();

addUserLogoutEventListener();
