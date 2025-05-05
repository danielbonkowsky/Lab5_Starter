// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  faceImage = document.querySelector("img");

  voiceSelector = document.getElementById("voice-select");
  loadVoices();
  
  window.speechSynthesis.onvoiceschanged = loadVoices;

  talkButton = document.querySelector("button");
  talkButton.addEventListener('click', talk);

  text = document.getElementById("text-to-speak");

  synth = window.speechSynthesis;
}

let faceImage = null;
let talkButton = null;
let voiceSelector = null;
let text = null;
let synth = null;

function talk() {
  if (!text || !faceImage || !synth || !voiceSelector)
    return;

  const utterance = new SpeechSynthesisUtterance(text.value);
  utterance.addEventListener('start', utterStart);
  utterance.addEventListener('end', utterEnd);

  const selected = voiceSelector.selectedOptions[0].getAttribute("data-name");
  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selected) {
      utterance.voice = voices[i];
      break;
    }
  }

  synth.speak(utterance);
}

function utterStart() {
  if (!faceImage) 
    return;

  faceImage.src = "assets/images/smiling-open.png";
  faceImage.alt = "Talking smiley face";
}

function utterEnd() {
  if (!faceImage)
    return;

  faceImage.src = "assets/images/smiling.png";
  faceImage.alt = "Smiling face";
}

function loadVoices() {
  if (!voiceSelector)
    return;

  const voices = speechSynthesis.getVoices();
  
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }
  
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelector.appendChild(option);
  }
}