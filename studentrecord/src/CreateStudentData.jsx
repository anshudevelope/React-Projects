import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const CreateStudentData = () => {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {id, name, place, phone};

    fetch('http://localhost:3000/student', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
    .then((res) => {
      alert("Saved! Student data saved successfully");
      navigate("/");
    })
    .catch((err) => console.log(err.message))
    
  }



  return (
    <div className="container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>Id</label>
        <input type='text' id='id' name='id' value={id} onChange={e => setId(e.target.value)}></input>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' value={name} onChange={e => setName(e.target.value)}></input>
        <label htmlFor='place'>Place</label>
        <input type='text' id='place' name='place' value={place} onChange={e => setPlace(e.target.value)}></input>
        <label htmlFor='phone'>Phone</label>
        <input type='number' id='phone' name='phone' value={phone} onChange={e => setPhone(e.target.value)}></input>
      

      <div>
        <button className="btn btn-add">Save</button>
        <Link to="/" className='btn btn-primary'>Back</Link>
      </div>
      </form>
    </div>
  )
}

export default CreateStudentData