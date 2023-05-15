import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//import img1 from './picture/p3.jpg';

const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});
    

    useEffect(() => {
        fetch("http://localhost:8080/employees/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

   
    
      
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Details</h2>
                </div>
               
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <img src={empdata.img} />
                        <h2>Employee id: {empdata.id}</h2>
                        <h2>The Employee name is : <b>{empdata.firstName} {empdata.lastName}</b>  </h2>
                        <h2>Contact Details</h2>
                        <h2>Email is : {empdata.email}</h2>
                        
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;