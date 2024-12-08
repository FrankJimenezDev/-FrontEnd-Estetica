import React from "react"
import { ListMenu } from "../../interfaces/DropDownMenu.interfaces"

export const DropdownMenu : React.FC<ListMenu> = ({items}) => {
    return (
        <div className="absolute right-0 w-full mt-0 origin-top-right md:max-w-screen-sm md:w-screen">
            <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            className="flex flex-row items-start p-2 bg-transparent rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#"
                        >
                            <div className="p-3 text-white bg-teal-500 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 md:w-6 md:h-6"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
