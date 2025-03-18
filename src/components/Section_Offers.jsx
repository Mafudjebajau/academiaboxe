import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function SectionOffers() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <>
            <Row className="pt-3">
                <Row className=" pxx translate">
                    <Col md={12} lg={4}>
                        <Card className="mb-4 bg-dark text-light">
                            <CardHeader className="p-2 pb-0">
                                <CardTitle className="text-center"><img src="/icone_musculo_01.png" alt="equipe" /> <h2 className="fw-bold pt-3">Treino Completo</h2></CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText className="text-center p2">Treine diferentes modalidades, tudo em um só lugar.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={12} lg={4}>
                        <Card className="mb-4 bg-dark text-light">
                            <CardHeader className="p-2 pb-0">
                                <CardTitle className="text-center"><img src="/icone_equipe_01.png" alt="equipe" /> <h2 className="text-center fw-bold pt-3"> Equipe Preparada</h2></CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText className="text-center p2">Treinadores estão preparados para lhe ajudar com os seus objetivos</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={12} lg={4}>
                        <Card className="bg-dark text-light">
                            <CardHeader className="p-2 pb-0">
                                <CardTitle className="text-center"><img src="/icone_positivo_01.png" alt="equipe" /> <h2 className="pt-3 fw-bold">Praticidade</h2></CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText className="text-center p2">Processos simples, treinos cirurgicos, resultados grandes!</CardText>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
                <Row>
                    <Col lg={12} md={12} className="d-flex justify-center" >
                        <Row className="d-flex justify-center ">
                            <Col md={4}>
                                <h1 ref={ref} className="d-flex gap-3 p-3  fw-bold justify-center">
                                    {inView ? <CountUp start={0} end={100} duration={5} prefix="+" /> : "0"} Alunos
                                </h1>
                            </Col>
                            <Col md={4}>
                                <h1 ref={ref} className="d-flex gap-3 p-3  fw-bold justify-center">
                                    {inView ? <CountUp start={0} end={40} duration={3} prefix="+" /> : "0"} Profes
                                </h1>
                            </Col>
                            <Col md={4}>
                                <h1 ref={ref} className="d-flex gap-3 p-3  fw-bold justify-center">
                                    {inView ? <CountUp start={0} end={480} duration={5} prefix="+" /> : "0"} Eventos
                                </h1>

                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Row>

        </>

    );
}

export default SectionOffers; 
