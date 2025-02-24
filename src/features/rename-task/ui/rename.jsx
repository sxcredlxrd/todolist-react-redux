import {useDispatch} from 'react-redux';
import {Pencil} from 'lucide-react';
import Button from "../../../shared/ui/Button/index.jsx";
import {updateTask} from "../../../entities/task/taskSlice.js";
import Icon from "../../../shared/ui/Icon/index.jsx";

const Rename = ({id, text}) => {

    const dispatch = useDispatch();

    const handleUpdateTask = () => {
        dispatch(updateTask({id, text}));
    }


    return (
        <Button className="flex gap-2 text-color-4 font-semibold" onClick={() => handleUpdateTask()}>
            Сохранить <Icon IconComponent={Pencil} size={24} color="blue"/>
        </Button>
    );
};

export default Rename;