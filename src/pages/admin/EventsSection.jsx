import { Card, ListGroup } from "react-bootstrap";

const events = [
  { id: 1, title: "Campeonato Estadual", date: "10/03/2025" },
  { id: 2, title: "Treinamento Intensivo", date: "15/03/2025" },
  { id: 3, title: "Festival de Lutas", date: "22/03/2025" }
];

const EventsSection = () => {
  return (
    <Card className="p-3" data-aos="fade-left">
      <h4>📅 Próximos Eventos</h4>
      <ListGroup variant="flush">
        {events.map(event => (
          <ListGroup.Item key={event.id}>
            <strong>{event.title}</strong> - {event.date}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default EventsSection;
