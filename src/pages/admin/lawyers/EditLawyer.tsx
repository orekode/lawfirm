import { useLawyer } from "@/api/lawyers/read";
import { deleteLawyer } from "@/api/lawyers/delete";
import { updateLawyer } from "@/api/lawyers/update";
import { Loading, Upload } from "@/components"
import { Trash } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react"
import { useQueryClient } from "react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const EditLawyer = () => {

  const { id } = useParams();

  const { data } = useLawyer({ id });

  const [ formData, setFormData ] = useState<Record<string, any>>({});
  const [ load, setLoad ] = useState<boolean>(false);
  const [ errors, setErrors ] = useState<Record<string, any>>({});

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleCreate = async () => {
    setLoad(true);
    const response = await updateLawyer({...formData, id});
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
        title: "Lawyer Updated Successfully",
        text: ""
      });

      navigate(-1);
      queryClient.invalidateQueries(["lawyers"]);
      queryClient.invalidateQueries(["lawyer"]);
    }

    console.log(response);
  }

  const handleDelete = async () => {

    const cofirmation = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
      
    if (!cofirmation.isConfirmed) return;

    setLoad(true);
    const response = await deleteLawyer(id);
    setLoad(false);

    if(!response) {
      Swal.fire({
        icon: 'error',
        title: "Unable to Delete Lawyer",
        text: 'Please try again later'
      });

    }

    else {
      Swal.fire({
        icon: "success",
        title: "Lawyer Deleted Successfully",
        text: ""
      });

      navigate(-1);
      queryClient.invalidateQueries(["lawyers"]);
      queryClient.invalidateQueries(["lawyer"]);
    }

    console.log(response);
  }

  useEffect(() => {
    setFormData({
        name: data?.name,
        title: data?.title,
        short_description: data?.short_description,
        long_description: data?.long_description,
    });
    console.log(data);

  }, [data]);

    return (
        <div>
            <Loading load={load} />
            <div className="flex  gap-12 py-12 pb-3">
                <div className="">
                    <div className="h-[250px] w-[250px] overflow-hidden rounded-full bg-white shadow">
                        <Upload.Image init={data?.image} error={errors.image} callback={(image: File) => setFormData({ ...formData, image})}/>
                    </div>
                </div>
                <div className=" flex-grow">
                    <div className="form-control flex flex-col gap-1">
                        <label htmlFor="name">Full Name</label>
                        <input value={formData.name} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
                        <div className="text-xs text-red-400 pops">{errors?.name}</div>
                    </div>

                    <div className="form-control flex flex-col gap-1 mt-4">
                        <label htmlFor="stars">Position / Title</label>
                        <input value={formData.title} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, title: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
                        <div className="text-xs text-red-400 pops">{errors?.title}</div>
                    </div>

                    <div className="form-control flex flex-col gap-1 mt-4">
                        <label htmlFor="review">Short Description</label>
                        <div className="text-xs text-red-400 pops">{errors?.short_description}</div>
                        <div className="bg-white short ">
                            <ReactQuill value={formData.short_description} onChange={(value) => setFormData({...formData, short_description: value})}/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="form-control flex flex-col gap-1">
                <label htmlFor="review">Long Description</label>
                <div className="text-xs text-red-400 pops">{errors?.long_description}</div>
                <div className="bg-white short ">
                    <ReactQuill value={formData.long_description} onChange={(value) => setFormData({...formData, long_description: value})}/>
                </div>
            </div>
            <div className="flex gap-1.5 mt-6">
                <button onClick={handleCreate} className="rounded-md flex-grow text-center bg-blue-900 text-white px-6 py-3 w-full ">Update Lawyer</button>
                <button onClick={handleDelete} className="rounded-md text-center bg-red-500 hover:bg-red-400 text-white  w-[50px] h-[50px] flex items-center justify-center">
                    <Trash />
                </button>
            </div>
        </div>
    )
}

export default EditLawyer