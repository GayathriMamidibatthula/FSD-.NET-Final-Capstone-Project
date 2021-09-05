import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";

class ProductAdd extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "default",
            price: "default",
            qty: "default",
            PCategory: "default",
            PType: "default",
            CompanyBrand: "default",
            available: "default",
            img: "default",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const details = {
            title: this.state.title,
            price: this.state.price,
            qty: this.state.qty,
            PCategory: this.state.PCategory,
            PType: this.state.PType,
            CompanyBrand: this.state.CompanyBrand,
            available: this.state.available,
            img: this.state.img,
        };

        console.log(details);

        axios.post("http://localhost:8001/product", details)
            .then((result) => {
                console.log("Event Added Successfully..!!" + result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state);
    };

    render() {
        return (

            <>
                <div className="container-xl" >

                    {/* <div className="sidebar">
            <a className="active" href="#Admin">Admin-HomePage</a>
                <Link to="/ProductView"><button className="btn btn-link">View Product</button></Link>
                <Link to="/ProductAdd"><button className="btn btn-link">Add Product</button></Link>
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

                    <div className="content" >
                        <h2></h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm"></div>

                                <div className="col-sm">
                                    <br /><br />
                                    <h3 className="display-5 fw-bold">Add Product</h3>
                                    <br />

                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label>Product Name</label>
                                            <input type="text" className="form-control" name="title" required onChange={this.handleChange} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Product Price</label>
                                            <input type="text" className="form-control" name="price" required onChange={this.handleChange} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Product Quantity</label>
                                            <input type="text" className="form-control" name="qty" required onChange={this.handleChange} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Product Category</label>
                                            <input type="text" className="form-control" name="PCategory" required onChange={this.handleChange} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Product Type</label>
                                            <input type="text" className="form-control" name="PType" required onChange={this.handleChange} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Company Brand</label>
                                            <input type="text" className="form-control" name="CompanyBrand" required onChange={this.handleChange} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Availability</label>
                                            <input type="text" className="form-control" name="available" required onChange={this.handleChange} />
                                        </div>
                                        <br/>
                                        <div className="form-group">
                                            <label>Product Image</label>
                                            <input type="text" className="form-control" name="img" required onChange={this.handleChange} />
                                        </div>
                                        <br />
                                        <br />
                                        <input type="submit" className="btn btn-primary" value="Add Product" />&nbsp;
                                        <NavLink className="btn btn-dark" to="/ProductView">Product List </NavLink>
                                    </form>

                                </div>
                                <div className="col-sm"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}
export default ProductAdd;