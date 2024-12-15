import { ColumsSection } from "../components/FooterComponents/ColumsSection";
import { SocialNetwords } from "../components/FooterComponents/SocialNetwordsSection";

const socialMediasData = {
    title: "Siguenos en todas nuestras redes!!",
    socialMedias : [
        {
            name: 'Facebook',
            pathNetwork: 'https://www.google.com',
            pathLogo: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
        },
        {
            name: 'Twitter',
            pathNetwork: 'https://www.google.com',
            pathLogo: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
        },
        {
            name: 'Instagram',
            pathNetwork: 'https://www.google.com',
            pathLogo: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'
        },
        {
            name: 'WhatsApp',
            pathNetwork: 'https://www.google.com',
            pathLogo: 'M12 2C6.486 2 2 6.486 2 12c0 1.796.47 3.5 1.357 5.014L2 22l4.986-1.352A9.957 9.957 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.553 0-3.047-.444-4.352-1.283l-.312-.196-2.959.804.814-2.906-.203-.318A7.934 7.934 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm3.809-5.334c-.207-.104-1.221-.604-1.41-.673-.189-.07-.327-.104-.465.104-.139.207-.535.673-.656.811-.121.138-.241.156-.448.052-.207-.104-.873-.321-1.664-.988-.615-.527-1.031-1.175-1.152-1.382-.121-.207-.013-.319.092-.422.094-.093.207-.241.31-.362.104-.121.139-.207.207-.345.07-.138.035-.26-.018-.362-.052-.104-.448-1.083-.615-1.48-.163-.392-.328-.34-.448-.345-.118-.005-.26-.006-.402-.006-.14 0-.362.052-.553.26-.191.207-.726.709-.726 1.731s.744 2.006.847 2.145c.104.138 1.462 2.235 3.543 3.136.492.213.877.34 1.176.436.493.157.943.135 1.297.083.396-.059 1.221-.497 1.392-.975.172-.478.172-.89.121-.975-.052-.086-.189-.138-.396-.242z'
        }
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
                    <ColumsSection footerData={ footerData } />
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
