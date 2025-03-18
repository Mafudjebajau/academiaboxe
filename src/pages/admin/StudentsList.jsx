import { faPencil, faPlus, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Card, Table, Button, Form, Modal } from "react-bootstrap";

const StudentsList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Carlos Silva", status: "Ativo" },
    { id: 2, name: "Ana Pereira", status: "Ativo" }
  ]);

  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({ id: null, name: "", status: "Ativo" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    if (editMode) {
      setStudents(students.map(student => (student.id === currentStudent.id ? currentStudent : student)));
    } else {
      setStudents([...students, { ...currentStudent, id: students.length + 1 }]);
    }
    handleClose();
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
    setEditMode(true);
    handleShow();
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <Card className="p-3" data-aos="fade-right">
      <h4> <FontAwesomeIcon icon={faUser} /> Alunos Inscritos</h4>
      <Button variant="primary" onClick={() => { setEditMode(false); setCurrentStudent({ id: null, name: "", status: "Ativo" }); handleShow(); }}>
        <FontAwesomeIcon icon={faPlus} />  Adicionar Aluno
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(student)}> <FontAwesomeIcon icon={faPencil} /> Editar</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(student.id)}> <FontAwesomeIcon icon={faTrash} /> Remover</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de Adição/Edição */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Editar Aluno" : "Adicionar Aluno"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" value={currentStudent.name} onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select value={currentStudent.status} onChange={(e) => setCurrentStudent({ ...currentStudent, status: e.target.value })}>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </Form.Select>
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

export default StudentsList;
