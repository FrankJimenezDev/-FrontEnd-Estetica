import React from "react"
import { ListadoComponents } from "./listadoComponents"



interface sectionFooterDataI {
    title: string;
    listItems: string[]
}

interface FooterDataI {
    footerData: sectionFooterDataI[]
}

export const ColumsSection: React.FC<FooterDataI> = ({ footerData }) => {
    return (
        <section className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            {
                footerData.map((data, idx) => {

                    const { title, listItems } = data;

                    return (
                        <div key={idx} className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">{title}</h2>
                            <nav className="mb-10 list-none">
                                <ListadoComponents items={listItems} />
                            </nav>
                        </div>
                    )
                })
            }
        </section>
    )
}
