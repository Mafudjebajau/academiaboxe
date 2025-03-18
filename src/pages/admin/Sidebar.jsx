import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3 vh-100 mt-plus">
      <h4 data-aos="fade-right">Academia 🥊</h4>
      <ListGroup variant="flush">
        <ListGroup.Item action href="#" className="bg-dark text-white">🏠 Dashboard</ListGroup.Item>
        <ListGroup.Item action href="#" className="bg-dark text-white">👥 Alunos</ListGroup.Item>
        <ListGroup.Item action href="#" className="bg-dark text-white">📅 Eventos</ListGroup.Item>
        <ListGroup.Item action href="#" className="bg-dark text-white">⚙️ Configurações</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
