import { useRef } from 'react';
import { useDados } from '../../../Hooks/useDados';
import { Container, Data, Sign, Sign2, Subtitulo, Texto, Titulo } from './styles';
import generatePDF, { Margin } from 'react-to-pdf';

const Contrato = () => {
    const date = new Date();
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const month = months[date.getMonth()];
    const { nome, rg, cpf, modelo, serie, patrimonio } = useDados();
    const targetRef = useRef();

    const options = {
        method: 'open',
        page: {
            margin: Margin.MEDIUM,
            format: 'A4',
            orientation: 'portrait'
        }
    }


    return (
        <>
            <button onClick={() => generatePDF(targetRef, options)}>Download PDF</button>
            <Container ref={targetRef}>
                <Titulo>CONTRATO DE COMODATO</Titulo>
                <Texto>
                    Por este instrumento particular, as Partes, de um lado, <strong>LEVE SAÚDE OPERADORA DE PLANOS DE SAÚDE S.A.</strong> ,
                    inscrita no CNPJ sob o número 36.503.186/0001-49, com sede na Rua Engenheiro Enaldo Cravo Peixoto, n°. 215,
                    Loja B – Tijuca, Rio de Janeiro, RJ, doravante denominada <strong> COMODANTE</strong>, e do outro
                    <strong> {nome}</strong>, portadora de identidade nº {rg} e CPF nº {cpf}, doravante denominado (a) <strong>COMODATÁRIO (A)</strong>.
                </Texto>
                <p>
                    ▪ Considerando que o (a) <strong> COMODATÁRIO (A) </strong> é colaborador (a) da empresa <strong> COMODANTE;</strong>
                </p>
                <p>
                    ▪ Considerando que para viabilização do contrato acima referido a <strong>COMODANTE</strong> adquiriu Notebook e acessórios,
                    resolvem celebrar o presente contrato, mediante as seguintes cláusulas e condições, que deverá ser observada
                    e cumprida integralmente pelas partes.
                </p>
                <Texto>

                </Texto>
                <Subtitulo>CLÁUSULA PRIMEIRA - OBJETO</Subtitulo>
                <Texto>
                    Este Contrato tem como objetivo a cessão, em regime de comodato, por parte da <strong>COMODANTE</strong> ao(a) <strong>COMODATÁRIO(A)</strong>,
                    do <strong>{modelo}</strong> e seus acessórios (“Notebook”), descrito abaixo, cuja entrega ocorre no ato de assinatura deste Contrato.
                </Texto>
                <Texto>
                    <strong>Modelo: {modelo}</strong> <br />
                    <strong>Nº SÉRIE: {serie}</strong> <br />
                    <strong>Nº PATRIMÔNIO: {patrimonio}</strong>
                </Texto>
                <Subtitulo>CLÁUSULA SEGUNDA - PRAZO</Subtitulo>
                <Texto>
                    Este Contrato vigorará por tempo indeterminado, contado de sua assinatura, enquanto o (a) <strong>COMODATÁRIO (A)</strong>
                    for colaborador (a) da<strong> COMODANTE</strong>, podendo ser denunciado, a qualquer tempo, por qualquer das partes, que deverá se manifestar por escrito,
                    com antecedência mínima de 02 (dois) dias.
                </Texto>
                <Texto>
                    Parágrafo Único – Uma vez comunicada a rescisão do Contrato, o (a) <strong>COMODATÁRIO (A)</strong> se obriga a cessar de imediato, a utilização do Notebook,
                    e na entrega, fazê-lo juntamente com seus acessórios.
                </Texto>
                <Subtitulo>CLÁUSULA TERCEIRA - OBRIGAÇÕES DO COMODATÁRIO(A)</Subtitulo>
                <Texto>
                    I. Devolver o Notebook e os acessórios nas mesmas condições em que os recebeu, ressalvado o desgaste natural,
                    decorrente do uso normal e regular;
                </Texto>
                <Texto>
                    II. Zelar pela integridade do Notebook e seus acessórios, identificados na cláusula primeira deste contrato,
                    mantendo-os sob sua responsabilidade, e em perfeitas condições de funcionamento;
                </Texto>
                <Texto>
                    III. Arcar com as despesas necessárias ao reparo do Notebook e/ou de seus acessórios, bem como eventuais reposições no caso de
                    ocorrência de danos, provenientes do mau uso do Notebook, e/ou de seus acessórios, pelo (a) <strong>COMODATÁRIO (A);</strong>
                </Texto>
                <Texto>
                    IV. Informar, imediatamente, à <strong>COMODANTE</strong> os casos de defeitos do Notebook e/ou acessórios, para que esta adote as medidas pertinentes;
                </Texto>
                <Texto>
                    V. Comunicar, imediatamente, à <strong>COMODANTE</strong> os casos de extravio, furto ou roubo do Notebook e/ou acessórios,
                    além de apresentar Boletim de Ocorrência Policial, no prazo de 24 (vinte e quatro) horas, para que a <strong>COMODANTE</strong>
                    acione o seguro do equipamento;
                </Texto>
                <Texto>
                    VI. Devolver o Notebook e seus acessórios cedidos em comodato durante os períodos de férias e licenças, iguais ou superiores a
                    20 (vinte) dias, diretamente no setor de TI da <strong>COMODANTE;</strong>
                </Texto>
                <Subtitulo>CLÁUSULA QUARTA - OBRIGAÇÕES DA COMODANTE</Subtitulo>
                <Texto>
                    Entregar ao(à) <strong>COMODATÁRIO(A)</strong> o Notebook, assim como o(s) acessório(s), em perfeito estado de uso e funcionamento.
                </Texto>
                <Subtitulo>CLÁUSULA QUINTA – DO RESSARCIMENTO EM CASO DE PERDA OU EXTRAVIO</Subtitulo>
                <Texto>
                    <strong>O COMODATÁRIO (A)</strong> reconhece que a perda ou extravio do Notebook e seus acessórios ensejará o ressarcimento à
                    <strong> COMODANTE</strong>, de 100% do preço de compra do equipamento.
                </Texto>
                <Subtitulo>CLÁUSULA SEXTA - RESCISÃO</Subtitulo>
                <Texto>
                    A inobservância ou inadimplemento de qualquer das cláusulas ou condições deste Contrato, por parte do(a) <strong> COMODATÁRIO (A)</strong>,
                    implicará em sua imediata rescisão, com a consequente devolução do Notebook, objeto do presente, sem prejuízo da cobrança de
                    eventuais perdas e danos, por parte da <strong>COMODANTE.</strong>
                </Texto>
                <Subtitulo>CLÁUSULA SÉTIIMA - NOVAÇÃO</Subtitulo>
                <Texto>
                    A tolerância por parte da <strong>COMODANTE</strong> ao descumprimento das obrigações contratuais pelo (a) <strong>COMODATÁRIO (A)</strong>, não importará renúncia
                    ou novação dos direitos e não afetará o subsequente exercício de tal direito.
                </Texto>
                <Subtitulo>CLÁUSULA OITAVA – DO USO ESPECÍFICO PARA O EXERCÍCIO DE SUAS FUNÇÕES</Subtitulo>
                <Texto>
                    O (A) <strong>COMODATÁRIO (A)</strong> tem conhecimento que o Notebook ora cedido é para uso exclusivo no exercício de suas funções,
                    concordando que todas as despesas relativas aos danos causados ao equipamento, decorrentes da má utilização, poderão ser cobradas
                    em sua integralidade.
                </Texto>
                <Texto>
                    O (A) <strong>COMODATÁRIO (A)</strong> só deverá transportar o Notebook, para ambiente externo à Leve, quando demandado pelo seu gestor imediato,
                    mediante solicitação expressa;
                </Texto>
                <Texto>
                    Nas ocasiões em que o (a) <strong>COMODATÁRIO (A)</strong> desejar transportar o Notebook, para ambiente externo à Leve, sem demanda para a Leve,
                    assume total responsabilidade sobre o bem comodatado.
                </Texto>
                <Texto>
                    Parágrafo Único – O Notebook será de uso exclusivo do (a) <strong>COMODATÁRIO (A)</strong>, não devendo ceder a qualquer outra
                    pessoa, ainda que familiar.
                </Texto>
                <Subtitulo>CLÁUSULA NONA - DISPOSIÇÕES GERAIS</Subtitulo>
                <Texto>
                    O (A) <strong>COMODATÁRIO (A)</strong> reconhece e concorda que não se aplica o disposto no artigo 581 do Código Civil Brasileiro
                    (L10.406/2002), tendo a <strong>COMODANTE</strong> a discricionariedade de rescindir este Contrato a qualquer momento.
                </Texto>
                <Subtitulo>CLÁUSULA DÉCIMA - FORO</Subtitulo>
                <Texto>
                    As partes contratantes elegem como competente para qualquer ação decorrente deste Contrato, o Foro da Comarca Central da Capital
                    do Estado do Rio de Janeiro, com exclusão de qualquer outro, por mais privilegiado que seja.
                </Texto>
                <Texto>
                    E, por estarem assim justas e acordadas, firmam o presente, em 02 (duas) vias de igual teor e forma, para um só efeito,
                    na presença de testemunhas abaixo assinaladas.
                </Texto>
                <Data>Rio de Janeiro, {date.getDate()} de {month} de {date.getFullYear()}.</Data>
                <Sign>LEVE SAÚDE OPERADORA DE PLANOS DE SAÚDE S.A. <br /> COMODANTE </Sign>
                <Sign2>COMODATÁRIO (A)</Sign2>
            </Container >
        </>
    )
}

export default Contrato