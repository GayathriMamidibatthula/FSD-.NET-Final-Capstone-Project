import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';



class ProductSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "default",
            title: "default",
            price: "default",
            qty: "default",
            imageSrc: "https://wallpaperaccess.com/full/676549.jpg",
            isaunthenticated: "flase",
            resdata: "",
            Nstatus: "0",
            product: {}
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const details = {
            id: this.state.id,
        };

        console.log("details:", details);
        console.log("State details:", details);


        axios.get("http://localhost:46936/api/Products/" + this.state.id)
            .then((response) => {
                console.log("Event Added Successfully..!!" + response);
                console.log("response.data", response.data);
                console.log("response.status", response.status);
                console.log("response.statusText", response.statusText);
                console.log("response.headers", response.headers);
                console.log("response.config", response.config);
                //this.setState({ isaunthenticated:  })

                console.log("Nstatus", this.state.Nstatus);
                this.setState({ Nstatus: response.status });
                this.setState({ isaunthenticated: "true" });
                this.setState({ title: response.data.title });
                this.setState({ price: response.data.price });
                this.setState({ qty: response.data.qty });
                this.setState({ img: response.data.imageSrc });

                console.log("Nstatus", this.state.Nstatus);
                console.log("isaunthenticated", this.state.isaunthenticated);
                console.log("Product_ID", this.state.Nstatus);
                console.log("Product_Name", this.state.title);
                console.log("Product_Price", this.state.price);
                console.log("Product_qty", this.state.qty);
                console.log("Product_img", this.state.img);

            })

            .catch((error) => {
                console.log("Custome Error", error);
                this.setState({ isaunthenticated: "false" });
                console.log("Custome Error - isaunthenticated", this.state.isaunthenticated);

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
                        <h2></h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm"><br /><br />
                                    <h2 className="display-5 fw-bold">Product Search</h2>
                                    <br />
                                    <form onSubmit={this.handleSubmit}>

                                        <div className="form-group">
                                            <label>Product Id</label>
                                            <input type="text" className="form-control" name="id" required onChange={this.handleChange} />
                                        </div>

                                        <br />
                                        <br />
                                        <input type="submit" className="btn btn-warning" value="Search Product" />
                                    </form> </div>

                                <div className="col-sm">


                                </div><div className="col-sm">
                                    <br /><br /><br /><br />

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Product ID</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Product Price</th>
                                                <th scope="col">Product Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-primary">
                                                <th scope="row"></th>
                                                <td>{this.state.id}</td>
                                                <td>{this.state.title}</td>
                                                <td>{this.state.price}</td>
                                                <td>{this.state.qty}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <img src={this.state.img} width="460" height="345"  ></img>



                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </>




        );
    }

}
export default ProductSearch;