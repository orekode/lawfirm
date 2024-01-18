import { Outlet, useLocation } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

AOS.init();
const Root = () => {

  const location = useLocation();


  useEffect(() => window.scrollTo(0,0), [location]);

  setInterval(() => {
    localStorage.removeItem('ghhg');
  }, 1000 * 60 * 20); //20 mins
  
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Root