import { useEffect, useState } from "react";
import "./css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSpider } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
 const [mydate, setmydate] = useState([])
 //  setmydate(d.getFullYear())
 useEffect(()=>{
  const d = new Date
  setmydate(d.getFullYear())
},[])
    return (
      <footer className="bg-dark text-white text-center p-4">
        <p>© {mydate} Academia de Boxe - Todos os direitos reservados.</p>
        <div className="icons">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'dodgerblue' }} />
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E4405F' }} />
        <FontAwesomeIcon icon={faYoutube} size="2x" style={{color: "red"}} />
        <FontAwesomeIcon icon={faTelegram} size="2x" style={{color: "skyblue"}} />
      </div>
      <div className="mt-4">
        <FontAwesomeIcon icon={faSpider}></FontAwesomeIcon>
      </div>
      </footer>
    );
  }
  