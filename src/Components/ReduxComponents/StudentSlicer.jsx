import { createSlice } from '@reduxjs/toolkit';

const students = [
    {name: 'Satheesh',age: '23',course: 'MERN',batch: 'EA23'},
    {name: 'Bharath',age: '25',course: 'MEVN',batch: 'EA25'}
];

const studentsSlice = createSlice({
    name: 'students',
    initialState: students,
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload);
        },
        updateStudent: (state, action) => {
            const { index, name, age, course, batch } = action.payload;
            if (index >= 0 && index < state.length) {
              const studentToUpdate = state[index];
              studentToUpdate.name = name;
              studentToUpdate.age = age;
              studentToUpdate.course = course;
              studentToUpdate.batch = batch;
            }
        }      
    }
});

export const { addStudent, updateStudent } = studentsSlice.actions;
export default studentsSlice.reducer;