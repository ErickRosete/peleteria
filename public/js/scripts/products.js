var base= 'https://peleteria-admin.herokuapp.com/';
// let productos=[
//     {
//         nombre:"maletin1",
//         descripcion:"soy una descripcion extendida1",
//         costo:"soy un costo",
//         imagen:"http://localhost:3000/assets/briefcases/bc1.jpg"
//     },
//     {
//         nombre:"maletin2",
//         descripcion:"soy una descripcion extendida2",
//         costo:"soy un costo",
//         imagen:"/assets/briefcases/bc2.jpg"
//     }
// ]
var productos=[]

const generaProductos=(lang)=>{
    let infoNecesaria;
    if(lang=="es"){
        infoNecesaria=productos.map(function (item) {
            return {nombre: item.titulo,imagen: item.imagen,descripcion:item.descripcion,costo:item.price};
        })
    }
    else if(lang=="en"){
        infoNecesaria=productos.map(function (item) {
            return {nombre: item.title, imagen: item.imagen,descripcion:item.description, costo:item.price};
        })
    }
    return infoNecesaria;
}

const idiomaProductos=(lang)=>{
    console.log("actualizando productos")
    console.log("language selected")
    console.log(lang)
    let infoNecesaria=generaProductos(lang)
    actualizaContenido(infoNecesaria);
}

const actualizaContenido=(productos)=>{
    console.log("===actualizando")
    console.log(productos)
    var contenedor=document.querySelector("#products_content");
    var tarjeta=document.querySelectorAll(".single-product");
    let elementosGenerados=[]
    productos.forEach((producto)=>{
        var elemento=document.querySelector("#single-product-s").cloneNode(true)
        elemento.style="display:''"
        elemento.children[0].children[0].children[0].textContent=producto.nombre
        elemento.children[0].children[0].children[1].textContent=producto.descripcion
        elemento.children[0].children[0].children[2].textContent=producto.costo
        elemento.children[0].children[1].src=producto.imagen
        elementosGenerados.push(elemento)
    })
    var divsp=document.createElement("div")
    divsp.className="row"
    elementosGenerados.forEach(function(elemento){
        divsp.appendChild(elemento)
    })
    contenedor.children[0].appendChild(divsp)
}

$(document).ready(function () {
    $.ajax({
        url: base+'api/categories',
        context: document.body
    }).done(function(response) {
        // $( this ).addClass( "done" );
        console.log(response);
    });

    $.ajax({
        url: base+'api/products',
        context: document.body
    }).done(function(response) {
        // console.log(response);
        productos=response;
        // console.log(infoNecesaria)
        let lang = localStorage.getItem('language') == null ? 'es' : localStorage.getItem('language');
        console.log("language selected")
        console.log(lang)
        let infoNecesaria=generaProductos(lang)
        actualizaContenido(infoNecesaria)
        // actualizaContenido(infoNecesaria)
    });


    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #products_content,.collapse-btn-container,.sidebar-bg').toggleClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    if(window.innerWidth > 600){
        $('#sidebar, #products_content,.collapse-btn-container,.sidebar-bg').toggleClass('active');
    }
    $('.nav-item.active').removeClass('active');
    $('#navbarNav-products').addClass('active');

});

// var base= 'https://peleteria-admin.herokuapp.com/';

// $.ajax({
//     url: base+'api/categories',
//     context: document.body
// }).done(function(response) {
//     // $( this ).addClass( "done" );
//     console.log(response);
// });
// $(document).ready(function() {
//      /* code here */
    
// });

// function actualizaContenido(infoNecesaria){
//     console.log("Contenido actualizado");
//     var contenedor=document.querySelector("#contenido")
//     var elementosGenerados=[]
//     infoNecesaria.forEach(function(producto){
//         var elemento=document.querySelector("#placeholder").cloneNode(true)
//         elemento.children[0].src=producto.imagen
//         elemento.children[1].children[0].innerText=producto.texto
//         elemento.style="display:''"
//         elementosGenerados.push(elemento)
//     })
//     contenedor.innerHTML=""
//     elementosGenerados.forEach(function(elemento){
//         contenedor.appendChild(elemento)
//     })
//     // console.log(elementosGenerados)
// }

// $.ajax({
//     url: base+'api/products',
//     context: document.body
// }).done(function(response) {
//     console.log(response);
//     var infoNecesaria=response.map(function (item) {
//         return {texto: item.title, imagen: item.imagen};
//     })
//     actualizaContenido(infoNecesaria)
// });

// $(document).ready(function() {
//      /* code here */
    
// });

// function categoria(element){
//     console.log("this is a click")
//     console.log(element.children[1].innerText)
//     var filtro=element.children[1].innerText
//     var imagenes=document.querySelectorAll(".card-img-top")
//     var textos=document.querySelectorAll(".card-title")
//     $.ajax({
//         url: base+'api/products?category__in='+filtro,
//         context: document.body
//     }).done(function(response) {
//         console.log(response);
//         var infoNecesaria=response.map(function (item) {
//             return {texto: item.title, imagen: item.imagen};
//         })
//         actualizaContenido(infoNecesaria)
//     });
// }
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
