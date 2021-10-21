import React, { useEffect, useState } from 'react';
import HomeDoctor from '../HomeDoctor/HomeDoctor';

const HomeDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./hospitalcare.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div className="container">
            <h1 className="text-center my-5">Our Doctors</h1>
            <div className="row g-4">
                {
                    doctors.map(doctor => <HomeDoctor
                        key={doctor.id}
                        doctor={doctor}
                    ></HomeDoctor>)
                }
            </div>
        </div>
    );
};

export default HomeDoctors;