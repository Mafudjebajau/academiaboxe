import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, ListGroup, Button, Modal, Form } from "react-bootstrap";
import {  faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

const EventsList = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Campeonato Estadual", date: "10/03/2025" }
  ]);

  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({ id: null, title: "", date: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    if (editMode) {
      setEvents(events.map(event => (event.id === currentEvent.id ? currentEvent : event)));
    } else {
      setEvents([...events, { ...currentEvent, id: events.length + 1 }]);
    }
    handleClose();
  };

  const handleEdit = (event) => {
    setCurrentEvent(event);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <Card className="p-3" data-aos="fade-up">
      <h4>  <FontAwesomeIcon icon={faCalendarCheck} /> Próximos Eventos</h4>
      <Button variant="success" onClick={() => { setEditMode(false); setCurrentEvent({ id: null, title: "", date: "" }); handleShow(); }}>
         <FontAwesomeIcon icon={faPlus} /> Adicionar Evento
      </Button>
      <ListGroup className="mt-3">
        {events.map(event => (
          <ListGroup.Item key={event.id}>
            <strong>{event.title}</strong> - {event.date}
            <Button variant="warning" size="sm" className="ms-2" onClick={() => handleEdit(event)}>  <FontAwesomeIcon icon={faPencil} /></Button>
            <Button variant="danger" size="sm" className="ms-2" onClick={() => handleDelete(event.id)}>  <FontAwesomeIcon icon={faTrash} /></Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Modal de Adição/Edição */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Editar Evento" : "Adicionar Evento"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" value={currentEvent.title} onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data</Form.Label>
              <Form.Control type="date" value={currentEvent.date} onChange={(e) => setCurrentEvent({ ...currentEvent, date: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="success" onClick={handleSave}>{editMode ? "Salvar Alterações" : "Adicionar"}</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default EventsList;
