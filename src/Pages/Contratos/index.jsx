import { ButtonPrincipal, Container, Button } from '../styles';
import { MdOutlineArrowBack } from 'react-icons/md';

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
    }, {
        label: 'Headset',
        to: '/headset'
    }]
    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button to={`/`}>
                    <MdOutlineArrowBack size={42} />
                </Button>
                <h1>Contratos Leve Saúde</h1>
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