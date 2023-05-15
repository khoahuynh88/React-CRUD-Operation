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
                    <h2>Book Details</h2>
                </div>
               
                <div className="card-body"></div>

                {empdata &&
                    <div>
                       
                        <h2>Book id: {empdata.id}</h2>
                        <h2>Book title : <b>{empdata.title} </b>  </h2>
                        <h2>Book Price : <b>${empdata.price}</b>  </h2>
                        
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