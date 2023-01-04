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
  const word_box = document.querySelector('#word-box');
  const key_pad = document.querySelector('#key-pad');
const animation_box = document.querySelector('.animation-selector');
const keyBoard = document.querySelector('.keyboard')
  
//buttons and eventListeners
const start_button = document.querySelector('#start-button')
  start_button.addEventListener('click', startGame)
  keyBoard.addEventListener('keydown', letterSelect)
//let
let timeLeft = 60;
let wins = 0;
let losses = 0;
let hiddenLetters = [];
let pressedKey = letterSelect(e, )


//array of word objects
let word_pool = [

   {word:'succubus', 
          letters: [
            {text:"s", keyCode: 3},
            {text:"u", keyCode:85},
            {text:"c", keyCode:67},
            {text:"c", keyCode:67},
            {text:"u", keyCode:85},
            {text:"b", keyCode:66},
            {text:"u", keyCode:85},
            {text:"s", keyCode:83},  
  ]
},
{word:'porcupine', 
          letters: [
            {text:"p", keyCode:80},
            {text:"o", keyCode:79},
            {text:"r", keyCode:82},
            {text:"c", keyCode:67},
            {text:"u", keyCode:85},
            {text:"p", keyCode:80},
            {text:"i", keyCode:73},
            {text:"n", keyCode:78},  
            {text:"e", keyCode:69}, 
  ]},
{word:'infinity',
        letters: [
            {text:"i", keyCode: 73},
            {text:"n", keyCode: 78},
            {text:"f", keyCode: 70},
            {text:"i", keyCode: 73},
            {text:"n", keyCode: 78},
            {text:"i", keyCode: 73},
            {text:"t", keyCode: 84},
            {text:"y", keyCode: 90}
  ]},
{word:'zombie', 
        letters: [
          {text:"z", keyCode:90},
          {text:"o", keyCode:79},
          {text:"m", keyCode:77},
          {text:"b", keyCode:66},
          {text:"i", keyCode:73},
          {text:"e", keyCode:69},
  ]},
{word:'hippopotamus', 
        letters: [
          {text:"h", keyCode:72},
          {text:"i", keyCode:73},
          {text:"p", keyCode:80},
          {text:"p", keyCode:80},
          {text:"o", keyCode:79},
          {text:"p", keyCode:80},
          {text:"o", keyCode:79},
          {text:"t", keyCode:84},  
          {text:"a", keyCode:65}, 
          {text:"m", keyCode:77},  
          {text:"u", keyCode:85},  
          {text:"s", keyCode:83},  
  ]},
{word: 'fibonacci', 
        letters: [
          {text:"f", keyCode:70},
          {text:"i", keyCode:73},
          {text:"b", keyCode:68},
          {text:"o", keyCode:79},
          {text:"n", keyCode:78},
          {text:"c", keyCode:67},
          {text:"c", keyCode:67},
          {text:"i", keyCode:73},  
  ]},
{word: 'daffodil', 
        letters: [
          {text:"d", keyCode:68},
          {text:"a", keyCode:65},
          {text:"f", keyCode:70},
          {text:"f", keyCode:70},
          {text:"o", keyCode:79},
          {text:"d", keyCode:68},
          {text:"i", keyCode:73},
          {text:"l", keyCode:76},  
  ]},
];
let hidden_Letter = [
  {letter: "s", keyCode:83}
]

let shuffled_word_pool, current_word_index


function startGame() {
console.log("startGame fired")
// console.log("Wins = " + wins + " losses = " + losses + " and, your available time = " + timeLeft)
//   // countdown();
// shuffled_word_pool = word_pool.sort(() => Math.random() - .5);
// console.log(shuffled_word_pool)
// current_word_index = 0;
loadWord()//grabs a word object from the shuffled array 
}

function loadWord() {
console.log("word is fired")
  //blankSlate() clears out previous word data
  console.log("The current word index: " + current_word_index + " The  current word: " + shuffled_word_pool[current_word_index].word)
  fireWord(hidden_Letter[0]);
}

function fireWord(word) {
  console.log("fireWord fired")
  hiddenLetters = word.letters
  word.letters.forEach(letters => {
    const block = document.createElement('div')
    const blockText = letters.text
    block.dataset.keyCode = letters.keyCode
    addEventListener("keydown", letterSelect)
    const blockKeyCode = letters.keyCode
    block.classList.add('letter-block')
    word_box.appendChild(block)
    console.log("this is each blocks text: " + blockText + " and its dataset keyCode: " + blockKeyCode)
        //does the inner text key code need to be used?
  });

}

function letterSelect(e,hiddenLetters) {
  pressedKey = e;
  const pressedKeyCode = pressedKey.keyCode
  Array.from(word_box.children).forEach(hiddenLetters => {

    

  console.log("here is your keyCode: " + pressedKeyCode)
  console.log("letter select fired")
  }

function evalKey(hiddenLetters, pressedKeyCode){
if (hiddenLetters ===  pressedKey) {
  console.log("boom")
  
}
}

let 