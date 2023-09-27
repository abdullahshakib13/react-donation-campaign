import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';

const Layout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <div className="py-2">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;