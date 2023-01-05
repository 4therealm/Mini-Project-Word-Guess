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


//dynamic element constants

// const word_box = document.querySelector('#word-box');
document.addEventListener('keydown', evaluatePressedKey)

//buttons and eventListeners
const start_button = document.querySelector('#start-button')
start_button.addEventListener('click', startGame)
const inputs = document.querySelector(".inputs");
const typingInput = document.querySelector(".typing-input");
const incorrect_display = document.querySelector(".incorrect")
// managing state
let currentWord;
let wrongGuesses = 0;
let incorrectLetters = [];
let correctLetters = [];
let pressedKey;
let wins = 0;
let losses = 0;
let shuffled_word_pool, current_word_index;


//array of words
let word_pool = [
  {word:'succubus'},
  {word:'porcupine'},
  {word:'infinity'},
  {word:'zombie'},
  {word:'hippopotamus'},
  {word:'fibonacci'},
  {word:'daffodil'}
];


function startGame() {
//  restart()
console.log("startgame fired")
  shuffled_word_pool = word_pool.sort(() => Math.random() - .5)
  current_word_index = 0;
  //timerstart
  loadWord()
}

function loadWord(){
  console.log('loadword fired')
  correctLetters = [];
  incorrectLetters = [];
  currentWord = shuffled_word_pool[current_word_index].word
fireWord(currentWord)  
}

function fireWord(word){
  console.log(`the current word is: ${word}`)
  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`
    inputs.innerHTML = html;
  }
}
  



function evaluatePressedKey(e){
  pressedKey =  e.key
  console.log(`${pressedKey} has been pressed`)
if (pressedKey.match(/^[A-Za-z]+$/) &&
  !incorrectLetters.includes(pressedKey) && 
  !correctLetters.includes(pressedKey)){
    compare(pressedKey, currentWord)}

if (correctLetters.length === currentWord.length){
  console.log("you win")
  wins++
  current_word_index++
  console.log(`${current_word_index}`)
  loadWord()
}
}


function compare(key, word) 
{
  if (word.includes(key)){
    for (let i = 0; i < word.length; i++){
      if (word[i] == key) {
        correctLetters += pressedKey;
        inputs.querySelectorAll("input")[i].value = pressedKey;
        console.log("its a match")
          }}
  }else{
          incorrectLetters.push(pressedKey);
          console.log("Wrong letter, loser")
        }
        incorrect_display.innerText = `Incorrect Letters: ${incorrectLetters}`
        if(correctLetters.length === currentWord.length) {
          console.log("")
          wins++
        }
}