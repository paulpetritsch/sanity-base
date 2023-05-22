export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'seo_title',
            title: 'SEO Titel',
            description: 'Titel, welcher auch auf dem Browser Tab steht. Maximal 70 Zeichen.',
            type: 'localeStringSEO',
        },
        {
            name: 'seo_active',
            title: 'Eigenes SEO',
            description: 'Eigene SEO Description und Image für diese Page. Falls nicht, wird die Description und Image der Startseite verwendet.',
            type: 'boolean',
            initialValue: false,
            hidden: ({document}) => document?._type === 'startseite'
        },
        {
            name: 'seo_description',
            title: 'SEO Beschreibung',
            description: 'Beschreibung, welche die Inhalte der Website beschreibt. Maximal 160 Zeichen,',
            type: 'localeTextSEO',
            hidden: ({document}) => document?.seo?.seo_active === false && document?._type != 'startseite'
        },
        {
            name: 'seo_image',
            title: 'SEO Image',
            type: 'image',
            hidden: ({document}) => document?.seo?.seo_active === false && document?._type != 'startseite'
        },
    ],

    preview: {
        select: {
            title: 'title'
        }
    },
}
