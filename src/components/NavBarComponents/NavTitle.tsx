import React from 'react'
import { ButtonForDropDownResposive } from './ButtonForDropDownResposive'
import { ButtonForDropDownI } from '../../interfaces/ButtonForDropDown.interface'
import { NavLink } from 'react-router-dom'

export const NavTitle: React.FC<ButtonForDropDownI> = ({ open, handleOpen }) => {

    return (
        <div className="flex flex-row items-center justify-between p-4">
            <NavLink
                to="/"
                className="text-lg font-semibold tracking-widest text-gold uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
            >
                Dra Mariangela Jimenez
            </NavLink>
            <ButtonForDropDownResposive handleOpen={handleOpen} open={open} />
        </div>
    )
}
