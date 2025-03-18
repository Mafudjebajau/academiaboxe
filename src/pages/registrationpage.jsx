import { Container, Row, Col, Card } from "react-bootstrap";
import RegistrationForm from "../components/RegistrationFormMain";

const RegistrationPage = () => {
  return (
    <Container className="pt-plus mb-4" >
      <h1 className="text-center mb-4 default-title">Inscrição na Academia</h1>
      <Row className="justify-content-center">
        <Col md={6} >
          <Card className="p-4">
            <h4>Faça sua Inscrição</h4>
            <p>Preencha os dados abaixo para se inscrever na nossa academia.</p>
            <RegistrationForm />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
