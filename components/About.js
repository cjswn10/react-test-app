import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="page-header">
        <div className="filter" />
      </div>
      <Container>
        <Row style={{ height: "35vh" }} className="justify-content-center align-items-center">
          <Col md={12}>
            <h1 style={{ color: "#464ea3" }} className="fw-bold text-center">
              Welcome to AWESOME FOOD STORE
            </h1>
            <hr></hr>

            <p style={{ fontSize: "14px", fontWeight: "400", lineHeight: "175%" }} className="text-center">
              믿고 보는 맛집 리스트 어썸푸드스토어에서
              <br />
              나만의 맛집지도를 완성해보세요.
              <br />
              지역별 인기 맛집, 메뉴별 인기 맛집 <br />
              솔직한 리뷰, 믿을 수 있는 평점으로 맛집을 추천해드립니다.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
