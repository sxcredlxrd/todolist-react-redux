import {useState} from "react";
import {useDispatch} from "react-redux";
import {Plus} from "lucide-react";
import {addTask} from "../../../entities/task/taskSlice.js";
import Button from "../../../shared/ui/Button/index.jsx";
import Icon from "../../../shared/ui/Icon/index.jsx";
import Input from "../../../shared/ui/Input/index.jsx";

const AddTask = () => {

    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(addTask(value));
        setValue("");
    }

    return (
        <>
            <Input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder="Создать задачу"
                className="w-full xl:text-[24px] lg:text-[20px] sm:text-[14px] border border-transparent px-[5px] py-[5px] focus:outline-none focus-within:border-b-n-1 transition duration-150"
            />
            <Button
                onClick={() => handleAddTask()}
                className="cursor-pointer text-color-1 border border-stroke-1 rounded-[10px] xl:px-[15px] xl:py-[10px] sm:px-[10px] sm:py-[5px] hover:bg-color-1 hover:text-color-5 transition duration-300"
            >
                <Icon
                    IconComponent={Plus}
                    color="currentColor"
                    size={30}
                />
            </Button>
        </>
    );
};

export default AddTask;