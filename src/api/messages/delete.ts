
import { deleteIt } from "@/api/config";

export const deleteMessage = async (id: number | string | undefined) => {

    return await deleteIt({
        id,
        url: '/messages'
    });

}
