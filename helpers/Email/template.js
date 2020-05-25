
exports.htmlContent=(emailContent)=>{
    const htmlContent = `
    <p style="margin-bottom:2rem;">Saludos</p>
    <p>${emailContent.name} quiere contactarse con usted </p>
    <p>Su correo electrónico es: ${emailContent.email}</p>
    <p>Su teléfono es: ${emailContent.phone}</p>
    <p>Su mensaje es el siguiente:</p>
    <p>${emailContent.body}</p>
    <p style="margin-top:3rem;">Atte: Sitio Peleteria Atlas</p>
`
    return htmlContent
}
