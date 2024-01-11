import { Search } from 'lucide-react'
import {} from 'react'
import { Link } from 'react-router-dom'

const Litigation = () => {
  return (
    <div >
        <div className="flex items-center justify-between">
            <div className="font-bold text-xl">Areas Of Litigation</div>
            <Link to="/admin/litigation/new">
                <button className="px-6 py-2 bg-[#ffae34] text-white">Add New</button>
            </Link>
        </div>

        <div className="search-box flex gap-1.5 mt-6">
            <input type="text" className="flex-grow shadow rounded-md p-3 py-1.5 pops" />
            <button className="bg-blue-950 text-white h-[40px] w-[40px] rounded-md flex items-center justify-center ">
                <Search strokeWidth={1} />
            </button>
        </div>

        <div className="grid-box box-200 gap-6 mt-12">
            {Array.from({length: 4}, (_, index) => 
                <div  className="relative group hover:scale-105 h-max overflow-hidden transition duration-300" key={index}>
                    <div className="image bg-gray-50 h-[300px] overflow-hidden ">
                        <img src="/images/lawyer.jpg" className="img-cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-3">
                        <button className="bg-white group-hover:bg-[#e88b28] group-hover:text-white transition duration-300  px-6 py-3 w-full text-center rounded-t-3xl font-bold">Land  Litigation</button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Litigation