export default {
    title: 'Newsletter',
    name: 'newsletter',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
        modal: {type: 'popover'}
    },
    fields: [
        {
            name: 'text',
            type: 'localeBlockContent',
            title: 'Text',
        },
        {
            name: 'placeholder',
            type: 'localeString',
            title: 'Textfeld Placeholder',
            description: 'Text, welcher im Textfeld als Default Value steht.'
        },
        {
            name: 'button',
            type: 'localeString',
            title: 'Abonnieren Button Text',
        },
        {
            name: 'datenschutz',
            type: 'localeBlockContent',
            title: 'Datenschutz Text',
            description: 'Text, welcher auf die Datenschutzrichtlinien hinweist.'
        },
    ]
}
