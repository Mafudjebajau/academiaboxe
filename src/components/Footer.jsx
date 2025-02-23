import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
 const [mydate, setmydate] = useState([])
 //  setmydate(d.getFullYear())
 useEffect(()=>{
  const d = new Date
  setmydate(d.getFullYear())
},[])
    return (
      <footer className="bg-black text-white text-center p-4 mt-8">
        <p>© {mydate} Academia de Boxe - Todos os direitos reservados.</p>
        <div className="icons">
        <FontAwesomeIcon icon={faCoffee} size="2x" />
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#4267B2' }} />
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E4405F' }} />
      </div>
      </footer>
    );
  }
  