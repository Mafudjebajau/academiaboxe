import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const MiniLoja = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Container className="pt-plus">
      <h1 className="text-center mb-5" >Mini Loja da Academia de Boxe</h1>
      <Row>
       
          <ProductList addToCart={addToCart} />
      
      </Row>
          <Cart cart={cart} removeFromCart={removeFromCart} />
    </Container>
  );
};

export default MiniLoja;
