

//timer interval set

//to win game player must guess all the letters before timer runs out(or until choice count is exceeded?)
//to win all letters must be guessed before timer runs out

//wins and losses displayed on screen( permanently i think, instead of at the end) 

//for mobile have player select box and then type the letter







// const word_box = document.querySelector('#word-box');
document.addEventListener('keydown', evaluatePressedKey)

//buttons and eventListeners
const start_button = document.querySelector('#start-button')
start_button.addEventListener('click', startGame)
const inputs = document.querySelector(".inputs");
const guessCount = document.querySelector('#guess-count')
const incorrect_display = document.querySelector(".incorrect")
const ratio = document.querySelector('#w-l')
const button_list = document.querySelector('.button-list')
// managing state
let timeLeft = 120;
let currentWord;
let wrongGuesses = 0;
let incorrectLetters = [];
let correctLetters = [];
let pressedKey;
let wins;
let losses;
let shuffled_word_pool, current_word_index;
const maxGuesses = 8;


guessCount.innerText = `${wrongGuesses} / ${maxGuesses}`


//array of words
let word_pool = [
  {word:'succubus'},
  {word:'porcupine'},
  {word:'infinity'},
  {word:'zombie'},
  {word:'hippopotamus'},
  {word:'fibonacci'},
  {word:'daffodil'},
  {word:'penguin'},
  {word:'transform'},
  {word:'vagabond'},
  {word:"rodeo"},
  {word:"brewer"},
  {word:'extrapolate'},
  {word:'tenacious'},
  {word:'funk'},
  {word:'aluminum'},
  {word:'confused'},
  {word:'collapse'},
  {word:'salute'}
];


// function renderLetters() {
//   var letters = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//     '_',
//   ];

//   // Dynamically create buttons
//   // Create a for-loop to iterate through the letters array.
//   for (var i = 0; i < letters.length; i++) {
//     // Create button
//     var letterBtn = $('<button>');
//     // Assign style to the button
//     letterBtn.addClass('btn');
//     // Assign the letter to the data-letter attribute
//     letterBtn.attr('data-letter', letters[i]);
//     // Display the letter
//     letterBtn.text(letters[i]);
//     // Attach the letter element
//     button_list.append(letterBtn);
//   }
// }


function startGame() {
  start_button.classList.add('hide')
  losses = 0;
  wins = 0;
console.log("startgame fired")
  shuffled_word_pool = word_pool.sort(() => Math.random() - .5)
  current_word_index = 0;
  //timerstart
  loadWord()
}

function loadWord(){
  wrongGuesses = 0
  guessCount.innerText = `${wrongGuesses} / ${maxGuesses}`
  ratio.innerText = `Solved: ${wins}  
Failed: ${losses}`
  console.log('loadword fired')
  correctLetters = [];
  incorrectLetters = [];
  clearBlocks()
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
      compare(pressedKey, currentWord)
  }else{ console.log('you cant press that key')
    //buzzer noise or screen shake
  }
      
  if (wrongGuesses == maxGuesses) {
    //show word
    console.log('you ran out of guesses')
    setTimeout(loadWord,1000)
    
  }
  if (correctLetters.length === currentWord.length){
    console.log("you win")
    wins++
    current_word_index++
    console.log(`${current_word_index}`)
    setTimeout(loadWord,1000)
  }
  guessCount.innerText = `${wrongGuesses} / ${maxGuesses}`
}


function compare(key, word) {
  if (word.includes(key)){//if the word has the pressed key in itq
    for (let i = 0; i < word.length; i++){//a loop through each letter of the word
      if (word[i] == key) {//if that current letter in the loop matches the key
        correctLetters += pressedKey;//key is added to the correct letters array
        inputs.querySelectorAll("input")[i].value = pressedKey;//the text value of the matching inputs will be changed to the matching key
        console.log("its a match")
      }
    }
  }else{
    incorrectLetters.push(pressedKey);
    makeRedBlock(pressedKey)
    console.log("Wrong letter, loser"); 
    wrongGuesses++  
   }
}

function makeRedBlock(key){

    const redBlock=document.createElement('div')
    redBlock.innerHTML=key
    redBlock.classList.add('red-block')
    incorrect_display.appendChild(redBlock)
    console.log("redblock made")
  
}

function clearBlocks() {
  while (incorrect_display.firstChild) {
    incorrect_display.removeChild(incorrect_display.firstChild)  
  }
}

  function quizTimer () {
    timer = setInterval ( () => {
      timeLeft = timeLeft - 1;
      clock.innerText = timeLeft;
      below_10 ();
      
      if ( ( timeLeft <= -1 ) ) 
        {clearInterval ( timer );
        }}, 1000 );}


function showWord(params) {
  
}