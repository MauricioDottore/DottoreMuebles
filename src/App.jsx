import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Servicios from './pages/Servicios';
import Empresa from './pages/Empresa';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
