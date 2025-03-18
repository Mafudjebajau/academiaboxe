import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './Animatedroutes';

function AppRoutes() {
    return (
        <Router>
            <MyNavbar />
            <AnimatedRoutes />
            <Footer />
        </Router>
    );
}

export default AppRoutes;
