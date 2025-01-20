import { StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from 'react';
import { Button, ButtonDownload, Container, Input } from '../../styles';
import { MdOutlineArrowBack } from 'react-icons/md';
import PDFDocument from '../../../Components/ContratoLeve';

const styles = StyleSheet.create({
    button: {
        width: '35%',
        height: 35
    }
});

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    return cpf;
}

const ContratosHeadset = () => {
    const date = new Date();
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const month = months[date.getMonth()];
    const [nome, setNome] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [modelo, setModelo] = useState('')

    const handleCPFChange = (e) => {
        const cpfDigitado = e.target.value;
        const cpfFormatado = formatarCPF(cpfDigitado);
        setCpf(cpfFormatado);
    };

    const cleanInput = () => {
        setNome('')
        setRg('')
        setCpf('')
        setModelo('')
    }

    return (
        <Container>
            <div style={{ display: 'flex' }}>
                <Button to={`/contratosLeve`}>
                    <MdOutlineArrowBack size={42} />
                </Button>
                <Button onClick={cleanInput}>
                    Limpar
                </Button>
            </div>
            <Input
                placeholder='NOME'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <Input
                placeholder='CPF'
                value={cpf}
                onChange={handleCPFChange}
                maxLength={14}
            />
            <Input
                placeholder='RG'
                value={rg}
                onChange={(e) => setRg(e.target.value)}
            />
            <Input
                placeholder='MODELO'
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
            />
            <PDFDownloadLink style={styles.button} document={<PDFDocument
                cpf={cpf}
                nome={nome}
                rg={rg}
                modelo={modelo}
                date={date}
                month={month}
                equipamento={'Headset'}
                imei={'N/A'}
                celular={'N/A'}
                patrimonio={'N/A'}
                serie={'N/A'}
            />} fileName={`Contrato de Comodato Leve Saúde Operadora HEADSET - ${nome}.pdf`}  >
                {({ blob, url, loading, error }) =>
                    loading ? 'Carregando documento...' : <ButtonDownload>Baixar PDF</ButtonDownload>
                }
            </PDFDownloadLink>
        </Container >
    )
}


export default ContratosHeadset