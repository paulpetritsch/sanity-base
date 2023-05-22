const supportedLanguages = [
    { id: 'de', title: 'Deutsch', isDefault: true },
    { id: 'en', title: 'English' },
]

export default {
    name: "localeBlockContent",
    type: "object",
    title: 'Localized BlockContent',
    fieldsets: [
        {
            title: "Übersetzung",
            name: "translations",
            options: { collapsible: true },
        },
    ],
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: "blockContent",
        fieldset: lang.isDefault ? null : "translations",
    })),
}
