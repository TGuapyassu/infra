import { ButtonPrincipal, Container } from './styles';

export const Main = () => {
    const rotas = [{
        label: 'Leve Saúde',
        to: '/contratosLeve'
    }, {
        label: 'Agille Corretora',
        to: '/contratosAgille'
    }]
    return (
        <Container>
            <h1>Selecione a empresa</h1>
            {rotas.map((rota, index) => (
                <ButtonPrincipal key={index} to={rota.to}>
                    {rota.label}
                </ButtonPrincipal>
            ))}
        </Container>
    )
}

export default Main