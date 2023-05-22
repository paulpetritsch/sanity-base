export default {
    name: 'impressum',
    title: 'Impressum',
    type: 'document',
    groups: [
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        {
            name: 'title',
            title: 'Impressum Überschrift',
            type: 'localeString',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'localeBlockContent',
        },
        {
            name: 'seo',
            title: 'SEO - Search Engine Optimization',
            description: 'Für die Suchmaschine und den Browser relevante Inhalte.',
            type: 'seo',
            group: 'seo'
        },
    ],

    preview: {
        select: {
            title: 'title'
        }
    },
}
