import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact_container">
            <div className="contact_top">
                <h1>Contact <span>us</span></h1>
            </div>
            <div className="contact_form">
                <div className="container">
                    <h1>Enter Your Information</h1>
                    <Form>
                        <Row className="mb-5">
                            <Col>
                                <Form.Control className="py-3" placeholder="Full Name Here" />
                            </Col>
                            <Col>
                                <Form.Control className="py-3" placeholder="Email Here" />
                            </Col>
                        </Row>
                        <FloatingLabel controlId="floatingTextarea2" label="Massage">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '150px' }}
                            />
                        </FloatingLabel>
                        <div className="text-center mt-5">
                            <Button variant="danger" className="px-5 py-2">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;