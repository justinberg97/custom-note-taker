const router = require('express').Router();

router.post('/justin', (req, res) => {
    console.log(req.body)
    res.json('yes he is')
})




















module.exports = router;