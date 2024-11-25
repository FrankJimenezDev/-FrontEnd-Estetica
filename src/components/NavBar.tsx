import { useState } from "react";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <div className="antialiased bg-gray-100 dark:bg-gray-900">
                <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
                    <div className="bg-black flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="flex flex-row items-center justify-between p-4">
                            <a
                                href="#"
                                className="text-lg font-semibold tracking-widest text-gold uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
                            >
                                Dra Mariangela Jimenez
                            </a>
                            <button
                                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                                onClick={() => setOpen(!open)}
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="w-6 h-6"
                                >
                                    {!open ? (
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    ) : (
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                        <nav
                            className={`${open ? "flex" : "hidden"
                                } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
                        >
                            {["Blog", "Portfolio", "About", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    className="px-4 py-2 mt-2 text-sm font-semibold text-gold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:bg-gray-800 focus:bg-gray-700 focus:outline-none focus:shadow-outline"
                                    href="#"
                                >
                                    {item}
                                </a>

                            ))}
                            <div
                                className="relative"
                                onMouseLeave={() => setMoreOpen(false)}
                            >
                                <button
                                    onClick={() => setMoreOpen(!moreOpen)}
                                    className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left text-gray-900 bg-gray-200 rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                >
                                    <span>More</span>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${moreOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {moreOpen && (
                                    <div className="absolute right-0 w-full mt-2 origin-top-right md:max-w-screen-sm md:w-screen">
                                        <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {[
                                                    {
                                                        title: "Appearance",
                                                        description: "Easy customization",
                                                    },
                                                    { title: "Comments", description: "Latest comments" },
                                                    {
                                                        title: "Analytics",
                                                        description: "Take a look at your statistics",
                                                    },
                                                ].map((item, index) => (
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
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
