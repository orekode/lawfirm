

import { useLitigations } from '@/api/litigation/read';
import { Empty, Nav, Pagination } from '@/components';
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Litigations = () => {
    const [ page, setPage ] = useState<number>(1);
    const { data } = useLitigations({ page });
    const [ litigations, setLitigations ] = useState([]);
  
    useEffect(() => {
      if(data)
  
      setLitigations(data?.data);
    }, [data]);


    return (
        <div>
            <Nav bg={false} />
            <section className="p-24 max-[845px]:px-12">
                <div className="text-center ">
                    <div className="">
                        <h1 data-aos="zoom-in-up" className="text-4xl font-light">Areas of Litigation</h1>
                    </div>
                </div>

                <div className="grid-box gap-6 mt-12">
                    {litigations.map((item: Record<string, any>, index: number) => 
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

                <Empty load={litigations && litigations.length == 0} />

                {(litigations && litigations.length > 0) && 
                    <Pagination meta={data?.meta} callback={setPage} />
                }

            </section>
        </div>
    )
}

export default Litigations