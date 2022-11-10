const router = require('express').Router();

const db = require('../utils/db');

router.post('/notes', (req, res) => {
  db.addNotes(req.body).then(notes => res.json(notes)).catch(error => console.log(error));
})

router.get('/notes', (req, res) => {
console.log(db);
    db.getNotes().then(data => {
        res.json(JSON.parse(data))
    })
})











module.exports = router;