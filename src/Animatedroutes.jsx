import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/home';
import Events from './pages/events';
import Store from './pages/store';
import ContactPage from './pages/contacts';
import RegistrationPage from './pages/registrationpage';
import Dashboard from './pages/admin/Dashboard';
import NotFound from './pages/notfound';
import MyGallery from './pages/Mygalery';
import PropTypes from 'prop-types';

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
        <Route path="/store" element={<PageWrapper><Store /></PageWrapper>} />
        <Route path="/galery" element={<PageWrapper><MyGallery /></PageWrapper>} />
        <Route path="/contacts" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/register" element={<PageWrapper><RegistrationPage /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// Definição correta do PropTypes para PageWrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedRoutes;
