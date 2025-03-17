import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Events from './pages/events';
import Store from './pages/store';
import NotFound from './pages/notfound';

function AppRoutes() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/store" element={<Store />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRoutes;