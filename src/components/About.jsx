import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
const randomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
const myImage = `${process.env.PUBLIC_URL + '/images/bg2.jpg'}`
const width = 300;
const height = 400;
const foo = ["hello", `${width}`];

const imageList = [
  `${process.env.PUBLIC_URL + '/images/bg1.jpg'}`,
  `${process.env.PUBLIC_URL + '/images/bg2.jpg'}`,
  `${process.env.PUBLIC_URL + '/images/bg3.jpg'}`,
  `${process.env.PUBLIC_URL + '/images/bg4.jpg'}`,
];

export default function About() {
  const [imgUrl, setImgUrl] = useState(randomElement(imageList));

  return (
    <main>
      <Container style={{ backgroundColor: "#010400", opacity: 0.85, borderRadius: '25px'  }}>
        <Row className="text-center">
          <Col sm={12} md={6}>
            <img
              src={imgUrl}
              onClick={() => setImgUrl(randomElement(imageList))}
              className="rounded-circle"
              alt="Profile"
              width={400}
              height={400}
            />
            <h1 className="mt-3" style={{color: "#fff"}}>Jasmine Henry</h1>
          </Col>

          <Col>
            <h1 className="mt-3"  style={{color: "#fff"}} >About Me</h1>
            <p style={{color: "#fff"}}>
              Creativity, art, and learning are all important to me, and I'm
              always looking for new methods to express myself coming from a
              artistic background of oil paintings, charcoal drawings, and other
              forms of artistic expression kept me always wanting to learn
              something new in the creativity department.
            </p>
            <p style={{color: "#fff"}}>
              A fun fact about me is that I received acceptance into my high
              school's art Magnet program and gained 4+ years of experience in
              hand-made ceramics, ceramics made on the potter's wheel, and other
              mediums and tools used to create art all while falling in love
              with the passion to CREATE and BUILD.
            </p>
            <p style={{color: "#fff"}}>
              Joining the military right before college was the best decision I
              ever made for myself, and it was a challenging eye-opening
              adventure working in the Nuclear Engineering Department for 5
              years acquiring team building and technical skills acquired in the
              service.
            </p>
            <p style={{color: "#fff"}}>
              Completing my Naval career and while being the owner of my
              Makeup-Artist business for 3+ years while expanding my skills
              looking for more challenges/opportunity and fell in love with
              coding and what are can be created writing code. Being that I am
              very appreciative for my progress in life, I know my younger self
              would be so proud.
            </p>
            <p style={{color: "#fff"}}> 
              The one person that always lifts me up, motivates me and keeps me
              on track as A young jack of many trades is my mother and I'm
              forever grateful for the ultimate mentor.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
