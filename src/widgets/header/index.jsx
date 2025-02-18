import Input from "../../shared/ui/Input/index.jsx";
import Button from "../../shared/ui/Button/index.jsx";
import Icon from "../../shared/ui/Icon/index.jsx";
import {Plus} from 'lucide-react'

const Header = () => {
    return (
        <div className="flex flex-col max-w-[1240px] xl:w-full md:w-1/2 items-center gap-[20px]">
            <h1 className="xl:text-[96px] md:text-[46px] font-bold text-color-1">Список дел</h1>
            <div className="flex w-full justify-between gap-4 items-center border border-transparent rounded-[20px] shadow-md px-[20px] py-[20px]">
                <Input
                    placeholder="Создать задачу"
                    className="w-full text-[24px] border border-transparent px-[5px] py-[5px] focus:outline-none focus-within:border-b-n-1 transition duration-150"
                />
                <Button
                    children={
                        <Icon
                            IconComponent={Plus}
                            size={30}
                            color="currentColor"
                        />
                    }
                    className="cursor-pointer text-color-1 border border-stroke-1 rounded-[10px] px-[15px] py-[10px] hover:bg-color-1 hover:text-color-5 transition duration-300"
                />
            </div>
        </div>
    );
};

export default Header;