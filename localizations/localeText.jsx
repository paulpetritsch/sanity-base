const supportedLanguages = [
    { id: 'de', title: 'Deutsch', isDefault: true },
    { id: 'en', title: 'English' },
]

export default {
    name: "localeText",
    type: "object",
    title: 'Localized Text',
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
        type: "text",
        fieldset: lang.isDefault ? null : "translations",
    })),
}
