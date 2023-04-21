import { Container, Row, Col } from "react-bootstrap";

export default function Grid () {

  return (
    <section>
      <Container className="grid-container" style={{ backgroundColor: "#010400", opacity: 0.85, borderRadius: '25px' }}>
        <Row>
          <Col sm={12} md={4}>
            <h2 className="text-center" style={{color: "#fff"}}>Why BocaCode ?</h2>
            <p style={{color: "#fff"}}> BocaCode is a one and in limited oppurtunity to learn how to properly code IN-PERSON 10-week certification course.Taking entrigued students that may have never coded in their life and sets us up to be the next best Software Engineerings. Two members of my family already completed their course certificate in Cohort #8 and Cohort #9 (Mother and Older sister) and my biggest supportes recommended this course to get my tech career up and running, this is really a great school! </p>
          </Col>

          <Col sm={12} md={4}>
            <h2 className="text-center" style={{color: "#fff"}}>An Exciting Project You're Working On ?</h2>
            <p style={{color: "#fff"}}>The project I plan on working soon is learning how to build a web and mobile application that is actively working with AI (Artificial Intellegience)</p>
          </Col>

          <Col>
            <h2 className="text-center" style={{color: "#fff"}}>Your Ideal Work Place ?</h2>
            <p style={{color: "#fff"}}>The ideal workplace in my eyes is a workplace that encourages you and givves you freedom to independently create as a Software Engineer. Making the user experience more interactive and user friendly while helping to increase earnings and bringing more traffic to the businesss.

            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}