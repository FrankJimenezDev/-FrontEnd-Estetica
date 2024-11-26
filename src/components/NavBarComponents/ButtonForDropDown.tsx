import React from "react"
import { ButtonForDropDownI } from "../interfaces/ButtonForDropDown.interface"


export const ButtonForDropDown : React.FC<ButtonForDropDownI> = ({handleOpen, open}) => {
    return (
        <button
            onClick={() => handleOpen()}
            className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left text-gray-900 bg-gray-200 rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >
            <span>Menú</span>
            <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${open ? "rotate-180" : "rotate-0"
                    }`}
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    )
}
