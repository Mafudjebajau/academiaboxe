import { Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";

const StatsPanel = () => {
  return (
    <Row className="mb-4">
      <Col md={4} data-aos="fade-right">
        <Card className="p-3 text-center">
          <h4>👤 Alunos Ativos</h4>
          <h2><CountUp start={0} end={120}/></h2>
        </Card>
      </Col>
      <Col md={4} data-aos="fade-down" data-aos-delay="200">
        <Card className="p-3 text-center">
          <h4>📅 Eventos Próximos</h4>
          <h2><CountUp start={0} end={12}/></h2>
        </Card>
      </Col>
      <Col md={4} data-aos="fade-left" data-aos-delay="400">
        <Card className="p-3 text-center">
          <h4>🥊 Treinos Mensais</h4>
          <h2><CountUp start={0} end={48}/></h2>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsPanel;
