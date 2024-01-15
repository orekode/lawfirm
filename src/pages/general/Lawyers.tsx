
import { useLawyers } from '@/api/lawyers/read'
import { Empty, Footer, Nav, Pagination } from '@/components'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton';

const Lawyers = () => {
    const [ page, setPage ] = useState(1);

    const { data } = useLawyers({ page });

  return (
    <div>
        <Nav bg={false} />

        <section className="p-24 max-[750px]:px-12 py-32 min-h-[500px]">
            <div className="text-center">
                <h1 className="text-5xl">Meet Our Lawyers</h1>
                <p className="pops max-w-[600px] mx-auto mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iste, quibusdam neque animi molestiae a sint harum cupiditate! Eaque, recusandae!</p>
            </div>


            <div className="grid-box gap-12 max-[650px]:gap-3 max-[650px]:grid-cols-2 max-[495px]:grid-cols-1 mt-12">
                {data?.data && data?.data?.map((item: Record<string, any>, index: number) => 
                    <div key={index} className="hover:scale-105 transition-all duration-300">
                        <div className="image h-[260px] w-[240px] max-[600px]:w-full max-[495px]:max-w-[240px] mx-auto overflow-hidden rounded-md">
                            <img src={item.image} className='img-cover' />
                        </div>
                        <div className="details text-center py-3">
                            <div className="font-bold">{item.name}</div>
                            <div className="">{item.title}</div>
                        </div>
                    </div>
                )}
                {!data?.data && Array.from({length: 10}, (_, index) => 
                    <div key={index} className="hover:scale-105 transition-all duration-300">
                        <div className="image h-[260px] w-[240px] max-[600px]:w-full max-[495px]:max-w-[240px] mx-auto overflow-hidden rounded-md">
                            <Skeleton height={260} />
                        </div>
                        <div className="details text-center py-3">
                            <div className="font-bold"><Skeleton /></div>
                            <div className=""><Skeleton /></div>
                        </div>
                    </div>
                )}
            </div>

            <Empty load={data?.data && data?.data?.length == 0} />

            {(data?.data && data?.data?.length > 0) && 
                <Pagination meta={data?.meta} callback={setPage} />
            }

        </section>

        <Footer />
    </div>
  )
}

export default Lawyers