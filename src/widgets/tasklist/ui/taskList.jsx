import {useSelector} from "react-redux";
import Task from "../../../entities/task/ui/task.jsx";
import TaskFilter from "../../../features/tasks-filter/ui/task-filter.jsx";
import {selectFilteredTasks} from "../../../entities/task/model/selectors.js";

const TaskList = () => {

    const count = useSelector((state) => state.task.count);
    const tasks = useSelector(selectFilteredTasks);

    return (
        <div className="flex flex-col gap-[20px] w-full mt-[70px] sm:mt-[30px]">
            {count > 0 ? (
                <>
                    <TaskFilter/>
                    <Task tasks={tasks}/>
                </>
            ) : (
                <p className="text-center">
                    Все дела сделаны
                </p>
            )}
        </div>
    );
};

export default TaskList;