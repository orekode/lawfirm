import { update } from "../config";


export const updateMessage = async (data: Record<string, any>) => {

    return await update({ 
        data, 
        url: '/messages',
        key: 'Message'
    });

}