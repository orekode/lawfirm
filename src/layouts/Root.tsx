import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();
const Root = () => {

  setInterval(() => {
    localStorage.removeItem('ghhg');
  }, 1000 * 60 * 20) //20 mins
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Root