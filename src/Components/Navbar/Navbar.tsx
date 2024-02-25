import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react';

interface NavbarProps {
    menuName: string[];
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const {
        menuName,
    } = props
    const [isOpen, setOpen] = useState<boolean>(false)

    const handleToggle = ():void => {
        setOpen(!isOpen)

        if (!isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }

    return (
        <nav>
            <div className={"hidden max-md:block"}><Hamburger toggled={isOpen} toggle={handleToggle} /></div>

            <ul className={`flex gap-6 ${isOpen ? '' : 'max-md:hidden'} ${isOpen ? 'max-md:absolute z-50 bg-white left-0 w-full h-screen flex-col items-center pt-16' : ''}`}>
                {menuName?.map((name, index) => (
                    name !== '' && (
                        <li key={index}>
                            <Link
                                to={name === 'home' ? '/' : `/${name.replace(/\s+/g, '-')}`}
                                className={`uppercase ${index === menuName.length - 1 ?
                                    'text-sm font-semibold text-blue py-2 px-7 border-2 border-blue rounded-full hover:bg-blue hover:text-white'
                                    :
                                    'text-sm font-semibold text-black hover:text-blue'}`}
                            >
                                {name}
                            </Link>
                        </li>
                    )
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
