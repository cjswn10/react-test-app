import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 5000);
  });

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1>404 - Page Not Found</h1>
            <p>5초 뒤에 홈으로 이동합니다.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Custom404;
