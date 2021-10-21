import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner_container">
            <div className="container">
                <div className="slider_box row d-flex align-items-center justify-content-between">
                    <div className="col-lg-6 col-sm-12">
                        <div className="slider_content">
                            <h1>WE PROVIDE BEST SERVICES</h1>
                            <p>We care our valued patient's physical, phychological support and medical assistances. We are concerned to meet their need in the most effective ways.</p>
                            <Button className="btn btn-primary">Read More....</Button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="slider_img">
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/r4vVBKp/h3-slider-image-4.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;