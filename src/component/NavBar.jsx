import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

function NavBar() {
    const [nav, setNav] = useState(true);

    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "portfolio" },
        { id: 4, link: "experience" },
        { id: 4, link: "contact" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
            <div>
                <Link to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer">
                    <h1 className="great-vibes-regular text-4xl">Pranshu</h1>
                </Link>
            </div>


            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-end">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium hover:text-gray-400 duration-300 scale-105">
                        <Link to={link} smooth={true} duration={500} offset={-80}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Toggle */}
            <div onClick={() => setNav(!nav)} className="pr-4 hover:text-gray-400 duration-300 scale-105">
                {nav ? <FaBars className="md:hidden cursor-pointer text-2xl" /> : <FaTimes className="md:hidden cursor-pointer text-2xl" />}
            </div>

            {/* Mobile Navigation Menu */}
            {!nav && (
                <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-zinc-50">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-gray-400 duration-300 scale-105">
                            <Link onClick={() => setNav(true)} to={link} smooth={true} duration={500} offset={-80}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NavBar;
