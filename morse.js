const express = require("express");
const readline = require('readline');

const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--.',
  8: '---.',
  9: '----.',
  period: '.-.-.-',
  comma: '--..--',
  question_mark: '..--..',
  apostrophe: '.---.',
  hyphen: '-....-',
  slash: '-..-.',
  parentheses: '-.-.-.',
  and: '.-...',
  colon: '---...',
  semicolon: '-.-.--',
  equal: '-...-',
  plus: '.-.-.',
  minus: '-....-',
  quotation: '.-..-.',
  atTheRate: '.--.-',
  endofWork: '.-.-',
  attention: '...---...'
};

const reverseMorseCode = Object.fromEntries(
  Object.entries(morseCode).map(([k, v]) => [v, k])
);

function encodeToMorse(text) {
  return text.toUpperCase().split('').map(char => morseCode[char] || ' ').join(' ');
}

function decodeFromMorse(morse) {
  return morse.split(' ').map(code => reverseMorseCode[code] || ' ').join('');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('Enter text to encode or Morse code to decode: ', (input) => {
    if (/^[.-\s]+$/.test(input)) {
      // Input is Morse code
      console.log('Decoded Text:\n', decodeFromMorse(input));
    } else {
      // Input is plain text
      console.log('Encoded Morse Code:\n', encodeToMorse(input));
    }
    rl.close();
  });
}

promptUser();
