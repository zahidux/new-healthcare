import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const PageNotFound = () => {
    return (
        <div className="not_found">
            <Link to="/home"><Button className="btn btn-warning">Back to Home</Button></Link>
        </div>
    );
};

export default PageNotFound;