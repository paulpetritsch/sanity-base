import startseite from "./startseite";
import blockContent from "./blockContent";
import impressum from "./impressum";
import datenschutz from "./datenschutz";
import settings from "./settings";
import localeString from "../localizations/localeString";
import localeBlockContent from "../localizations/localeBlockContent";
import localeText from "../localizations/localeText";
import subpages from "./subpages";
import localeTextSEO from '../localizations/localeTextSEO'
import localeStringSEO from '../localizations/localeStringSEO'
import seo from '../objects/seo'
import imageAlt from '../objects/imageAlt'
import youtube from '../objects/youtube'
import newsletter from '../texts/newsletter'
import cookie from '../texts/cookie'
import error from '../texts/error'


export const schemaTypes = [
    startseite,
    blockContent,
    impressum,
    datenschutz,
    settings,
    localeString,
    localeBlockContent,
    localeText,
    subpages,
    localeTextSEO,
    localeStringSEO,
    seo,
    imageAlt,
  youtube,
  newsletter,
  cookie,
  error
]
