

import { deleteReview } from '@/api/reviews/delete';
import { useReview } from '@/api/reviews/read';
import { updateReview } from '@/api/reviews/update';
import { Loading, Upload } from '@/components';
import { Trash } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react'
import { useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditReview = () => {

    const { id } = useParams();

    const { data } = useReview({ id });

    const [ formData, setFormData ] = useState<Record<string, any>>({});
    const [ errors, setErrors ]     = useState<Record<string, any>>({});

    const [ load, setLoad ] = useState<boolean>(false);

    const navigate    = useNavigate();
    const queryClient = useQueryClient();

    const handleUpdate = async () => {

        setLoad(true);
        const response = await updateReview({...formData, id});
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
                title: "Review Updated Successfully",
                text: ""
            });
        
            navigate(-1);
            queryClient.invalidateQueries(["reviews"]);
            queryClient.invalidateQueries(["review"]);
        }
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
        const response = await deleteReview(id);
        setLoad(false);
    
        if(!response) {
          Swal.fire({
            icon: 'error',
            title: "Unable to Delete Litigation",
            text: 'Please try again later'
          });
    
        }
    
        else {
          Swal.fire({
            icon: "success",
            title: "Litigation Deleted Successfully",
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
            name: data?.name,
            review: data?.review,
        });
    }, [data]);

    return (
        <div>
            <Loading load={load} />
            <div className="flex items-center gap-12 py-12">
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
                        <label htmlFor="stars">Stars</label>
                        <select defaultValue={data?.stars} onChange={(event: ChangeEvent<HTMLSelectElement>) => setFormData({...formData, stars: event.target.value})} name="stars"  className="shadow px-3 py-1.5 rounded-md text-xl pops bg-white">
                            {Array.from({length: 5}, (_, index) => 
                                <option value={index+1}>{index + 1} stars</option>
                            )}
                        </select>
                        <div className="text-xs text-red-400 pops">{errors?.stars}</div>
                    </div>

                    <div className="form-control flex flex-col gap-1 mt-4">
                        <label htmlFor="review">Review</label>
                        <textarea value={formData.review} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, review: event.target.value})} name="review"   className="shadow px-3 py-1.5 rounded-md text-xl pops h-[150px]"/>
                        <div className="text-xs text-red-400 pops">{errors?.review}</div>
                    </div>

                </div>
            </div>

            <div className="flex gap-1.5 mt-6">
                <button onClick={handleUpdate} className="rounded-md flex-grow text-center bg-blue-900 text-white px-6 py-3 w-full ">Update Litigation</button>
                <button onClick={handleDelete} className="rounded-md text-center bg-red-500 hover:bg-red-400 text-white  w-[50px] h-[50px] flex items-center justify-center">
                    <Trash />
                </button>
            </div>
        </div>
    )
}

export default EditReview