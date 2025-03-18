import { Container, Row } from "react-bootstrap";
import EventList from "../components/Event_list";

const EventPage = () => {
  return (
    <Container className="pt-5 px-2 bg-transparent  rounded shadow-md">
      <div className="pt-5">
        <h1 className="py-2 mb-4 text-dark">Eventos da Academia de Boxe</h1>
      </div>
      <Row>
         <EventList 
         propItemsPerSlide={1}
         />
        <EventList />
      </Row>
    </Container>
  );
};

export default EventPage;
