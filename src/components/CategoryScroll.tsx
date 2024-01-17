
import Skeleton from 'react-loading-skeleton';
import { Scroll } from '.';
import { useCategories } from '@/api/categories/read';

const CategoryScroll = ({ callback = (id: number) => {id} }) => {
    const { data } = useCategories({ page: 1, search: ''});

  return (
    <Scroll.SideBtns>
        {data?.data && data?.data?.map((item: Record<string, any>, index: number) => 
            <div onClick={() => callback(item.id)} key={index} className="bg-white rounded-md shadow px-3 py-1.5">{item.name}</div>
        )}

        {!data?.data && Array.from({length: 10}, (_, index) => 
            <div key={index} ><Skeleton width={100} className=" rounded-md shadow px-3 py-1.5" /></div>
        )}
    </Scroll.SideBtns>
  )
}

export default CategoryScroll;