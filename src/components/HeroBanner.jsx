import { Container, Row, Col } from "react-bootstrap";
import videoBg from "../assests/design.svg"

export default function Banner () {

  return (
   <div className="hero">
    <Container>
      <Row>
        <Col>
          <video src={videoBg} />
        </Col>
      </Row>
    </Container>
   </div>
          
  )
}