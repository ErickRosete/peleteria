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
    var filtrados=[]
    var actualLanguage=""

    const generaProductos=(lang)=>{
        console.log("cambiando idioma a lang")
        console.log(lang)
        let infoNecesaria;
        if(lang=="es"){
            if (filtrados.length>0){
                infoNecesaria=filtrados.map(function (item) {
                    return {nombre: item.titulo,imagen: item.imagen,descripcion:item.descripcion,costo:item.price};
                })
            }
            else{
                infoNecesaria=productos.map(function (item) {
                    return {nombre: item.titulo,imagen: item.imagen,descripcion:item.descripcion,costo:item.price};
                })
            }
        }
        else if(lang=="en"){
            if (filtrados.length>0){
                infoNecesaria=filtrados.map(function (item) {
                    return {nombre: item.title, imagen: item.imagen,descripcion:item.description, costo:item.price};
                })
            }
            else{
                infoNecesaria=productos.map(function (item) {
                    return {nombre: item.title, imagen: item.imagen,descripcion:item.description, costo:item.price};
                })
            }
        }
        return infoNecesaria;
    }

    const idiomaProductos=(lang)=>{   
        console.log("actualizando productos")
        console.log("language selected")
        actualLanguage=lang
        console.log(lang)
        let infoNecesaria=generaProductos(lang)
        actualizaContenido(infoNecesaria);
    }

    function showMe(selected){
        console.log("===Categoria Seleccionada")
        let id=selected.getAttribute("data-id")
        let name=selected.getAttribute("data-name")
        console.log(id)

        console.log("====actualLanguage")
        console.log(actualLanguage)
        let modifiedFiltered={}
        filtrados=productos.filter((product)=>{
            return product.category.includes(id);
        })
        if(actualLanguage=="es"){
            modifiedFiltered=filtrados.map(function (item) {
                return {nombre: item.titulo,imagen: item.imagen,descripcion:item.descripcion,costo:item.price};
            })
        }
        else if(actualLanguage=="en"){
            modifiedFiltered=filtrados.map(function (item) {
                return {nombre: item.title, imagen: item.imagen,descripcion:item.description, costo:item.price};
            })
        }

        var contenedor=document.querySelector("#products_content");
        console.log(contenedor.children[0])
        var apartado=contenedor.children[0].children[0].cloneNode(true)
        apartado.style="display:''"
        var titulo=document.querySelector("#title");
        titulo.style="display:''"
        // let titulo=apartado.children[0]
        console.log(titulo.innerText)
        titulo.innerText=name

        contenedor.children[0].innerHTML=""
        contenedor.children[0].appendChild(apartado)

        console.log("productos filtrados")
        console.log(filtrados)

        let elementosGenerados=[]
        modifiedFiltered.forEach((producto)=>{
            var elemento=document.querySelector("#single-product-s").cloneNode(true)
            elemento.style="display:''"
            elemento.children[0].children[0].children[0].textContent=producto.nombre
            elemento.children[0].children[0].children[1].textContent=producto.descripcion
            elemento.children[0].children[0].children[2].textContent=producto.costo
            elemento.children[0].children[1].src=producto.imagen
            elementosGenerados.push(elemento)
        })
        console.log(apartado)
        console.log(elementosGenerados)

        apartado.innerHTML=""
        apartado.appendChild(titulo)

        elementosGenerados.forEach(function(product){
            apartado.appendChild(product)
        })



    }

    const actualizaContenido=(productos)=>{
        console.log("===actualizando Contenido de Sitio")
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
        let hijo=contenedor.children[0].children[0].children[0]
        contenedor.children[0].innerHTML=""
        contenedor.children[0].appendChild(divsp)
        contenedor.children[0].children[0].insertBefore(hijo,  contenedor.children[0].children[0].children[0]);

        // contenedor.children[0].children[0].appendChild(hijo)

    }

    $(document).ready(function () {
        $.ajax({
            url: base+"api/categories",
            dataType: 'json',
        }).done(function(data){
            cats = data.map(function (item) {
                    return {id: item._id, text: item.title};
            });
            console.log("===Categorias Obtenidas de DB") 
            console.log(cats)
            cats.forEach((categoria,i)=>{
                let sidebar=document.querySelectorAll(".sidebar-info")
                let categoriaHTML=sidebar[0].children[0]
                let categoriaNueva=categoriaHTML.cloneNode(true)
                categoriaNueva.style="display:''"
                categoriaNueva.children[0].children[0].setAttribute("data-id",categoria.id)
                categoriaNueva.children[0].children[0].setAttribute("data-name",categoria.text)

                categoriaNueva.children[0].children[0].href="#homeSubmenu"+(i+1)
                categoriaNueva.children[0].children[1].id="homeSubmenu"+(i+1)
                sidebar[0].appendChild(categoriaNueva)
                categoriaNueva.children[0].children[0].innerText=categoria.text
            })
        })

        $.ajax({
            url: base+'api/products',
            context: document.body
        }).done(function(response) {
            console.log("======Productos obtenidos de DB")
            productos=response;
            console.log(productos)
            let lang = localStorage.getItem('language') == null ? 'es' : localStorage.getItem('language');
            console.log("language selected")
            console.log(lang)
            let infoNecesaria=generaProductos(lang)
            actualizaContenido(infoNecesaria)
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

    function miFuncion(pressed){
        // alert("mediste")
        MicroModal.show('modal-1'); // [1]
        console.log("===pressed")
        console.log(pressed.children[0].children[1].src)
        let img=pressed.children[0].children[1].src
        let titulo=pressed.children[0].children[0].children[0].innerText
        // let idSelected=pressed.getAttribute('data-id')
        // let selectedService=servicios[idSelected]

        // console.log(selectedService)
        console.log(document.querySelector(".modal__header").children[0].innerText)
        document.querySelector(".modal__header").children[0].innerText=titulo
        // document.querySelector(".modal__header").children[0].innerText="titulo"
        console.log(document.querySelector("#modal-1-content").children[0])
        document.querySelector("#modal-1-content").children[0].children[0].src=img
        // document.querySelector("#modal-1-content").children[0].children[0].src="https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now"
        // console.log(selectedService.imagen)
        console.log( document.querySelector("#modal-1-content").children[0].children[0])
        console.log( document.querySelector("#modal-1-content"))

    }
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
