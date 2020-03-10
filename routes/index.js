const express = require('express');
const app = express(), bodyParser = require('body-parser');
var router = express.Router()
router.use(bodyParser.json());

const {htmlContent} =require("../helpers/Email/template")
const {resetHtmlContent} =require("../helpers/Email/resetTemplate")
const {redspiraHtml} =require("../helpers/widget/redspiraTemplate")
const {finalHtml} =require("../helpers/widget/redspiraWidget")
const {htmlContent2} =require("../helpers/Email/clienteRedspira")
const {sendEmail} =require("../helpers/Email/sendEmail")



router.get('/', function (req, res) {
    res.render("site",{
        header:"./partials/header",
        cssFile:"./partialStylesheets/landing.ejs",
        navbar:'./partials/navbar.ejs',
        content:'./partials/landing.ejs',
        footer:'./partials/footer.ejs',
        scriptFile:'./scriptPartials/landing.ejs',
        my_title: "Inicio"
    })
});

router.get('/products', function (req, res) {
    // res.render("site",{
    //     header:"./partials/header",
    //     cssFile:"./partialStylesheets/products.ejs",
    //     navbar:'./partials/navbar.ejs',
    //     content:'./partials/products.ejs',
    //     footer:'./partials/footer.ejs',
    //     scriptFile:'./scriptPartials/products.ejs',
    //     my_title: "Productos"
    // })
    res.render("site",{
        header:"./partials/header",
        cssFile:"./partialStylesheets/products.ejs",
        navbar:'./partials/navbar.ejs',
        content:'./partials/product2.ejs',
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
        scriptFile:'./scriptPartials/services.ejs',
        my_title: "Servicios"
    })
});

router.get('/contact', function (req, res) {
    res.render("site",{
        header:"./partials/header",
        cssFile:"./partialStylesheets/contact.ejs",
        navbar:'./partials/navbar.ejs',
        content:'./partials/contact.ejs',
        footer:'./partials/footer.ejs',
        scriptFile:'./scriptPartials/contact.ejs',
        my_title: "Contacto"
    })
});

sendMail=(newUser,req,res,created)=>{
    console.log("sendEmail")
    // const vendedorEmail="oscaralonso11@hotmail.com"
    const vendedorEmail="atlas_leatherdist@hotmail.com"
    
    let base_url=newUser.webpage;
    // const confirmUrL="http://localhost:8080/confirm"
    const confirmUrL=base_url+"/confirm"
    // https://redspira-widget.herokuapp.com/

    // const clienteEmail="oscaralonso11@hotmail.com"//TODO: CAMBIAR A req.body.email cuando este validado el formulario
    console.log("====enviado a ")
    console.log(newUser.email)
    const clienteEmail=newUser.email

    // logo y correo png
    //=====smtp client personal que funciona
    const smtpClient={   
        host: "smtp.zoho.com",
        port: 465,
        auth: {
            // user:"admin@oscarrosete.com",
            user:"oscar.rosete@oscarrosete.com",
            pass:"LiaAshanti1!"
        }
    }
    
    //=====smtp client redspira
    // const smtpClient={   
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     auth: {
    //         user:"pruebacorreo@certuit.com ",
    //         pass:"4UJ8rNgC"
    //     }
    // }


    //=============correo al vendedor
    console.log(req.body)
    const emailContent={
        name:newUser.name,
        email:newUser.email,
        topic:"Contacto Usuario",
        phone:newUser.phone,
        body:newUser.message,
        // query:confirmUrL+"?id="+newUser.id
    }

    console.log(emailContent)
    const content=htmlContent(emailContent)

    let emailInfo={
        to:vendedorEmail,
        subject:"Seguimiento Contacto Peleteria",
        htmlContent:content,
        smtpClient
    }
    const isSend = sendEmail(emailInfo);


    //======correo al cliente
    const content2=htmlContent2(emailContent)
    let emailInfo2={
        to:clienteEmail,
        // subject:"Redspira Registration",
        subject:"Registro Redspira",
        htmlContent:content2,
         // attaching http://localhost:5000/images/LogoColor.png
         attachments: [{
            filename: 'fondo2.png',
            path:"./public/images/fondo2.png",
            cid: 'logo', //same cid value as in the html img src
        // },{
        //     filename: 'correo.png',
        //     path:"./public/images/correo.png",
        //     cid: 'correo', //same cid value as in the html img src
        // }
         }],   
        smtpClient
    }
    const isSend2 = sendEmail(emailInfo2);


    if(!isSend || !isSend2){
        res.status(400).send({ error: "server error" });
    }else{
        // res.status(200).json(req.body) 
        let json;
        if(created)
            json={created:true,status:"success",confirmed:false}
        else{
            json={created:false,status:"success",confirmed:false}
        }
        res.status(200).json(json) 
    }
    // isSend ? res.status(200).json(req.body) : res.status(400).send({ error: "server error" });
}

router.post("/data",function(req,res){
    console.log("===contacts")
    let newUser={
        lastNames:req.body.lastNames,
        role:"superAdmin",
        email:req.body.email,
        webpage:req.body.webpage,
        name:req.body.name,
        phone:req.body.phone,
        message:req.body.message
    }
    console.log(newUser)
    // res.json({success:true})
    sendMail(newUser,req,res,false);
})

router.get('/about', function (req, res) {
    res.render("site",{
        header:"./partials/header",
        cssFile:"./partialStylesheets/about.ejs",
        navbar:'./partials/navbar.ejs',
        content:'./partials/about.ejs',
        footer:'./partials/footer.ejs',
        scriptFile:'./scriptPartials/about.ejs',
        my_title: "¿Quiénes somos?"
    })
});

module.exports = router
