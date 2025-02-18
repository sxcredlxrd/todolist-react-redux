import {configureStore} from '@reduxjs/toolkit';
import taskReducer from '../../entities/task/taskSlice.js'

export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
})