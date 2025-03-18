import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Card, CardBody, ListGroup, ListGroupItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons/faCheckDouble";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import Badge from 'react-bootstrap/Badge';
import PropTypes from "prop-types";

const Cart = ({ cart, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [badger, setBader] = useState();

  const total = cart.reduce((sum, item) =>sum + item.price * item.quantity, 0);
  const tt =  cart.reduce((sum, item) =>sum + item.quantity, 0);

  return (
    <div className=" position-fixed-shop">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <Button
        variant="dark"
          onClick={() => {
            setIsOpen(!isOpen)

          }}
          className="rounded-full p-4 mb-2 border  text-white shadow-lg"
        >

          {isOpen ? <FontAwesomeIcon icon={faClose} color="white" size="2x"></FontAwesomeIcon> : <FontAwesomeIcon icon={faShoppingBag} size="2x"></FontAwesomeIcon>}
          {tt && tt !== 0 ?
          <Badge bg="danger" className="position-absolute right-0 ">{tt}</Badge>
          :  <Badge className="d-none"></Badge>
          }


        </Button>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white shadow-xl p-4 rounded-lg">
            <CardBody>
              <h3 className="text-lg font-semibold mb-3">Carrinho</h3>
              {cart.length === 0 ? (
                <>
                <img src="/public/no_data.svg" className="text-center justify-center" width={"100px"} />
                <p className="text-gray-500">Seu carrinho está vazio.</p>
                </>
              ) : (
                <ListGroup>
                  {cart.map((item) => (
                    <ListGroupItem key={item.id} className="flex justify-between items-center p-2 border mb-1">
                      <FontAwesomeIcon icon={faCheckDouble} color="green" className="me-1"></FontAwesomeIcon>
                      <span>{item.name} (x{item.quantity}) - ${item.price * item.quantity}</span>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} color="red"></FontAwesomeIcon>
                      </Button>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
              <h4 className="mt-3 font-bold">Total: ${total.toFixed(2)}</h4>
              <Button 
              variant="dark"
              className="w-full mt-3" disabled={cart.length === 0}
              >Finalizar Compra
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart:
  PropTypes.array.isRequired,
  removeFromCart:
  PropTypes.func.isRequired
}
export default Cart;
