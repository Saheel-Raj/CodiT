// hello i am saheel raj prasad of class 8 this is my website that uploaded on github with lisence no one has right to copy my content

//nav bar--v\\

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100)
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
}
// text

(function () {
  var words = [
    "Saheel",
    "Raj",
    "Prasad",
    "..."
  ],
    i = 0;
  setInterval(function () {
    $('#words').fadeOut(function () {
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    });
  }, 1500)
})();

// tos

const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;

  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }

  if (text.length > 50) {
    if (synth.speaking && isSpeaking) {
      button.innerText = "Pause";
      synth.resume();
      isSpeaking = false;
    } else {
      button.innerText = "Resume";
      synth.pause();
      isSpeaking = true;
    }
  } else {
    isSpeaking = false;
    window.speechSynthesis.getVoices()[1];
    button.innerText = "Speaking";
  }

  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      button.innerText = "Convert to Speech";
    }
  });
};

button.addEventListener("click", textToSpeech);