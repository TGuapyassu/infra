import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contratos from './Pages/Contratos';
import Main from './Pages/Main';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<Main />} />
                <Route path='/contratos' element={<Contratos />} />
            </Routes>
        </Router>
    )
}