import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div class="container-xl">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://www.fdanews.com/ext/resources/Homepage/pharma-home.jpg?1576034918"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Welcome to ABC Healthcare!</h3>

                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
        </div>
        <div class="col"></div>

        <div class="row">
          <div class="col"></div>
          <br/>
          <div class="col-8">

            <p class="lead">
              <br/>
                  <h5>ABC Healthcare, a Mumbai-based pharma company which sales medicines throughout India as per the demand they receives from multiple hospitals and clinics and operating since last 15 years. Come and have an enriched shopping experience online!</h5>
            </p>
            
            
           


          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;