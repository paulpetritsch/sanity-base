export default {
    title: 'Error',
    name: 'error',
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
            name: 'button',
            type: 'internalLink',
            title: 'Button',
        },
        {
            name: 'seo_title',
            type: 'localeString',
            title: 'Browser Tab Title',
        },
    ]
}
