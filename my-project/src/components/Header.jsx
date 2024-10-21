
import React, { useState } from 'react'; 

import { RxCaretDown } from "react-icons/rx";

import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";



export default function Header() {
    const [toggle,setToggle] = useState(false);

    const showSideMenu = () =>{
        setToggle(true);
    }
    const hideSideMenu = () => {
        setToggle(false);

    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <RiDiscountPercentLine />,
            name: "Offers",
            sup:"New"
        },
        {
            icon: < IoHelpBuoyOutline/>,
            name: "Help"
        },
        {
            icon: <FaRegUser />,
            name: "Sign In"
        },
        {
            icon: <LuShoppingBag/>,
            name: "Cart"
        }
    ]
  return (
    <>
    
        <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden"
        }}>
            <div onClick={(e) => {
                e.stopPropagation();
            }}className='w-[500px] bg-white h-full absolute duration-[400ms]'
            style={{
                left: toggle ? '0%' : '-100%'
            }}></div>
        </div>
        <header className='p-[15px] shadow-xl'>
            <diV className='max-w-[1200px] mx-auto border  flex items-center'>
                <div className='w-[100px]'>
                    <img src="images\swiggy logo.webp" className='w-full' alt=""/>
                </div>
                <div className=''>
                    <span className='font-bold  border-b-[3px] border-[black]'>Khamaria </span>
                    Jabalpur, MadhyaPradesh, India <RxCaretDown  fontSize={25} className='font-bold inline  text-[#fc8019] cursor-pointer'onClick={showSideMenu} />

                </div>
                <nav className='flex list-none gap-10    ml-auto text-[18px] font-semibold'>
                    {
                        links.map(
                            (link,index) => {
                                return <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center gap-2'>
                                  
                                    {link.icon}
                                    {link.name}
                                    <sup>{link.sup}</sup>
                                   
                                </li>

                            }

                        )
                    }
                  
                  
                </nav>
           
            </diV>

        </header>
    </>
  

 
    

   
  )
}

