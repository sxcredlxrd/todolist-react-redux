import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="w-full h-full flex flex-col items-center px-[100px] py-[100px]">
            <Outlet/>
        </div>
    );
};

export default Layout;