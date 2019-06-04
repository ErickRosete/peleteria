$(function () {
    var language1 = localStorage.getItem('language') == 'null' ? 'es' : localStorage.getItem('language');
    $(".navbar_language-picker").val(language1);
    setLang(language1);


    $(".navbar_language-picker").change(function () {
        var selectedLang = $(this).val();
        setLang(selectedLang);
        localStorage.setItem('language', selectedLang);
    });

    function setLang(lang) {
        $('.lang').each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.lang-placeholder').each(function (index, element) {
            $(this).attr("placeholder", arrLang[lang][$(this).attr('key')]);
        });
    }
});