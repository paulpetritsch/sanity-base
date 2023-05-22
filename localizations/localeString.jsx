const supportedLanguages = [
    { id: 'de', title: 'Deutsch', isDefault: true },
    { id: 'en', title: 'English' },
]

export default {
    name: "localeString",
    type: "object",
    title: 'Localized String',
    fieldsets: [
        {
            title: "Translations",
            name: "translations",
            options: { collapsible: true },
        },
    ],
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: "string",
        fieldset: lang.isDefault ? null : "translations",
    })),
}
