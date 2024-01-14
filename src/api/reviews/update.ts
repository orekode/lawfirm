import { update } from "../config";


export const updateReview = async (data: Record<string, any>) => {

    return await update({ 
        data, 
        url: '/reviews',
        key: 'Review'
    });

}