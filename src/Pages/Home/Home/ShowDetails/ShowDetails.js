import React from 'react';
import './ShowDetails.css'

const ShowDetails = ({ doctor }) => {
    console.log(doctor)
    const { name, img, description, department, phone } = doctor;
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <div className="details_box">
                            <h1>Name : {name}</h1>
                            <h4>Department : {department}</h4>
                            <p>About: <br />{description} </p>
                            <p>Phone : {phone}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="details_box me-0">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;