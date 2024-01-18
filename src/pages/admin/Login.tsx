import { Loading } from '@/components';
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Login = () => {
    const [ formData, setFormData ] = useState<Record<string, any>>({ stars: 3});
    const [ errors, setErrors ]     = useState<Record<string, any>>({});

    const [ load, setLoad ] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleCreate = async () => {

        setLoad(true);
        const response = formData.email == "elthed@legal.com" && formData.password == "elthedadmin@2024";
        setLoad(false);

        if(!response) {
            Swal.fire({
                icon: 'error',
                title: "Invalid Credentials",
                text: 'Please check your inputs and try again'
            });
        
            setErrors({
                email: "please check this input and try again",
                password: "please check this input and try again"
            });
        }
    
        else {
            Swal.fire({
                icon: "success",
                title: "Welcome Back!",
                text: ""
            });

            localStorage.setItem('ghhg', 'ghhg');

            setFormData({
                email: "",
                passwords:  "",
            });

            setErrors({});

            navigate('/admin');
        }
    }

  return (
    <div>
        <section className="min-h-[400px] p-24 max-[700px]:px-6">
            <div className="grid grid-cols-6 gap-3 max-w-[500px] mx-auto">
                <Loading load={load} />
                <div className="col-span-6">
                    <div className=" mb-3 text-center">
                        <div className="text-3xl ">Login</div>
                        <p className="text-sm font-light max-w-[320px] mx-auto"></p>
                    </div>
                </div>

                <div className="col-span-6">
                    <div className="grid grid-cols-1 gap-6 max-[500px]:grid-cols-1">
                        <div className="form-control flex flex-col">
                            <label htmlFor="first_name">Email</label>
                            <input value={formData.email} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: event.target.value})} className="shadow pops border border-[#999] px-3 py-1.5 text-lg bg-transparent" type="text" />
                            <div className="text-xs text-red-400 pops">{errors?.email}</div>
                        </div>
                        <div className="form-control flex flex-col">
                            <label htmlFor="first_name">Password</label>
                            <input value={formData.password} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({...formData, password: event.target.value})} className="shadow pops border border-[#999] px-3 py-1.5 text-lg bg-transparent" type="password" />
                            <div className="text-xs text-red-400 pops">{errors?.password}</div>
                        </div>
                    </div>

                    

                    <button onClick={handleCreate} className="px-6 py-4 bg-[#e88b28] text-white capitalize mt-6 w-full">Login</button>

                </div>

            </div>
        </section>
    </div>
  )
}

export default Login