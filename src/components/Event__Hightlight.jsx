// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Card, Button, Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";

// const EventHighlight = ({titulo, local, data_evento}) => {
//   const [show, setShow] = useState(false)

//   function showModal() {
//     setShow(true);
//   }
//   return (
//     <div >
//       <Modal show={show} onHide={() => setShow(false)} className="w-100">
//         <ModalHeader closeButton>
//           <ModalTitle className="fw-bold">Local do evento</ModalTitle>
//         </ModalHeader>
//         <ModalBody>
//           <Card className="p-4">
           
//             <p>{local}</p>
//             <p>Telefone: (99) 9999-9999</p>
//             <p>Email: contato@academiaboxe.com</p>
//             <iframe
//               title="mapa"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509354!2d144.95373531531583!3d-37.81627917975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1aefbfd%3A0x5045675218ce7e33!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1634730432227!5m2!1sen!2sau"
//               width="100%"
//               height="250"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </Card>
//         </ModalBody>
//       </Modal>

//       <Card className="mb-4">
//         <Card.Img variant="top" src="/homebg.jpg" />
//         <Card.Body>
//           <Card.Title>{titulo}</Card.Title>
//           <Card.Text>Data: 20 de Março {data_evento} | Local: {local} Academia de Boxe XYZ</Card.Text>
//           <Button variant="dark" onClick={showModal}>Saiba Mais</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
// // https://placehold.co/600x400
// EventHighlight.propTypes = {
//   titulo:
//   PropTypes.string.isRequired,
//   local:
//   PropTypes.string.isRequired,
//   data_evento:
//   PropTypes.string.isRequired,

// }
// export default EventHighlight;

import { useState, useEffect } from "react";
import { Card, Button, Modal, ModalBody, ModalHeader, ModalTitle, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion"; // Biblioteca para animações suaves

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

const EventHighlight = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [groupedEvents, setGroupedEvents] = useState([]);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    window.addEventHightlightener("resize", updateWidth);

    return () => window.removeEventHightlightener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const itemsPerSlide = screenWidth < 700 ? 1 : 3; //um slide se for 700px
    setGroupedEvents(chunkArray(events, itemsPerSlide));
  }, [screenWidth]);

  return (
    <div className="container mt-4 py-4 pb-5">
      <Carousel fade interval={5000} pause={"hover"} slide className="p-3" variant="dark"> {/*suave */}
        {groupedEvents.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((event) => (
                <Col lg={4} md={12} sm={12} xs={12} key={event.id} className="d-flex justify-content-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: group.length > 1 ? 1.01 : 1 }} 
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="event-card"
                  >
                    <Card className="mb-3 shadow-lg rounded">
                      <Card.Img variant="top" src={event.imagem} style={{ height: "200px", objectFit: "cover" }} />
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

export default EventHighlight;
