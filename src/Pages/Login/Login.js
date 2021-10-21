import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signinGoogleProvider } = useAuth();
    return (
        <div className="login_container d-flex align-items-center justify-content-center">
            <div className="text-center form_box">
                <h1 className="mb-4">Please Login</h1>
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button className="mt-4 form_btn" variant="primary">Login</Button>
                    <p>Or</p>
                    <Button variant="danger" onClick={signinGoogleProvider}>Sign in with Google</Button>
                    <p>Don't have account? <Link to="/register">Create account</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;