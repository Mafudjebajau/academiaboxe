import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="shadow-lg p-4" >
      <h4>Inscreva-se</h4>
      {submitted && <Alert variant="success">Inscrição realizada com sucesso!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Button variant="danger" type="submit">Enviar</Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
