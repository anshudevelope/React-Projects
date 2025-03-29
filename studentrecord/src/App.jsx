import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentTable from "./StudentTable";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentTable />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
