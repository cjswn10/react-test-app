import { Modal, Button, Image, Row, Col } from "react-bootstrap";

const Detail = ({ selectedStore, showModal, closeModal }) => {
  return (
    <Modal size="xl" show={showModal} onHide={closeModal} dialogClassName="modal-90w">
      <Modal.Header className="d-flex justify-content-end">
        <Button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></Button>
      </Modal.Header>
      {selectedStore && (
        <>
          <Modal.Body className="d-flex align-items-stretch">
            <Row className="vh-90 w-100">
              <Col md={6} className="d-flex align-items-center justify-content-center">
                <Image fluid src={selectedStore.image} alt={selectedStore.name} className="img-fluid aspect-ratio-object h-100 object-fit-contain" />
              </Col>
              <Col md={6} className="mt-3 d-flex flex-column justify-content-between">
                <div className="mb-3">
                  <div>
                    <h3>{selectedStore.name}</h3>
                  </div>
                </div>
                <div className="mt-auto mb-4">
                  <p>{selectedStore.description}</p>
                  {selectedStore.url && (
                    <div className="mt-5 fw-bold">
                      <a href={selectedStore.url} target="_blank" rel="noopener noreferrer">
                        {selectedStore.url}
                      </a>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default Detail;
