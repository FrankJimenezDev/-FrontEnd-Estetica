import React, { useState } from "react";
import { ButtonForDropDown } from "./ButtonForDropDown"
import { DropdownMenu } from "./DropdownMenu"

const dropDownMenuItems = [
    {
        title: "Redes Sociales",
        description: "Siguenos para estar al tanto de todo lo que ofrecemos",
    },
    { title: "Comments", description: "Latest comments" },
    {
        title: "Analytics",
        description: "Take a look at your statistics",
    },
]

const navBarItems = [
    { Title: "Inicio", path: "/" },
    { Title: "Sobre Nosotros", path: "/" },
    { Title: "Catalogo", path: "/" },
    { Title: "Agenda", path: "/" }
];

export const NavItems: React.FC<{ open: boolean }> = ({ open }) => {

    const [moreOpen, setMoreOpen] = useState(false);

    const handleOpenDropDownMenu = () => {
        setMoreOpen(!moreOpen)
    }
    return (
        <nav
            className={`${open ? "flex" : "hidden"
                } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
        >
            {navBarItems.map((item, idx) => (
                <a
                    key={idx}
                    className="px-4 py-2 mt-2 text-sm font-semibold text-gold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:bg-gray-800 focus:bg-gray-700 focus:outline-none focus:shadow-outline"
                    href="#"
                >
                    {item.Title}
                </a>

            ))}
            <div
                className="relative"
                onMouseLeave={() => setMoreOpen(false)}
            >
                <ButtonForDropDown handleOpen={handleOpenDropDownMenu} open={open} />
                {moreOpen && (<DropdownMenu items={dropDownMenuItems} />)}
            </div>
        </nav>
    )
}