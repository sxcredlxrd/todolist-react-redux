import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="w-full h-full flex flex-col items-center xl:px-[100px] xl:py-[100px] lg:px-[75px] lg:py-[75px] md:px-[50px] md:py-[50px] sm:px-[20px] sm:py-[20px]">
            <Outlet/>
        </div>
    );
};

export default Layout;