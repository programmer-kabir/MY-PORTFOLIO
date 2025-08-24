import { Outlet } from "react-router";
import FallowMe from "../components/FallowMe";
import Navbar from "../components/Share/Navbar";
import Footer from "../components/Share/Footer";

const Layout = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className=" fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
                <FallowMe />
            </div>
           
           <Outlet />
          <Footer/>
        </div>
    );
};

export default Layout;