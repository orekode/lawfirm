import { useQuery } from "react-query";
import axios from "@/api/config";

export const useLitigations = ({ page = 1, search = '' }) => {

    return useQuery(['litigations', page, search], async () => {

        try {

            const response = await axios.get('/litigation', {
                params: {
                    page,
                    "title[in]" : search
                }
            });

            return response.data || response;

        } catch(error) {
            console.log(error);
            return [];
        }
        
    });
}