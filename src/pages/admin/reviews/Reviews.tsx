

import { useLitigations } from '@/api/litigation/read';
import { Empty, Pagination } from '@/components'
import { debounce } from 'lodash';
import { Search, Star } from 'lucide-react';
import { useState, useEffect, ChangeEvent } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Reviews = () => {

    const [ page, setPage ]        = useState<number>(1);
    const [ reviews, setReviews ]  = useState<Record<string, any>[]>();
    const [ search, setSearch ]    = useState<string>('');

    const { data, refetch } = useLitigations({ page, search });


    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {

        debounce(
            () => {
                setSearch(event.target.value)
                console.log('hello');
            },
            2000
        )();
    }

    useEffect(() => {
        setReviews(data?.data);
    }, [data]);

    return (
        <div >
            <div className="flex items-center justify-between">
                <div className="font-bold text-xl">Reviews</div>
                <Link to="/admin/review/new">
                    <button className="px-6 py-2 bg-[#ffae34] text-white rounded">Add New</button>
                </Link>
            </div>

            <div className="search-box flex gap-1.5 mt-6">
                <input onChange={handleSearch} type="text" className="flex-grow shadow rounded-md p-3 py-1.5 pops" />
                <button onClick={() => refetch()} className="bg-blue-950 text-white h-[40px] w-[40px] rounded-md flex items-center justify-center ">
                    <Search strokeWidth={1} />
                </button>
            </div>


            <div className="flex flex-wrap gap-6 mt-12">
                {reviews && reviews.map((item: Record<string, any>, index: number) => 
                    <Link className='flex-grow w-[450px] last-of-type:max-w-[49%]' key={index} to={`/admin/litigation/edit/${item.id}`}>
                        <div className="relative w-full bg-white group hover:scale-105 h-max overflow-hidden transition duration-300 p-9" key={index}>
                            <div className="">
                                <div className="mx-auto h-[120px] w-[120px] rounded-full overflow-hidden">
                                <img src={item.image} alt="" className="img-cover" />
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
                    </Link>
                )}

                {!data?.data && Array.from({length: 4}, (_, index) => 
                    <div  className="relative group hover:scale-105 h-max overflow-hidden transition duration-300" key={index}>
                        <div className="image  h-[300px] overflow-hidden ">
                            <Skeleton height={300} className='h-full block w-full' containerClassName='h-full block w-full'/>
                        </div>
                    </div>
                )}
            </div>

            <Empty load={reviews && reviews.length == 0} />

            {(reviews && reviews.length > 0) && 
                <Pagination meta={data?.meta} callback={setPage} />
            }

        </div>
    )
}

export default Reviews