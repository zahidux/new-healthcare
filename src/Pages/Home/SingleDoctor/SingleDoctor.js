import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ShowDetails from '../Home/ShowDetails/ShowDetails';

const SingleDoctor = () => {
    const { doctorId } = useParams();
    const [doctors, setDoctors] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState([]);

    useEffect(() => {
        fetch('/hospitalcare.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    useEffect(() => {
        // const singleDoctor = doctors.find(item => item.id == doctorId);
        // setSingleDoctor(singleDoctor)
        if (doctors.length) {
            const addedDoctor = [];
            const singleDoctor = doctors.find(doctor => doctor.id == doctorId);
            addedDoctor.push(singleDoctor);
            setSingleDoctor(addedDoctor)
        }
    }, [doctors])

    return (
        <div>
            <div>
                {
                    singleDoctor.map(doctor => <ShowDetails
                        key={doctor.id}
                        doctor={doctor}
                    ></ShowDetails>)
                }
            </div>
        </div>
    );
};

export default SingleDoctor;