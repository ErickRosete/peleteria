$(document).ready(function(){
    $('.nav-item.active').removeClass('active');
    $('#navbarNav-services').addClass('active');
})
// var base= 'https://peleteria-admin.herokuapp.com/';
// var base= 'http://localhost:4000/';
var servicios=[]
function genera(descripcion){
    var li=document.createElement("li")
    li.textContent=descripcion
    return li
}

MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    disableScroll: true, // [5]
    disableFocus: false, // [6]
    awaitCloseAnimation: false, // [7]
    debugMode: true // [8]
  });

function openModal(pressed){
    console.log("======apertura modal")
    MicroModal.show('modal-1'); // [1]
    console.log(pressed)
    let idSelected=pressed.getAttribute('data-id')
    let selectedService=servicios[idSelected]
    console.log(selectedService)
    console.log(document.querySelector(".modal__header").children[0].innerText)
    document.querySelector(".modal__header").children[0].innerText=selectedService.titulo
    console.log(document.querySelector("#modal-1-content").children[0])
    document.querySelector("#modal-1-content").children[0].children[0].src=selectedService.imagen
    console.log(selectedService.imagen)
    console.log( document.querySelector("#modal-1-content").children[0].children[0])
    
    //aqui se genera la lista o descripcion extendida
    var p=document.createElement("p")
    p.innerText="hola"
    document.querySelector("#modal-1-content").children[1].innerText=selectedService.encabezado
    document.querySelector("#modal-1-content").children[1].style='font-size:2rem;font-weight:bold;text-align:center'
    console.log(p)
    console.log( document.querySelector("#modal-1-content").children[2].children[0])
    document.querySelector("#modal-1-content").children[2].innerHTML=""
    let lis=[]
    let descripciones=selectedService.descripcion.split(/\n/);
    descripciones.forEach((descripcion)=>{
            lis.push(genera(descripcion))
    })
    lis.forEach((li)=>{
        document.querySelector("#modal-1-content").children[2].appendChild(li)
    })
}


$.ajax({
    // url: base+'api/services',
    url: './api/services',
    context: document.body
}).done(function(response) {
    console.log("====Servicios")
    console.log(response);
    servicios=response;
    //=====ordering services
    servicios.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));
    console.log("===ordered services")
    console.log(servicios)
    var contenedor=document.querySelector("#base");
    servicios.forEach((servicio,i)=>{
        var elemento=contenedor.cloneNode(true)
        elemento.style="display:''"
        elemento.children[1].setAttribute("data-id", i);
        elemento.children[3].setAttribute("data-id", i);        
        elemento.children[1].children[0].innerHTML=""
        var descripciones=servicio.descripcion.split(/\n/);
        var lis=[]
        let len=0;
        let liQuant=0;
        descripciones.forEach((descripcion)=>{
            if(len<190 && liQuant<6){
                lis.push(genera(descripcion))
                liQuant++;
            }
            len+=descripcion.length;
        })
        console.log(servicio.titulo.length)
        console.log(servicio.titulo)
        elemento.children[0].children[0].textContent=servicio.titulo
        elemento.children[2].src=servicio.imagen
        var padre=document.querySelector("#padre");
        padre.appendChild(elemento)
    })
});

// openModal();