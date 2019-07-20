$(function () {
    var language1 = localStorage.getItem('language') == null ? 'es' : localStorage.getItem('language');
    $(".navbar_language-picker").val(language1);
    setLang(language1);


    $(".navbar_language-picker").change(function () {
        var selectedLang = $(this).val();
        setLang(selectedLang);
        localStorage.setItem('language', selectedLang);
    });

    function setLang(lang) {
        // $('.lang').each(function (index, element) {
        //     $(element).text(arrLang[lang][$(element).attr('key')]);
        // });
        // $('.lang-placeholder').each(function (index, element) {
        //     $(this).attr("placeholder", arrLang[lang][$(this).attr('key')]);
        // });
        if(window.location.href.includes("products")){
            idiomaProductos(lang);
        }
        let cambiables=document.querySelectorAll(".lang")
        cambiables.forEach((elemento)=>{
            // console.log(elemento.textContent)
            // console.log(arrLang[lang])
            // console.log((elemento).getAttribute('key'))
            // console.log(arrLang[lang][(elemento).getAttribute('key')])
            elemento.textContent=arrLang[lang][(elemento).getAttribute('key')]
            // console.log(lang)
        })
        let cambiables2=document.querySelectorAll(".lang-placeholder")
        // console.log(cambiables2)
        cambiables2.forEach((elemento)=>{
            elemento.setAttribute("placeholder",arrLang[lang][(elemento).getAttribute('key')])
        })
    //     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    //     integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    // </script>
    }
});