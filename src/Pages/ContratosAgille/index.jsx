import { Button, Container, ButtonPrincipal } from '../styles';
import { MdOutlineArrowBack } from 'react-icons/md';

export const Main = () => {
    const rotas = [{
        label: 'Notebook',
        to: '/notebookAgille'
    }, {
        label: 'Celular',
        to: '/celularAgille'
    }, {
        label: 'Tablet',
        to: '/tabletAgille'
    }]
    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button to={`/`}>
                    <MdOutlineArrowBack size={42} />
                </Button>
                <h1>CONTRATOS AGILLE</h1>
            </div>
            {rotas.map((rota, index) => (
                <ButtonPrincipal key={index} to={rota.to}>
                    {rota.label}
                </ButtonPrincipal>
            ))}
        </Container>
    )
}

export default Main