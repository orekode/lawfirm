
import { create } from "@/api/config";

export const createLitigation = async (data: Record<string, any>) => {

    return await create({ 
        data, 
        url: "/litigation"
    });

}
