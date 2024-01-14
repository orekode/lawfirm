import { read, readList } from "@/api/config";

export const useLitigations = ({ page = 1, search = '' }) => {

    return readList({
        page,
        url: "/litigation",
        key: "litigations",
        params: {
            page,
            "title[in]" : search
        }
    });

}

export const useLitigation = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/litigation',
        key: 'litigation',
    });
}