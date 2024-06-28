
import Footer from '../Shares/Footer/Footer';
import Navber from '../Shares/Header/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
             <div className='min-h-screen'>
                <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;