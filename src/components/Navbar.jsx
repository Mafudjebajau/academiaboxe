import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import "../components/css/navbar.css"
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar expand="lg" variant="light" className="p-3 mb-5 position-fixed w-100">
      <Container>
        {/* Logo */}
        <Navbar.Brand>Logo</Navbar.Brand>

        {/* Botão do menu mobile */}
        <span
          // variant="outline-light"
          className="d-lg-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FontAwesomeIcon icon={faClose} size="2x" color="red"></FontAwesomeIcon> : <FontAwesomeIcon size="2x" color="black" icon={faBars}></FontAwesomeIcon>}
        </span>

        {/* Menu Desktop (padrão do Bootstrap) */}
        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
          <Nav className="ms-auto">
            <Link to={"/"} className="nav-link">Início</Link>
            <Link to={"/events"} className="nav-link">Eventos</Link>
            <Link to={"/galery"} className="nav-link">Galeria</Link>
            <Link to={"/store"} className="nav-link">Loja</Link>
            <Link to={"/register"} className="nav-link">Inscrever</Link>
            <Link to={"/contacts"} className="nav-link">Contato</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Menu Mobile com animação */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -220 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -120 }}
          transition={{ duration: 0.3 }}
          className="d-lg-none  p-3 w-100 text-center"
        >
          <Nav className="flex-column">
            <Nav.Link ><Link to={"/"}>Início</Link></Nav.Link>
            <Nav.Link ><Link to={"/events"}>Eventos</Link></Nav.Link>
            <Link to={"/galery"} className="nav-link">Galeria</Link>
            <Nav.Link ><Link to={"/store"}>Loja</Link></Nav.Link>
            <Nav.Link ><Link to={"/register"}>Inscrever</Link></Nav.Link>
            <Nav.Link ><Link to={"/contacts"}>Contato</Link></Nav.Link>

          </Nav>
        </motion.div>
      )}
    </Navbar>
  );
};

export default MyNavbar;
