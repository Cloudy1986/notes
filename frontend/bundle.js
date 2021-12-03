(() => {
  // index.js
  var inputElTitle = document.querySelector("#user_input_note_title");
  var inputElContent = document.querySelector("#user_input_note_content");
  var buttonEl = document.querySelector("#add-note-button");
  buttonEl.addEventListener("click", () => {
    let userTitle = inputElTitle.value;
    let userContent = inputElContent.value;
    const data = {
      title: userTitle,
      content: userContent
    };
  });
})();
