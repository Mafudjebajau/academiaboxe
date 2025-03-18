import { Container, Row, Col } from "react-bootstrap";
import StatsPanel from "./StatsPanel";
import StudentsList from "./StudentsList";
import EventsList from "./EventsList";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import ChartSection from "./ChartSection";

const Dashboard = () => {
    useEffect(() => {
        AOS.init({ duration: 1500, once: false })
      }, [])
  return (
    <Container fluid className="text-light">
      <Row>
        {/* Sidebar */}
       
        {/* Conteúdo principal */}
        <Col md={12} className="p-4">
          <h2  className="text-light pt-plus">Dashboard</h2>
          <StatsPanel />
          <Row>
            <Col md={4}><StudentsList /></Col>
            <Col md={4}><EventsList /></Col>
            <Col md={4}><ChartSection /></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
