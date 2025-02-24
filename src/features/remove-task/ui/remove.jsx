import {useDispatch} from "react-redux";
import {removeTask} from "../../../entities/task/taskSlice.js";
import {Trash2} from "lucide-react";
import Button from "../../../shared/ui/Button/index.jsx";
import Icon from "../../../shared/ui/Icon/index.jsx";


const Remove = ({id}) => {

    const dispatch = useDispatch();

    const handleRemoveTask = ({id}) => {
        dispatch(removeTask(id));
    }

    return (
        <Button
            children={<Icon IconComponent={Trash2} size={24} color="red"/>}
            onClick={() => handleRemoveTask({id})}
            className=""
        />
    );
};

export default Remove;