import { Container, Row, Col } from "react-bootstrap";
import  ReactPlayer  from "react-player";
export default function Video() {
  const myVideo = `${process.env.PUBLIC_URL + "/videos/princess.mov"}`;
  return (
    <section>
      <Container className="video-container">
        <Row >
          <Col className="text-center">
            <h2>Video</h2>
            <p>
              Bunnies are great because they were the first to Hop to the Hip,
              hippidy hop.
            </p>
            <ReactPlayer url={myVideo} controls={true} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
