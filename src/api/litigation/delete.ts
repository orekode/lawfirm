
import axios from "@/api/config";

export const deleteLitigation = async (id: number | string | undefined) => {

    try {

        const response = await axios.post(`/litigation/${id}`, {}, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            params: {
                _method: 'delete'
            }
        });

        return response.status == 200 || response.status == 201

    } catch (error) {
        console.log(error);
        return false;
    }
}
