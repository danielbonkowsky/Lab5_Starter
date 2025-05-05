// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  hornSelector = document.getElementById("horn-select");
  hornSelector.addEventListener("change", displaySelected);

  hornImage = document.querySelector(`img[src^="assets/images"]`);
  hornImage.width = 512;
  hornImage.height = 400;

  audio = document.querySelector("audio");

  playButton = document.querySelector("button");
  playButton.addEventListener("click", playSound);

  volumeSlider = document.getElementById("volume");
  volumeSlider.addEventListener("input", volumeChange);

  volumeImage = document.querySelector(`img[src^="assets/icons"]`);

  jsConfetti = new JSConfetti();

  displaySelected();
  volumeChange();
}

let hornSelector = null;
let hornImage = null;
let audio = null;
let playButton = null;
let volumeSlider = null;
let volumeImage = null;
let jsConfetti = null;

function displaySelected() {
  if (!hornImage || !hornSelector || !audio)
      return;

  switch(hornSelector.value) {
    case "air-horn":
      hornImage.src = "assets/images/air-horn.svg";
      hornImage.alt = "An air horn";
      audio.src = "assets/audio/air-horn.mp3";
      break;
    case "car-horn":
      hornImage.src = "assets/images/car-horn.svg";
      hornImage.alt = "A car horn";
      audio.src = "assets/audio/car-horn.mp3";
      break;
    case "party-horn":
      hornImage.src = "assets/images/party-horn.svg";
      hornImage.alt = "A party horn";
      audio.src = "assets/audio/party-horn.mp3";
      break;
    default:
      hornImage.src = "assets/images/no-image.png";
      hornImage.alt = "No image selected";
      audio.src = "";
      break;
  }
}

function playSound() {
  if (!audio || !hornSelector || audio.src === "")
    return;

  if (hornSelector.value === "party-horn")
    jsConfetti.addConfetti();

  audio.play();
}

function volumeChange() {
  if (!volumeImage || !audio)
    return;

  audio.volume = volumeSlider.value / 100;

  if (volumeSlider.value == 0) {
    volumeImage.src = "assets/icons/volume-level-0.svg";
    volumeImage.alt = "Volume level 0";
  } else if (volumeSlider.value < 33) {
    volumeImage.src = "assets/icons/volume-level-1.svg";
    volumeImage.alt = "Volume level 1";
  } else if (volumeSlider.value < 67) {
    volumeImage.src = "assets/icons/volume-level-2.svg";
    volumeImage.alt = "Volume level 2";
  } else {
    volumeImage.src = "assets/icons/volume-level-3.svg";
    volumeImage.alt = "Volume level 3";
  }
}