const express = require('express');
const app = express();
var router = express.Router()

router.get('/', function (req, res) {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');
    res.render("landing", {
        my_title : "Inicio"
    });
    // diapositiva2(res)
});
router.get('/products', function (req, res) {
    res.render("products") 
});
router.get('/services', function (req, res) {
    res.render("services") 
});
router.get('/contact', function (req, res) {
    res.render("contact") 
});
router.get('/about', function (req, res) {
    res.render("about") 
});
module.exports = router
