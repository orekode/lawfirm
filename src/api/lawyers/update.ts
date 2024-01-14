import { update } from "../config";


export const updateLawyer = async (data: Record<string, any>) => {

    return await update({ 
        data, 
        url: '/lawyers',
        key: 'Lawyer'
    });

}