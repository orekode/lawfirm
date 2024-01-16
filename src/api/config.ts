import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

// axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.defaults.baseURL = "http://192.168.44.138:8000/api";


interface InputIn {
    data: Record<string, any>,
    url: string
}

interface ReadList {
    page: number,
    url: string,
    params?: Record<string, any>,
    key: string,
}

interface Read {
    id: number | string | undefined,
    url: string,
    key: string,
}

interface Update {
    data: Record<string, any>,
    url: string,
    key: string,
}

interface Delete {
    id: number | string | undefined,
    url: string,
}

export const create = async ( { data, url } : InputIn) => {

    interface ErrorResponse {
        success: boolean,
        data?: Record<string, any>,
        errors?: Record<string,any>,
        status?: number,
    };

    try {

        const response: ErrorResponse = await axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        console.log(response);

        return {
            success: response.status == 200 || response.status == 201,
            data: response.data
        };

    } catch (error) {

        console.log(error);

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

            if( error.response?.data.exception && error.response?.data.exception.includes("PostTooLargeException")) {
                response.errors = {
                    ...response.errors,
                    general: "File/Image Uploaded Is Too Large"
                }
            }
        }
        return response;

    }
}

export const readList = ({ page = 1, url, key, params={} } : ReadList) => {

    return useQuery([key, page, params], async () => {

        try {

            const response = await axios.get(url, {
                params
            });

            return response.data || response;

        } catch(error) {
            console.log(error);
            return [];
        }
        
    });
}

export const read = ({ id, url, key } : Read) => {
    return useQuery([key, id], async () => {

        try {

            const response = await axios.get(`${url}/${id}`);

            return response.data.data || response.data || response;

        } catch (error) {
            console.log(error);
            return {};
        }
    })
}

export const update = async ({ data, url, key }: Update) => {

    interface ErrorResponse {
        success: boolean,
        data?: Record<string, any>,
        errors?: Record<string,any>,
        status?: number,
    };

    try {

        const response: ErrorResponse = await axios.post(`${url}/${data.id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }, 
            params: {
                _method: 'put'
            }
        });

        console.log(response);
        


        return {
            success: response.status == 200 || response.status == 201,
            data: response.data
        };

    } catch (error) {

        console.log(error);
        
        const response: ErrorResponse =  {
            success: false,
            errors: {
                general: `Error Creating ${key}`
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

export const deleteIt = async ({id, url} : Delete) => {

    try {

        const response = await axios.post(`${url}/${id}`, {}, {
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



export default axios;
