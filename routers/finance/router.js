const express = require('express');
const path = require('path');
const router = express.Router()
var app = express();

router.use(express.static(__dirname+'/js'));

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
router.all('/*.js', (req, res) => {
    res.redirect('peeker');
})

module.exports = router
