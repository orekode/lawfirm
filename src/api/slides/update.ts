
import { update } from "@/api/config";

export const updateSlide = async (data: Record<string, any>) => {

    return await update({ 
        data, 
        url: '/slides',
        key: 'slide'
    });

}
