
import axios from "@/api/config";
import { AxiosError } from "axios";

export const createLitigation = async (data: Record<string, any>) => {

    interface ErrorResponse {
        success: boolean,
        data?: Record<string, any>,
        errors?: Record<string,any>,
        status?: number,
    };

    try {

        const response: ErrorResponse = await axios.post("/litigation", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        console.table(response);

        return {
            success: response.status == 200 || response.status == 201,
            data: response.data
        };

    } catch (error) {

        const response: ErrorResponse =  {
            success: false,
            errors: {
                general: 'Error Creating Litigation'
            }
        };

        if(error instanceof AxiosError) {
            response.errors = error.response?.data.errors;
            let message = error.response?.data.message;
            message = message.slice(0, message.indexOf("."));
            response.errors = {
                ...response.errors,
                general: message,
            };
        }
        return response;

    }
}
