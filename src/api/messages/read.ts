import { read, readList } from "@/api/config";

export const useMessages = ({ page = 1, search = '' }) => {

    return readList({
        page,
        url: "/messages",
        key: "messages",
        params: {
            page,
            "subject[in]" : search,
        }
    });

}

export const useMessage = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/messages',
        key: 'message',
    });
}

