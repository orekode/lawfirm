

import { Nav } from '@/components'
import Footer from '@/components/Footer'
import {} from 'react'

const About = () => {
  return (
    <div>
          <Nav bg={false}/>

          <section className="p-24 max-[750px]:p-12 max-[520px]:p-4 max-[600px]:mt-12">
            <div className="max-w-[1000px] mx-auto">
              <img src="/images/legal_team.webp" className="object-contain h-full w-full" />
            </div>
          </section>
        
          <div className="grid grid-cols-12 max-[750px]:grid-cols-6 p-24 max-[750px]:px-12 max-[520px]:p-6 max-[750px]:pb-0  pt-0 pb-12 min-[750px]:min-h-[370px]">
            <div className="col-span-6 h-full flex flex-col justify-center">
              <h1 data-aos="fade-in" className='text-4xl max-[520px]:text-lg max-[1074px]:text-2xl leading-relaxed '>Our firm is founded on core principles that shape our approach to every case and client we serve</h1>
            </div>
            <div className="col-span-6 max-[750px]:row-start-1 max-[750px]:hidden items-center justify-center">
              <img src="/images/justice.png" className="object-contain h-full w-full" />
            </div>
          </div>

          <div className="  w-full relative ">

            <div className="grid grid-cols-12 max-[990px]:grid-cols-8 max-[750px]:grid-cols-4 gap-6 max-[1200px]:gap-1 relative z-10  bg-opacity-10 min-h-[700px] px-24 max-[1200px]:px-6 max-[520px]:px-4">
              <div className="col-span-4 flex flex-col items-center ">
                <div className="h-[250px] min-[750px]:mt-12">
                  <img src="/images/excelence.png" className="object-cover h-full w-full" />
                </div>

                <div data-aos="fade-in" className=" pear p-6 min-[750px]:my-6">
                  <div className="scale-95">
                    <div className="title font-bold py-3">Social Responsibility</div>
                      <p className="pops">
                        We are dedicated to making a positive impact on society and the communities we serve. Our firm actively engages in pro bono work, volunteering, and supporting charitable initiatives to contribute to the greater good.
                      </p>
                    </div>
                </div>

                <div className="h-[250px] min-[750px]:mt-12">
                  <img src="/images/scale.webp" className="object-cover h-full w-full" />
                </div>
              </div>

              <div className="col-span-4">
                <div data-aos="fade-in" className=" pear p-6">
                  <div className="scale-95">
                    <div className="title font-bold py-3">Excellence</div>
                      <p className="pops">
                        We are committed to providing top-notch legal services that meet the highest standards of professionalism, quality, and ethical conduct. Our lawyers have a deep understanding of Ghanaian law and stay updated on the latest developments to ensure accurate and effective legal representation.
                      </p>
                    </div>
                </div>

                <div data-aos="fade-in" className=" pear p-6 min-[750px]:my-6">
                  <div className="scale-95">
                    <div className="title font-bold py-3">Client-Centric Approach</div>
                      <p className="pops">
                        We prioritize our client's interests and strive to build strong, long-lasting relationships based on trust and open communication. We listen attenClient-Centric Approachtively to your concerns, goals, and objectives, tailoring our strategies to achieve the best possible outcomes for you.
                      </p>
                    </div>
                </div>

                <div data-aos="fade-in" className=" pear p-6">
                  <div className="scale-95">
                    <div className="title font-bold py-3">Integrity and Confidentiality</div>
                      <p className="pops">
                        Upholding the highest ethical standards is fundamental to our practice. We handle all client matters with the utmost discretion and maintain strict confidentiality to protect your privacy and interests.
                      </p>
                    </div>
                </div>
              </div>

              <div className="col-span-4 flex flex-col max-[990px]:hidden items-center ">

                <div className="h-[250px] min-[750px]:mt-12">
                  <img src="/images/law.png" className="object-cover h-full w-full" />
                </div>

                <div data-aos="fade-in" className=" pear p-6">
                  <div className="scale-95">
                    <div className="title font-bold py-3">Collaborative Solutions</div>
                    <p className="pops">
                      We believe in fostering a collaborative environment where our legal team works closely together, pooling their diverse expertise and perspectives. This collaborative approach enables us to develop innovative strategies and find comprehensive solutions to even the most complex legal challenges
                    </p>
                  </div>
                </div>

                <div className="h-[250px] min-[750px]:mt-12">
                  <img src="/images/together.png" className="object-cover h-full w-full" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 max-[750px]:grid-cols-1 min-[990px]:hidden items-center px-6">

                <div  className=" pear p-6">
                  <div className="scale-95">
                    <div className="title font-bold py-3">Collaborative Solutions</div>
                    <p className="pops">
                      We believe in fostering a collaborative environment where our legal team works closely together, pooling their diverse expertise and perspectives. This collaborative approach enables us to develop innovative strategies and find comprehensive solutions to even the most complex legal challenges
                    </p>
                  </div>
                </div>

                <div className="h-[250px] min-[750px]:mt-12">
                  <img src="/images/law.png" className="object-contain h-full w-full" />
                </div>

              </div>
          </div>

          <section className="">
            <div className="grid grid-cols-12 max-[700px]:grid-cols-6">
              <div className="col-span-6 ">
                <div data-aos="zoom-in-up" className="h-[500px] max-[500px]:h-[250px]">
                  <img src="/images/lawyer.png" alt="" className="img-contain" />
                </div>
              </div>
              <div className="col-span-6 p-24 pl-0 max-[845px]:p-12 max-[845px]:pl-0 max-[700px]:p-12 max-[500px]:p-6 flex items-center ">
                <div className="max-[700px]:text-center">
                  <h1 data-aos="zoom-in-up" className="text-4xl">Our Mission</h1>
                  <p data-aos="zoom-in-up" className="mt-1.5 leading-relaxed text-lg max-[500px]:text-base">Our Mission is to be a trusted legal partner for individuals, businesses, and organizations. Also to navigate the complexities of the legal landscape on behalf of our clients, ensuring they receive sound legal advice, strategic counsel, and assertive advocacy.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="">
            <div className="grid grid-cols-12 max-[700px]:grid-cols-6">
              
              <div className="col-span-6 p-24 pr-0 max-[845px]:p-12 max-[845px]:pr-0 max-[700px]:p-12 max-[500px]:p-6 flex items-center ">
                <div className="max-[700px]:text-center">
                  <h1 data-aos="zoom-in-up" className="text-4xl">Our vision</h1>
                  <p data-aos="zoom-in-up" className="mt-1.5 leading-relaxed text-lg max-[500px]:text-base">
                    Our vision is to become the most reliable, reputable, and leading legal entity providing effective integrated legal services to individuals and organizations operating in Ghana and the West African sub-region by 2030.
                  </p>
                </div>
              </div>

              <div className="col-span-6 ">
                <div data-aos="zoom-in-up" className="h-[500px] max-[500px]:h-[250px]">
                  <img src="/images/vision.png" alt="" className="img-contain" />
                </div>
              </div>
            </div>
          </section>

          <section className="max-[435px]:text-center">
            <h1 className="text-center p-12 text-4xl">OUR CORE VALUES</h1>

            <div className="grid grid-cols-12 max-[600px]:grid-cols-6 px-24 pb-24 max-[800px]:px-12 max-[500px]:px-6 max-[700px]:gap-1 max-[650px]:gap-3 gap-3">
                <div className="col-span-6 p-6 max-[800px]:p-3 max-[650px]:p-1.5 max-[500px]:mb-4">
                  <div className="font-bold text-2xl">Integrity</div>
                  <p className="pops pt-3">
                  To be honest, trustworthy, respectful and ethical in our actions. To honour our commitments and to be accountable for our actions, successes, and failures.
                  </p>
                </div>

                <div className="col-span-6 p-6 max-[800px]:p-3 max-[650px]:p-1.5 max-[500px]:mb-4">
                  <div className="font-bold text-2xl">Client Focus</div>
                  <p className="pops pt-3">
                    To fully understand our clients' requirements, challenges, objectives and goals and to maximize the value of our services to our clients including safeguarding the security and confidentiality of their information.
                  </p>
                </div>

                <div className="col-span-6 p-6 max-[800px]:p-3 max-[650px]:p-1.5 max-[500px]:mb-4">
                  <div className="font-bold text-2xl">Excellence</div>
                  <p className="pops pt-3">
                    To relentlessly pursue the delivery of outstanding results in everything we do.
                  </p>
                </div>

                <div className="col-span-6 p-6 max-[800px]:p-3 max-[650px]:p-1.5 max-[500px]:mb-4">
                  <div className="font-bold text-2xl">Collaboration</div>
                  <p className="pops pt-3">
                    To seek, share and respect diverse perspectives and to function as a team with our colleagues, clients and third-party providers. To openly communicate all relevant information consistently and constructively.
                  </p>
                </div>

                <div className="col-span-6 p-6 max-[800px]:p-3 max-[650px]:p-1.5 max-[500px]:mb-4">
                  <div className="font-bold text-2xl">Objectivity</div>
                  <p className="pops pt-3">
                    To be meticulous in our attention to detail. To extract larger meaning from data and information to support objective evaluation, decision making and innovation.
                  </p>
                </div>

              
            </div>
          </section>

          <Footer />
    </div>
  )
}

export default About


            {/* <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[700px] w-full z-0">
              <img src="/images/excelence.png" className="object-cover h-full w-full" />
            </div> */}