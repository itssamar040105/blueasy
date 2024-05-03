const video = document.getElementById("myVideo");
const playButton = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon");
const seekBar = document.getElementById("seek-bar");
const fullscreenButton = document.getElementById("fullscreen-btn");

// Load metadata of the video to get duration
video.addEventListener("loadedmetadata", () => {
  // Set max value of seekBar to video duration
  seekBar.max = video.duration;
});

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    video.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
});

video.addEventListener("timeupdate", () => {
  seekBar.value = video.currentTime;
});

seekBar.addEventListener("input", () => {
  video.currentTime = seekBar.value;
});

fullscreenButton.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    /* Firefox */
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    /* IE/Edge */
    video.msRequestFullscreen();
  }
});

const navIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector("nav");
let clicked = false;

navIcon.addEventListener("click", () => {
  if (clicked) {
    navIcon.innerHTML = `<i class="fa fa-bars" aria-hidden="true" style="color: white"></i>`;
    navMenu.style.transform = "translateY(-200%)";
  } else {
    navIcon.innerHTML = `<i class="fa fa-x" aria-hidden="true" style="color: white"></i>`;
    navMenu.style.transform = "translateY(12%)";
  }
  clicked = !clicked;
});
