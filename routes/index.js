const express = require('express');
const app = express();
var router = express.Router()


router.get('/', function (req, res) {
    res.render("site",{
        header:"./partials/header",
        cssFile:"",
        navbar:'./partials/navbar.ejs',
        content:'./partials/landing.ejs',
        footer:'./partials/footer.ejs',
        scriptFile:'./scriptPartials/landing.ejs',
        my_title: "Inicio"
    })
});

router.get('/products', function (req, res) {
    // res.render("products") 
    res.render("site",{
        header:"./partials/header",
        cssFile:"./partialStylesheets/products",
        navbar:'./partials/navbar.ejs',
        content:'./partials/products.ejs',
        footer:'./partials/footer.ejs',
        scriptFile:'./scriptPartials/products.ejs',
        my_title: "Productos"
    })
});

router.get('/services', function (req, res) {
    res.render("site",{
        header:"./partials/header",
        cssFile:"./partialStylesheets/services.ejs",
        navbar:'./partials/navbar.ejs',
        content:'./partials/services.ejs',
        footer:'./partials/footer.ejs',
        scriptFile:'',
        my_title: "Servicios"
    })
});

router.get('/contact', function (req, res) {
    res.render("site",{
        header:"./partials/header",
        cssFile:"",
        navbar:'./partials/navbar.ejs',
        content:'./partials/contact.ejs',
        footer:'./partials/footer.ejs',
        scriptFile:'./scriptPartials/contact.ejs',
        my_title: "Contacto"
    })
});

router.get('/about', function (req, res) {
    res.render("site",{
        header:"./partials/header",
        cssFile:"./partialStylesheets/about",
        navbar:'./partials/navbar.ejs',
        content:'./partials/about.ejs',
        footer:'./partials/footer.ejs',
        scriptFile:'./scriptPartials/about.ejs',
        my_title: "¿Quienes somos?"
    })
});

module.exports = router
