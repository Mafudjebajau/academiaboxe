import { useState, useEffect } from "react";
import { Card, Button, Modal, ModalBody, ModalHeader, ModalTitle, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion"; 
import PropTypes from "prop-types";

const events = [
  { id: 1, title: "Treino Especial com Campeão", date: "25 de Março", local: "Academia de boxe XYZ", imagem: "/homebg.jpg" },
  { id: 2, title: "Seminário de Técnicas Avançadas", date: "30 de Março", local: "Academia de boxe XYZ", imagem: "/homebg.jpg" },
  { id: 3, title: "Torneio Amador", date: "10 de Abril", local: "Academia de boxe", imagem: "/homebg.jpg" },
  { id: 4, title: "Torneio Amador", date: "11 de Abril", local: "Academia de boxe XYZ", imagem: "/homebg.jpg" },
  { id: 5, title: "Treino Especial", date: "20 de Abril", local: "Academia de boxe XYZ", imagem: "/homebg.jpg" },
];

// Função para dividir eventos em grupos de acordo com o tamanho desejado
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const EventList = ({propItemsPerSlide}) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [groupedEvents, setGroupedEvents] = useState([]);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const itemsPerSlide = screenWidth < 700 ? 1 : 3; //um slide se for 700px
   setGroupedEvents(chunkArray(events, propItemsPerSlide > 0 ? propItemsPerSlide : itemsPerSlide));//verifica se o prop foi definido > 0 ? mostrar o numero de slide de acordo com o numero de prop fornecido

  }, [propItemsPerSlide, screenWidth]);

  return (
    <div className="container py-2 pb-5">
      <Carousel fade interval={5000} pause={"hover"} slide className="p-3" variant="dark"> {/*suave */}
        {groupedEvents.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((event) => (
               <Col key={event.id} className="d-flex justify-content-center" lg={propItemsPerSlide > 0 ? 12 : 4} md={12} sm={12} xs={12}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: group.length > 1 ? 1.01 : 1 }} 
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="event-card w-100"
                  >
                    <Card className="mb-3 shadow-lg rounded ">
                      <Card.Img variant="top" src={event.imagem} style={{ objectFit: "cover" }} />
                      <Card.Body className="text-center">
                        <Card.Title className="fw-bold">{event.title}</Card.Title>
                        <Card.Text>Data: {event.date} | Local: {event.local}</Card.Text>
                        <Button variant="outline-dark" onClick={() => setSelectedEvent(event)}>Detalhes</Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      {selectedEvent && (
        <Modal show={!!selectedEvent} onHide={() => setSelectedEvent(null)} centered>
          <ModalHeader closeButton>
            <ModalTitle className="fw-bold">{selectedEvent.title}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Card className="p-4 text-center">
              <Card.Img variant="top" src={selectedEvent.imagem} style={{ height: "300px", objectFit: "cover" }} />
              <Card.Body>
                <p><strong>Local:</strong> {selectedEvent.local}</p>
                <p><strong>Data:</strong> {selectedEvent.date}</p>
                <p><strong>Telefone:</strong> (99) 9999-9999</p>
                <p><strong>Email:</strong> contato@academiaboxe.com</p>
              </Card.Body>
            </Card>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};
EventList.propTypes = {
  propItemsPerSlide:
  PropTypes.number.isRequired
}
export default EventList;
