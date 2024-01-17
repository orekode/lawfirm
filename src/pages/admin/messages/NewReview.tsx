

import { createReview } from '@/api/reviews/create';
import { Loading, Upload } from '@/components';
import { ChangeEvent, useState } from 'react'
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewReview = () => {

    const [ formData, setFormData ] = useState<Record<string, any>>({ stars: 3});
    const [ errors, setErrors ]     = useState<Record<string, any>>({});

    const [ load, setLoad ] = useState<boolean>(false);

    const navigate    = useNavigate();
    const queryClient = useQueryClient();

    const handleCreate = async () => {

        setLoad(true);
        const response = await createReview(formData);
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
                title: "Review Created Successfully",
                text: ""
            });
        
            navigate(-1);
            queryClient.invalidateQueries(["reviews"]);
        }
    }

    return (
        <div>
            <Loading load={load} />
            <div className="flex items-center gap-12 py-12">
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
                        <label htmlFor="stars">Stars</label>
                        <select defaultValue={3} onChange={(event: ChangeEvent<HTMLSelectElement>) => setFormData({...formData, stars: event.target.value})} name="stars"  className="shadow px-3 py-1.5 rounded-md text-xl pops bg-white">
                            {Array.from({length: 5}, (_, index) => 
                                <option value={index+1}>{index + 1} stars</option>
                            )}
                        </select>
                        <div className="text-xs text-red-400 pops">{errors?.stars}</div>
                    </div>

                    <div className="form-control flex flex-col gap-1 mt-4">
                        <label htmlFor="review">Review</label>
                        <textarea onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, review: event.target.value})} name="review"   className="shadow px-3 py-1.5 rounded-md text-xl pops h-[150px]"/>
                        <div className="text-xs text-red-400 pops">{errors?.review}</div>
                    </div>

                </div>
            </div>

            <button onClick={handleCreate} className="rounded-md text-center bg-blue-900 text-white px-6 py-3 w-full mt-6">Create Review</button>
        </div>
    )
}

export default NewReview