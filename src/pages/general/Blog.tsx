
import { useLawyers } from '@/api/lawyers/read';
import { Nav, Scroll } from '@/components'
import { debounce } from 'lodash';
import { Search } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {

    const [ page, setPage ]               = useState<number>(1);
    const [ search, setSearch ]           = useState<string>('');
  const [ litigations, setLitigations ]   = useState<Record<string, any>[]>([]);

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

  return (
    <div>
        <Nav bg={false} />

        <div className="p-24 max-[1050px]:px-12 max-[550px]:px-6">
            <Scroll.SideBtns>
                {Array.from({length: 10}, (_, index) => 
                    <div key={index} className="bg-white rounded-md shadow px-3 py-1.5">category goes here</div>
                )}
            </Scroll.SideBtns>

            <div className="grid grid-cols-12 max-[800px]:grid-cols-6 gap-12 max-[1050px]:gap-6 mt-12">
              <div className="col-span-6 h-[400px] max-[400px]:h-[300px]">
                <img src="/images/lawyer.jpg"  className="img-cover" />
              </div>
              <div className="col-span-6">
                <div className="title text-4xl max-[1050px]:3xl max-[550px]:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <span className="mt-2 block">5 min read</span>
                <p className="pops my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias rerum vel molestiae asperiores earum tempora, dolorem neque dolor tenetur id debitis culpa pariatur itaque quisquam nemo ipsam inventore. Quae!
                </p>
                <button className="bg-[#e88b28] text-white px-6 py-3 mt-1">
                  Read Now
                </button>
              </div>
            </div>

            <div className="search-box flex gap-1.5 mt-12">
                <input style={{width: "calc(100% - 60px)"}} onChange={handleSearch} type="text" className="text-xl border-2 border-[#999] flex-grow shadow rounded-md p-3 py-1.5 pops bg-transparent" placeholder='Type your search here...'/>
                <button onClick={() => refetch()} className="bg-blue-950 text-white h-[60px] w-[60px] rounded-md flex items-center justify-center ">
                    <Search strokeWidth={1} />
                </button>
            </div>


            <div className="grid-box gap-6 mt-12">
                {Array.from({length: 10}, (_, index) =>
                  <div key={index} className="card hover:text-blue-800">
                    <div className="image h-[260px] overflow-hidden rounded-md">
                      <img src="/images/justice.jpg" alt="" className="img-cover" />
                    </div>
                    <div className="details py-2">
                      <div className="title leading-tight text-xl">THis is the title that would be displayed</div>
                      <p className="pops mt-2 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, dolore. Ab animi corrupti rerum minima suscipit delectus iure beatae voluptate.</p>
                      <div className="flex items-center justify-between mt-2">
                        <Link to={`/article/${1}`} className='text-[#e88b28] underline'>Read More</Link>
                        <span className=" block text-sm">2 min read</span>
                      </div>
                    </div>
                  </div>
                )}
            </div>

        </div>


    </div>
  )
}

export default Blog