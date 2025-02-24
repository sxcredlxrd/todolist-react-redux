import Input from "../../../shared/ui/Input/index.jsx";
import Rename from "../../rename-task/ui/rename.jsx";
import {useState} from "react";
import Remove from "../../remove-task/ui/remove.jsx";
import {Toggle} from "../../toggle-task/index.js";

const RenameModal = ({task, onClose, open}) => {

    const [updateValue, setUpdateValue] = useState(task.text || "");

    return (
        <div key={task.id} onClick={onClose} className={`fixed inset-0 top-[0px] left-[0px] xl:px-[100px] lg:px-[75px] md:px-[50px] sm:px-[20px] xl:w-full lg:w-full md:w-full sm:w-full h-full flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-[15px] bg-color-5 shadow-md rounded-[20px] xl:w-full lg:w-full md:w-full sm:w-full py-[20px] px-[20px]">
                <div>
                    <h1 className="text-color-1 font-bold text-[20px]">Сегодня</h1>
                </div>
                <div className="flex items-center gap-[10px] text-[18px] sm:text-[14px]">
                    <Toggle disabled={true}/>
                    <Input
                        value={updateValue}
                        onChange={(e) => setUpdateValue(e.target.value)}
                        placeholder={task.text}
                        className="xl:text-[18px] sm:text-[14px] xl:w-[500px] sm:w-[200px] border border-transparent px-[5px] py-[5px] focus:outline-none focus-within:border-b-n-1 transition duration-150"
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <Rename id={task.id} text={updateValue}/>
                    <Remove id={task.id}/>
                </div>
            </div>
        </div>
    );
};

export default RenameModal;