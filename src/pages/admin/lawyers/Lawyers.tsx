import { Search } from 'lucide-react'
import { ChangeEvent, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { debounce } from "lodash"
import { Empty, Pagination } from '@/components'
import { useLawyers } from '@/api/lawyers/read'


const Litigation = () => {

    const [ page, setPage ]               = useState<number>(1);
    const [ search, setSearch ]           = useState<string>('');
    const [ litigations, setLitigations ] = useState<Record<string, any>[]>([]);

    const { data, refetch } = useLawyers({ page, search });

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
        setLitigations(data?.data);
    }, [ data ])

    

    return (
        <div >
            <div className="flex items-center justify-between">
                <div className="font-bold text-xl">Lawyers / Staff</div>
                <Link to="/admin/lawyers/new">
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
                {litigations && litigations.map((item: Record<string, any>, index: number) => 
                    <Link key={index} to={`/admin/lawyers/edit/${item.id}`}>
                        <div  className="relative group hover:scale-105 h-max overflow-hidden transition duration-300">
                            <div className="image bg-gray-50 h-[250px] overflow-hidden rounded-md">
                                <img src={item.image} className="img-cover" />
                            </div>
                            <div className="">
                                <button className="  p-1 pb-0 w-full text-center text-lg rounded-t-3xl rounded-b-md font-bold">{item.name}</button>
                                <button className="  p-1 pt-0 w-full text-center rounded-t-3xl rounded-b-md ">{item.title}</button>
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

            <Empty load={litigations && litigations.length == 0} />

            {(litigations && litigations.length > 0) && 
                <Pagination meta={data?.meta} callback={setPage} />
            }

        </div>
    )
}

export default Litigation