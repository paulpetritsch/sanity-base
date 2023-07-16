import {FcPodiumWithSpeaker} from 'react-icons/fc';

export default {
    name: 'subpages',
    title: 'Unterseiten',
    type: 'document',
    icon: FcPodiumWithSpeaker,
    groups: [
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        {
            name: 'title',
            title: 'Unterseite Überschrift',
            type: 'string',
            initialValue: 'Unterseite',
            hidden: true
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Eindeutiger Name für die Subpage ohne Leerzeichen',
            options: {
                source: "headline.de",
                maxLength: 96,
            },
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
