var express = require('express');
const electronics_controlers= require('../controllers/electronics');
var router = express.Router();
/* GET electronicss */
router.get('/', electronics_controlers.electronics_view_all_Page );
module.exports = router;
