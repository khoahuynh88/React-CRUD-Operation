import { useState } from "react";
import { Link } from "react-router-dom";

const EmpCreate = () => {
    const[firstName,setfirstName]=useState("");
    const[lastName,setlastName]=useState("");
    const[email, emailchange]=useState("");
    const[img,setimg]=useState("");
    

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={firstName,lastName,email,img};
      

      fetch("http://localhost:8080/employees",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((response) => response.json())
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => console.error(error));

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                  

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input required value={firstName}  onChange={e=>setfirstName(e.target.value)} className="form-control"></input>
                                       
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input value={lastName} onChange={e=>setlastName(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input value={img} onChange={e=>setimg(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                   
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;