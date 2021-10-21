import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./hospitalcare.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    console.log(doctors)
    return (
        <div className="container">
            <h1 className="text-center my-5">All Doctors</h1>
            <div className="row g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;