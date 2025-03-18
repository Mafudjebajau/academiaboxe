import { Card, Button, Col } from "react-bootstrap";

const products = [
  { id: 1, name: "Luvas de Boxe", price: 50, image: "/homebg.jpg" },
  { id: 2, name: "Protetor Bucal", price: 20, image: "/homebg.jpg" },
  { id: 3, name: "Bandagem para Mãos", price: 15, image: "/homebg.jpg" },
  { id: 4, name: "Bandagem para joelho", price: 15, image: "/homebg.jpg" },
  { id: 3, name: "Calsoes", price: 10, image: "/homebg.jpg" },
];
// { id: 3, name: "Bandagem para Mãos", price: 15, image: "https://via.placeholder.com/150" },

// eslint-disable-next-line react/prop-types
const ProductList = ({ addToCart }) => {
  return (
    <>
      {products.length > 0 ? products.map((product) => (
        <Col lg={3} md={12} key={product.id}>
          <Card className="mb-3">
            <Card.Img variant="top" src={product.image} />
            <Card.Body className="py-4">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Preço: ${product.price}</Card.Text>
              <Button variant="dark" onClick={() => addToCart(product)}>Adicionar ao Carrinho</Button>
            </Card.Body>
          </Card>
        </Col>
      )) :   
      <div  className="d-flex text-center justify-center text-secondary p-5 gap-2 flex-direction-column">
        <img src="/public/no_data.svg" width={"100px"} />
        <br/>
        <p>Sem produtos disponiveis</p>
      </div>
      }
    </>
  );
};

export default ProductList;
