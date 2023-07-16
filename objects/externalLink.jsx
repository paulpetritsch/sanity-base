export default {
    title: 'Externer Link',
    name: 'externalLink',
    type: 'object',
    options: {
        collapsible: false,
        collapsed: false,
        modal: {type: 'popover'},
        columns: 2
    },
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Link Display Titel',
        },
        {
            name: 'value',
            type: 'string',
            title: 'Link',
            description: 'Link, mit https:// am Anfang nicht vergessen.',
        },
    ]
}
