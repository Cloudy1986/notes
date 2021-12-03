const updateHtml = () => {
  fetch("http://localhost:3000/notes")
  .then(response => response.json())
  .then(data => {
    data.forEach((item) => {
      const note = document.createElement("p");
      note.innerText = `${item.title}: ${item.content}`;
      document.body.append(note);
    });
  });
};

module.exports = updateHtml;