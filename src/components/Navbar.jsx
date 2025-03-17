import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/navbar.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-4">
      <div className="container-fluid">
        <h1 className="navbar-brand">🏆 Academia de Boxe</h1>
        
        {/* Botão Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Menu Links */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/events">Eventos</Link>
            <Link className="nav-link" to="/news">Notícias</Link>
            <Link className="nav-link" to="/store">Loja</Link>
            <Link className="nav-link" to="/signup">Inscrição</Link>
            <Link className="nav-link" to="/contact">Contato</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
