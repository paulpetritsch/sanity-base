export default {
    name: 'settings',
    title: 'Allgemeine Einstellungen',
    type: 'document',
    groups: [
        {
            name: 'kontakt',
            title: 'Kontakt',
        },
        {
            name: 'social',
            title: 'Social Links',
        },
        {
            name: 'texts',
            title: 'Sonstige Texte',
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Einstellungen Überschrift',
            type: 'string',
            initialValue: 'Allgemeine Einstellungen',
            hidden: true
        },
        {
            name: 'address_name',
            title: 'Adresse Bezeichnung',
            description: 'Firmenname/Name',
            type: 'localeString',
            group: 'kontakt'
        },
        {
            name: 'address_street',
            title: 'Straße',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'address_nr',
            title: 'Hausnummer',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'address_plz',
            title: 'PLZ',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'address_ort',
            title: 'Ort',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'telefon',
            title: 'Telefonnummer',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'email',
            title: 'E-Mail',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'instagram',
            title: 'Instagram Link',
            type: 'string',
            group: 'social',
        },
        {
            name: 'facebook',
            title: 'Facebook Link',
            type: 'string',
            group: 'social',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn Link',
            type: 'string',
            group: 'social',
        },
        {
            name: 'newsletter',
            title: 'Newsletter',
            type: 'newsletter',
            group: 'texts',
        },
        {
            name: 'cookies',
            title: 'Cookie Popup',
            type: 'cookie',
            group: 'texts',
        },
        {
            name: 'error',
            title: '404 Error Page',
            type: 'error',
            group: 'texts',
        },
    ],

    preview: {
        select: {
            title: 'title'
        }
    },
}
