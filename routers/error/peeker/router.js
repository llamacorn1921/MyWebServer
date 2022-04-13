const express = require('express');
const path = require('path');
const router = express.Router();
var app = express();

router.use(express.static(__dirname+'/js'));

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

module.exports = router
