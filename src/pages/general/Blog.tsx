
import { usePosts } from '@/api/blog/read';
import { Empty, Nav, Pagination, Scroll } from '@/components'
import CategoryScroll from '@/components/CategoryScroll';
import { debounce } from 'lodash';
import { Search } from 'lucide-react'
import { ChangeEvent, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


const Main = () => {
  const [ page ]               = useState<number>(1);
  const [ search ]           = useState<string>('');
  const [ litigations, setLitigations ] = useState<Record<string, any>[]>([]);

  const { data } = usePosts({ page, search });

  useEffect(() => {
      setLitigations(data?.data);
  }, [ data ]);

  return (
    <>
      {(litigations && litigations.length > 0) && 
        <div className="grid grid-cols-12 max-[800px]:grid-cols-6 gap-12 max-[1050px]:gap-6 mt-12">
          <div className="col-span-6 h-[400px] max-[400px]:h-[300px]">
            <img src={litigations[0]?.image}  className="img-cover" />
          </div>
          <div className="col-span-6">
            <div className="title text-4xl max-[1050px]:3xl max-[550px]:text-2xl">{litigations[0]?.title}</div>
            <span className="mt-2 block">5 min read</span>
            <p className="pops my-2">
              {litigations[0]?.description}
            </p>
            <button className="bg-[#e88b28] text-white px-6 py-3 mt-1">
              Read Now
            </button>
          </div>
        </div>
      }

      {!data?.data &&
        <div className="grid grid-cols-12 max-[800px]:grid-cols-6 gap-12 max-[1050px]:gap-6 mt-12">
          <div className="col-span-6 h-[400px] max-[400px]:h-[300px]">
            <Skeleton height={300} />
          </div>
          <div className="col-span-6">
            <div className="title text-4xl max-[1050px]:3xl max-[550px]:text-2xl"><Skeleton /></div>
            <span className="mt-2 block"><Skeleton /></span>
            <p className="pops my-2">
              <Skeleton height={150}/>
            </p>
            <Skeleton />
          </div>
        </div>
      }
    </>
  );
}

const Blog = () => {

  const [ page, setPage ]               = useState<number>(1);
  const [ search, setSearch ]           = useState<string>('');
  const [ litigations, setLitigations ] = useState<Record<string, any>[]>([]);

  const { data, refetch } = usePosts({ page, search });

  console.log(data);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {

      debounce(
          () => {
              setSearch(event.target.value)
          },
          2000
      )();
  }

  useEffect(() => {
      setLitigations(data?.data);
  }, [ data ]);

  return (
    <div>
        <Nav bg={false} />

        <div className="p-24 max-[1050px]:px-12 max-[550px]:px-6">
            <CategoryScroll />

            <Main />

            <div className="search-box flex gap-1.5 mt-6">
                <input style={{width: "calc(100% - 60px)"}} onChange={handleSearch} type="text" className="text-xl border-1 border-[#999] flex-grow shadow rounded-md p-3 py-1.5 pops bg-transparent" placeholder='Type your search here...'/>
                <button onClick={() => refetch()} className="bg-blue-950 text-white h-[60px] w-[60px] rounded-md flex items-center justify-center ">
                    <Search strokeWidth={1} />
                </button>
            </div>


            <div className="grid-box gap-6 mt-12">
                {litigations && litigations.map((item, index) =>
                  <div key={index} className="card hover:text-blue-800">
                    <div className="image h-[260px] overflow-hidden rounded-md">
                      <img src={item.image} alt="" className="img-cover" />
                    </div>
                    <div className="details py-2">
                      <div className="title leading-tight text-xl">{item.title}</div>
                      <p className="pops mt-2 text-gray-700">{item.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <Link to={`/article/${item.id}`} className='text-[#e88b28] underline'>Read More</Link>
                        <span className=" block text-sm">2 min read</span>
                      </div>
                    </div>
                  </div>
                )}

                {!data?.data && Array.from({length: 12}, (_, index) => 
                    <div key={index} className="card hover:text-blue-800">
                      <div className="image h-[260px] overflow-hidden rounded-md">
                        <Skeleton height={260} />
                      </div>
                      <div className="details py-2">
                        <div className="title leading-tight text-xl"><Skeleton height={20} /></div>
                        <p className="pops mt-2 text-gray-700"><Skeleton height={100} /></p>
                        <div className="flex items-center justify-between mt-2">
                          <Skeleton />
                          <span className=" block text-sm"><Skeleton /></span>
                        </div>
                      </div>
                    </div>
                )}
            </div>

            <Empty load={litigations && litigations.length == 0} />

            {(litigations && litigations.length > 0) && 
                <Pagination meta={data?.meta} callback={setPage} />
            }

        </div>


    </div>
  )
}

export default Blog