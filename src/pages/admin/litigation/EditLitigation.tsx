import { useLitigation } from "@/api/litigation/read";
import { updateLitigation } from "@/api/litigation/update";
import { Loading, Upload } from "@/components"
import { ChangeEvent, useEffect, useState } from "react"
import { useQueryClient } from "react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const EditLitigation = () => {

  const { id } = useParams();

  const { data } = useLitigation({ id });

  const [ formData, setFormData ] = useState<Record<string, any>>({});
  const [ load, setLoad ] = useState<boolean>(false);
  const [ errors, setErrors ] = useState<Record<string, any>>({});

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleCreate = async () => {
    setLoad(true);
    const response = await updateLitigation({...formData, id});
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
        title: "Litigation Updated Successfully",
        text: ""
      });

      navigate(-1);
      queryClient.invalidateQueries(["litigations"]);
      queryClient.invalidateQueries(["litigation"]);
    }

    console.log(response);
  }

  useEffect(() => {
    setFormData({
      title: data?.title,
      description: data?.description,
    });
    console.log(data);

  }, [data]);

  return (
    <div>
      <Loading  load={load}/>
      <div className="relative bg-white rounded-md shadow">
        <div className="overflow-hidden rounded-md h-[300px] w-full relative">
          <Upload.Image init={data?.cover_image} error={errors.cover_image} callback={(image: File) => setFormData({ ...formData, cover_image: image})} />
        </div>
        <div className="absolute bg-gray-50 border -bottom-[100px] h-[250px] w-[200px] left-[50px] overflow-hidden rounded-md z-10 shadow">
          <Upload.Image init={data?.image} error={errors.image}  callback={(image: File) => setFormData({ ...formData, image})}/>
        </div>
      </div>

      <div className=" mt-[120px] ">
        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">Litigation Title</label>
          <input value={formData.title} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, title: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.title}</div>
        </div>

        <div className="mt-6">
          <div className="text-xs text-red-400 pops">{errors?.description}</div>
          <div className="bg-white">
            <ReactQuill value={formData.description} onChange={(value) => setFormData({...formData, description: value})} />
          </div>
        </div>

        <button onClick={handleCreate} className="rounded-md text-center bg-blue-900 text-white px-6 py-3 w-full mt-6">Create Litigation</button>
      </div>
    </div>
  )
}

export default EditLitigation