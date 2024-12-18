import { useState } from 'react';
import expandivCardImage from '../assets/expandivCardImage.jpg';

export const ExpandivCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const panels = [
        {
            backgroundImage: `url(${expandivCardImage})`,
            text: 'Explore the World',
        },
        {
            backgroundImage: `url(${expandivCardImage})`,
            text: 'Explore the World',
        },
        {
            backgroundImage: `url(${expandivCardImage})`,
            text: 'Explore the World',
        },
        {
            backgroundImage: `url(${expandivCardImage})`,
            text: 'Explore the World',
        },
    ];

    return (
        <div className="bg-white flex mt-[75px] justify-center items-center overflow-hidden bg-gray-50">
            <div className="flex w-[90vw] max-w-screen-xl">
                {panels.map((panel, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center justify-center h-[80vh] bg-cover bg-center bg-no-repeat rounded-[50px] cursor-pointer transition-[flex] duration-700 ease-in mx-[10px] ${activeIndex === index ? 'flex-[5]' : 'flex-[0.5]'
                            } ${index >= 3 ? 'hidden sm:block' : ''}`}
                        style={{ 
                            backgroundImage: panel.backgroundImage
                        }}
                        onClick={() => setActiveIndex(index)}
                    >
                        <h3
                            className={`text-white text-xl font-semibold absolute bottom-[20px] left-[20px] transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            {panel.text}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
