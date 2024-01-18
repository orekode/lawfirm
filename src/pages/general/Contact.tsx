
import { createMessage } from '@/api/messages/create';
import { useSetting } from '@/api/settings/read';
import { Footer, Loading, Nav } from '@/components'
import { ChangeEvent, useState } from 'react'
import { useQueryClient } from 'react-query';
import Swal from 'sweetalert2';

const Contact = () => {

    const [ formData, setFormData ] = useState<Record<string, any>>({ stars: 3});
    const [ errors, setErrors ]     = useState<Record<string, any>>({});

    const [ load, setLoad ] = useState<boolean>(false);

    const queryClient = useQueryClient();

    const { data } = useSetting({ id: 1 });

    const handleCreate = async () => {

        setLoad(true);
        const response = await createMessage(formData);
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
                title: "Message Sent Successfully",
                text: ""
            });
        
            queryClient.invalidateQueries(["messages"]);

            setFormData({
                first_name: "",
                last_name:  "",
                email:      "",
                number:     "",
                subject:    "",
                message:    "",
            });

            setErrors({});
        }
    }




    return (
        <div>
            <Nav bg={false} />
                <Loading load={load} />
                <section className="min-h-[400px] p-24 max-[700px]:px-6">
                    <div className="grid grid-cols-6 gap-3 max-w-[1000px] mx-auto">

                        <div className="col-span-6">
                            <div className=" mb-3 text-center">
                                <div className="text-3xl ">CONTACT US</div>
                                <p className="text-sm font-light max-w-[320px] mx-auto">Please feel free to contact us in any way convenient for you; we will respond within 24 hours.</p>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="grid grid-cols-2 gap-6 max-[500px]:grid-cols-1">
                                <div className="form-control flex flex-col">
                                    <label htmlFor="first_name">First Name</label>
                                    <input value={formData.first_name} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, first_name: event.target.value})} className="shadow border border-[#999] px-3 py-1.5 text-lg bg-transparent" type="text" />
                                    <div className="text-xs text-red-400 pops">{errors?.first_name}</div>
                                </div>
                                <div className="form-control flex flex-col">
                                    <label htmlFor="first_name">Last Name</label>
                                    <input value={formData.last_name} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, last_name: event.target.value})} className="shadow border border-[#999] px-3 py-1.5 text-lg bg-transparent" type="text" />
                                    <div className="text-xs text-red-400 pops">{errors?.last_name}</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 max-[500px]:grid-cols-1 mt-3">
                                <div className="form-control flex flex-col">
                                    <label htmlFor="first_name">Email</label>
                                    <input value={formData.email} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: event.target.value})} className="shadow border border-[#999] px-3 py-1.5 text-lg bg-transparent" type="email" />
                                    <div className="text-xs text-red-400 pops">{errors?.email}</div>
                                </div>
                                <div className="form-control flex flex-col">
                                    <label htmlFor="first_name">Phone Number</label>
                                    <input value={formData.number} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, number: event.target.value})} className="shadow border border-[#999] px-3 py-1.5 text-lg bg-transparent" type="tel" />
                                    <div className="text-xs text-red-400 pops">{errors?.number}</div>
                                </div>
                            </div>

                            <div className="form-control flex flex-col mt-3">
                                <label htmlFor="first_name" className="text-center text-lg mb-1">Subject</label>
                                <input value={formData.subject} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, subject: event.target.value})} className="shadow border border-[#999] px-3 py-1.5 text-lg bg-transparent" type="text" />
                                <div className="text-xs text-red-400 pops">{errors?.subject}</div>
                            </div>

                            <div className="form-control flex flex-col mt-3">
                                <label htmlFor="first_name" className="text-center text-lg mb-1">Message</label>
                                <div className="text-xs text-red-400 pops">{errors?.message}</div>
                                <textarea value={formData.message} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {if(event.target.value.split(' ').length < 60 && event.target.value.length < 400) setFormData({...formData, message: event.target.value})} } className="shadow border h-[170px] border-[#999] px-3 py-1.5 text-lg bg-transparent" />
                                <div className="flex justify-end">
                                    <span>{formData?.message?.split(' ')?.length}/60</span>
                                </div>
                            </div>

                            <button onClick={handleCreate} className="px-6 py-4 bg-[#e88b28] text-white capitalize mt-6 w-full">Send Message</button>

                        </div>

                        <div className="col-span-6">
                            <div className=" text-lg text-center mt-6">ELTHED at Law Consult </div>
                            <div className="pops leading-loose text-sm font-light flex gap-6 gap-y-1.5 justify-center flex-wrap max-w-[800px] mx-auto">
                                <div dangerouslySetInnerHTML={{__html: data?.physical_address}} className="pops">
                                </div>
                                <div className="">
                                    <div className="">Email: {data?.email} </div>
                                    <div className="">Tel: {data?.tel_number}</div>
                                    <div className="">Mob: {data?.mob_number}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                

                <section className="h-[500px]">
                    <iframe src="https://maps.google.com/maps?q=ELTHED@LAW%20Consult&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"  className="relative z-2 w-full h-full"></iframe>
                </section>
            <Footer />
        </div>
    )
}

export default Contact