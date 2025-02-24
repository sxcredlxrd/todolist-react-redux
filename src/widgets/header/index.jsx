import AddTask from "../../features/add-task/ui/add-task.jsx";

const Header = () => {
    return (
        <div className="flex flex-col w-full items-center gap-[20px]">
            <h1 className="xl:text-[96px] md:text-[46px] sm:text-[24px] font-bold text-color-1">Список дел</h1>
            <div className="flex w-full justify-between gap-4 items-center border border-transparent rounded-[20px] shadow-md px-[20px] py-[20px]">
                <AddTask/>
            </div>
        </div>
    );
};

export default Header;