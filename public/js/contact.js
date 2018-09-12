$(document).ready(function(){
    $('#phone').mask('(000) 000-0000');
})
function enviar(){
    console.log(document.getElementsByName("name")[0].validity.valid)
    console.log("you clicked")
    var body= "<body style='background-color:grey;padding:60px;'><div style='color:black;background-color:white;padding:20px;font-size:20px;'><div style='display:block;margin-bottom:20px;'>"+"Un usuario te dejo un mensaje"+"</div>"
    body+="<div style='display:block'>"+"<span style='font-weight:bold'>Nombre </span>"+document.getElementsByName("name")[0].value+"</div>";
    body+= "<div style='display:block'>"+"<span style='font-weight:bold'>Correo Electronico </span>"+document.getElementsByName("email")[0].value+"</div>";
    body+= "<div style='display:block'>"+"<span style='font-weight:bold'>Telefono </span>"+document.getElementsByName("phone")[0].value+"</div>";
    body+= "<div style='display:block'>"+"<span style='font-weight:bold'>Mensaje </span>"+document.getElementsByName("message")[0].value+"</div></div><a style='display:block;font-size:20px;cursor:pointer;text-align:center;text-decoration:none;color:black;margin-top:10px;'href='http://peleteriaatlas.com/'>http://peleteriaatlas.com/</a></body>";
    console.log(body);
    Email.send(
        "noreply@peleteria-atlas.com",
        // "oscaralonso11@gmail.com",ivloanagent@gmail.com
        "oscaralonso11@gmail.com",
        "Mensaje de website peleteria",
        body,
        {
            token: "5ad8ca6d-c9a2-492a-93c9-e38b0e21d42d",
            callback: function done(message) { 
                // alert("Thank you\nyour message was sent") ;
                $('#success').modal('show');
            return true;}
        }
    );
    // alert("email was sent")
    // setTimeout(function(){ alert("Hello"); }, 4000);
    return false;
}