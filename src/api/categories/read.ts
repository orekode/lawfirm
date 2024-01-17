import { read, readList } from "@/api/config";

export const useCategories = ({ page = 1, search = '' }) => {

    return readList({
        page,
        url: "/categories",
        key: "categories",
        params: {
            page,
            "title[in]" : search
        }
    });

}

export const useCategory = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/categories',
        key: 'category',
    });
}