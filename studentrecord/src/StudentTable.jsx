import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function StudentTable() {

    const [students, setStudents] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/student')
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
                            <th>Id</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students && students.map((items) => (
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.place}</td>
                                    <td>{items.phone}</td>
                                    <td className="action">
                                        <Link to="/student/view/:studentId" className="btn btn-info">View</Link>
                                        <Link to="/student/edit/:studentId" className="btn btn-primary">Edit</Link>
                                        <Link className="btn btn-danger">Delete</Link>
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