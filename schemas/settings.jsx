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
    fieldsets: [
        {
            name: 'addresseFieldset',
            title: 'Addresse',
            options: { columns: 2 },
        },
        {
            name: 'kontaktFieldset',
            title: 'Kontaktmöglichkeiten',
            options: { columns: 2 },
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
            name: 'maintenance',
            title: 'Maintenance Mode',
            type: 'boolean',
        },
        {
            name: 'address_name',
            title: 'Firmenname',
            description: 'Name der Organisation bzw. Addressenbezeichnung',
            type: 'localeString',
            group: 'kontakt',
        },
        {
            name: 'address_street',
            title: 'Straße',
            type: 'string',
            group: 'kontakt',
            fieldset: 'addresseFieldset'
        },
        {
            name: 'address_nr',
            title: 'Hausnummer',
            type: 'string',
            group: 'kontakt',
            fieldset: 'addresseFieldset'
        },
        {
            name: 'address_plz',
            title: 'PLZ',
            type: 'string',
            group: 'kontakt',
            fieldset: 'addresseFieldset'
        },
        {
            name: 'address_ort',
            title: 'Ort',
            type: 'string',
            group: 'kontakt',
            fieldset: 'kontaktFieldset'
        },
        {
            name: 'telefon',
            title: 'Telefonnummer',
            type: 'string',
            group: 'kontakt',
            fieldset: 'kontaktFieldset'
        },
        {
            name: 'email',
            title: 'E-Mail',
            type: 'string',
            group: 'kontakt',
            fieldset: 'addresseFieldset'
        },
        {
            name: 'sociallinks',
            title: 'Social Media',
            type: 'array',
            of: [{type: 'socialMedias'}],
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
