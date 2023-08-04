import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateStudent } from '../ReduxComponents/StudentSlicer';

const UpdateStudent = () => {

  const students = useSelector((state)=>state.students)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const index = useLocation().state.data;

  const [name, setName] = useState(students[index].name);
  const [age, setAge] = useState(students[index].age);
  const [course, setCourse] = useState(students[index].course);
  const [batch, setBatch] = useState(students[index].batch);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (name && age && course && batch) {
      const newStudent = { name, age, course, batch };
      dispatch(updateStudent({index, ...newStudent}));
      navigate('/students-data');
    }else {
      alert("Please Fill the All Fields..!")
    }
  }

  return (
    <div>
          <h1>Edit Student Data</h1>
          <form className='Form-Container'> <br/> <br/>
              <label>Name : <input type='text' placeholder={students[index].name} onChange={(e) => setName(e.target.value)} /> </label>
              <label>Age : <input type='text' placeholder={students[index].age} onChange={(e) => setAge(e.target.value)} /> </label> <br/><br/>
              <label>Course : <input type='text' placeholder={students[index].course} onChange={(e) => setCourse(e.target.value)} /> </label>
              <label>Batch : <input type='text' placeholder={students[index].batch} onChange={(e) => setBatch(e.target.value)} /> </label> <br/><br/>

              <div className='Submit-Data-Buttons'>
                  <Link to='/students-data' className='link'><button>Cancel</button></Link>
                  <button onClick={handleSubmit} >Update</button>
              </div>
          </form>
    </div>
  )
}

export default UpdateStudent