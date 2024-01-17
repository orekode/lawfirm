
import { deleteIt } from "@/api/config";

export const deleteCategory = async (id: number | string | undefined) => {

    return await deleteIt({
        id,
        url: '/categories'
    });

}
