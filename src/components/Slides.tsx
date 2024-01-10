

import { useEffect, useState } from 'react'
import { Image } from '.'

const Slides = ({ slides }: { slides: Record<string, any>[]}) => {
    const [ activeSlide, setActiveSlide ] = useState([2, 0]);

    useEffect(() => {

        let timeout = setTimeout(() => {

        let newSlide = [];

        if( activeSlide.length < 2 ) {
            newSlide = [...activeSlide, activeSlide.length];
        } else {
            let current = activeSlide[1];
            let next = activeSlide[1] + 1;

            if(next < slides.length)
            newSlide = [current, next];
            else {
            newSlide = [current, 0];
            }

        }

        console.log(newSlide);
        setActiveSlide(newSlide);

        }, 7000);

        return () => clearTimeout(timeout);

    }, [activeSlide]);
    
    return (
        <div className="sliders relative z-0 min-h-screen">
            {slides.map((item, index) => 
            <div key={index} className={`absolute top-0 left-0 h-full w-full z-${10 * (activeSlide.indexOf(index) < 0 ? 0 : activeSlide.indexOf(index))} ${activeSlide.includes(index) ? "clip-in" : "clip-out"} `}>
                <Image image={item.image} animate={'zoom-in'}>
                <div className="text-white bg-gradient-to-r from-black to-transparent">
                    <div className="">
                    <div className=" min-h-screen p-24 flex items-center">
                        <div className="max-w-[600px]">
                        <h1 data-aos="zoom-in-up" className="text-5xl leading-tight capitalize">{item.title}</h1>
                        <button data-aos="zoom-in-up" className="px-6 py-4 bg-[#e88b28] capitalize mt-3">Get a consultation</button>
                        </div>
                    </div>
                    </div>
                </div>
                </Image>
            </div>
            )}
        </div>
    )
}

export default Slides