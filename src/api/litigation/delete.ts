
import { deleteIt } from "@/api/config";

export const deleteLitigation = async (id: number | string | undefined) => {

    return await deleteIt({
        id,
        url: '/litigation'
    });

}
