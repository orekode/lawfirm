
import { update } from "@/api/config";

export const updateSettings = async (data: Record<string, any>) => {

    return await update({ 
        data, 
        url: '/settings',
        key: 'setting'
    });

}
