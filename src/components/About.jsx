import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const randomElement = (array) => {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

const imageList = [
  `https://picsum.photos/300/300/?random=2`,
  `https://picsum.photos/300/300/?random=4`,
  `https://picsum.photos/300/300/?random=6`,
  `https://picsum.photos/300/300/?random=8`,
]

const colors = ['red', 'blue', 'black', 'salmon']


export default function About() {
  const [imgUrl, setImgUrl] = useState(randomElement(imageList));
  const [nameColor, setNameColor] = useState(randomElement(colors));

  console.log(nameColor)
  return (
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>
            <img src={imgUrl}
              onClick={() =>
                setImgUrl(randomElement(imageList))
              }
              className="rounded-circle" alt="Profile" />
            
            <Button onClick={() => setNameColor(randomElement(colors))}>
              Change nameColor
            </Button>
          </Col>

          <Col>
            <h1 style={{ color: nameColor }} className="mt-3">
              Your Name
            </h1>
            <p>
              If you enjoy using big fonts, you're not alone! There are many
              reasons why someone might prefer larger text when reading or
              writing. For example, larger fonts can make text easier to read,
              especially for people with visual impairments or those who
              struggle with reading small text. Additionally, big fonts can help
              draw attention to important information, making it easier to spot
              and understand.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
