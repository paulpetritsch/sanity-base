export default {
    title: 'Cookie',
    name: 'cookie',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
        modal: {type: 'popover'}
    },
    fields: [
        {
            name: 'title',
            type: 'localeString',
            title: 'Title',
        },
        {
            name: 'text',
            type: 'localeBlockContent',
            title: 'Text',
        },
        {
            name: 'options',
            type: 'array',
            title: 'Options',
            of: [{type: 'cookieOption'}]
        },
        {
            name: 'button_all',
            type: 'localeString',
            title: 'Button Alle Akzeptieren Text',
        },
        {
            name: 'button_selection',
            type: 'localeString',
            title: 'Button Auswahl Speichern Text',
        }
    ]
}
