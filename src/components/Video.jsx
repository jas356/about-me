import { Container, Row, Col } from "react-bootstrap";
import  ReactPlayer  from "react-player";
export default function Video() {
  const myVideo = `${process.env.PUBLIC_URL + "/videos/ceramics.MOV"}`;
  return (
    <section>
      <Container className="video-container">
        <Row >
          <Col className="text-center">
            <h2>Abstract Ceramics Bowl</h2>
            <p>
              Created 2022 by Jasmine Henry in Ceramics I
            </p>
            <ReactPlayer url={myVideo} controls={true} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
