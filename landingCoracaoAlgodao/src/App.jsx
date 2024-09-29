import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';// O caminho correto para o Footer
import Index from './pages/Index'; // Página principal
import Privacidade from './pages/Privacidade'; // Página de Privacidade de Dados

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacidade-de-dados" element={<Privacidade />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}