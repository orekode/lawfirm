import { read, readList } from "@/api/config";

export const useSettings = ({ page = 1, search = '' }) => {

    return readList({
        page,
        url: "/slides",
        key: "slides",
        params: {
            page,
            "title[in]" : search
        }
    });

}

export const useSetting = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/settings',
        key: 'setting',
    });
}