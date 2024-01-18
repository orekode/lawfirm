

import { usePost, useRelatedPosts } from '@/api/blog/read';
import { Image, Loading, Nav } from '@/components'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';


const Related = ({ id } : { id: number | undefined }) => {

    const [ litigations, setLitigations ] = useState<Record<string, any>[]>([]);

    const { data } = useRelatedPosts({ id });

    console.log(data);

    useEffect(() => {
        setLitigations(data?.data);
    }, [ data ]);

    if(litigations && litigations.length <= 0) return "";

    return (
        <section>
            <h1 className="text-3xl font-bold mt-12">Related Posts</h1>

            <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-6 mt-6">

                {litigations && litigations.map((item, index) => 
                    <div onClick={() => location.href = `/article/${item.id}`} key={index} className=" hover:scale-105 transition duration-300 rounded-md shadow bg-white">
                        <div className="image h-[400px]">
                            <img src={item.image} className="img-cover" />
                        </div>
                        <div className="details mt-3 p-3">
                            <div className="font-bold text-lg">{item.title}</div>
                            <p className="text-sm font-light leading-loose">
                                {item.description?.slice(0, 250)} {item.description.length > 250 && "..."}
                            </p>
                        </div>
                    </div>
                )}

                {!litigations && Array.from({length: 10}, (_, index) => 
                    <div key={index} className=" hover:scale-105 transition duration-300 rounded-md shadow bg-white">
                        <div className="image h-[400px]">
                            <Skeleton height={400} />
                        </div>
                        <div className="details mt-3 p-3">
                            <div className="font-bold text-lg"><Skeleton /></div>
                            <p className="text-sm font-light leading-loose">
                                <Skeleton height={200} />
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

const Article = () => {
    const { id } = useParams();

    const { data } = usePost({ id });
  
    const [ load ] = useState<boolean>(false);

  return (
    <div>
        <Nav />
        <Loading load={load} />
        <Image image={data?.cover_image}>
            <header className='h-[420px] max-[630px]:h-max bg-black text-white text-center py-28 max-[630px]:pb-6  bg-opacity-70 relative'>
                <div className="h-[200px] w-[200px] rounded-full overflow-hidden mx-auto">
                    <img src={data?.image} alt="" className="img-cover" />
                </div>
                <h1 className="font-bold text-4xl mt-3 max-w-[750px] mx-auto">{data?.title}</h1>
                <p className="bg-white p-6 rounded-md max-w-[750px] shadow leading-relaxed mx-auto scale-95 text-[#222]">{data?.description.slice(0, 250)} {data?.description?.length > 250 && "..."}</p>
            </header>

        </Image>

        <div className=" leading-loose p-28 mt-10 max-[1030px]:py-20 max-[1030px]:px-12 max-[630px]:py-12 max-[630px]:mt-0 max-[500px]:px-6">
            <div dangerouslySetInnerHTML={{__html: data?.content}} className="pops">
            </div>


            <Related id={id ? parseInt(id) : undefined }/>
        </div>

        
    </div>
  )
}

export default Article