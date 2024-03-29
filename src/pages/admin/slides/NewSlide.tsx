import { createSlide } from "@/api/slides/create";
import { Loading, Upload } from "@/components"
import { ChangeEvent, useState } from "react"
import { useQueryClient } from "react-query";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const NewLitigation = () => {

  const [ formData, setFormData ] = useState<Record<string, any>>({});
  const [ load, setLoad ] = useState<boolean>(false);
  const [ errors, setErrors ] = useState<Record<string, any>>({});

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleCreate = async () => {
    setLoad(true);
    const response = await createSlide(formData);
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
        title: "Slide Created Successfully",
        text: ""
      });

      navigate(-1);
      queryClient.invalidateQueries(["slides"]);
    }

    console.log(response);
  }

  return (
    <div>
      <Loading  load={load}/>
      <div className="relative bg-white rounded-md shadow">
        <div className="overflow-hidden rounded-md h-[300px] w-full relative">
          <Upload.Image error={errors.image} callback={(image: File) => setFormData({ ...formData, image: image})} />
        </div>
      </div>

      <div className=" mt-3 ">
        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">Slide Title</label>
          <input onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, title: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.title}</div>
        </div>
        
        <div className="form-control flex flex-col gap-1 mt-3">
          <label htmlFor="name">Slide Button</label>
          <input onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, button: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.button}</div>
        </div>

        <div className="form-control flex flex-col gap-1 mt-3">
          <label htmlFor="name">Button Link</label>
          <input onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, link: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.link}</div>
        </div>

        <button onClick={handleCreate} className="rounded-md text-center bg-blue-900 text-white px-6 py-3 w-full mt-6">Create Slide</button>
      </div>
    </div>
  )
}

export default NewLitigation