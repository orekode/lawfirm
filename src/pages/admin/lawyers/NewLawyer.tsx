

import { createLawyer } from '@/api/lawyers/create';
import { Loading, Upload } from '@/components';
import { ChangeEvent, useState } from 'react'
import { useQueryClient } from 'react-query';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewLawyer = () => {

    const [ formData, setFormData ] = useState<Record<string, any>>({});
    const [ errors, setErrors ]     = useState<Record<string, any>>({});

    const [ load, setLoad ] = useState<boolean>(false);

    const navigate    = useNavigate();
    const queryClient = useQueryClient();

    const handleCreate = async () => {

        setLoad(true);
        const response = await createLawyer(formData);
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
                title: "Lawyer Created Successfully",
                text: ""
            });
        
            navigate(-1);
            queryClient.invalidateQueries(["lawyers"]);
        }
    }

    return (
        <div>
            <Loading load={load} />
            <div className="flex  gap-12 py-12 pb-3">
                <div className="">
                    <div className="h-[250px] w-[250px] overflow-hidden rounded-full bg-white shadow">
                        <Upload.Image error={errors.image} callback={(image: File) => setFormData({ ...formData, image})}/>
                    </div>
                </div>
                <div className=" flex-grow">
                    <div className="form-control flex flex-col gap-1">
                        <label htmlFor="name">Full Name</label>
                        <input onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
                        <div className="text-xs text-red-400 pops">{errors?.name}</div>
                    </div>

                    <div className="form-control flex flex-col gap-1 mt-4">
                        <label htmlFor="stars">Position / Title</label>
                        <input onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, title: event.target.value})} name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
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

            <button onClick={handleCreate} className="rounded-md text-center bg-blue-900 text-white px-6 py-3 w-full mt-6">Create Review</button>
        </div>
    )
}

export default NewLawyer