import { useState } from "react";
import { NavItems } from "./NavBarComponents/NavItems";
import { NavTitle } from "./NavBarComponents/NavTitle";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpenDropDownMenuResponsive = () => {
        setOpen(!open)
    }

    return (
        <div className="bg-black flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <NavTitle open={open} handleOpen={handleOpenDropDownMenuResponsive} />
            <NavItems open={open} />
        </div>
    );
};
