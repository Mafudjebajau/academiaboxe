import { Container, Row, Col, Card } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container className="pt-plus mb-3">
      <h1 className="mb-4 text-light" data-aos="flip-down">Contato</h1>
      <Row>
        <Col md={6} data-aos="fade-right">
          <Card className="p-4">
            <h4>Entre em Contato</h4>
            <p>Estamos aqui para tirar suas dúvidas. Entre em contato pelo formulário ou visite nossa academia!</p>
            <ContactForm />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <h4>Nosso Endereço</h4>
            <p>Rua dos Lutadores, 123 - Cidade do Boxe</p>
            <p>Telefone: (99) 9999-9999</p>
            <p>Email: contato@academiaboxe.com</p>
            <iframe
              title="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509354!2d144.95373531531583!3d-37.81627917975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1aefbfd%3A0x5045675218ce7e33!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1634730432227!5m2!1sen!2sau"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
