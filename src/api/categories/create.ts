
import { create } from "@/api/config";
import Swal from "sweetalert2";

export const createCategory = async (data: Record<string, any>) => {

    return await create({ 
        data, 
        url: "/categories"
    });

}

export function showCreateCategoryPrompt( setLoad: (arg0: boolean) => void, setErrors: (arg0: Record<string, any>) => void, queryClient: { invalidateQueries: (arg0: string[]) => void; }) {
    Swal.fire({
        title: 'Create Category',
        input: 'text',
        inputLabel: 'Category Name',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Category name is required!';
            }
        },
        preConfirm: async (categoryName) => {
            

          setLoad(true);
          const response = await createCategory({name: categoryName});
          setLoad(false);

          if(!response.success) {
            Swal.fire({
              icon: 'error',
              title: response.errors?.general,
              text: 'Please check your inputs and try again'
            });

            setErrors(response.errors ?? {});
          }

          else {
            Swal.fire({
              icon: "success",
              title: "Category Created Successfully",
              text: ""
            });

            queryClient.invalidateQueries(["category"]);
            queryClient.invalidateQueries(["categories"]);
          }

        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
    });
  }