
import { deleteIt } from "@/api/config";

export const deleteLawyer = async (id: number | string | undefined) => {

    return await deleteIt({
        id,
        url: '/lawyers'
    });

}
