import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Contratos';
import ContratosNote from './Pages/Contratos/Notebook';
import ContratosCel from './Pages/Contratos/Celular';
import ContratosTab from './Pages/Contratos/Tablet';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<Main />} />
                <Route index path='/notebook' element={<ContratosNote />} />
                <Route index path='/celular' element={<ContratosCel />} />
                <Route index path='/tablet' element={<ContratosTab />} />
            </Routes>
        </Router>
    )
}