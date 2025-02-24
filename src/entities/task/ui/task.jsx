import {Toggle} from "../../../features/toggle-task/index.js";
import Remove from "../../../features/remove-task/ui/remove.jsx";
import {useState} from "react";
import RenameModal from "../../../features/rename-modal/ui/rename-modal.jsx";
import Button from "../../../shared/ui/Button/index.jsx";
import Icon from "../../../shared/ui/Icon/index.jsx";
import {Pencil} from "lucide-react";

const Task = ({tasks}) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            {tasks.map((task) => (
                <div key={task.id} className="flex flex-col gap-[15px] bg-color-5 shadow-md rounded-[20px] w-full py-[20px] px-[20px]">
                    <div>
                        <h1 className="text-color-1 font-bold xl:text-[20px] sm:text-[16px]">Сегодня</h1>
                    </div>
                    <div className="flex items-center gap-[30px] xl:text-[18px] sm:text-[14px]">
                        <Toggle id={task.id} status={task.status} text={task.text}/>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button onClick={() => setOpen(!open)}>
                            <Icon IconComponent={Pencil} size={24} color="#30324B"/>
                        </Button>
                        <RenameModal task={task} onClose={() => setOpen(false)} open={open}/>
                        <Remove id={task.id}/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Task;