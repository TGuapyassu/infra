import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contratos from './Pages/Contratos';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<Contratos />} />
            </Routes>
        </Router>
    )
}