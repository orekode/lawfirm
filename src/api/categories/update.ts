
import { update } from "@/api/config";

export const updateCategory = async (data: Record<string, any>) => {

    return await update({ 
        data, 
        url: '/categories',
        key: 'category'
    });

}
