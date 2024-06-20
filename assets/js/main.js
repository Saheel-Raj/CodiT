// main--

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_pkdtlsb', 'template_ujjnnvg', '#contact-form', 'HvoUcQ8Jg5dGOM9ej')
        .then(() => {
            contactMessage.textContent = 'Message sent Successfully ✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selecredTheme = localStorage.getItem('selected-theme')
const selecredIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selecredTheme) {
    document.body.classList[selecredTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selecredIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.home__perfil, .about__image, .contact__mail, .gall-card', { origin: 'bottom' })
sr.reveal('.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data', { origin: 'right' })
sr.reveal('.services__card, .projects__card, .faq_sum', { interval: 100 })

// magnet effect

let box = document.querySelector('.box-mag');
box.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let BoxWidth = box.clientWidth
    let BoxHeight = box.clientHeight
    let moveX = (x - BoxWidth / 2)
    let moveY = (y - BoxHeight / 2)
    box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;

    box.addEventListener('mouseout', (e) => {
        box.style.transform = '';
    })
})



const textarea = document.querySelector("textarea"),
    voiceList = document.querySelector("select"),
    speechBtn = document.querySelector("button");

let synth = speechSynthesis,
    isSpeaking = true;

voices();

function voices() {
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        if (voice.name === voiceList.value) {
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

speechBtn.addEventListener("click", e => {
    e.preventDefault();
    if (textarea.value !== "") {
        if (!synth.speaking) {
            textToSpeech(textarea.value);
        }
        if (textarea.value.length > 80) {
            setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true;
                    speechBtn.innerText = "Convert To Speech";
                } else {
                }
            }, 500);
            if (isSpeaking) {
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            } else {
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
        } else {
            speechBtn.innerText = "Convert To Speech";
        }
    }
});

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

let swiperCards = new Swiper(".gallery-cards", {
    loop: true,
    loopedSlides: 5,
    cssMode: true,
    effect: 'fade',
});

let swiperThumbs = new Swiper(".gallery-thumbs", {
    loop: true,
    loopedSlides: 5,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

swiperThumbs.controller.control = swiperCards;

// magicc

let inputBox = document.getElementById("input-box");
let resultBox = document.getElementById("result-box");
let changeColor = () => {
  let input = inputBox.value;
  resultBox.style.backgroundColor = input;
};
inputBox.addEventListener("input", changeColor);
window.addEventListener("load", changeColor);
