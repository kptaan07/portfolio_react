import React from 'react'
import html from "../assets/html.png"
function Experience() {
    const techs = [
        {
            name: "HTML",
            src: html,
            id: 1,
            style: 'shadow-orange-500'
        },
        {
            name: "HTML",
            src: html,
            id: 2,
            style: 'shadow-orange-500'
        },
        {
            name: "HTML",
            src: html,
            id: 3,
            style: 'shadow-orange-500'
        },
        {
            name: "HTML",
            src: html,
            id: 4,
            style: 'shadow-orange-500'
        },
        {
            name: "HTML",
            src: html,
            id: 5,
            style: 'shadow-orange-500'
        },
        {
            name: "HTML",
            src: html,
            id: 6,
            style: 'shadow-orange-500'
        },
        {
            name: "HTML",
            src: html,
            id: 7,
            style: 'shadow-orange-500'
        },
    ]
    return (
        <div name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full
                h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col
                justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-2
                    border-gray-500 p-2 inline font-serif">Experience</p>
                    <p className="py-6">These are technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3
                 gap-8 p-4 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, name, style }) => (
                        <div key={id} className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={name} className="w-20 mx-auto " />
                            <p className="mt-4">{name}</p>
                        </div>
                    ))

                    }

                </div>
            </div>
        </div>
    )
}

export default Experience
