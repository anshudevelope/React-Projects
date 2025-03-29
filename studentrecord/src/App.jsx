import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentTable from './StudentTable';
import EditStudentDetails from './EditStudentDetails';
import CreateStudentData from './CreateStudentData';
import ViewStudentDetails from './ViewStudentDetails';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentTable />}></Route>
      <Route path="/student/create" element={<CreateStudentData />}></Route>
      <Route path="/student/edit/:studentId" element={<EditStudentDetails />}></Route>
      <Route path="/student/view/:studentId" element={<ViewStudentDetails />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
