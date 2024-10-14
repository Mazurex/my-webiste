const words = ["YouTuber", "Developer", "Gamer"];

let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 200;
const erasingSpeed = 110;
const newWordDelay = 2000;
const typedTextSpan = document.getElementById("dynamic-text");

function typeWords() {
  const currentWord = words[currentWordIndex];

  typedTextSpan.textContent = currentWord.substring(0, currentCharIndex);

  if (!isDeleting && currentCharIndex < currentWord.length) {
    currentCharIndex++;
    setTimeout(typeWords, typingSpeed);
  } else if (isDeleting && currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(typeWords, erasingSpeed);
  } else if (!isDeleting && currentCharIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeWords, newWordDelay);
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeWords, typingSpeed);
  }
}

window.onload = () => {
  setTimeout(typeWords, newWordDelay + 250);
};
