import { useState } from "react";
import { Link } from "react-router-dom";

const EmpCreate = () => {
    const[title,setfirstName]=useState("");
    const[price,setlastName]=useState("");
    // const[email, emailchange]=useState("");
    // const[img,setimg]=useState("");
    

    const handlesubmit=(e)=>{
      e.preventDefault();
      //const empdata={firstName,lastName,email,img};
      const empdata={title,price};

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
                                <h2>Add Book</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                  

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input required value={title}  onChange={e=>setfirstName(e.target.value)} className="form-control"></input>
                                       
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input value={price} onChange={e=>setlastName(e.target.value)} className="form-control"></input>
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