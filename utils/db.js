const fs = require("fs");

const path = require("path");

const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);

function getNotes() {
  return readFileAsync(path.join(__dirname, "../db/db.json"), "utf8");
}

function addNotes(note) {

  return getNotes().then(notes => {
    const currentNotes = JSON.parse(notes)
    return [...currentNotes, note]
  }).then(updatedNotes => {
    return writeFileAsync(path.join(__dirname, "../db/db.json"), JSON.stringify(updatedNotes));
  })
  
}


module.exports = { getNotes, addNotes };
