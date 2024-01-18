


import { BookUser, Home, ImagePlus, Layout, MessageCircle, Scale, Settings, Stars, Users } from 'lucide-react'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const navs = [
    {
        name: "Dashboard",
        link: "/admin/dashboard",
        icon: <Layout strokeWidth={1.3}/>
    },
    {
        name: "Litigation",
        link: "/admin/litigation",
        icon: <Scale strokeWidth={1.3}/>
    },
    {
        name: "Lawyers",
        link: "/admin/lawyers",
        icon: <Users strokeWidth={1.3}/>
    },
    {
        name: "Reviews",
        link: "/admin/reviews",
        icon: <Stars strokeWidth={1.3}/>
    },
    {
        name: "Blog Posts",
        link: "/admin/blog",
        icon: <BookUser strokeWidth={1.3}/>
    },
    {
        name: "Slides",
        link: "/admin/slides",
        icon: <ImagePlus strokeWidth={1.3}/>
    },
    {
        name: "Messages",
        link: "/admin/messages",
        icon: <MessageCircle strokeWidth={1.3}/>
    },
    {
        name: "Settings",
        link: "/admin/settings",
        icon: <Settings strokeWidth={1.3}/>
    },
    {
        name: "Home",
        link: "/",
        icon: <Home strokeWidth={1.3}/>
    },
    
]

const AdminLayout = () => {

    const location = useLocation();
    const [ visible, setVisible ] = useState<boolean>(true);

  return (
    <div className='w-screen overflow-hidden'>
        <div className={`admin-layout ${ visible ? 'active' : '' } transition-all duration-300 flex fixed h-screen top-0 right-0 overflow-hidden bg-blue-50`}>
            <div className="w-[260px] h-full bg-blue-950 text-white"> 
                <div className="logo uppercase bold font-bold text-3xl text-center p-6">Elthed</div>
                <div className="navs p-3">
                    {navs.map((item, index) => 
                        <Link to={item.link} key={index}>
                            <div className={`nav-item flex items-center gap-4 px-3 py-1.5 mb-1.5 border hover:border-blue-500 ${ location.pathname == item.link ? "bg-blue-500" : ""} hover:bg-blue-600 border-transparent rounded-md`}>
                                <div className="">{item.icon}</div>
                                <div className="pops text-lg">{item.name}</div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <div style={{width: "calc(100% - 260px)"}} className="flex-grow ">

                <div className="h-[8vh] flex items-center justify-between bg-white p-6">
                    <div onClick={() => setVisible(!visible)} className=" w-[40px]">
                        <div className={`bg-black h-0.5 w-full my-2`}></div>
                        <div className={`bg-black h-0.5 w-full my-2`}></div>
                        <div className={`bg-black h-0.5 w-full my-2`}></div>
                    </div>
                </div>

                <div className="h-[92vh] bg-green-50 overflow-y-scroll p-9"> 
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout