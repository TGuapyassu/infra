import { useState } from 'react';
import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import { Button, ButtonDownload, Container, Input } from '../../styles';
import { MdOutlineArrowBack } from 'react-icons/md';
import PDFDocumentAgille from '../../../Components/ContratoAgille';

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

const ContratosTabAgille = () => {
    const date = new Date();
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const month = months[date.getMonth()];
    const [nome, setNome] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [modelo, setModelo] = useState('')
    const [serie, setSerie] = useState('')
    const [patrimonio, setPatrimonio] = useState('')

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
        setSerie('')
        setPatrimonio('')
    }

    return (
        <Container>
            <div style={{ display: 'flex' }}>
                <Button to={`/contratosAgille`}>
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
                placeholder='MODELO TABLET'
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
            />
            <Input
                placeholder='N° DE SÉRIE'
                value={serie}
                onChange={(e) => setSerie(e.target.value)}
            />
            <Input
                placeholder='PATRIMÔNIO TABLET'
                value={patrimonio}
                onChange={(e) => setPatrimonio(e.target.value)}
            />
            <PDFDownloadLink style={styles.button} document={<PDFDocumentAgille
                cpf={cpf}
                nome={nome}
                rg={rg}
                modelo={modelo}
                serie={serie}
                patrimonio={patrimonio}
                date={date}
                month={month}
                imei={'N/A'}
                celular={'N/A'}
                equipamento={'Tablet'}
            />} fileName={`Contrato de Comodato Agille Soluções Corporativas TABLET - ${nome}.pdf`}  >
                {({ blob, url, loading, error }) =>
                    loading ? 'Carregando documento...' : <ButtonDownload>Baixar PDF</ButtonDownload>
                }
            </PDFDownloadLink>
        </Container >
    )
}


export default ContratosTabAgille