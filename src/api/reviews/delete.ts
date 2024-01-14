
import { deleteIt } from "@/api/config";

export const deleteReview = async (id: number | string | undefined) => {

    return await deleteIt({
        id,
        url: '/reviews'
    });

}
