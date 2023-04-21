import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const quotes = [
  { saying: "Never make someone a priority when all you are to them is an option.", author: "Maya Angelou"},
  { saying: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou"},
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