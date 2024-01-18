import { useSetting } from "@/api/settings/read";
import { Image } from "@/components";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

import {} from 'react'
import { Link } from "react-router-dom";

const Footer = () => {

  const { data } = useSetting({ id: 1 });

  return (
    <Image image="images/happy.jpg">

        <footer className="p-24 max-[566px]:px-6 bg-black bg-opacity-80 text-center text-white">
            <div className="max-w-[550px] mx-auto capitalize">
            <div data-aos="zoom-in-up" className="h1 text-4xl max-[400px]:text-3xl leading-normal">the right lawyer makes all the difference</div>
            <Link to={'/contact'}>
              <button data-aos="zoom-in-up" className="px-6 py-4 bg-[#e88b28] capitalize mt-3">Get a consultation</button>
            </Link>
            <div className="flex items-center gap-6 mt-6 justify-center">
                <Link to={data?.instagram} data-aos="zoom-in-up" className="icon bg-black border-2  h-[50px] w-[50px] rounded-full flex items-center justify-center">
                  <Linkedin  size={30} />
                </Link>
                <Link to={data?.twitter} data-aos="zoom-in-up" className="icon bg-blue-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                  <Twitter fill="white" size={30} />
                </Link>
                <Link to={data?.facebook} data-aos="zoom-in-up" className="icon bg-blue-600 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                  <Facebook fill="white" size={30} />
                </Link>
                <Link to={`mailto:${data?.email}`} data-aos="zoom-in-up" className="icon bg-red-600 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                  <Mail size={30} />
                </Link>
            </div>
            </div>
        </footer>
        <div className="bg-black p-12 text-gray-400 pops text-center">
            © 2024 ELTHED@LAW CONSULT. All rights reserved.
        </div>
    </Image>
  )
}

export default Footer