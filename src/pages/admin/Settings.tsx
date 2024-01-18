import { useSetting } from "@/api/settings/read";
import { updateSettings } from "@/api/settings/update";
import { Loading, Upload } from "@/components"
import { ChangeEvent, useEffect, useState } from "react"
import { useQueryClient } from "react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";



const Settings = () => {


  const { data } = useSetting({ id: 1 });

  const [ formData, setFormData ] = useState<Record<string, any>>({});
  const [ load, setLoad ] = useState<boolean>(false);
  const [ errors, setErrors ] = useState<Record<string, any>>({});

  const queryClient = useQueryClient();

  const handleCreate = async () => {
    setLoad(true);
    const response = await updateSettings({...formData, id: 1});
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

      queryClient.invalidateQueries(["settings"]);
      queryClient.invalidateQueries(["setting"]);
    }

    console.log(response);
  }

  useEffect(() => {
    setFormData({
      title: data?.title,
      email: data?.email,
      tel_number: data?.tel_number,
      mob_number: data?.mob_number,
      twitter: data?.twitter,
      facebook: data?.facebook,
      instagram: data?.instagram,
      physical_address: data?.physical_address,
    });
    console.log(data);

  }, [data]);

  return (
    <div>
      <div className="font-bold text-xl mb-3">Settings</div>
      <Loading  load={load || !data}/>
      <div className="relative bg-white rounded-md shadow">
        <div className="overflow-hidden rounded-md h-[300px] w-full relative">
          <Upload.Image init={data?.digital_address} error={errors.digital_address} callback={(image: File) => setFormData({ ...formData, digital_address: image})} />
        </div>
        {/* <div className="absolute bg-gray-50 border -bottom-[100px] h-[160px] w-[250px] left-[50px] overflow-hidden rounded-md z-10 shadow">
          <Upload.Image init={data?.logo} error={errors.image}  callback={(image: File) => setFormData({ ...formData, image})}/>
        </div> */}
      </div>

      <div className=" mt-6 ">

      <div className="grid grid-cols-2 gap-6 max-[500px]:grid-cols-1 mt-3">
        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">Email</label>
          <input value={formData.email} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.email}</div>
        </div>

        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">Telephone Number</label>
          <input value={formData.tel_number} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, tel_number: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.tel_number}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-[500px]:grid-cols-1 mt-3">
        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">Mobile Number</label>
          <input value={formData.mob_number} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, mob_number: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.mob_number}</div>
        </div>

        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">Twitter Link</label>
          <input value={formData.twitter} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, twitter: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.twitter}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-[500px]:grid-cols-1 mt-3">
        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">Facebook Link</label>
          <input value={formData.facebook} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, facebook: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.facebook}</div>
        </div>

        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">LinkedIn Link</label>
          <input value={formData.instagram} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, instagram: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
          <div className="text-xs text-red-400 pops">{errors?.instagram}</div>
        </div>
      </div>

        <div className="mt-6">
          <label htmlFor="name">Address</label>
          <div className="text-xs text-red-400 pops">{errors?.physical_address}</div>
          <div className="bg-white">
            <ReactQuill value={formData.physical_address} onChange={(value) => setFormData({...formData, physical_address: value})} />
          </div>
        </div>

        <div className="flex gap-1.5 mt-6">
          <button onClick={handleCreate} className="rounded-md flex-grow text-center bg-blue-900 text-white px-6 py-3 w-full ">Update Settings</button>
        </div>
      </div>
    </div>
  )
}

export default Settings