import logo from '../assets/logo.png'
import {useState} from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/16/solid/index.js";
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () =>{
        setDarkMode(!darkMode)
    }
    return (
        <main className="padding-x py-8">
            <nav className="flex items-center justify-between">
                <div className="flex gap-2">
                    <img
                        src={logo}
                        alt="logo"
                        width={40}
                        // not to distort the image
                        className="object-contain"
                    />
                    <h1 className="font-serif text-[28px] ">tailwindcss</h1>
                </div>
                <div className="flex gap-2">
                    <ul className="flex gap-12 items-center">
                        <li className="font-montserrat leading-normal text-[16px] text-slate-gray">Docs</li>
                        <li className="font-montserrat leading-normal text-[16px] text-slate-gray">Components</li>
                        <li className="font-montserrat leading-normal text-[16px] text-slate-gray">Blog</li>
                        <li className="font-montserrat leading-normal text-[16px] text-slate-gray">Showcase</li>
                    </ul>
                    <div className="border-l border-gray-300 h-6 mx-4"></div>
                    {!darkMode ? (
                        <SunIcon className="h-6 w-6 text-[#38bdf8]"/>
                    ) : (
                        <MoonIcon className="h-6 w-6 text-gray-800"/>
                    )}
                </div>
            </nav>
        </main>
    );
};
export default Navbar;
