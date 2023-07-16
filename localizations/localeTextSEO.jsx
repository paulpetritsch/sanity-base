const supportedLanguages = [
    { id: 'de', title: 'Deutsch', isDefault: true },
    { id: 'en', title: 'English' },
]

export default {
    name: "localeTextSEO",
    type: "object",
    title: 'Localized Text',
    options: {
        columns: 2
    },
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: "text",
        validation: Rule => Rule.max(180),
    })),
}
