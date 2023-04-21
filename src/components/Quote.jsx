import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const quotes = [
  { saying: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius"},
  { saying: "Evil Never Dies.", author: "Meghann Stamper"},
  { saying: "Everything comes in the right momment", author: "Jasmine Henry"},
]

export default function Quote () {
  const [i, setI] = useState(0)

  const nextQuote = () => {
    if(i < quotes.length -1) setI(i + 1)
    else setI(0)
  }

  return (
    <section>
      <Container onClick={nextQuote} className="quote-container"  style={{ backgroundColor: "#010400", opacity: 0.85, borderRadius: '25px', marginTop: '5px', marginBottom: '20px'}}>
        <Row className="text-center" >
          <Col>
           <p style={{color: "#fff"}} ><q>{quotes[i].saying}</q></p> <span style={{color: "#fff"}}>- {quotes[i].author}</span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}