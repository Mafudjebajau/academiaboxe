import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Básico",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div >
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
        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Plano</Form.Label>
          <Form.Select name="plan" value={formData.plan} onChange={handleChange}>
            <option value="Básico">Básico - $30/mês</option>
            <option value="Intermediário">Intermediário - $50/mês</option>
            <option value="Avançado">Avançado - $70/mês</option>
          </Form.Select>
        </Form.Group>
        <Button variant="danger" type="submit">Inscrever-se</Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
