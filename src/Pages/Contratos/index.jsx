import { Button, Container } from './styles';

export const Main = () => {
    const rotas = [{
        label: 'Notebook',
        to: '/notebook'
    }, {
        label: 'Celular',
        to: '/celular'
    }, {
        label: 'Tablet',
        to: '/tablet'
    }]
    return (
        <Container>
            <h1>CONTRATOS</h1>
            {rotas.map((rota, index) => (
                <Button key={index} to={rota.to}>
                    {rota.label}
                </Button>
            ))}
        </Container>
    )
}

export default Main