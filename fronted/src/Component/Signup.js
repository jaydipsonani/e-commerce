import axios from 'axios'
import './css/Register.css';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Signup = () => {

    const navigate = useNavigate()

    const [name, setName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [confirmPassword, setConfirmPassword] = useState(' ')
    const [error, setError] = useState('')

    const btnHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
            console.log(response.data);
            if (!name || !email || !password || !confirmPassword) {
                alert("Please fill the data");
                }

            if (response.data.status === "success") {
                navigate("/");
            }

            if (response.data.name === " ") {
                alert("please fill the data")
            }

            if (response.data.status === "Check Your Email") {
                setError(response.data.status);
                alert("check your email")
            }

            if (response.data.status === "check your password") {
                setError(response.data.status);
                alert("check your password")
            }

            if (response.data.status === "user already registered") {
                alert("user already registered")
            }

        } catch (error) {
            console.log(error);
        }
        HandleClear()
    }

    const HandleClear = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setError('')
    }

    return (

        <div className='hello'>
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <Card className="px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4 second-main">
                                <div className="mb-3">
                                    <div className=''>
                                        <h1 className='text-center'>Register</h1>
                                        <Form onSubmit={btnHandler}>
                                            <Form.Group className="mb-2" controlId="Name">
                                                <Form.Label className="text-center">Name</Form.Label>
                                                <Form.Control
                                                    type="name"

                                                    placeholder="Enter Name"
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                                <Form.Label className="text-center">Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                          
                                                    placeholder="Enter email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                
                                                    placeholder="Password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Confirm Password"
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button className='btn btn-primary text-white' type="submit">
                                                    Create Account
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                    <div className="mt-3">
                                        <p className="mb-0 text-center">
                                            Already have an account??{' '}
                                            <Link to="/">Sign In</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}