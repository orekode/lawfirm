
import { create } from "@/api/config";

export const createSlide = async (data: Record<string, any>) => {

    return await create({ 
        data, 
        url: "/slides"
    });

}
