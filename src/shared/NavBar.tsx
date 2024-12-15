import { useState } from "react";
import { NavItems } from "../components/NavBarComponents/NavItems";
import { NavTitle } from "../components/NavBarComponents/NavTitle";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpenDropDownMenuResponsive = () => {
        setOpen(!open)
    }

    return (
        <div className="bg-black fixed top-0 w-full flex flex-col max-w-screen px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 z-50">
            <NavTitle open={open} handleOpen={handleOpenDropDownMenuResponsive} />
            <NavItems open={open} />
        </div>

    );
};
