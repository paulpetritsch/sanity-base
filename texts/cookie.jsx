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
            of: [{type: 'localeString'}]
        },
        {
            name: 'button',
            type: 'localeString',
            title: 'Button Text',
        }
    ]
}
