// Set variables for the html elements on index.html - the two input fields and the button
const inputElTitle = document.querySelector('#user_input_note_title');
const inputElContent = document.querySelector('#user_input_note_content');
const buttonEl = document.querySelector('#add-note-button');

// When the button is clicked, do this...
buttonEl.addEventListener('click', () => {
  let userTitle = inputElTitle.value;
  let userContent = inputElContent.value;

  // Create a data object containing the title and content
  // const data = {
  // title: userTitle,
  // content: userContent
  // };
});


