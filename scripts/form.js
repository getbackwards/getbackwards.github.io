'use strict';

let whatInput = require('what-input');

function handleFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries()); // for multi-selects, we need special handling

  formJSON.snacks = data.getAll('snacks');
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);

console.log('Is this working?');

// Write json object to .json file in JavaScript
// https://stackoverflow.com/questions/45148833/write-json-object-to-json-file-in-javascript
// const FileSystem = require('fs');
// FileSystem.writeFile('file.json', JSON.stringify(formJSON), (error) => {
//   if (error) throw error;
// });

const myButton = document.querySelector('button');

whatInput.ask(); // returns `mouse`, `keyboard` or `touch`

myButton.addEventListener('click', () => {
  if (whatInput.ask() === 'mouse') {
    // do mousy things
  } else if (whatInput.ask() === 'keyboard') {
    // do keyboard things
  }
});
