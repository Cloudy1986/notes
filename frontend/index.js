const updateHtml = require('./updateHtml');

// Get notes from the server and display them in the browser
updateHtml();

// Set variables for the html elements on index.html - the two input fields and the button
const inputElTitle = document.querySelector('#user_input_note_title');
const inputElContent = document.querySelector('#user_input_note_content');
const buttonEl = document.querySelector('#add-note-button');

// When the button is clicked, do this...
buttonEl.addEventListener('click', () => {
  let userTitle = inputElTitle.value;
  let userContent = inputElContent.value;

  // Create a data object containing the title and content
  const data = {
  title: userTitle,
  content: userContent
  };

  // Add the data object to the array in the server
  fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
});
