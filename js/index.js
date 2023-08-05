function counter(){
	var count = setInterval(function(){
	    var c =  parseInt($('.counter').text());
	    $('.counter').text((++c).toString());
	    if (c == 100){
	    clearInterval(count)
	    $('.counter').addClass('hide')
	    $('.preloader').addClass('active')
	    }
	},18)
}
counter()

//nav bar--v\\

const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 100)
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
}

window.onscroll = () =>{
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
}

//theme

var themeIcon = document.getElementById("theme-icon");

themeIcon.onclick = function(){
	document.body.classList.toggle("light-theme");

	if(document.body.classList.contains("light-theme")){
		themeIcon.src = "img/moon.png";
	}else{
		themeIcon.src = "img/sun.png";
	}
}

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
