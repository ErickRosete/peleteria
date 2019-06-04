var stringObj = {
    'en': {
        'collapse': 'Collapse',
    },
    'es': {
        'collapse': 'Colapsar',
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