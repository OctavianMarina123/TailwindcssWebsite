import logo from '../assets/logo.png'
import {useState} from "react";
import {MoonIcon, SunIcon, MagnifyingGlassIcon, EllipsisHorizontalIcon} from "@heroicons/react/16/solid/index.js";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () =>{
        setDarkMode(!darkMode)
    }
    return (
        <main className="px-4 py-4 sm:px-8 sm:py-4 bg-gray-50">
            <nav className="flex items-center justify-between">
                <div className="flex gap-2">
                    <img
                        src={logo}
                        alt="logo"
                        // not to distort the image
                        className="object-contain w-8 sm:w-8"
                    />
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-900">tailwindcss</h1>
                </div>
                <div className="sm:flex gap-2 hidden">
                    <ul className="flex gap-8 items-center">
                        <li className="font-montserrat leading-normal text-[14px] text-gray-600 font-semibold">Docs</li>
                        <li className="font-montserrat leading-normal text-[14px] text-gray-600 font-semibold">Components</li>
                        <li className="font-montserrat leading-normal text-[14px] text-gray-600 font-semibold">Blog</li>
                        <li className="font-montserrat leading-normal text-[14px] text-gray-600 font-semibold">Showcase</li>
                    </ul>
                    <div className="border-l border-gray-300 h-6 mx-4"></div>
                    {!darkMode ? (
                        <SunIcon className="h-6 w-6 text-[#38bdf8]"/>
                    ) : (
                        <MoonIcon className="h-6 w-6 text-gray-800"/>
                    )}
                </div>
                <div className="sm:hidden flex">
                    <div className="flex gap-5">
                        <MagnifyingGlassIcon className="text-gray-500 h-5 w-5"/>
                        <EllipsisHorizontalIcon className="text-gray-500 h-5 w-5"/>
                    </div>
                </div>
            </nav>
        </main>
    );
};
export default Navbar;
