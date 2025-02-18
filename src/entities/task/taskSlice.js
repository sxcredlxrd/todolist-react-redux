import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    tasks: [],
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
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.status = !status
            }
        }
    }
})

export const { addTask, removeTask, updateTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;