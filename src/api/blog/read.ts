import { read, readList } from "@/api/config";

export const useLitigations = ({ page = 1, search = '' }) => {

    return readList({
        page,
        url: "/blog",
        key: "blog",
        params: {
            page,
            "title[in]" : search
        }
    });

}

export const useLitigation = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/blog',
        key: 'blog',
    });
}