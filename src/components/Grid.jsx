import { Container, Row, Col } from "react-bootstrap";

export default function Grid () {

  return (
    <section>
      <Container className="grid-container" style={{ borderRadius: '25px' }}>
        <Row>
          <Col sm={12} md={4}>
            <h2 className="text-center" style={{color: "#995945"}}>Why BocaCode ?</h2>
            <p style={{color: "#000000"}}> BocaCode is a one and in limited opportunity to learn how to properly code IN-PERSON 10-week certification course.Taking intrigued students that may have never coded in their life and sets us up to be the next best Software Engineer. Two members of my family already completed their course certificate in Cohort #8 and Cohort #9 (Mother and Older sister) and my biggest support system recommended this course to get my tech career up and running, this is really a great school! </p>
          </Col>

          <Col sm={12} md={4}>
            <h2 className="text-center" style={{color: "#995945"}}>An Exciting Project You're Working On ?</h2>
            <p style={{color: "#000000"}}>The project I plan on working soon is learning how to build a web and mobile application that is actively working with AI (Artificial Intelligence)</p>
          </Col>

          <Col>
            <h2 className="text-center" style={{color: "#995945"}}>Your Ideal Work Place ?</h2>
            <p style={{color: "#000000"}}>The ideal workplace in my eyes is a workplace that encourages you and gives you freedom to independently create as a Software Engineer. Making the user experience more interactive and user friendly while helping to increase earnings and bringing more traffic to the business.

            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}