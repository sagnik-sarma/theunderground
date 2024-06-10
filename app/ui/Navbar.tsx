'use client';
import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiMoonStarsLight, PiSunDimLight } from 'react-icons/pi';
import { PiHamburgerLight } from 'react-icons/pi';
const montserrat = Montserrat({ weight: "500", style: "normal", subsets: ["cyrillic"] })

type NavBarLink = {
    name: string,
    href: string
}
type NavBarOptions = {
    links: NavBarLink[]
}

const defaultNavBarLinks: NavBarLink[] = [
    {
        name: "Portfolio",
        href: "/portfolio"
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "About",
        href: "/aboutSagnik"
    },
    {
        name: "Contact",
        href: "/contact"
    },

];

const defaultNavBarOptions: NavBarOptions = {
    links: defaultNavBarLinks
}

export default function Navbar({
    navBarOptions = defaultNavBarOptions
}: {
    navBarOptions: NavBarOptions
}) {
    const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
    const [leftLinks, setLeftLinks] = useState<NavBarLink[]>();
    const [rightLinks, setRightLinks] = useState<NavBarLink[]>();
    const [darkMode, setDarkMode] = useState<string>("true");

    const toggleHamburger = (event: React.MouseEvent<HTMLButtonElement>) => {
        setHamburgerOpen((prevState) => !prevState);
    };

    const toggleDarkMode = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (darkMode == "false") {
            document.getElementsByTagName("html")?.[0].classList.add("dark");
            localStorage.setItem("darkModeEnabled", "true");
            setDarkMode("true");
        } else {
            document.getElementsByTagName("html")?.[0].classList.remove("dark");
            localStorage.setItem("darkModeEnabled", "false");
            setDarkMode("false");
        }
    }

    useEffect(() => {
        if (navBarOptions?.links !== undefined) {
            const noOfLinks = navBarOptions.links.length;
            const isEnoughForLeftSide = noOfLinks < 3 ? false : true;
            let rightSetOfLinks, leftSetOfLinks;
            if (isEnoughForLeftSide) {
                leftSetOfLinks = navBarOptions.links.slice(0, 3);
                rightSetOfLinks = navBarOptions.links.slice(3);
            } else {
                leftSetOfLinks = navBarOptions.links;
            }
            setRightLinks(rightSetOfLinks);
            setLeftLinks(leftSetOfLinks);
        }
    }, [navBarOptions]);

    useEffect(() => {
        if (localStorage.darkModeEnabled === 'true' || (!('darkModeEnabled' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, []);


    return (
        <>
            <header className={`p-8 dark:bg-prussian-blue bg-ivory flex flex-row justify-between xl:justify-center text-prussian-blue dark:text-ivory sticky ${montserrat.className} antialiased`}>
                <div className="hidden md:flex md:flex-row md:justify-between md:flex-grow max-w-screen-xl items-center">
                    <nav className="basis-5/12 lg:basis-4/12 lg:justify-center lg:flex">
                        <ul className="flex flex-row md:gap-8 sm:gap-4 lg:text-xl">
                            {
                                leftLinks?.map(link => {
                                    return (
                                        <Link href={link.href}>{link.name}</Link>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="basis-4/12 lg:basis-5/12 flex lg:justify-center flex-shrink-0 flex-grow items-center">
                        <h1 className="text-xl lg:text-2xl">The Underground</h1>
                    </div>
                    <div className="basis-3/12 lg:basis-3/12">
                        <nav className="flex flex-row gap-10 justify-center items-center lg:text-xl">
                            <button onClick={toggleDarkMode} className="btn border-solid border-2 border-prussian-blue dark:border-ivory rounded-full">
                                <PiMoonStarsLight className="dark:hidden w-5 h-5 lg:w-7 lg:h-7 flex items-center " />
                                <PiSunDimLight className="hidden dark:flex w-5 h-5 lg:w-7 lg:h-7 flex items-center " />
                            </button>
                            <ul className="flex flex-row justify-between">
                                {
                                    rightLinks?.map(link => {
                                        return (
                                            <Link href={link.href}>{link.name}</Link>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="md:hidden flex flex-row flex-grow items-center">
                    <div className="basis-1/12 flex justify-center">
                        <button onClick={toggleHamburger} className="btn">
                            <PiHamburgerLight className="w-7 h-7 sm:w-8 sm:h-8 flex items-center" />
                        </button>
                    </div>
                    <div className="basis-11/12 flex justify-center">
                        <h1 className="text-xl sm:text-2xl">The Underground</h1>
                    </div>
                    <div className="basis-1/12 flex justify-center">
                        <button onClick={toggleDarkMode} className="btn border-solid border-2 border-prussian-blue dark:border-ivory rounded-full">
                            <PiMoonStarsLight className="dark:hidden w-5 h-5 lg:w-7 lg:h-7 flex items-center " />
                            <PiSunDimLight className="hidden dark:flex w-5 h-5 lg:w-7 lg:h-7 flex items-center " />
                        </button>
                    </div>
                </div>
            </header>
            <div className={clsx(`md:hidden flex flex-col items-center w-full dark:bg-prussian-blue bg-ivory dark:text-ivory text-prussian-blue sticky ${montserrat.className} p-6`,
                {
                    'hidden': !hamburgerOpen
                })}>
                <h1 className="text-xl sm:text-2xl border-b-2">Menu</h1>
                <ul className="flex flex-col w-full items-center text-lg sm:text-xl p-4">
                    {
                        navBarOptions?.links?.map(link => {
                            return (
                                <Link className="p-2 w-full text-center" href={link.href}>{link.name}</Link>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    )
}