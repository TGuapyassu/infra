import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Header';
import Contratos from './Pages/Contratos/PDF';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/contratos' element={<Contratos />} />
            </Routes>
        </Router>
    )
}