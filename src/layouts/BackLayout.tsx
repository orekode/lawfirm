import { Outlet, useNavigate } from "react-router-dom"



const BackLayout = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate(-1)} className="text-sm bg-[#f5af54] text-white rounded-md px-3 py-1.5 mb-3">Back</button>

        <Outlet />
    </div>
  )
}

export default BackLayout