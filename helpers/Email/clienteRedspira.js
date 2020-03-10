// https://www.emailonacid.com/blog/article/email-development/12_things_you_must_know_when_developing_for_gmail_and_gmail_mobile_apps-2/
// https://litmus.com/community/discussions/1500-using-flexbox-in-an-email
exports.htmlContent2=(emailContent)=>{
    const htmlContent2 = `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <style>
            :root {
                --main-bg-color: #0485B7;
                --main-contrast-color: #005F7C;
                --secondary-bg-color: #403d39;
                --secondary-contrast-color: #262421;
                --light-gray: #f7f7f7;
            }

            .img-container {
                position: relative;
            }

            .img-fluid {
                max-width: 100%;
                height: auto;
            }

            .logo {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 55%;
            }

            .blue-line {
                border-color: #0485B7;
                border-width: 1rem;
                margin-block-start: -4px;
                margin-block-end: 0;
                border-style: solid;
            }

            .gray-line {
                border-color:#403d39;
                border-width: 0.25rem;
                margin-block-start: 0;
                margin-block-end: 0;
                border-style: solid;
                max-width: 7.5%;
            }

            main {
                font-family: 'Arial', sans-serif;
                background-color: #f7f7f7;
            }

            .main-content {
                padding: 3rem;
            }

            .greeting {
                text-align: center;
                font-size: 2rem;
                margin: 0.5rem;
                font-weight: 500;
            }

            .name {
                text-align: center;
                margin: 0;
                font-size: 4rem;
                font-weight: 600;
            }

            .message {
                text-align: justify;
                font-size: 2rem;
                margin: 3rem;
                line-height: 3rem;
                font-weight: 500;
            }

            footer {
                font-family: 'Abel', sans-serif;
                text-align: center;
            }

            .footer-blue {
                background-color: #0485B7;
                padding: 1.5rem 0;
            }

            .footer-content {
                background-color: #403d39;
                font-size: 2rem;
                padding: 1.5rem;
            }

            .footer-content p {
                margin: 0;
                color: white;
            }
        </style>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
        <title>Correo</title>
    </head>

    <body>
        <div class="img-container">

            <img class="img-fluid" src="cid:logo" alt="fondo">
            <hr class="blue-line">
        </div>

        <main>
            <div class="main-content">
                <p class="greeting">Saludos,</p>
                <!--<p class="greeting">Greetings,</p>-->
                <p class="name">${emailContent.name}</p>
                <div>
                    <hr class="gray-line">
                </div>
                <!--<p class="message">
                    You’re a click away from finalizing your account and joining the Redspira community! 
                </p>-->
                <p class="message">
                   Te encuentras a un click de finalizar el registro de tu cuenta y unirte a la comunidad Redspira! 
                </p>
                <!--<p class="message">
                Confirm your email address by clicking the button below. Easy peasy.
                </p>-->
                <p class="message">
                Confirma tu cuenta de correo electrónico pulsando el boton inferior.
                </p>
                <!--<a href="${emailContent.query}" target="_blank" style="padding: 8px 12px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: white;text-decoration: none;font-weight:bold;display: inline-block;background-color:red">
                    Click me!             
                </a>-->
                <a href="${emailContent.query}" target="_blank" style="padding: 8px 12px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: white;text-decoration: none;font-weight:bold;display: block;background-color:red;margin:0 auto;text-align:center;width:20%">
                    Presioname!             
                </a>
            </div>
        </main>
        <footer>
            <div class="footer-blue">
                <div class="footer-content">                              
                   <!--<p>(55) 9627-8073 | ventas@epsiloncomputadoras.mx | Lunes a Viernes: 9.00 am. - 7.00 pm.</p>-->
                   <!--<p>If you did not request an account using this email address, please ignore this email. You will not receive any further contact from us. </p>-->
                   <p>Si no solicitaste una cuenta utilizando este correo electrónico, porfavor ignora este mensaje. No recibirás correos posteriores del equipo Redspira. </p>
                </div>
            </div>
        </footer>

    </body>

</html>
`
    return htmlContent2
}

