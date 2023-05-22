import { FcSettings, FcKindle, FcHome, FcPrivacy } from 'react-icons/fc'

export default (S) =>
    S.list()
        .title('Base Sanity')
        .items([
            S.listItem()
                .title('Startseite').icon(FcHome)
                .child(
                    S.document()
                        .schemaType('startseite')
                        .documentId('startseite')
                ),
            ...S.documentTypeListItems().filter(item => ['subpages'].includes(item.getId())),
            S.divider(),
            S.listItem()
                .title('Allgemeine Einstellungen').icon(FcSettings)
                .child(
                    S.document()
                        .schemaType('settings')
                        .documentId('settings')
                ),
            S.listItem()
                .title('Impressum').icon(FcKindle)
                .child(
                    S.document()
                        .schemaType('impressum')
                        .documentId('impressum')
                ),
            S.listItem()
                .title('Datenschutz').icon(FcPrivacy)
                .child(
                    S.document()
                        .schemaType('datenschutz')
                        .documentId('datenschutz')
                ),
        ])
