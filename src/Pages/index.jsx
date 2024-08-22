import { Button, Container } from './styles';

export const Main = () => {
    const rotas = [{
        label: 'Leve',
        to: './ContratosLeve'
    }, {
        label: 'Agille',
        to: './ContratosAgille'
    }]
    return (
        <Container>
            <h1>EMPRESAS</h1>
            {rotas.map((rota, index) => (
                <Button key={index} to={rota.to}>
                    {rota.label}
                </Button>
            ))}
        </Container>
    )
}

export default Main