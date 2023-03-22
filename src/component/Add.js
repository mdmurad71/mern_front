import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Api from '../api/Api.js';
import axios from 'axios';
import { NavLink, Navigate } from 'react-router-dom';

const Add = () => {

    // const history = Navigate();

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",

    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, password } = inpval;

        const res = await fetch(Api.AddUser, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            // history.push("/")
            // setUdata(data)
            console.log("data added");

        }
    }


    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <h1>Add Data</h1>
            <hr></hr>

            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">phone</label>
                        <input type="text" value={inpval.phone} onChange={setdata} name="phone" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">password</label>
                        <input type="number" value={inpval.password} onChange={setdata} name="password" class="form-control" id="exampleInputPassword1" />
                    </div>



                    <button type="submit" onClick={postData} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Add;
