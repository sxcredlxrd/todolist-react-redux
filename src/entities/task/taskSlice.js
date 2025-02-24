import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    tasks: [],
    filter: "all",
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: crypto.randomUUID(),
                text: action.payload,
                status: false,
                date: new Date().toISOString(),
            }
            state.tasks.push(task)
            state.count += 1
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
            state.count -= 1
        },
        updateTask: (state, action) => {
            const { id, text } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.text = text;
            }
        },
        toggleTask: (state, action) => {
            const { id, status } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.status = !status
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const { addTask, removeTask, updateTask, toggleTask, setFilter } = taskSlice.actions;

export default taskSlice.reducer;