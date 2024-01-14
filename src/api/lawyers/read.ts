import { read, readList } from "@/api/config";

export const useLawyers = ({ page = 1, search = '' }) => {

    return readList({
        page,
        url: "/lawyers",
        key: "lawyers",
        params: {
            page,
            "name[in]" : search
        }
    });

}

export const useLawyer = ({ id } : { id: number | string | undefined }) => {
    return read({
        id,
        url: '/lawyers',
        key: 'lawyer',
    });
}