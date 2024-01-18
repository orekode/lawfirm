
import { deleteIt } from "@/api/config";

export const deleteSlide = async (id: number | string | undefined) => {

    return await deleteIt({
        id,
        url: '/slides'
    });

}
