import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages';
import ContratosLeve from './Pages/Contratos';
import ContratosAgille from './Pages/ContratosAgille';
import ContratosNote from './Pages/Contratos/Notebook';
import ContratosNoteAgille from './Pages/ContratosAgille/Notebook';
import ContratosCel from './Pages/Contratos/Celular';
import ContratosCelAgille from './Pages/ContratosAgille/Celular';
import ContratosTab from './Pages/Contratos/Tablet';
import ContratosTabAgille from './Pages/ContratosAgille/Tablet';
import ContratosHeadset from './Pages/Contratos/Headset'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<Main />} />
                <Route index path='/contratosLeve' element={<ContratosLeve />} />
                <Route index path='/contratosAgille' element={<ContratosAgille />} />
                <Route index path='/notebook' element={<ContratosNote />} />
                <Route index path='/notebookAgille' element={<ContratosNoteAgille />} />
                <Route index path='/celular' element={<ContratosCel />} />
                <Route index path='/celularAgille' element={<ContratosCelAgille />} />
                <Route index path='/tablet' element={<ContratosTab />} />
                <Route index path='/tabletAgille' element={<ContratosTabAgille />} />
                <Route index path='/headset' element={<ContratosHeadset />} />
            </Routes>
        </Router>
    )
}