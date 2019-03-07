var base= 'https://peleteria-admin.herokuapp.com/';

$.ajax({
    url: base+'api/categories',
    context: document.body
}).done(function(response) {
    // $( this ).addClass( "done" );
    console.log(response);
});
$(document).ready(function() {
     /* code here */
    
});

function actualizaContenido(infoNecesaria){
    console.log("Contenido actualizado");
    var contenedor=document.querySelector("#contenido")
    var elementosGenerados=[]
    infoNecesaria.forEach(function(producto){
        var elemento=document.querySelector("#placeholder").cloneNode(true)
        elemento.children[0].src=producto.imagen
        elemento.children[1].children[0].innerText=producto.texto
        elemento.style="display:''"
        elementosGenerados.push(elemento)
    })
    contenedor.innerHTML=""
    elementosGenerados.forEach(function(elemento){
        contenedor.appendChild(elemento)
    })
    // console.log(elementosGenerados)
}

$.ajax({
    url: base+'api/products',
    context: document.body
}).done(function(response) {
    console.log(response);
    var infoNecesaria=response.map(function (item) {
        return {texto: item.title, imagen: item.imagen};
    })
    actualizaContenido(infoNecesaria)
});

$(document).ready(function() {
     /* code here */
    
});

function categoria(element){
    console.log("this is a click")
    console.log(element.children[1].innerText)
    var filtro=element.children[1].innerText
    var imagenes=document.querySelectorAll(".card-img-top")
    var textos=document.querySelectorAll(".card-title")
    $.ajax({
        url: base+'api/products?category__in='+filtro,
        context: document.body
    }).done(function(response) {
        console.log(response);
        var infoNecesaria=response.map(function (item) {
            return {texto: item.title, imagen: item.imagen};
        })
        actualizaContenido(infoNecesaria)
    });
}
    // if(element.children[1].innerText=="Portafolios"){
    //     console.log("caso portafolio")
    //     console.log(imagenes)
    //     imagenes[0].src="assets/briefcases/bc1.jpg"
    //     textos[0].innerText="Portafolio AW"
    //     imagenes[1].src="assets/briefcases/bc2.jpg"
    //     textos[1].innerText="Portafolio para laptop"
    //     imagenes[2].src="assets/briefcases/bc3.jpg"
    //     textos[2].innerText="Portafolio estilo maleta"
    //     imagenes[3].src="assets/briefcases/bc4.jpg"
    //     textos[3].innerText="Portafolio estilo mochila"
    //     imagenes[4].src="assets/briefcases/bc1.jpg"
    //     textos[4].innerText="Limpieza y reparacion de portafolios"
    // }
    // else if(element.children[1].innerText=="Carteras"){
    //     console.log("caso carteras")
    //     console.log(imagenes)
    //     console.log(imagenes[0])
    //     imagenes[0].src="assets/wallets/w1.jpg"
    //     textos[0].innerText="Cartera para mujer"
    //     imagenes[1].src="assets/wallets/w2.jpg"
    //     textos[1].innerText="Cartera para tarjetas"
    //     imagenes[2].src="assets/wallets/w3.jpg"
    //     textos[2].innerText="Cartera para tarjetas de mujer"
    //     imagenes[3].src="assets/wallets/w4.jpg"
    //     textos[3].innerText="Cartera para hombre"
    //     imagenes[4].src="assets/wallets/w4.jpg"
    //     textos[4].innerText="Limpieza y reparacion de carteras"

    // }
