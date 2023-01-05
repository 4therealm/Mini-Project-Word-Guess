

const word_box = document.querySelector('#word-box');
document.addEventListener('keydown', evaluatePressedKey)

//buttons and eventListeners
const start_button = document.querySelector('#start-button')
start_button.addEventListener('click', startGame)
//let


//array of word objects
// let word_pool = [

//    {word:'succubus', 
//           letters: [
//             {text:"s", keyCode: 3},
//             {text:"u", keyCode:85},
//             {text:"c", keyCode:67},
//             {text:"c", keyCode:67},
//             {text:"u", keyCode:85},
//             {text:"b", keyCode:66},
//             {text:"u", keyCode:85},
//             {text:"s", keyCode:83},  
//   ]
// },
// {word:'porcupine', 
//           letters: [
//             {text:"p", keyCode:80},
//             {text:"o", keyCode:79},
//             {text:"r", keyCode:82},
//             {text:"c", keyCode:67},
//             {text:"u", keyCode:85},
//             {text:"p", keyCode:80},
//             {text:"i", keyCode:73},
//             {text:"n", keyCode:78},  
//             {text:"e", keyCode:69}, 
//   ]},
// {word:'infinity',
//         letters: [
//             {text:"i", keyCode: 73},
//             {text:"n", keyCode: 78},
//             {text:"f", keyCode: 70},
//             {text:"i", keyCode: 73},
//             {text:"n", keyCode: 78},
//             {text:"i", keyCode: 73},
//             {text:"t", keyCode: 84},
//             {text:"y", keyCode: 90}
//   ]},
// {word:'zombie', 
//         letters: [
//           {text:"z", keyCode:90},
//           {text:"o", keyCode:79},
//           {text:"m", keyCode:77},
//           {text:"b", keyCode:66},
//           {text:"i", keyCode:73},
//           {text:"e", keyCode:69},
//   ]},
// {word:'hippopotamus', 
//         letters: [
//           {text:"h", keyCode:72},
//           {text:"i", keyCode:73},
//           {text:"p", keyCode:80},
//           {text:"p", keyCode:80},
//           {text:"o", keyCode:79},
//           {text:"p", keyCode:80},
//           {text:"o", keyCode:79},
//           {text:"t", keyCode:84},  
//           {text:"a", keyCode:65}, 
//           {text:"m", keyCode:77},  
//           {text:"u", keyCode:85},  
//           {text:"s", keyCode:83},  
//   ]},
// {word: 'fibonacci', 
//         letters: [
//           {text:"f", keyCode:70},
//           {text:"i", keyCode:73},
//           {text:"b", keyCode:68},
//           {text:"o", keyCode:79},
//           {text:"n", keyCode:78},
//           {text:"c", keyCode:67},
//           {text:"c", keyCode:67},
//           {text:"i", keyCode:73},  
//   ]},
// {word: 'daffodil', 
//         letters: [
//           {text:"d", keyCode:68},
//           {text:"a", keyCode:65},
//           {text:"f", keyCode:70},
//           {text:"f", keyCode:70},
//           {text:"o", keyCode:79},
//           {text:"d", keyCode:68},
//           {text:"i", keyCode:73},
//           {text:"l", keyCode:76},  
//   ]},
// ];

//array dot notation = word, word.letters, word.letters.text, word.letters.keycode

let shuffled_word_pool, current_word_index;
let accepting_key_codes = [];
let matches = [];  
let pressedKey
let match = accepting_key_codes.includes(pressedKeyCode); //true or false

function startGame() {
  console.log('startgame fired')
  shuffled_word_pool = word_pool.sort(() => Math.random() - .5);
  current_word_index = 0
  loadWord()
}
function loadWord() {
  console.log('loadWord has fired')
  //clearBoard()
  fireWord(shuffled_word_pool[current_word_index]);  
}
function fireWord(word) {
  console.log('fire word fired, your word is ' + word.word)
  word.letters.forEach(letters =>{
    const block = document.createElement('div')
    const blockKey = letters
    // accepting_key_codes.push(blockKey)
    block.classList.add('letter-block')
    word_box.appendChild(block)
  })
  // console.log ("the accepting keyCodes are: " + accepting_key_codes)
  }

function compare(pressedKey, blockKeys) {
  let anyMatches =  blockKeys.includes(pressedKey)
console.log("are there any matches? " + anyMatches)
if (anyMatches) { console.log('boom')
    for ( var i = 0; i < blockKeys.length; i++ )
     { if ( blockKeys[i] === pressedKey ) matches.push( blockKeys[i] ); blockKeys.splice(blockKeys[i], 1); }}
     console.log(`the matches array length is, ${matches.length}`)  
     console.log(`there are ${blockKeys.length - matches.length} more blocks to fill!`)  
    }
 
  
  
 

    

function evaluatePressedKey(e){
  pressedKeyCode = e.keyCode
  const pressedKeyLetter = e.key
  
  console.log("key pressed is " +  pressedKeyLetter  + " with a keyCode of " + pressedKeyCode)
compare(pressedKeyCode, accepting_key_codes)
}




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






//   function compareKeyPressed(e){
//     const pressedKeyCode = e.keyCode
//     const pressedKeyLetter = e.key
//     console.log("key pressed is " +  pressedKeyLetter  + " with a keyCode of " + pressedKeyCode)
//     if(pressedKeyCode == hidden_Letter[1].keyCode){
      
//       console.log("boom")
//     } else {
//       console.log("sucka")
//     }
//   }



//   let hidden_Letter = [
//     {letter: "s", keyCode:83},
//     {letter: "p", keyCode:80},
//     {letter: "i", keyCode:73},
//   