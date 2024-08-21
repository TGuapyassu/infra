import { Button, Container } from './styles';

export const Main = () => {
    const rotas = [{
        label: 'Notebook',
        to: '/NotebookAgille'
    }, {
        label: 'Celular',
        to: '/CelularAgille'
    }, {
        label: 'Tablet',
        to: '/TabletAgille'
    }]
    return (
        <Container>
            <h1>CONTRATOS AGILLE</h1>
            {rotas.map((rota, index) => (
                <Button key={index} to={rota.to}>
                    {rota.label}
                </Button>
            ))}
        </Container>
    )
}

const ContratosAgille = () => Main

export default Main