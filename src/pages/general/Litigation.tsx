

import { useLitigation } from '@/api/litigation/read';
import { Image, Nav } from '@/components'
import {} from 'react'
import { useParams } from 'react-router-dom';

const Litigation = () => {

    const { id } = useParams();
    const { data } = useLitigation({ id });

    return (
        <div>
            <Nav />
            <Image image={data?.cover_image}>
                <header className="min-h-screen relative max-[950px]:block flex items-center gap-12 p-24 pb-0 max-[1050px]:px-12 max-[500px]:px-6 bg-[#111] bg-opacity-90 text-white">

                    <div className="relative">
                        <div className="h-[400px] w-[360px] max-[1050px]:h-[300px] max-[1050px]:w-[260px] mx-auto rounded-md overflow-hidden">
                            <img src={data?.image} className="img-cover" />
                        </div>
                    </div>

                    <div className="max-260 max-[950px]:w-full-890 max-[950px]:text-center" style={{width: "calc(100% - 380px)"}}>
                        <h1 className="text-4xl   my-3">{data?.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: data?.description}} className="pops leading-loose pb-6">
                        </div>
                    </div>
                </header>
            </Image>

            
        </div>
    )
}

export default Litigation