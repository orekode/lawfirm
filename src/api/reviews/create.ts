
import { create } from "@/api/config";

export const createReview = async (data: Record<string, any>) => {

    return await create({ 
        data, 
        url: "/reviews"
    });

}
