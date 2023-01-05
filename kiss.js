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

const word_box = document.querySelector('#word-box');
document.addEventListener('keydown', evaluatePressedKey)

//buttons and eventListeners
const start_button = document.querySelector('#start-button')
start_button.addEventListener('click', startGame)

let shuffled_word_pool, current_word_index;
let accepting_key_codes = [];
let matches = [];  
let pressedKey;
let word_pool = [

  {word:'succubus', 
         letters: [
           {text:"s", keyCode:83},
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

function startGame() {
  console.log('startgame fired')
  shuffled_word_pool = word_pool.sort(() => Math.random() - .5);
  current_word_index = 0
  loadWord()}
  function loadWord() {
    console.log('loadWord has fired')
    fireWord(word_pool[1]);}

    function fireWord(word) {
      console.log('fire word fired, your word is ' + word.word)
      word.letters.forEach(letters =>{
        const block = document.createElement('div')
       const blockText = letters.text
       block.dataset.key = letters.text
       console(block.dataset.key)
        
        // if (pressedKey == blockText){
        //   console.log('boom')
        // }



        block.classList.add('letter-block')
        word_box.appendChild(block)
        console.log(blockText + word_box.childElementCount)
        console.log(`the letter is: ${blockText} `)
      })
      // console.log ("the accepting keyCodes are: " + accepting_key_codes)
      }
      function evaluatePressedKey(e){
       let pressedKeyLetter = e
        
        console.log(pressedKeyLetter.keyCode)

      }