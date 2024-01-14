import { read, readList } from "@/api/config";

export const useReviews = ({ page = 1, search = '' }) => {

    return readList({
        page,
        url: "/reviews",
        key: "reviews",
        params: {
            page,
            "name[in]" : search
        }
    });

}

export const useReview = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/reviews',
        key: 'review',
    });
}