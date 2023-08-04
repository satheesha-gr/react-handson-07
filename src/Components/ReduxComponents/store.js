import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './StudentSlicer';

const store = configureStore({
    reducer: {
        students: studentsReducer
    }
});

export default store;