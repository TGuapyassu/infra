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
                <Route index path='/ContratosLeve' element={<ContratosLeve />} />
                <Route index path='/ContratosAgille' element={<ContratosAgille />} />
                <Route index path='/Notebook' element={<ContratosNote />} />
                <Route index path='/NotebookAgille' element={<ContratosNoteAgille />} />
                <Route index path='/Celular' element={<ContratosCel />} />
                <Route index path='/CelularAgille' element={<ContratosCelAgille />} />
                <Route index path='/Tablet' element={<ContratosTab />} />
                <Route index path='/TabletAgille' element={<ContratosTabAgille />} />
                <Route index path='/headset' element={<ContratosHeadset />} />
            </Routes>
        </Router>
    )
}