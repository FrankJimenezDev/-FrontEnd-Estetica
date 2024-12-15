import React from 'react'

interface Items {
    items: string[]
}

export const ListadoComponents: React.FC<Items> = ({ items }) => {

    return items.map((item, idx) => (
        <li key={idx} className="mt-3">
            <a className="text-gray-500 cursor-pointer hover:text-gray-900">{item}</a>
        </li>
    ))
}
