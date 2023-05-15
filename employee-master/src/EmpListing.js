import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import img1 from './picture/p3.jpg';
import './search.css';
const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();
   // const [query, setQuery] = useState("");
    
    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8080/employees/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

 

    useEffect(() => {
        fetch("http://localhost:8080/employees").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
           
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
  
   //console.log(query);
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Book Listing</h2>
                </div>
                
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Create</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                                <td>Price</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;