var stringObj = {
    'en': {
        'tradition-company': 'A tradition company',
        'desc1': `Peleteria Atlas is a tradition in Mexicali B. C. We are specialists in the sale of articles for shoe
        care and repairing, sole of stick, neolite, lids for Lady shoes, ink angelus, tools, cleaning
        products, we have also horse saddle for charros and cowboys.`,
        'catalogue':'Go to catalog',
        'carousel-h1':'Up to 12 months without interests with paypal or 15% in direct payment',
        'carousel-sub':'Minimum purcharse of $178 usd',
        'carousel2-h1':'Wallets, purses, boots and more for sale',
        'carousel2-sub':'Made with 100% genuine materials',
    },
    'es': {
        'tradition-company': 'Una empresa de tradición',
        'desc1': `Peletería Atlas es toda una tradición en Mexicali B. C. somos especialistas en la venta de artículos
        para reparadores de calzado; suela de baqueta, neolite, tapitas para zapato de dama, tinta ángelus,
        herramientas, artículos de limpieza, también contamos
        con la venta de monturas charras y vaqueras.`,
        'catalogue': 'Ir a nuestro catálogo',
        'carousel-h1':'Hasta 12 meses sin intereses con paypal o 15% en pago directo!',
        'carousel-sub':' Compra mínima de $3500 pesos',
        'carousel2-h1':'Venta de carteras, bolsas, botas...',
        'carousel2-sub':'Hechas con materiales 100% genuinos.',
    }
}

arrLang = {
    'en': {
        ...arrLang['en'],
        ...stringObj['en']
    },
    'es': {
        ...arrLang['es'],
        ...stringObj['es']
    }
}