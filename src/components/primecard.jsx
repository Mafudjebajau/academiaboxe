/* eslint-disable react/prop-types */
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons/faCheckDouble';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PrimeCard({ url, mediatype, title, items = [] }) {

    return (
        <>
            <Row className='p-4 my-5'>
                <Col md={12} lg={6} className='text-center ' >
                    <div className='d-flex justify-content-center' >
                        {mediatype === "video" ? <video src={url} controls width="100%" className='rounded shadow'></video> : <img height="100%" src={url} alt={title} width="100%" className='rounded shadow'/>}
                    </div>
                </Col>
                <Col md={12} lg={6} className='text-dark'>
                    <h1 className='fw-bold'>{title}</h1>
                    <ListGroup className='text-dark ps-3 pt-3 fs-5'>
                        {items && items.map(item => (
                            <ListGroup.Item className='text-dark py-2 mb-2 no-border' key={item.id}><FontAwesomeIcon className='pe-3 fw-bold' icon={faCheckDouble}   ></FontAwesomeIcon>{item}</ListGroup.Item>
                        )
                        )}
                    </ListGroup> 
                    <Link to={"/register"}>
                    <Button variant='outline-dark' className="btn-lg my-3">
                        Matricular
                    </Button>
                    </Link>
                </Col>
            </Row>
        </>

    );
}

export default PrimeCard;

