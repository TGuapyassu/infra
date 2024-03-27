import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Header';
import Contratos from './Pages/Contratos';
import Contrato from './Pages/Contratos/PDF';
import { DadosProvider } from './Contexts/DadosContext';

export default function AppRouter() {
    return (
        <Router>
            <DadosProvider>
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/contratos' element={<Contratos />} />
                    <Route path='/contrato' element={<Contrato />} />
                </Routes>
            </DadosProvider>
        </Router>
    )
}