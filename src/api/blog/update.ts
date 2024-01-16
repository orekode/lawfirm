
import { update } from "@/api/config";

export const updateLitigation = async (data: Record<string, any>) => {

    return await update({ 
        data, 
        url: '/blog',
        key: 'blog'
    });

}
