import Button from "../../../shared/ui/Button/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../../entities/task/taskSlice.js";
import {selectFilter} from "../../../entities/task/model/selectors.js";

const TaskFilter = () => {

    const dispatch = useDispatch();
    const currentFilter = useSelector(selectFilter)

    return (
        <div className="flex gap-[10px]">
            <Button
                onClick={() => dispatch(setFilter('all'))}
                className={`xl:px-[10px] xl:py-[10px] sm:px-[10px] sm:py-[5px] xl:text-[16px] sm:text-[14px] border-2 border-stroke-1 rounded-[10px] text-color-1 font-semibold  transition duration-300 hover:bg-stroke-2 hover:border-stroke-1 hover:text-color-5 ${currentFilter === 'all' ? 'bg-color-1 text-color-5' : ''}`}
            >
                Все
            </Button>
            <Button
                onClick={() => dispatch(setFilter('completed'))}
                className={`xl:px-[10px] xl:py-[10px] sm:px-[10px] sm:py-[5px] xl:text-[16px] sm:text-[14px] border-2 border-stroke-3 rounded-[10px] text-color-2 font-semibold  transition duration-300 hover:bg-stroke-4 hover:border-stroke-3 hover:text-color-2 ${currentFilter === 'completed' ? 'bg-color-2 text-color-5' : ''}`}
            >
                Выполнено
            </Button>
            <Button
                onClick={() => dispatch(setFilter('incomplete'))}
                className={`xl:px-[10px] xl:py-[10px] sm:px-[10px] sm:py-[5px] xl:text-[16px] sm:text-[14px] border-2 border-stroke-5 rounded-[10px] text-color-3 font-semibold  transition duration-300 hover:bg-stroke-6 hover:border-stroke-5 hover:text-color-3 ${currentFilter === 'incomplete' ? 'bg-color-3 text-color-5' : ''}`}
            >
                Не выполнено
            </Button>
        </div>
    );
};

export default TaskFilter;