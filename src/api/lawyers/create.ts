
import { create } from "@/api/config";

export const createLawyer = async (data: Record<string, any>) => {

    return await create({ 
        data, 
        url: "/lawyers"
    });

}
