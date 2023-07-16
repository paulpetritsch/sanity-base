import {FaCookieBite} from 'react-icons/fa'

export default {
    title: 'Cookie Option',
    name: 'cookieOption',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
        modal: {type: 'popover'}
    },
    fields: [
        {
            name: 'title',
            type: 'localeString',
            title: 'Title',
        },
        {
            name: 'value',
            type: 'string',
            title: 'Value',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare(selection){
            const {title} = selection
            return {
                title: title.de,
                media: FaCookieBite
            }
        }
    }
}
