//play button to initiate game

//empty blocks appear. number of blocks dependent on the length of the generated word. letters will either need to be hidden in blocks or generated with the blocks when the the blocks are appended. either way they need to be hidden until the player guesses that letter. then they will become visible.
//blocks should be in grid i think, or maybe display hidden so the space is static and doesn't adjust with flex

//timer interval set

//to win game player must guess all the letters before timer runs out(or until choice count is exceeded?)
//to win all letters must be guessed before timer runs out

//idea: timer is visual. a llama approaching or something like that.

//wins and losses displayed on screen( permanently i think, instead of at the end) 

//for mobile have player select box and then type the letter


//key event when player presses the letter key.
//once the key value is determined, it should be compared to the letters in the array of the generated word, for each letter does the choice === true.

//when win/lose a message should be displayed abd the timer stopped.

//timer should reset on startbuttopn click

//wins and losses saved in local storage i think


//element constants
const hud_box = document.querySelector('.hud-box');
  const _time = document.querySelector('#timer');
  const _wins = document.querySelector('#wins');
  const _losses = document.querySelector('#losses');
const game_box = document.querySelector('.game-box');
  const letter_blocks = document.querySelector('#letter-blocks');
  const letter_used = document.querySelector('#letter-used');
const animation_box = document.querySelector('.animation-selector');
  
//buttons and eventListeners
const start_button = document.querySelector('#start-button')
  start_button.addEventListener('click', startGame)
//let
let timeLeft = 60;
let wins = 0;
let losses = 0;

//array of word objects
let word_pool = [
   {word: 'succubus', letters: ["s", "u", "c", "c", "u", "b", "u", "s",]},
   {word: 'infinity', letters: ["i", "n", "f", "i", "n", "i", "t", "y",]},
   {word: 'porcupine', letters: ["p", "o", "r", "c", "u", "p", "i", "n", "e",]},
   {word: 'zombie', letters: ["z", "o", "m", "b", "i", "e",]},
   {word: 'hippopotamus', letters: ["h", "i", "p", "p", "o", "p", "o", "t", "a", "m", "u", "s",]},
   {word: 'fibonacci', letters: ["f", "i", "b", "o", "n", "a", "c", "c", "i",]},
   {word: 'daffodil', letters: ["d", "a", "f", "f", "o", "d", "i", "l",]},
];


let shuffled_word_pool, current_word_index


function startGame() {
console.log("startGame fired")
console.log("Wins = " + wins + " losses = " + losses + " and, your available time = " + timeLeft)
  // countdown();
shuffled_word_pool =  word_pool.sort(() => Math.random() - .5);
current_word_index = 0;
loadWord()//grabs a word object from the shuffled array 
}

function loadWord() {
console.log("loadWord fired")
  //blankSlate() clears out previous word data
  console.log("The current word index is " + current_word_index)
  fireWord(shuffled_word_pool[current_word_index]);
}

function fireWord(word) {
  console.log("fireWord fired")
  console.log(word)
  console.log(word.letters)
  console.log(word.letters.length)
}

