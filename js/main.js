const headerElement = document.getElementById("header-id");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerElement.classList.add("header-fixed");
  } else {
    headerElement.classList.remove("header-fixed");
  }
});

let navBar = document.getElementsByClassName("links")[0];
let toggleBar = document.getElementsByClassName("toggle-bar")[0];

toggleBar.onclick = () => {
  if (toggleBar.classList.contains("open")) {
    toggleBar.classList.remove("open");
  } else {
    toggleBar.classList.add("open");
  }
};

// Get references to the search icon and input field
let searchIcon = document.querySelector(".container .searching i");
let inputSearch = document.querySelector(".container .input-search");

// Add click event listener to the search icon
searchIcon.addEventListener("click", () => {
  // Toggle the 'active' class on the input field
  inputSearch.classList.toggle("active");

  // Check if the input field has the 'active' class
  if (inputSearch.classList.contains("active")) {
    // Focus the input field if it is active
    inputSearch.focus();
  }
});

//  Create Slider
//  =============
// Get Landing Div
let landing = document.getElementById("landing");

// Get Bullets
let bullets = Array.from(document.querySelectorAll(".landing-bullets li"));
// Store Imges url
let images = [
  "images/landing.jpg",
  "images/landing-2.jpg",
  "images/landing-3.jpg",
];

// Set Current Index
let currentIndex = 0;

// Add Custom Attribute To Bulltes
for (let i = 0; i < bullets.length; i++) {
  bullets[i].setAttribute("data-index", i);
}

// Function For Bullets
function updateBullets(activeIndex) {
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  bullets[activeIndex].classList.add("active");

  //Anthor Method
  // bullets.forEach((bullet, index) => { // index represent index of bullet
  //   bullet.classList.toggle("active", index === activeIndex); if true => add active else remove active
  // });
}

// Function To Change background-Image
function changeBackgroundImage(index) {
  landing.style.backgroundImage = `url("${images[index]}")`;
  updateBullets(index);
}

// Function For Next Image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // If Click The Next At Last Image => loop to First Image Again
  changeBackgroundImage(currentIndex);
}

// Function For Previous Image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; //If Click The Prev At First Image => loop to Last Image Again
  changeBackgroundImage(currentIndex);
}

// When Click In Bullets
for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = () => {
    changeBackgroundImage(parseInt(bullets[i].getAttribute("data-index")));
    currentIndex = parseInt(bullets[i].getAttribute("data-index"));
  };
}

// Inital First Image
changeBackgroundImage(currentIndex);

// Change Image Each 10 Second
setInterval(nextImage, 10000);

// Add Functoin To NextBtn
document.querySelector(".next").addEventListener("click", nextImage);

// Add Functoin To PrevBtn
document.querySelector(".prev").addEventListener("click", prevImage);

//  Create Counter (Number Increaes with smoothy)
//  =============

let states = document.querySelectorAll(".state .number");
let stateSection = document.querySelector(".state");
let started = false;

window.onscroll = () => {
  if (!started && window.scrollY >= stateSection.offsetTop - 350) {
    started = true;

    const duration = 2000; // Total duration in milliseconds (adjust as needed)
    states.forEach((state) => {
      const goal = parseInt(state.dataset.goal, 10); // Get the goal as an integer
      const increment = goal / (duration / 10); // Calculate the increment based on the duration

      let count = 0; // Start counting from 0
      let counter = setInterval(() => {
        count += increment; // Increment count
        if (count >= goal) {
          state.textContent = goal; // Ensure the final count is the goal
          clearInterval(counter); // Stop the counter
        } else {
          state.textContent = Math.floor(count); // Update the displayed number
        }
      }, 10); // Set interval time (10 ms for smooth animation)
    });
  }

  //  Create Counter (Number Increaes with smoothy)
  //  =============

  let progressSpans = document.querySelectorAll(".progress span");
  let skills = document.querySelector(".skills");

  if (window.scrollY >= skills.offsetTop - 300) {
    progressSpans.forEach((progress) => {
      progress.style.width = progress.dataset.progress;
    });
  }
};

// When Click On Bullets Of TESTIMONIALS
// ===============

