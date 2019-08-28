var stringObj = {
    'en': {
        'tradition-company': 'A tradition company',
        'desc1': `Leathershop Atlas with more than 60 years of transcendence in our business, we keep being a reference to our customers, by providing the best solutions to their needs with the specialty that distinguishes us`,
        'desc2':`We have the most complete shop of saddlery & tack, shoe repair, leathercraft, upholstery and color renewal on leather accessories. We develop any project that you desire made in leather, cowhide, splits, nylon, canvas or synthetic.`,
        'offer':'We offer',
        'servicesl1':'The most complete shoe repair.',
        'servicesl2':'Orthopedics.',
        'servicesl3':'Tailoring, leaning and color renewal to leather jackets.',
        'servicesl4':'Cleaning and forming to western hats.',
        'servicesl5':'Ladies purses and travel luggage repair.',
        'services-btn':'Explore our services'
    },
    'es': {
        'tradition-company': 'Una empresa de tradición',
        'desc1': 
        `PELETERIA  ATLAS, con casi 70 años de trascendencia en nuestro negocio,
        somos todo un referente a nuestros clientes, brindando soluciones a sus 
        necesidades con la especialidad y experiencia que nos distingue, 
        contamos con el surtido mas completo en cada una de nuestras lineas
        que por tanto tiempo hemos desarrollado,  lo invitamos a que nos conozca...`,
        // `Peletería atlas con mas de 60 años de trascendencia en nuestro negocio, seguimos siendo un referente a nuestros clientes, brindando soluciones a sus necesidades con la especialidad que nos distingue.`,
        'desc2':`Contamos con el más completo taller de talabartería marroquinería, tapicería y pintura a todo producto de piel, desarrollamos cualquier proyecto que usted desee en piel, baqueta, lona o sintéticos.`,
        'offer':'Ofrecemos',
        // 'servicesl1':'La más completa reparación de calzado.',
        'servicesl1':`Pieles, herrajes, materiales, herramientas y maquinaria para talleres 
        de reparación de calzado, talabarteros, tapiceros y marroquineros.`,
        // 'servicesl2':'Trabajos ortopédicos.',
        'servicesl2':`Amplio surtido de artículos de piel , como cintos, carteras, monederos
        bolsos, portafolios, llaveros, fundas y mas...`,

        // 'servicesl3':'Sastrería, limpieza y pintura a chamarras de piel.',
        'servicesl3':`Todo lo relacionado en artículos de boleria, para dar limpieza
        y mantenimiento de su calzado y accesorios de piel.`,
        'servicesl4':`Un mosaico de colores en artesanías típicas mexicanas, 
como recuerdo de esta región`,
    //   'servicesl4':'Limpieza y hormado de sombraeros de fieltro.',
        // 'servicesl4':'Limpieza y hormado de sombraeros de fieltro.',
        // 'servicesl5':'Reparación de bolsos de dama, portafolios y maletas de viaje.',
        'services-btn':'Explora nuestros servicios.'
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