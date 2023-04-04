import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Api from '../api/Api';
export default function View() {

    const [data, setdata] = useState([]);

    const DataList = () => {
        axios.get(Api.getUserList).then(res => {
            if (res.status === 201) {
                console.log(res);
                setdata(res.data);

            }
        })
    }

    useEffect(() => {
        DataList();
    }, [])

    console.log(data);

    const DeleteData = (id) => {
        // alert(id);
        axios.delete(Api.deleteById + id).then(res => {
            if (res.status === 201) {
                DataList();
            }
        })
    }


    return (
        <Fragment>
            <Container>
                <Row className='mt-5'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((childList) => {
                                return (
                                    <tr>
                                        <td>{childList?._id}</td>
                                        <td>{childList?.name}</td>
                                        <td>{childList?.email}</td>
                                        <td>{childList?.phone}</td>
                                        <td>
                                            <Link to='/add'> <Button className='bg bg-primary me-2'>Add</Button></Link>
                                            <Link to={`/update/${childList?._id}`}><Button className='bg bg-success me-2'>Update</Button></Link>
                                            <Button onClick={() => DeleteData(childList?._id)} className='bg bg-danger me-2'>Delete</Button>
                                            <Button className='bg bg-secondary me-2'>View</Button>

                                        </td>

                                    </tr>
                                )

                            })}



                        </tbody>
                    </Table>
                </Row>

            </Container>
        </Fragment>
    )
}
