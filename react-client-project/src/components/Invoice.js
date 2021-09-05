import React from 'react';
import {Link} from 'react-router-dom';
import img from '../components/img/images.jpg';
import '../components/cover.css';
import Home from '../components/Home';

const mystyle = {
    //textAlign: "center",
    backgroundImage: `url(${img})`,
    //width:'250px',
    height: '100%'
    // height: '100vh',
    // backgroundPosition: center,
    // backgroundRepeat: no-repeat,
    // backgroundSize: cover

};

const Invoice = () => {
    return (
<body class="d-flex h-100 text-center text-white bg-dark">
    
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      {/* <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Cover</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header> */}
    
      <main class="px-3">
        <h1>Thank you for shopping with us!</h1>
        <p class="lead">Hope you enjoyed the shoppinge experience. Please write to abcpharma@pharma.com in case of any additional queries</p>
        <p class="lead">
         <Link to='/home'> <a class="btn btn-lg btn-secondary fw-bold border-white bg-white">Back to Home Page</a></Link>
        </p>
      </main>
    
      {/* <footer class="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer> */}
    </div>
    
    
        
      </body>
    );
};

export default Invoice;