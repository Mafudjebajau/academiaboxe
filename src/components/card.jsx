import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./css/card.css"

function BoxingCard() {
  return (
    <Card className='card__hovered shadow-box' data-bs-theme="light" style={{ width: '20rem' }}>
      <Card.Img variant="top" src="/vite.svg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BoxingCard;
