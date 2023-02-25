import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Detail from "./Detail";

const Store = ({ stores }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const handleStoreClick = (store) => {
    setSelectedStore(store);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStore(null);
  };

  return (
    <>
      <Container>
        <Row xs={2} md={5} className="g-4">
          {stores?.map((store) => (
            <Col key={store.id}>
              <Image src={store.thumb} alt={store.name} fluid onClick={() => handleStoreClick(store)} />
            </Col>
          ))}
        </Row>
      </Container>
      <Detail selectedStore={selectedStore} showModal={showModal} closeModal={handleCloseModal} />
    </>
  );
};

export default Store;
