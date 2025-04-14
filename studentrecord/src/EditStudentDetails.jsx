import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudentDetails = () => {

  const { studentId } = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();
  // const [studentData, setStudentdata] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/student/' + studentId)
      .then((res) => res.json())
      .then((data) => {
        setId(data.id)
        setName(data.name)
        setPlace(data.place)
        setPhone(data.phone)
      })
      .catch((err) => console.log(err.message))

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };

    fetch('http://localhost:8000/student/' +studentId, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then((res) => {
        alert("Saved! Student data updated successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message))

  }


  return (
    <div className="container">
      <h2>Edit Student Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>Id</label>
        <input type='text' id='id' name='id' required value={id} onChange={e => setId(e.target.value)} onMouseDown={() => setValidation(true)}></input>
        {id.length == 0 && validation && <span className='errorMsg'>Please enter your Id</span>}

        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' required value={name} onChange={e => setName(e.target.value)} onMouseDown={() => setValidation(true)}></input>
        {name.length == 0 && validation && <span className='errorMsg'>Please enter your name</span>}

        <label htmlFor='place'>Place</label>
        <input type='text' id='place' name='place' required value={place} onChange={e => setPlace(e.target.value)} onMouseDown={() => setValidation(true)}></input>
        {place.length == 0 && validation && <span className='errorMsg'>Please enter your place</span>}

        <label htmlFor='phone'>Phone</label>
        <input type='number' id='phone' name='phone' required value={phone} onChange={e => setPhone(e.target.value)} onMouseDown={() => setValidation(true)}></input>
        {phone.length == 0 && validation && <span className='errorMsg'>Please enter your phone</span>}


        <div className='action-btn'>
          <button className="btn btn-add">Update</button>
          <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
      </form>
    </div>)
}

export default EditStudentDetails