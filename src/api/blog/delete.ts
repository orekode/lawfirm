
import { deleteIt } from "@/api/config";

export const deletePost = async (id: number | string | undefined) => {

    return await deleteIt({
        id,
        url: '/blog'
    });

}
