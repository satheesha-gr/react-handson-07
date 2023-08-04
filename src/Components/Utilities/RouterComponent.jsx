import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import StudentData from '../Pages/StudentData'
import UpdateStudent from '../Pages/UpdateStudent'
import AddNewStudent from '../Pages/AddNewStudent'
import ContactUs from '../Pages/ContactUs'
import ErrorPage from '../Pages/ErrorPage'

const RouterComponent = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Home/>} />

                <Route path="/students-data" element={<StudentData />} />
                    
                <Route path="/editstudent" element={<UpdateStudent />} />
                
                <Route path="/newstudent" element={<AddNewStudent />} />

                <Route path='/contact-us' element={<ContactUs />} />
                
                <Route path='/*' element={<ErrorPage />} />
            
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterComponent