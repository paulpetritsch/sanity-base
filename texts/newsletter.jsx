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
            name: 'button',
            type: 'localeString',
            title: 'Button Text',
        }
    ]
}
