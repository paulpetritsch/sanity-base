export default {
    title: 'Video with Image',
    name: 'videoWithPoster',
    type: 'object',
    fields: [
        {
            name: 'video',
            type: 'string',
            title: 'Video YT ID',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
    ],
    preview: {
        select: {
            title: 'video',
            image: 'image'
        },
        prepare(selection){
            const {title, image} = selection
            return {
                title: title,
                media: image
            }
        }
    },
}
