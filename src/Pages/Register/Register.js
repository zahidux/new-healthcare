import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './Register.css'
import initializeAuth from '../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

initializeAuth();

const Register = () => {
    const { signinGoogleProvider } = useAuth();
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleRegister = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be 6 cherecter')
            return;
        }
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUserName();
            })

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    return (
        <div className="register_container d-flex align-items-center justify-content-center">
            <div className="register_box text-center">
                <h1 className="mb-4">Sing Up</h1>
                <Form onSubmit={handleRegister}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter your full name"
                        className="mb-3"
                    >
                        <Form.Control onBlur={handleName} type="text" placeholder="enter your name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control onBlur={handleEmail} type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </FloatingLabel>
                    {/* <p>Passwords must be at least 6 characters.</p>
                    <FloatingLabel controlId="floatingPassword" label="Re-enter Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel> */}
                    <input className="mt-4 mb-3 form_btn btn" type="submit" value="Register" />
                    <p>Or</p>
                    <Button variant="danger" onClick={signinGoogleProvider}>Sign in with Google</Button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Register;