import { Link } from "react-router-dom"

export default function StudentTable (){
    return(
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
                        <tr>
                            <td>1</td>
                            <td>Anshu</td>
                            <td>Delhi</td>
                            <td>2545784845</td>
                            <td className="action">
                                <Link to="/student/view/:studentId" className="btn btn-info">View</Link>
                                <Link to="/student/edit/:studentId" className="btn btn-primary">Edit</Link>
                                <Link className="btn btn-danger">Delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}