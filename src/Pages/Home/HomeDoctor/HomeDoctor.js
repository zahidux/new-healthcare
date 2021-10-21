import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeDoctor = (props) => {
    const { name, img, description, id } = props.doctor;
    return (
        <div className="col-lg-4">
            <Card>
                <Card.Img className="rounded-circle p-5" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`single-doctor/${id}`}><Button variant="info">See More ...</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeDoctor;