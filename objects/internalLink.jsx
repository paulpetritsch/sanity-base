import {FaCookieBite} from 'react-icons/fa'

const pages = [
    {title: 'Startseite', value: '/'},
    {title: 'Impressum', value: '/imprint'},
    {title: 'Datenschutz', value: '/privacy'}
]

export default {
    title: 'Internal Link',
    name: 'internalLink',
    type: 'object',
    fieldsets: [
        {
            name: 'pageFieldset',
            title: 'Page Referenz',
            description: 'Entscheidet ob der Link zu einer fixen Page führt, oder zu einer in Sanity erstellten Unterseite.',
            options: {
                columns: 2
            }
        }
    ],
    fields: [
        {
            name: 'title',
            type: 'localeString',
            title: 'Title',
            options: {
                collapsible: false,
                columns: 2,
            }
        },
        {
            name: 'pageOrDynamic',
            type: 'boolean',
            title: 'Fixed oder Dynamisch',
            initialValue: true,
            fieldset: 'pageFieldset'
        },
        {
            name: 'fixedpage',
            type: 'string',
            options: {
                list: pages,
                layout: 'dropdown'
            },
            title: 'Page',
            description: 'Page zu welcher der Link führt',
            fieldset: 'pageFieldset',
            hidden: ({parent}) => parent?.pageOrDynamic === true
        },
        {
            name: 'dynamicpage',
            type: 'reference',
            to: [
                { type: 'subpages' }
            ],
            title: 'Unterseite',
            description: 'Unterseite zu welcher der Link führt',
            fieldset: 'pageFieldset',
            hidden: ({parent}) => parent?.pageOrDynamic === false
        },
    ],
}
