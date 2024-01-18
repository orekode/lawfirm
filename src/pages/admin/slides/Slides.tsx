

import { useSlides } from '@/api/slides/read';
import { Empty, Pagination } from '@/components'
import { debounce } from 'lodash';
import { Search } from 'lucide-react';
import { useState, useEffect, ChangeEvent } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Reviews = () => {

    const [ page,    setPage    ] = useState<number>(1);
    const [ reviews, setReviews ] = useState<Record<string, any>[]>();
    const [ search,  setSearch  ] = useState<string>('');

    const { data, refetch } = useSlides({ page, search });


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
                <div className="font-bold text-xl">Slide</div>
                <Link to="/admin/slides/new">
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
                    <Link className=' bg-white p-6 pb-3 flex-grow w-[450px] last-of-type:max-w-[49%]' key={index} to={`/admin/slides/edit/${item.id}`}>
                        <div className="relative w-full  group hover:scale-105 h-[250px] overflow-hidden transition duration-300" key={index}>
                            <img src={item.image} alt="slide" className="img-cover" />
                        </div>
                        <button className="mt-3 bg-blue-900 px-6 py-1.5 w-full rounded-md text-white">Edit Slide</button>
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