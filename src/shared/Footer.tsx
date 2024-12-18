import { ColumsSection } from "../components/FooterComponents/ColumsSection";
import { SocialNetwords } from "../components/FooterComponents/SocialNetwordsSection";

const socialMediasData = {
    title: "Siguenos en todas nuestras redes!!",
    socialMedias: [
        {
            name: 'Facebook',
            pathNetwork: '#',
            pathLogo: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
        },
        {
            name: 'Twitter',
            pathNetwork: '#',
            pathLogo: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
        },
        {
            name: 'Instagram',
            pathNetwork: 'https://www.instagram.com/dramariangelajimenez/',
            pathLogo: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'
        },
        {
            name: 'TikTok',
            pathNetwork: 'https://www.tiktok.com/@dramariangelajimenez?referer_url=heylink.me%2Fdramariangelajimenez%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaaXIQRYIG1bQf958wX6bOIWs5eO6oeeftonZUhtrJcuEUnvNOU9b4KJFiE_aem_WEeEojO2m3aQLto68IPc5A&refer=creator_embed&embed_source=121374463%2C121468991%2C121439635%2C121433650%2C121404359%2C121477481%2C121351166%2C121487028%2C121331973%2C120811592%2C120810756%2C121489688%3Bnull%3Bembed_creator_card',
            pathLogo: 'M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z'
        },
        {
            name: 'WhatsApp',
            pathNetwork: '#',
            pathLogo: 'M12 2C6.486 2 2 6.486 2 12c0 1.796.47 3.5 1.357 5.014L2 22l4.986-1.352A9.957 9.957 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.553 0-3.047-.444-4.352-1.283l-.312-.196-2.959.804.814-2.906-.203-.318A7.934 7.934 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm3.809-5.334c-.207-.104-1.221-.604-1.41-.673-.189-.07-.327-.104-.465.104-.139.207-.535.673-.656.811-.121.138-.241.156-.448.052-.207-.104-.873-.321-1.664-.988-.615-.527-1.031-1.175-1.152-1.382-.121-.207-.013-.319.092-.422.094-.093.207-.241.31-.362.104-.121.139-.207.207-.345.07-.138.035-.26-.018-.362-.052-.104-.448-1.083-.615-1.48-.163-.392-.328-.34-.448-.345-.118-.005-.26-.006-.402-.006-.14 0-.362.052-.553.26-.191.207-.726.709-.726 1.731s.744 2.006.847 2.145c.104.138 1.462 2.235 3.543 3.136.492.213.877.34 1.176.436.493.157.943.135 1.297.083.396-.059 1.221-.497 1.392-.975.172-.478.172-.89.121-.975-.052-.086-.189-.138-.396-.242z'
        },
    ]
}

const footerData = [
    {
        title: 'ABOUT',
        listItems: [
            'Company',
            'Careers',
            'Blog'
        ]
    },
    {
        title: 'SUPOPORT',
        listItems: [
            'Contact Support',
            'Help Resources',
            'Release Updates'
        ]
    },
    {
        title: 'PLATFORM',
        listItems: [
            'Terms & Privacy',
            'Pricing',
            'FAQ'
        ]
    },
    {
        title: 'Contact',
        listItems: [
            'Send a Message',
            'Request a Quote',
            '+123-456-7890'
        ]
    },
]

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex items-end w-full bg-white">
            <footer className="w-full text-gray-700 bg-gray-100 body-font">
                <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
                    <SocialNetwords
                        title={socialMediasData.title}
                        socialMedias={socialMediasData.socialMedias} />
                    <ColumsSection footerData={footerData} />
                </div>
                <div className="bg-gray-300">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-gray-700 capitalize xl:text-center">© {currentYear} All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
