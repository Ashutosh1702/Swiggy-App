import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { BsSuperscript } from 'react-icons/bs';

function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoMdSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "New"
        },
        {
            icon: "",
            name: "Help"
        },
        {
            icon: "",
            name: "SignIn"
        },
        {
            icon: "",
            name: "Cart",
            sup: ""
        },
    ]

    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='w-[400px] bg-white h-full absolute duration-[400ms]'
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}
                ></div>
            </div>
            <header className='p-[15px] shadow-xl text-[#282c3f] sticky top-0 bg-white z-[9999]'>
                <div className='max-w-[1200px] mx-auto border  flex items-center'>
                    <div className='w-[100px] border '>
                        <img src="image/Swiggy-Emblem-1536x864.png" className='w-full' alt="" />
                    </div>
                    <div className=''>
                        <span className='font-bold border-b-[3px] border-[black]'> Sanjay Park </span>
                        Pune Airport Departure, New Airport <RxCaretDown fontSize={25} className=' font-bold inline text-[0.9rem] text-[#ff5200;]
                        cursor-pointer' onClick={showSideMenu} />
                    </div>
                    <nav className='flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                        {
                            links.map(
                                (link, index) => (
                                    <li key={index} className=' cursor-pointer flex hover:text-[#fc8019] items-center gap-2'>
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </li>
                                )
                            )
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
