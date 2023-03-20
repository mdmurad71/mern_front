import React, { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default function Update() {
    return (
        <Fragment>
            <Container>
                <Row className='mt-5'>
                    <Col lg={12}>
                        <h1>Update Data</h1>
                        <hr></hr>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name" />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="phone" placeholder="Enter Phone Nubmer" />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>

        </Fragment>
    )
}
