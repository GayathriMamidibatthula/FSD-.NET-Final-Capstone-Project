import React, { Component, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        }
    };

    componentDidMount() {
        axios.get('http://localhost:46936/api/users')
            .then(result => {
                this.setState({ events: result.data })
                console.log(this.state.events);
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
        }

render(){
  return( 
    <>
    <div className="container-xl" >

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
            <div className="content">
   


                <div className="container-xl">
                        <div className="image-container justify-content-start" >
                        <div className='overlay align-items-center justify-content-center'>  
                                
                                
                                <section className="py-5 text-center container"> 
                                    <div className="">
                                    <div className="col-lg-6 col-md-8 mx-auto">
                                        <h2 className="fw-light" style={{color: "black"}}>User Details</h2>
                                        
                                        <p className="lead text-muted" style={{color: "black"}}></p>
                                    </div>
                                    </div>
                                </section>
  
                                {this.state.events.map((event,index) =>{
                                    return(
                                            <div className="col" class="text-primary">
                                            <div className="card shadow-sm">
                                            <div className="card-body w-100">
                                                        
                                                        <p className="card-text"  > <b>Id: {event.userId} | Username: {event.username} | Email: {event.email} | Password: {event.password} </b></p>  
                                           
                                                        <div className="d-flex justify-content-between align-items-center"></div>
                                                        </div>
                                            </div>
                                            </div>
                                    )
                                    })}
                       
                        </div>
                        </div>
                </div>
            </div>   
    </div>   
    </>   
)
}
}

export default UserView;