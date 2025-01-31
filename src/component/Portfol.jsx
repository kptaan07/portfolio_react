import React from 'react'
import arrayDestruct from "../assets/arrayDestruct.jpg"
function portfol() {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: arrayDestruct
        },
        {
            id: 3,
            src: arrayDestruct
        },
        {
            id: 4,
            src: arrayDestruct
        },
        {
            id: 5,
            src: arrayDestruct
        }
    ]
    return (
        <div name="portfolio" className="bg-gradient-to-b
        from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center h-full w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold font-serif border-gray-500 inline border-b-2 ">Portfolio</p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt={src}
                                className="rounded-md  w-full duration-200 hover:scale-105 " />
                            <div className="flex flex-row items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration delay-200
                                hover:scale-105">demo</button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200
                                hover:scale-105">code</button>
                            </div>
                        </div>
                    ))

                    }


                </div>
            </div>
        </div >
    )
}

export default portfol
