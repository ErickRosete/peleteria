$(document).ready(function(){
    // $('#phone').mask('(000) 000-0000');
    $('.nav-item.active').removeClass('active');
    $('#navbarNav-contact').addClass('active');
})

function enviar(){
    console.log(document.getElementsByName("name")[0].validity.valid)
    console.log("you clicked")
    // debugger
    var body= "<body style='background-color:grey;padding:60px;'><div style='color:black;background-color:white;padding:20px;font-size:20px;'><div style='display:block;margin-bottom:20px;'>"+"Un usuario te dejo un mensaje"+"</div>"
    body+="<div style='display:block'>"+"<span style='font-weight:bold'>Nombre </span>"+document.getElementsByName("name")[0].value+"</div>";
    body+= "<div style='display:block'>"+"<span style='font-weight:bold'>Correo Electronico </span>"+document.getElementsByName("email")[0].value+"</div>";
    body+= "<div style='display:block'>"+"<span style='font-weight:bold'>Telefono </span>"+document.getElementsByName("phone")[0].value+"</div>";
    body+= "<div style='display:block'>"+"<span style='font-weight:bold'>Mensaje </span>"+document.getElementsByName("message")[0].value+"</div></div><a style='display:block;font-size:20px;cursor:pointer;text-align:center;text-decoration:none;color:black;margin-top:10px;'href='http://peleteriaatlas.com/'>http://peleteriaatlas.com/</a></body>";
    console.log(body);
    let newUser={
        userName:"Oscar",
        role:"superAdmin",
        email:"oscaralonso11@hotmail.com",
        password:"myPassword",
        name:document.getElementsByName("name")[0].value,
        email:document.getElementsByName("email")[0].value,
        phone:document.getElementsByName("phone")[0].value,
        message:document.getElementsByName("message")[0].value
    }
    $.ajax({
        type: 'post',
        url: 'data',
        data: JSON.stringify(newUser),
        contentType: "application/json; charset=utf-8",
        // traditional: true,
        success: function (data) {
                console.log(data)
                // swal("Created new User!", "Continue with the creation of your widget", "success");
                // swal("Usuario creado!", "Revisa tu correo para continuar con la creación del widget", "success");
            },
        error: function (error) {
            console.log(error)
        }
    });
    // Email.send(
    //     "noreply@peleteria-atlas.com",
    //     // "oscaralonso11@gmail.com",ivloanagent@gmail.com
    //     "oscaralonso11@gmail.com",
    //     "Mensaje de website peleteria",
    //     body,
    //     {
    //         token: "5ad8ca6d-c9a2-492a-93c9-e38b0e21d42d",
    //         callback: function done(message) {
    //             // alert("Thank you\nyour message was sent") ;
    //             $('#success').modal('show');
    //         return true;}
    //     }
    // );

    // Email.send(
    //     "noreply@peleteriaatlas.com",
    //     "oscaralonso11@gmail.com",
    //     "Mensaje de website peleteria",
    //     body,
    //     "smtp.elasticemail.com",
    //     "oscaralonso11@gmail.com",
    //     "ee87cb43-1e87-4c5f-974e-3cb5d19ab7f0",
    //     function done(message) {
    //         $('#success').modal('show');
    //     }
    // );
    // return false;
}

// elasticemail.com
// oscaralonso11@gmail.com
// Ashanti123

// smtp
// user:oscaralonso11@gmail.com
// password:ee87cb43-1e87-4c5f-974e-3cb5d19ab7f0
// servidor:smtp.elasticemail.com
// puerto:2525
// https://elasticemail.com/account/#/settings/smtp
// como seleccionar el sensor en cuestion de parametro como, martes presentar o viernes presentar
//puede ser simulacion, problematica del dia a dia
