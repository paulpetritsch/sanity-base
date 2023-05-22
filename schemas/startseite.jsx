export default {
    name: 'startseite',
    title: 'Startseite',
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
            title: 'Startseite Überschrift',
            type: 'string',
            initialValue: 'Startseite',
            hidden: true
        },
        {
            name: 'headline',
            title: 'Überschrift',
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
