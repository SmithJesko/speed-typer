window.addEventListener('load', init);

// Global variables
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const level = document.querySelector('#level')

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize game
function init() {
    seconds.innerHTML = currentLevel;
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1) {
        scoreDisplay.innerHTML = '0';
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game over!';
        score = -1;
    }
}