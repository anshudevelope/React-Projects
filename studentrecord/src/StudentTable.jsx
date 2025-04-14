import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function StudentTable() {

    const [students, setStudents] = useState("");

    const navigate = useNavigate();

    const displayDetails = (id) => {
        navigate("/student/view/" + id)
    }

    const editDetails = (id) => {
        navigate("/student/edit/" + id)
    }

    const deleteData = (id) => {
        if(window.confirm("Are you want to delete student data?")){
            
    fetch('http://localhost:8000/student/' +id, {
        method: 'DELETE',
      })
        .then((res) => {
          alert("Student data successfully removed!");
          window.location.reload();
        })
        .catch((err) => console.log(err.message))
        }
    }

    useEffect(() => {
        fetch('http://localhost:8000/student')
            .then((res) => res.json())
            .then((data) =>
                setStudents(data)).catch((err) =>
                    console.log(err.message))
    }, [])



    return (
        <div className="container">
            <h2>Student Table</h2>
            <div className="table-container">
                <Link to="/student/create" className="btn btn-add">Add New Student</Link>
                <table>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students && students.map((items, index) => (
                                <tr key={items.id}>
                                    <td>{index+1}</td>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.place}</td>
                                    <td>{items.phone}</td>
                                    <td className="action">
                                        <button onClick={() => displayDetails(items.id)} className="btn btn-info">View</button>
                                        <button onClick={() => editDetails(items.id)} className="btn btn-primary">Edit</button>
                                        <button onClick={() => deleteData(items.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}