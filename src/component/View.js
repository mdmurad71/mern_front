import React, { Fragment } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
export default function View() {
    return (
        <Fragment>
            <Container>
                <Row className='mt-5'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <Link to='/add'> <Button className='bg bg-primary me-2'>Add</Button></Link>
                                    <Link to='/update'><Button className='bg bg-success me-2'>Update</Button></Link>
                                    <Button className='bg bg-danger me-2'>Delete</Button>
                                    <Button className='bg bg-secondary me-2'>View</Button>

                                </td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>

            </Container>
        </Fragment>
    )
}
