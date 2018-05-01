var express = require('express');
var router = express.Router();
var cntrlmain=require('../controllers/main')

/* GET home page. */
router.get('/', cntrlmain.index);

module.exports = router;
