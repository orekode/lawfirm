
import { create } from "@/api/config";

export const createMessage = async (data: Record<string, any>) => {

    return await create({ 
        data, 
        url: "/messages"
    });

}
