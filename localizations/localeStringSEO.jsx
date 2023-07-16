const supportedLanguages = [
    { id: 'de', title: 'Deutsch', isDefault: true },
    { id: 'en', title: 'English' },
]

export default {
    name: "localeStringSEO",
    type: "object",
    title: 'Localized String',
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: "string",
        options: {
            columns: 2
        },        validation: Rule => Rule.max(70)
    })),
}
