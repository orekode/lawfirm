import { X } from 'lucide-react';
import { useState } from 'react'

const Lawyer = ({ item } : { item: Record<string, any>}) => {
    const [ visible, setVisible ] = useState<boolean>(false);

  return (
    <div className="">

        <div className={`fixed ${ visible ? 'top-0' : 'top-[100vh]'} transition-all duration-300 left-0 bg-[#fffbd8] bg-opacity-60 overflow-y-scroll h-screen w-screen z-50`}>
            
            

            <div className="overflow-y-scroll h-screen w-[90%] max-[960px]:w-full mx-auto shadow bg-[#fffbd8] p-24 max-[1130px]:px-12 max-[450px]:px-6 relative">
                <div className="flex gap-12 max-[890px]:block">
                    <div className="h-[350px] w-[300px] max-[360px]:w-full mx-auto border overflow-hidden rounded-md">
                        <img src={item.image} className='img-cover' />
                    </div>

                    <div className="max-[890px]:w-full-890" style={{width: "calc(100% - 320px)"}}>
                        <div className="text-4xl max-[450px]:text-3xl max-[890px]:text-center max-[890px]:mt-3">{item.name}</div>
                        <div className="text-2xl max-[450px]:text-xl max-[890px]:text-center  text-[#222] font-bold mb-3 mt-1.5">{item.title}</div>

                        <div dangerouslySetInnerHTML={{__html: item.short_description}} className="pops">
                        </div>
                    </div>
                </div>

                <div className="pops mt-12" dangerouslySetInnerHTML={{__html: item.long_description}} >
                </div>

                <div className="absolute top-0 right-0 py-6 px-12">
                    <div onClick={ () => setVisible(!visible)} className="h-[50px] w-[50px] rounded-full border flex items-center justify-center">
                        <X />
                    </div>
                </div>
            </div>
        </div>

        <div onClick={ () => setVisible(!visible)} className="hover:scale-105 transition-all duration-300">
            <div className="image h-[260px] w-[240px] max-[600px]:w-full max-[495px]:max-w-[240px] mx-auto overflow-hidden rounded-md">
                <img src={item.image} className='img-cover' />
            </div>
            <div className="details text-center py-3">
                <div className="font-bold">{item.name}</div>
                <div className="">{item.title}</div>
            </div>
        </div>
    </div>
  )
}

export default Lawyer
