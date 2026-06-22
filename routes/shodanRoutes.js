const express = require('express');
const router = express.Router();

const {searchHost} = require('../controllers/shodanController');

router.get('/host', searchHost);

module.exports = router;