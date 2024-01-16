import { useLitigations } from "@/api/litigation/read";
import { useReviews } from "@/api/reviews/read";
import { Nav, Image } from "@/components";
import Footer from "@/components/Footer";
import Slides from "@/components/Slides";
import { Facebook, Linkedin, Star, Twitter} from "lucide-react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";





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

const Litigation = () => {

  const { data } = useLitigations({ page: 1 });
  const [ litigations, setLitigations ] = useState([]);

  useEffect(() => {
    if(data)

    setLitigations(data?.data);
  }, [data]);


  return (
    <div className="grid-box gap-6 mt-12">
      {litigations && litigations?.slice(0, 4)?.map((item: Record<string, any>, index: number) => 
        <Link to={`/litigation/${item.id}`} data-aos="zoom-in-up" className="relative group hover:scale-105 h-max overflow-hidden transition duration-300" key={index}>
            <div className="image bg-gray-50 h-[400px] overflow-hidden ">
                <img src={item.image} className="img-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-3">
                <button className="bg-white group-hover:bg-[#e88b28] group-hover:text-white transition duration-300  px-6 py-3 w-full text-center rounded-t-3xl font-bold">{item.title}</button>
            </div>
        </Link>
      )}

      {!data?.data && Array.from({length: 4}, (_, index) => 
          <div  className="relative group hover:scale-105 h-max overflow-hidden transition duration-300" key={index}>
              <div className="image  h-[400px] overflow-hidden ">
                  <Skeleton height={300} className='h-full block w-full' containerClassName='h-full block w-full'/>
              </div>
          </div>
      )}
    </div>
  );

}


const Reviews = () => {

    const { data } = useReviews({ page: 1 })

    return (
      <div className="flex flex-wrap justify-center min-[645px]:p-12 gap-6">
        {data?.data && data.data.map((item: Record<string, any>, index: number) => 
            <div  data-aos="zoom-in-up"className="relative w-[450px] max-[1126px]:w-full bg-white group hover:scale-105 h-max overflow-hidden transition duration-300 p-9" key={index}>
              <div className="">
                <div className="mx-auto h-[120px] w-[120px] rounded-full overflow-hidden">
                  <img src={item.image} alt="" className="img-cover" />
                </div>

                <div className="flex justify-center items-center text-yellow-400 gap-1.5 my-3">
                  {Array.from({length: item.stars}, (_, index) => 
                      <Star key={index} fill="gold"/>
                  )}
                  {Array.from({length: 5 - item.stars}, (_, index) => 
                      <span key={index} className="text-gray-200">
                          <Star fill="#e9e9e9"/>
                      </span>
                  )}
                </div>

                <div className="text-center">{item.name}</div>

              </div>
              <p className="mt-3 text-center max-[450px]:text-sm">
                {item.review}
              </p>
            </div>
        )}
        {!data?.data && Array.from({length: 3}, (_, index) => 
            <div  data-aos="zoom-in-up"className="relative w-[450px] max-[1126px]:w-full bg-white group hover:scale-105 h-max overflow-hidden transition duration-300 p-9" key={index}>
              <div className="">
                <div className="mx-auto h-[120px] w-[120px] rounded-full overflow-hidden">
                  <Skeleton height={200} className='h-full block w-full' containerClassName='h-full block w-full'/>
                </div>

                <div className="flex justify-center items-center text-gray-200 gap-1.5 my-3">
                  {Array.from({length: 5}, (_, index) => 
                    <Star key={index} fill="#e9e9e9"/>
                  )}
                </div>

                <div className="text-center">
                  <Skeleton className='block w-full'/>
                </div>

              </div>
              <p className="mt-3 text-center max-[450px]:text-sm">
                  <Skeleton className='block w-full'/>
              </p>
            </div>
        )}
      </div>
    )
}


const Home = () => {


  

  return (
    <div>
          <Nav />
          {/* <div className="mt-12"></div> */}
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

            <Litigation />

          </section>


          <section className="p-12 max-[450px]:p-6">
            <div className="text-center">
              <h1 data-aos="zoom-in-up" className="text-4xl font-light">Client Reviews</h1>
              <p className="max-w-[400px] mx-auto my-3"></p>
            </div>

            <Reviews />

          </section>

          <Footer />

    </div>
  )
}

export default Home

