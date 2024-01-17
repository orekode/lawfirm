import { read, readList } from "@/api/config";

export const usePosts = ({ page = 1, search = '' }) => {

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

export const usePost = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/blog',
        key: 'blog',
    });
}