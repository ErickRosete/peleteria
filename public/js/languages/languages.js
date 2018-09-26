var arrLang = {
    'en' : {
        'about' : 'About Us',
        'products' : 'Products',
        'services' : 'Services',
        'contact' : 'Contact Us',
        'womenShoe': "Women Shoes",
        'menShoe': 'Men Shoes',
        'womenBoot': 'Women Boots',
        'menBoot': 'Men Boots',
        'ortShoe': 'Orthopedic Shoes',
        'leatJacket': 'Leather Jackets',
        'hat': 'Hats',
        'luggage':'Luggage Case',
        'leatSC': 'Leather Suitcase',
        'womenBag': 'Women Bags',
        'leatFurn':'Leather Furniture',
        'autoUphols':'Automotive Upholstery',
        'leatStWh':'Leather Steering Wheel',

    },
    'es' : {
        'about' : '¿Quiénes Somos?',
        'products' : 'Productos',
        'services' : 'Servicios',
        'contact' : 'Contacto',
        'womenShoe': 'Calzado para Dama',
        'menShoe': 'Calzado para Hombre',
        'womenBoot': 'Botas para Dama',
        'menBoot': 'Botas vaqueras',
        'ortShoe': 'Calzado Ortopédico',
        'leatJacket': 'Chamarras de Piel',
        'hat': 'Sombreros',
        'luggage':'Maletas de Viaje',
        'leatSC': 'Portafolios de Piel',
        'womenBag': 'Bolsos para Dama',
        'leatFurn':'Muebles de Piel',
        'autoUphols':'Tapicería automotriz',
        'leatStWh':'Volantes de Piel',




    }
}

$(function(){
    $( ".langSelector" ).change(function() {
        var selectedLang = $(this).val();
        console.log(selectedLang);

        $('.lang').each(function(index, element){
            $(this).text(arrLang[selectedLang][$(this).attr('key')]);
        });
        
    });
});
