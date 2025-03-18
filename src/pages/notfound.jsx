import { Link } from 'react-router-dom';
import NotfoundImage from "../assets/404.png"
function NotFound() {
    return (
        <div className="not-found pt-plus">
            <img src={NotfoundImage} alt="Página não encontrada" className="not-found-img" />
            <h1>Oops! Página não encontrada</h1>
            <p>A página que você está procurando pode ter sido removida ou não existe.</p>
            <Link to="/" className="button">Voltar para Home</Link>
        </div>
    );
}

export default NotFound;