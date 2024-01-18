import { read, readList } from "@/api/config";

export const useSlides = ({ page = 1, search = '' }) => {

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

export const useSlide = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/slides',
        key: 'slide',
    });
}