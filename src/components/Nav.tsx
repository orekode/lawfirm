

import { ChevronRight, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Lawyers",
    link: "/lawyers",
  },

  {
    name: "Areas of Litigation",
    link: "/",
  },

  {
    name: "Contact Us",
    link: "/",
  },
]

const Nav = () => {
    const [ visible, setVisible ] = useState<boolean>(true);

    return (
        <div>
            <nav className="text-white px-24 py-6 flex items-center justify-between fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
                <div className="logo">ELTHED LOGO</div>

                <div className={`nav-links flex items-center max-[1075px]:items-start gap-6 max-[1075px]:gap-1 max-[1075px]:fixed top-0 ${ visible ? 'left-0' : '-left-96'} transition-all duration-300 max-[1075px]:bg-white max-[1075px]:flex-col max-[1075px]:h-screen max-[1075px]:w-[320px] max-[1075px]:p-6 max-[1075px]:py-12 relative`}>

                    {navs.map(( item, index ) => 
                        <div key={index} className="pops max-[1075px]:text-black max-[1075px]:flex justify-between items-center max-[1075px]:w-full max-[1075px]:text-lg max-[1075px]:border-b max-[1075px]:py-3 max-[1075px]:hover:bg-[#fff9c5] max-[1075px]:hover:pl-3  transition-all duration-200">
                            <span>{item.name}</span>
                            <div className="min-[1075px]:hidden">
                                <ChevronRight strokeWidth={1}/>
                            </div>
                        </div>
                    )}

                    <button  className="bg-white text-neutral-700 max-[1075px]:text-white max-[1075px]:bg-[#ffa03a] max-[1075px]:w-full  px-6 py-2 capitalize">
                        Give us a call
                    </button>

                    <div onClick={() => setVisible(!visible)} className="min-[1075px]:hidden absolute top-0 right-0 bg-neutral-800 hover:bg-red-400 rounded-bl-3xl flex items-center justify-center h-[40px] w-[40px]">
                        <X strokeWidth={1}/>
                    </div>
                </div>

                <div onClick={() => setVisible(!visible)} className="min-[1075px]:hidden w-[40px]">
                    <div className="bg-white h-0.5 w-full my-2"></div>
                    <div className="bg-white h-0.5 w-full my-2"></div>
                    <div className="bg-white h-0.5 w-full my-2"></div>
                </div>
            </nav>
        </div>
    )
}

export default Nav