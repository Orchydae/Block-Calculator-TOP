const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Addition');
});

module.exports = router;