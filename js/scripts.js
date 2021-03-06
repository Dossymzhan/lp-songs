const playBtn = document.querySelector(".play");
const songs = document.querySelectorAll(".nav-item");
const main = document.querySelector(".main");

const audio = new Audio();
audio.src = `./assets/songs/one-more-light.mp3`;

let isPlay = false;

function playAudio() {
  audio.currentTime = 0;
  isPlay = true;
  audio.play();
  playBtn.classList.add("pause");
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
  playBtn.classList.remove("pause");
}

playBtn.addEventListener("click", () => {
  if (isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
});

function changeImage(e) {
  main.style.backgroundImage = `url('./assets/img/${e.target.dataset.item}.jpg')`;
}

function changeSong(e) {
  audio.src = `./assets/songs/${e.target.dataset.item}.mp3`;
  playAudio();
}

function active(e) {
  songs.forEach((song) => {
    song.classList.remove("active");
  });
  e.target.classList.add("active");
}

songs.forEach((song) => {
  song.addEventListener("click", changeSong);
  song.addEventListener("click", changeImage);
  song.addEventListener("click", active);
});
