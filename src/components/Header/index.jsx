import { Link } from "react-router-dom";
import { Container } from "./styles";

const Home = () => {
    const rotas = [{
        label: 'Contratos',
        to: '/contratos'
    },
    {
        label: 'CheckList',
        to: '/checklist'
    }, {
        label: 'Ativos',
        to: '/ativos'
    }]
    return (
        <Container>
            <ul>
                {rotas.map((rota, index) => (
                    <li key={index}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default Home