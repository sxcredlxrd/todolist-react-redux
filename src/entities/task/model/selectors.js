import { createSelector } from "@reduxjs/toolkit"

export const selectTasks = (state) => state.task.tasks;
export const selectFilter = (state) => state.task.filter;

export const selectFilteredTasks = createSelector(
    [selectTasks, selectFilter],
    (tasks, filters) => {
        if (filters === 'completed') {
            return tasks.filter(task => task.status)
        }
        if (filters === 'incomplete') {
            return tasks.filter(task => !task.status)
        }
        return tasks
    }
)