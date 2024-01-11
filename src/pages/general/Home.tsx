import { Nav, Image } from "@/components";
import Slides from "@/components/Slides";
import { Facebook, Linkedin, Star, Twitter} from "lucide-react";
import { useEffect, useState } from "react";





const slides = [
  {
    title: "We provide smart solutions to your legal needs",
    image: "/images/statue.jpg"
  },
  {
    title: "Effective legal advice from seasoned lawyers",
    image: "/images/meeting.jpg"
  },
  {
    title: "Expert Counsel for your business objectives",
    image: "/images/business1.jpg"
  },
]



const Home = () => {

  

  return (
    <div>
          <Nav />

          <Slides slides={slides} />

          <section className="p-24 max-[645px]:p-12">
            <div className="text-center">
              <h1 data-aos="zoom-in-up" className="text-6xl max-[645px]:mb-3 max-[645px]:text-4xl font-light">Our Services</h1>
            </div>

            <div className="grid grid-cols-12 max-[1100px]:grid-cols-8 max-[645px]:grid-cols-4 ">

              <div className="col-span-4 text-center">
                <div data-aos="zoom-in-up" className="details pt-12 max-[645px]:pt-6">
                  <div className="font-bold text-2xl max-[645px]:text-xl">Solicitor's Work</div>
                  <div className="mt-3 flex justify-center gap-x-3 flex-wrap max-[1100px]:text-sm">
                    <div className="my-1.5">• Legal Auditing and Prognosis</div>
                    <div className="my-1.5">• Perusals</div>
                    <div className="my-1.5">• Drawing Up</div>
                    <div className="my-1.5">• Out of Court Attendance</div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 max-[645px]:pt-6">
                <div className="h-[260px] max-[645px]:hidden">
                  <img src="/images/wig.png" alt="" className="img-contain" />
                </div>
                <div data-aos="zoom-in-up" className="details text-center">
                  <div className="font-bold text-2xl max-[645px]:text-xl">Advocacy and Court Attendance</div>
                  <div className="mt-3 flex justify-center gap-x-3 flex-wrap max-[1100px]:text-sm">
                    <div className="my-1.5">• Pre-trial Conferencing</div>
                    <div className="my-1.5">• Motions</div>
                    <div className="my-1.5">• ADR Resourcing</div>
                    <div className="my-1.5">• Trials , Defense and Prosecution of claims</div>
                  </div>
                </div>
              </div>

              <div className="col-span-4  text-center">

                <div data-aos="zoom-in-up" className="details pt-12 max-[645px]:pt-6">
                  <div className="font-bold text-2xl max-[645px]:text-xl">Compliance & Processing</div>
                  <div className="mt-3 flex justify-center gap-x-3 flex-wrap max-[1100px]:text-sm">
                    <div className="my-1.5">• Procurement of Rulings, Orders and Judgments</div>
                    <div className="my-1.5">• Searches</div>
                    <div className="my-1.5">• Filings</div>
                    <div className="my-1.5">• Enforcement</div>
                    <div className="my-1.5">• Service of Processes (Local and International)</div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section className="bg-[#e88b28] text-white">
            <div className="grid grid-cols-12 max-[700px]:grid-cols-6">
              <div className="col-span-6 ">
                <div data-aos="zoom-in-up" className="h-[500px]">
                  <img src="/images/lawyer.png" alt="" className="img-contain" />
                </div>
              </div>
              <div className="col-span-6 p-24 pl-0 max-[845px]:p-12 max-[845px]:pl-0 max-[700px]:p-12 flex items-center ">
                <div className="max-[700px]:text-center">
                  <h1 data-aos="zoom-in-up" className="text-4xl">Our Mission</h1>
                  <p data-aos="zoom-in-up" className="mt-1.5 leading-relaxed text-lg">Our Mission is to be a trusted legal partner for individuals, businesses, and organizations. Also to navigate the complexities of the legal landscape on behalf of our clients, ensuring they receive sound legal advice, strategic counsel, and assertive advocacy.</p>
                  <button data-aos="zoom-in-up" className="bg-white px-6 py-3 mt-6 text-lg text-neutral-900">Get in Touch</button>
                </div>
              </div>
            </div>
          </section>

          <section className="p-24 max-[845px]:p-12">
            <div className="text-center flex items-center justify-between gap-3 max-[545px]:block">
              <div className="">
                <h1 data-aos="zoom-in-up" className="text-4xl font-light">Areas of Litigation</h1>
              </div>

                <p data-aos="zoom-in-up" className="max-w-[400px] max-[990px]:hidden mx-auto my-3 text-right">Our seasoned lawyers are trained experts in the following areas of litigation</p>
                
              <button data-aos="zoom-in-up" className="px-6 py-4 bg-[#e88b28] text-white capitalize mt-3">See the complete list</button>
            </div>

            <div className="grid-box gap-6 mt-12">
                {Array.from({length: 4}, (_, index) => 
                  <div data-aos="zoom-in-up" className="relative group hover:scale-105 h-max overflow-hidden transition duration-300" key={index}>
                    <div className="image bg-gray-50 h-[400px] overflow-hidden ">
                      <img src="/images/lawyer.jpg" className="img-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-3">
                      <button className="bg-white group-hover:bg-[#e88b28] group-hover:text-white transition duration-300  px-6 py-3 w-full text-center rounded-t-3xl font-bold">Land  Litigation</button>
                    </div>
                  </div>
                )}
            </div>
          </section>


            <section className="p-12 max-[450px]:p-6">
              <div className="text-center">
                <h1 data-aos="zoom-in-up" className="text-4xl font-light">Client Reviews</h1>
                <p className="max-w-[400px] mx-auto my-3"></p>
              </div>


              <div className="flex flex-wrap justify-center min-[645px]:p-12 gap-6">
                {Array.from({length: 3}, (_, index) => 
                    <div  data-aos="zoom-in-up"className="relative w-[450px] max-[1126px]:w-full bg-white group hover:scale-105 h-max overflow-hidden transition duration-300 p-9" key={index}>
                      <div className="">
                        <div className="mx-auto h-[120px] w-[120px] rounded-full overflow-hidden">
                          <img src="/images/lawyer.jpg" alt="" className="img-cover" />
                        </div>

                        <div className="flex justify-center items-center text-yellow-400 gap-1.5 my-3">
                          {Array.from({length: 5}, (_, index) => 
                            <Star key={index} fill="gold"/>
                          )}
                        </div>

                        <div className="text-center">Adeniyi David Shalom</div>

                      </div>
                      <p className="mt-3 text-center max-[450px]:text-sm">
                        The team at Ethed@Law Consult, demonstrated a deep understanding of the intricacies of my case and provided me with clear and practical legal advice. They took the time to listen to my concerns, answered all my questions, and kept me well informed throughout the process. I felt supported and confident that my best interests were being protected.
                      </p>
                    </div>
                )}
              </div>


            </section>


            <Image image="images/happy.jpg">

              <footer className="p-24 bg-black bg-opacity-80 text-center text-white">
                  <div className="max-w-[550px] mx-auto capitalize">
                    <div data-aos="zoom-in-up" className="h1 text-4xl leading-normal">the right lawyer makes all the difference</div>
                    <button data-aos="zoom-in-up" className="px-6 py-4 bg-[#e88b28] capitalize mt-3">Get a consultation</button>
                    <div className="flex items-center gap-6 mt-6 justify-center">
                      <div data-aos="zoom-in-up" className="icon bg-black border-2  h-[50px] w-[50px] rounded-full flex items-center justify-center">
                        <Linkedin  size={30} />
                      </div>
                      <div data-aos="zoom-in-up" className="icon bg-blue-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                        <Twitter fill="white" size={30} />
                      </div>
                      <div data-aos="zoom-in-up" className="icon bg-blue-600 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                        <Facebook fill="white" size={30} />
                      </div>
                    </div>
                  </div>
              </footer>
              <div className="bg-black p-12 text-gray-400 pops text-center">
                © 2024 ELTHED@LAW CONSULT. All rights reserved.
              </div>
            </Image>

    </div>
  )
}

export default Home

