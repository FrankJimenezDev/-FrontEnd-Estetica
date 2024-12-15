import React from 'react'
import { Link } from 'react-router-dom'
import { socialMedia } from '../../interfaces/SocialMediaFooter.interface'

export const SocialNetwords: React.FC<{
    title: string, 
    socialMedias: socialMedia[]
}> = ({ title, socialMedias }) => {

    return (
        <section className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <p className="mt-2 text-sm text-gray-500">{title}</p>

            <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    {
                        socialMedias.map((socialMedia, idx) => {

                            const { name, pathNetwork, pathLogo } = socialMedia;
                            const isInstagram = name === "Instagram";

                            return (
                                <Link key={idx} to={pathNetwork} className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" aria-label={socialMedia.name}>
                                    <svg
                                        fill={isInstagram ? "none" : "currentColor"}
                                        stroke={isInstagram ? "currentColor" : undefined}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24">
                                        {
                                            isInstagram
                                                ? <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                : undefined
                                        }
                                        <path d={pathLogo}></path>

                                    </svg>
                                </Link>
                            )
                        })
                    }
                </span>
            </div>

        </section >
    )
}
