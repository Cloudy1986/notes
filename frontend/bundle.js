(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // updateHtml.js
  var require_updateHtml = __commonJS({
    "updateHtml.js"(exports, module) {
      var updateHtml2 = () => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
          data.forEach((item) => {
            const note = document.createElement("p");
            note.innerText = `${item.title}: ${item.content}`;
            document.body.append(note);
          });
        });
      };
      module.exports = updateHtml2;
    }
  });

  // index.js
  var updateHtml = require_updateHtml();
  updateHtml();
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
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json());
  });
})();
