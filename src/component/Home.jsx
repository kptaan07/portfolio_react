import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/147941323.jpeg"; // Update with the correct image path
const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
                {/* Left Section - Text */}
                <div className="flex flex-col justify-center h-full md:w-1/2">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-snug">
                        I'm a Full Stack Developer
                    </h1>
                    <p className="text-gray-400 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
                        I have 8 years of experience building and designing software.
                        Currently, I enjoy working on web applications using technologies
                        like <span className="text-blue-500">React</span>,{" "}
                        <span className="text-green-500">Tailwind</span>,{" "}
                        <span className="text-yellow-500">Next.js</span>, and{" "}
                        <span className="text-pink-500">GraphQL</span>.
                    </p>

                </div>

                {/* Right Section - Image */}
                <div className="flex items-center justify-center w-full mt-8 md:w-1/2 md:mt-0">
                    <img
                        src={HeroImage}
                        alt="Profile"
                        className="rounded-2xl w-1/2 sm:w-2/3 md:w-full lg:w-5/6 max-h-[50vh]"
                    />
                </div>
            </div>
        </div>
    );
};


export default Home;
