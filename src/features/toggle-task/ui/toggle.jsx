import {useDispatch} from "react-redux";
import {toggleTask} from "../../../entities/task/taskSlice.js";
import Checkbox from "../../../shared/ui/Checkbox/index.jsx";

export const Toggle = ({id, status, text, disabled}) => {

    const dispatch = useDispatch();

    const handleToggleTask = ({id, status}) => {
        dispatch(toggleTask({id: id, status: status}));
    }

    return (
        <Checkbox
            className="peer appearance-none border-2 border-n-1 w-[20px] h-[20px] rounded-[50%] cursor-pointer checked:bg-color-2 checked:border-color-2 transition duration-300"
            onChange={() => handleToggleTask({id, status})}
            checked={status}
            text={text}
            id={id}
            disabled={disabled}
        />
    );
};

