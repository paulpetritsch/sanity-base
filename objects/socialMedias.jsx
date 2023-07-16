import {FcInspection} from 'react-icons/fc'
import {IoShareSocial} from 'react-icons/io5'
import {
    BsBehance,
    BsDribbble,
    BsFacebook,
    BsInstagram,
    BsLinkedin, BsSnapchat,
    BsSpotify,
    BsTelegram, BsTiktok,
    BsWhatsapp, BsYoutube
} from 'react-icons/bs'
import {BiLogoXing} from 'react-icons/bi'
import {SiBandcamp} from 'react-icons/si'

const socialapps = [
    {title: 'Instagram', value: 'instagram'},
    {title: 'Facebook', value: 'facebook'},
    {title: 'LinkedIn', value: 'linkedin'},
    {title: 'Xing', value: 'xing'},
    {title: 'WhatsApp', value: 'whatsapp'},
    {title: 'Telegram', value: 'telegram'},
    {title: 'Behance', value: 'behance'},
    {title: 'Dribble', value: 'dribbble'},
    {title: 'Spotify', value: 'spotify'},
    {title: 'BandCamp', value: 'bandcamp'},
    {title: 'YouTube', value: 'youtube'},
    {title: 'SnapChat', value: 'snapchat'},
    {title: 'TikTok', value: 'tiktok'},
    {title: 'BeReal', value: 'bereal'},
]

export default {
    title: 'Social Media Profil',
    name: 'socialMedias',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
        modal: {type: 'popover'},
        columns: 3
    },
    fields: [
        {
            name: 'type',
            type: 'string',
            title: 'Typ',
            options: {
                list: socialapps,
                layout: 'dropdown'
            }
        },
        {
            name: 'title',
            type: 'string',
            title: 'Username',
        },
        {
            name: 'value',
            type: 'url',
            title: 'Link (mit https:// am Start)',
        },
    ],
    preview: {
        select: {
            title: 'title',
            type: 'type'
        },
        prepare(selection){
            const {title, type} = selection
            let media = IoShareSocial
            console.log(type);
            switch(type){
                case 'instagram': media = BsInstagram;break;
                case 'facebook': media = BsFacebook;break;
                case 'linkedin': media = BsLinkedin;break;
                case 'xing': media = BiLogoXing;break;
                case 'whatsapp': media = BsWhatsapp;break;
                case 'telegram': media = BsTelegram;break;
                case 'behance': media = BsBehance;break;
                case 'dribbble': media = BsDribbble;break;
                case 'spotify': media = BsSpotify;break;
                case 'bandcamp': media = SiBandcamp;break;
                case 'youtube': media = BsYoutube;break;
                case 'snapchat': media = BsSnapchat;break;
                case 'tiktok': media = BsTiktok;break;
            }
            return {
                title: title,
                subtitle: type,
                media: media
            }
        }
    },
}
