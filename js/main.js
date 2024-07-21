document.addEventListener("DOMContentLoaded", function () {
  // Nav Toggle

  const toggleMenuBtn = document.getElementById("menu-toggle-btn");
  const toggleMenuDiv = document.getElementById("menu-toggle-div");
  const closeNavBtn = document.getElementById("close-nav-btn");
  const fullNavLinks = toggleMenuDiv.querySelectorAll("a");

  toggleMenuBtn.addEventListener("click", function () {
    toggleMenuDiv.classList.remove("hidden");
  });

  closeNavBtn.addEventListener("click", function () {
    toggleMenuDiv.classList.add("hidden");
  });

  fullNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      toggleMenuDiv.classList.add("hidden");
    });
  });

  // Highlights Toggle

  const highlightsToggleBtn = document.getElementById("highlights-toggle-btn");
  const highlights = document.getElementById("highlights");
  const highlightButtonIcon = document.getElementById("highlight-button-icon");

  highlightsToggleBtn.addEventListener("click", function () {
    const isHidden = highlights.classList.toggle("hidden");
    highlightButtonIcon.textContent = isHidden
      ? "keyboard_arrow_down"
      : "keyboard_arrow_up";
  });

  // Highlights Img Toggle

  const images = [
    "/src/assets/images/_65A7908-EDIT (1).jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
  ]; // Array of image URLs
  let currentIndex = 0;

  const slideImage = document.getElementById("slideImage");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  function updateSlide(index) {
    slideImage.src = images[index];
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlide(currentIndex);
  });

  //  Work Toggle

  const workList = document.getElementById("work-list");
  const showWork = document.getElementById("show-work");

  showWork.addEventListener("click", function () {
    workList.classList.remove("hidden");
    showWork.classList.add("hidden");
  });
});
