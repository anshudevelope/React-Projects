import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

const ViewStudentDetails = () => {

  const {studentId} = useParams();
  const [studentData, setStudentdata] = useState({});

  useEffect(() =>{
    fetch('http://localhost:8000/student/' +studentId)
    .then((res) => res.json())
    .then((data) => setStudentdata(data))
    .catch((err) => console.log(err.message))
    
  }, []);
  
  return (
    <div className='container'>
      <h1>Student Details</h1>
      {studentData && <div className="details">
        <p><strong>Id: </strong>{studentData.id}</p>
        <p><strong>Name: </strong>{studentData.name}</p>
        <p><strong>Place: </strong>{studentData.place}</p>
        <p><strong>Phone: </strong>{studentData.phone}</p>
      </div>}
      <Link to="/" className='btn btn-primary'>Back</Link>

    </div>
  )
}

export default ViewStudentDetails