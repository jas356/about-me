import { Container, Row, Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export default function Footer () {

  const currentYear = new Date().getFullYear();
  const gitHubUrl = "https://github.com/jas356"

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {currentYear} Jasmine Henry
            <br />
            <a href={Github} 
              target="_blank"
              rel="noreferrer">Code in GitHub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}