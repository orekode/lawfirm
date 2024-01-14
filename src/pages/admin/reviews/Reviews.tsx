

import { useLitigations } from '@/api/litigation/read';
import { Empty, Pagination } from '@/components'
import { debounce } from 'lodash';
import { Search } from 'lucide-react';
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
                <div className="font-bold text-xl">Areas Of Litigation</div>
                <Link to="/admin/litigation/new">
                    <button className="px-6 py-2 bg-[#ffae34] text-white rounded">Add New</button>
                </Link>
            </div>

            <div className="search-box flex gap-1.5 mt-6">
                <input onChange={handleSearch} type="text" className="flex-grow shadow rounded-md p-3 py-1.5 pops" />
                <button onClick={() => refetch()} className="bg-blue-950 text-white h-[40px] w-[40px] rounded-md flex items-center justify-center ">
                    <Search strokeWidth={1} />
                </button>
            </div>


            <div className="grid-box box-200 gap-6 mt-12">
                {reviews && reviews.map((item: Record<string, any>, index: number) => 
                    <Link key={index} to={`/admin/litigation/edit/${item.id}`}>
                        <div  className="relative group hover:scale-105 h-max overflow-hidden transition duration-300">
                            <div className="image bg-gray-50 h-[300px] overflow-hidden rounded-md">
                                <img src={item.image} className="img-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-3">
                                <button className="bg-white group-hover:bg-[#e88b28] group-hover:text-white transition duration-300  px-6 py-3 w-full text-center rounded-t-3xl rounded-b-md font-bold">{item.title}</button>
                            </div>
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