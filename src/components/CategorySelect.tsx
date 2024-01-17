
import { useCategories } from '@/api/categories/read'
import {} from 'react'

const CategorySelect = () => {

    const { data } = useCategories({ page: 1, search: ''});


    return (
        <>
            {data?.data && data?.data?.map((item: Record<string, any>, index: number) => 
                <option key={index} value={item.id}>{item.name}</option>
            )}
        </>
    )
}

export default CategorySelect