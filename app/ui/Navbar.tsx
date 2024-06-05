import { Montserrat } from "next/font/google";
import { PiMoonStarsLight } from 'react-icons/pi';
import { PiHamburgerLight } from 'react-icons/pi';
const montserrat = Montserrat({ weight: "500", style: "normal", subsets: ["cyrillic"] })

export default function Navbar() {
    return (
        <header className={`p-8 bg-prussian-blue flex flex-row justify-between xl:justify-center text-slate-100 sticky ${montserrat.className} antialiased`}>
            <div className="hidden md:flex md:flex-row md:justify-between md:flex-grow max-w-screen-xl items-center">
                <nav className="basis-5/12 lg:basis-4/12 lg:justify-center lg:flex">
                    <ul className="flex flex-row md:gap-8 sm:gap-4 lg:text-xl">
                        <li>Projects</li>
                        <li>Blog</li>
                        <li>About Me</li>
                    </ul>
                </nav>
                <div className="basis-4/12 lg:basis-5/12 flex lg:justify-center flex-shrink-0 flex-grow items-center">
                    <h1 className="text-xl lg:text-2xl">The Underground</h1>
                </div>
                <div className="basis-3/12 lg:basis-3/12">
                    <nav className="flex flex-row gap-10 justify-center items-center lg:text-xl">
                        <button className="btn border-solid border-2 rounded-full"><PiMoonStarsLight className="w-5 h-5 lg:w-7 lg:h-7 flex items-center " /></button>
                        <ul className="flex flex-row justify-between">
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="md:hidden flex flex-row flex-grow items-center">
                <div className="basis-1/12 flex justify-center">
                    <button className="btn">
                        <PiHamburgerLight className="w-7 h-7 sm:w-8 sm:h-8 flex items-center" />
                    </button>
                </div>
                <div className="basis-11/12 flex justify-center">
                    <h1 className="text-xl sm:text-2xl">The Underground</h1>
                </div>
            </div>
        </header>
    )
}