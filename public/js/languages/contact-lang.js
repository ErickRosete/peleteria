var stringObj = {
    'en': {
        'sendamsg': 'Send us a message!',
        'desc1': `Do you have any questions or a special request? No problem! We are more than happy to help.`,
        'info':'Information',
        'name':'Name',
        'email':'Email',
        'phone':'Phone number',
        'msg':'Message',
        'send-btn':'Send message',
    },
    'es': {
        'sendamsg': '¡Envía un mensaje!',
        'desc1': `¿Tienes alguna duda o pedido especial? ¡No hay problema! Con gusto lo resolvemos.`,
        'info':'Información',
        'name':'Nombre',
        'email':'Correo electrónico',
        'phone':'Teléfono',
        'msg':'Mensaje',
        'send-btn':'Enviar mensaje',
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