import { useDashboard } from '@/api/settings/read'
import { Mail } from 'lucide-react'
import Skeleton from 'react-loading-skeleton';

const Dashboard = () => {

  const { data } = useDashboard();

  return (
    <div>
      <div className="font-bold text-xl">Dashboard</div>

      <div className="grid grid-cols-12 max-[760px]:grid-cols-6 gap-6 mt-12">
        <div className="col-span-6 bg-white min-h-[180px] gap-12 max-[1250px]:gap-6 p-9 rounded-md flex max-[760px]:flex-col items-center">
          <div className="max-[1250px]:hidden image border rounded-full h-[150px] w-[150px] flex items-center justify-center">
            <Mail size={70} strokeWidth={1}/>
          </div>
          <div className="min-[1251px]:hidden image border rounded-full h-[90px] w-[90px] flex items-center justify-center">
            <Mail size={50} strokeWidth={1}/>
          </div>
          <div className="">
            <div className="text-3xl font-extralight max-[1250px]:text-2xl">Messages</div>
            <div className="text-6xl pops font-normal">{data && data?.messages} {!data && <Skeleton /> }</div>
          </div>
        </div>
        <div className="col-span-6 bg-white min-h-[180px] gap-12 max-[1250px]:gap-6 p-9 rounded-md flex max-[760px]:flex-col items-center">
          <div className="max-[1250px]:hidden image border rounded-full h-[150px] w-[150px] flex items-center justify-center">
            <Mail size={70} strokeWidth={1}/>
          </div>
          <div className="min-[1251px]:hidden image border rounded-full h-[90px] w-[90px] flex items-center justify-center">
            <Mail size={50} strokeWidth={1}/>
          </div>
          <div className="">
            <div className="text-3xl font-extralight max-[1250px]:text-2xl">Blog Posts</div>
            <div className="text-6xl pops font-normal">{ data && data?.posts} {!data && <Skeleton /> }</div>
          </div>
        </div>
        <div className="col-span-6 bg-white min-h-[180px] gap-12 max-[1250px]:gap-6 p-9 rounded-md flex max-[760px]:flex-col items-center">
          <div className="max-[1250px]:hidden image border rounded-full h-[150px] w-[150px] flex items-center justify-center">
            <Mail size={70} strokeWidth={1}/>
          </div>
          <div className="min-[1251px]:hidden image border rounded-full h-[90px] w-[90px] flex items-center justify-center">
            <Mail size={50} strokeWidth={1}/>
          </div>
          <div className="">
            <div className="text-3xl font-extralight max-[1250px]:text-2xl">Reviews</div>
            <div className="text-6xl pops font-normal">{ data && data?.reviews} {!data && <Skeleton /> }</div>
          </div>
        </div>
        <div className="col-span-6 bg-white min-h-[180px] gap-12 max-[1250px]:gap-6 p-9 rounded-md flex max-[760px]:flex-col items-center">
          <div className="max-[1250px]:hidden image border rounded-full h-[150px] w-[150px] flex items-center justify-center">
            <Mail size={70} strokeWidth={1}/>
          </div>
          <div className="min-[1251px]:hidden image border rounded-full h-[90px] w-[90px] flex items-center justify-center">
            <Mail size={50} strokeWidth={1}/>
          </div>
          <div className="">
            <div className="text-3xl font-extralight max-[1250px]:text-2xl">Lawyers</div>
            <div className="text-6xl pops font-normal">{ data && data?.lawyers} {!data && <Skeleton /> }</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard