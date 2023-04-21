import { Container, Row, Col, Carousel } from "react-bootstrap";
import Image from "../assests/image.jpg";
import Image2 from "../assests/image2.jpg";
import Image3 from "../assests/image3.jpg";
import Image4 from "../assests/image4.jpg";
import Image5 from "../assests/image5.jpg";
import Image6 from "../assests/image6.jpg";
import Image7 from "../assests/image7.jpg";
import Image8 from "../assests/image8.jpg";
import Image9 from "../assests/image9.jpg";

export default function PictCarousel () {

  return (
    <section >
      <Container className="carousel-container">
        <Row>
          <Col className="p-0">
            <Carousel fade>
              <Carousel.Item>
                <img src={Image}
                  className="d-block w-100" 
                  alt="slide 1" />
                <Carousel.Caption>
                <h2>Fashionista (Me)</h2>
                  <p>First item are great because they are the first. and I must learn to write better english.</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image2} 
                  className="d-block w-100" 
                  alt="slide 1" />
                <Carousel.Caption>
                <h2>Makeup Art</h2>
                  <p>Makeup art done by Jasmine.</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image3}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Another Angle of Makeup Art</h2>
                  <p>Done by Jasmine</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image4}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Client Soft Glam</h2>
                  <p></p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image5}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Client Soft Glam</h2>
                  <p></p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image6}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>First Item</h2>
                  <p>First item are great because they are the first. and I must learn to write better english.</p>
                </Carousel.Caption> 
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image7}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Client Soft Glam</h2>
                  <p></p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image8}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Ceramics Bowl</h2>
                  <p>Created by Jasmine</p>
                </Carousel.Caption>  
              </Carousel.Item>

              <Carousel.Item>
                <img src={Image9}
                  className="d-block w-100" 
                   alt="slide 1" />
                <Carousel.Caption>
                <h2>Ceramics Bowl (2nd Angle)</h2>
                  <p>Created by Jasmine</p>
                </Carousel.Caption>  
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}