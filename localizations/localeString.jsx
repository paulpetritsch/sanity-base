const supportedLanguages = [
    { id: 'de', title: 'Deutsch', isDefault: true },
    { id: 'en', title: 'English' },
]

export default {
    name: "localeString",
    type: "object",
    title: 'Localized String',
    options: {
        columns: 2
    },
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: "string",
    })),
}
