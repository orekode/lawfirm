import { Facebook, Linkedin, Star, Twitter} from "lucide-react";
import { useEffect, useState } from "react";


const Image = ({ image, animate='', cover=false, children } : { image: string, animate?: string, cover?: boolean, children: any}) => {
  return (
    <div className={`${cover ? 'h-full w-full' : ''} relative`}>
      <div className={`${cover ? 'h-full w-full' : ''} relative z-10`}>
        {children}
      </div>
      <div className="absolute-cover ">
        <img src={image}  className={`img-cover ${animate}`}/>
      </div>
    </div>
  );
}


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

const Home = () => {

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
    <div>
          <nav className="text-white px-24 py-6 flex items-center justify-between fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
            <div className="logo">ELTHED LOGO</div>
            <div className="nav-links flex items-center gap-6">

              {navs.map(( item, index ) => 
                <div key={index} className="pops ">
                  <span>{item.name}</span>
                </div>
              )}

              <button  className="bg-white text-neutral-700 px-6 py-2 capitalize">
                Give us a call
              </button>
            </div>
          </nav>

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

          <section className="p-24 ">
            <div className="text-center">
              <h1 data-aos="zoom-in-up" className="text-6xl font-light">Our Services</h1>
            </div>

            <div className="grid grid-cols-12 max-[1100px]:grid-cols-8 ">

              <div className="col-span-4 text-center">
                <div data-aos="zoom-in-up" className="details pt-12">
                  <div className="font-bold text-2xl">Solicitor's Work</div>
                  <div className="mt-3 flex justify-center gap-x-3 flex-wrap max-[1100px]:text-sm">
                    <div className="my-1.5">• Legal Auditing and Prognosis</div>
                    <div className="my-1.5">• Perusals</div>
                    <div className="my-1.5">• Drawing Up</div>
                    <div className="my-1.5">• Out of Court Attendance</div>
                  </div>
                </div>

                

              </div>

              <div className="col-span-4 ">
                <div className="h-[260px]">
                  <img src="/images/wig.png" alt="" className="img-contain" />
                </div>
                <div data-aos="zoom-in-up" className="details text-center">
                  <div className="font-bold text-2xl">Advocacy and Court Attendance</div>
                  <div className="mt-3 flex justify-center gap-x-3 flex-wrap max-[1100px]:text-sm">
                    <div className="my-1.5">• Pre-trial Conferencing</div>
                    <div className="my-1.5">• Motions</div>
                    <div className="my-1.5">• ADR Resourcing</div>
                    <div className="my-1.5">• Trials , Defense and Prosecution of claims</div>
                  </div>
                </div>
              </div>

              <div className="col-span-4  text-center">

                <div data-aos="zoom-in-up" className="details pt-12">
                  <div className="font-bold text-2xl">Compliance & Processing</div>
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
              <div className="grid grid-cols-12">
                <div className="col-span-6 ">
                  <div data-aos="zoom-in-up" className="h-[500px]">
                    <img src="/images/lawyer.png" alt="" className="img-contain" />
                  </div>
                </div>
                <div className="col-span-6 p-24 pl-0 flex items-center ">
                  <div className="">
                    <h1 data-aos="zoom-in-up" className="text-4xl">Our Mission</h1>
                    <p data-aos="zoom-in-up" className="mt-1.5 leading-relaxed text-lg">Our Mission is to be a trusted legal partner for individuals, businesses, and organizations. Also to navigate the complexities of the legal landscape on behalf of our clients, ensuring they receive sound legal advice, strategic counsel, and assertive advocacy.</p>
                    <button data-aos="zoom-in-up" className="bg-white px-6 py-3 mt-6 text-lg text-neutral-900">Get in Touch</button>
                  </div>
                </div>
              </div>
            </section>

          <section className="p-24">
            <div className="text-center flex items-center justify-between">
              <div className="">
                <h1 data-aos="zoom-in-up" className="text-4xl font-light">Areas of Litigation</h1>
              </div>
                <p data-aos="zoom-in-up" className="max-w-[400px] mx-auto my-3">Our seasoned lawyers are trained experts in the following areas of litigation</p>
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


            <section className="p-12">
              <div className="text-center">
                <h1 data-aos="zoom-in-up" className="text-4xl font-light">Client Reviews</h1>
                <p className="max-w-[400px] mx-auto my-3"></p>
              </div>


              <div className="flex flex-wrap justify-center p-12 gap-6">
                {Array.from({length: 3}, (_, index) => 
                    <div  data-aos="zoom-in-up"className="relative w-[550px] bg-white group hover:scale-105 h-max overflow-hidden transition duration-300 p-9" key={index}>
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
                      <p className="mt-3 text-center">
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

