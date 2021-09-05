import React, { Component, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

class AdminList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        }
    };

    componentDidMount() {
        axios.get('http://localhost:8001/movies')
            .then(result => {
                this.setState({ events: result.data })
                console.log(this.state.events);
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
    }

    render() {
        return (
            <>
                <div class="container-xl" >

                    {/* <div class="nav nav-tabs nav-justified ">
            <a class="active" href="#Admin">Admin-HomePage</a>
                <Link to="/ProductView"><button className="btn btn-link">View Product</button></Link>
                <Link to="/ProductAdd"><button class="btn btn-link">Add Product</button></Link>
                <Link to="/ProductDelete"><button className="btn btn-link">Delete Product</button></Link>
                <Link to="/ProductEdit"><button className="btn btn-link">Edit Product</button></Link>
                <Link to="/ProductSearch"><button className="btn btn-link">ProductSearch</button></Link>
                <Link to="/UserView"><button className="btn btn-link">UserView</button></Link>
            
        </div> */}
                    <header className="d-flex justify-content-center py-3 border-bottom">
                        <ul className="nav nav-pills nav-dark ">
                            <li className="nav-item"><NavLink to="/ProductView" className="nav-link">View Product</NavLink></li>
                            {/* <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li> */}

                            <li className="nav-item"><NavLink to="/ProductAdd" className="nav-link">Add Product</NavLink></li>
                            {/* <li className="nav-item"><NavLink to="/AdminList" className="nav-link">Admin</NavLink></li>              */}
                            <li className="nav-item"><NavLink to="/ProductDelete" className="nav-link">Delete Product</NavLink></li>
                            <li className="nav-item"><NavLink to="/ProductEdit" className="nav-link">Edit Product</NavLink></li>
                            <li className="nav-item"><NavLink to="/ProductSearch" className="nav-link">Search Product</NavLink></li>
                            <li className="nav-item"><NavLink to="/UserView" className="nav-link">User View</NavLink></li>
                        </ul>
                    </header>

                    <div class="content">
                        <h2>Admin Page</h2>
                        <img src="https://www.principle-pharmacy.com/wp-content/uploads/2020/11/Untitled-11.jpg" class="img-fluid" alt="..." />
                        <p>Admin is responsible for managing content in the portal. Admin will handle adding and
                            updating data in portal.</p>
                    </div>


                </div>
            </>
        )
    }
}

export default AdminList;