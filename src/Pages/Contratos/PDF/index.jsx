import { useState } from 'react';
import { Document, Page, Text, View, PDFDownloadLink, StyleSheet, Font, PDFViewer } from '@react-pdf/renderer';

Font.register({
    family: 'Roboto', src: 'http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf',
});

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 12,
        fontFamily: 'Helvetica'
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        margin: 50,
        padding: 25,
        flexGrow: 1
    },
    titulo: {
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold'
    },
    subtitulo: {
        textDecoration: 'underline',
        fontFamily: 'Helvetica-Bold'
    },
    data: {
        textAlign: 'center',
        marginBottom: 50,
        fontFamily: 'Helvetica-Bold'
    },
    sign: {
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold'
    },
    sign2: {
        textAlign: 'center',
        marginTop: 50,
        fontFamily: 'Helvetica-Bold'
    },
    text1: {
        marginLeft: 40
    },
    specs: {
        fontFamily: 'Helvetica-Bold',
        display: 'flex'
    },
    text2: {
        marginLeft: 40
    },
    text3: {
        display: 'flex',
        gap: 10
    }
});

const PDFDocument = ({ nome, rg, cpf, modelo, serie, patrimonio, date, month }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.titulo}>CONTRATO DE COMODATO</Text>
                <Text>
                    Por este instrumento particular, as Partes, de um lado,LEVE SAÚDE OPERADORA DE PLANOS DE SAÚDE S.A. ,
                    inscrita no CNPJ sob o número 36.503.186/0001-49, com sede na Rua Engenheiro Enaldo Cravo Peixoto, n°. 215,
                    Loja B – Tijuca, Rio de Janeiro, RJ, doravante denominada COMODANTE, e do outro {nome},
                    portadora de identidade nº {rg} e CPF nº {cpf}, doravante denominado (a) COMODATÁRIO (A).
                </Text>
                <Text style={styles.text1}>
                    ▪ Considerando que o (a)  COMODATÁRIO (A) é colaborador (a) da empresa  COMODANTE;
                </Text>
                <Text style={styles.text1}>
                    ▪ Considerando que para viabilização do contrato acima referido a COMODANTE adquiriu Notebook e acessórios,
                    resolvem celebrar o presente contrato, mediante as seguintes cláusulas e condições, que deverá ser observada
                    e cumprida integralmente pelas partes.
                </Text>
                <Text>

                </Text>
                <Text style={styles.subtitulo}>CLÁUSULA PRIMEIRA - OBJETO</Text>
                <Text>
                    Este Contrato tem como objetivo a cessão, em regime de comodato, por parte da COMODANTE ao(a) COMODATÁRIO(A),
                    do {modelo} e seus acessórios (“Notebook”), descrito abaixo, cuja entrega ocorre no ato de assinatura deste Contrato.
                </Text>
                <View>
                    <Text style={styles.specs}>Modelo: {modelo}</Text>
                    <Text style={styles.specs}>Nº SÉRIE: {serie}</Text>
                    <Text style={styles.specs}>Nº PATRIMÔNIO: {patrimonio}</Text>
                </View>
                <Text style={styles.subtitulo}>CLÁUSULA SEGUNDA - PRAZO</Text>
                <Text>
                    Este Contrato vigorará por tempo indeterminado, contado de sua assinatura, enquanto o (a) COMODATÁRIO (A)
                    for colaborador (a) da COMODANTE, podendo ser denunciado, a qualquer tempo, por qualquer das partes, que deverá se manifestar por escrito,
                    com antecedência mínima de 02 (dois) dias.
                </Text>
                <Text>
                    Parágrafo Único – Uma vez comunicada a rescisão do Contrato, o (a) COMODATÁRIO (A) se obriga a cessar de imediato, a utilização do Notebook,
                    e na entrega, fazê-lo juntamente com seus acessórios.
                </Text>
                <Text style={styles.subtitulo}>CLÁUSULA TERCEIRA - OBRIGAÇÕES DO COMODATÁRIO(A)</Text>
                <View style={styles.text3}>
                    <Text style={styles.text2}>
                        I. Devolver o Notebook e os acessórios nas mesmas condições em que os recebeu, ressalvado o desgaste natural,
                        decorrente do uso normal e regular;
                    </Text>
                    <Text style={styles.text2}>
                        II. Zelar pela integridade do Notebook e seus acessórios, identificados na cláusula primeira deste contrato,
                        mantendo-os sob sua responsabilidade, e em perfeitas condições de funcionamento;
                    </Text>
                    <Text style={styles.text2}>
                        III. Arcar com as despesas necessárias ao reparo do Notebook e/ou de seus acessórios, bem como eventuais reposições no caso de
                        ocorrência de danos, provenientes do mau uso do Notebook, e/ou de seus acessórios, pelo (a) COMODATÁRIO (A);
                    </Text>
                    <Text style={styles.text2}>
                        IV. Informar, imediatamente, à COMODANTE os casos de defeitos do Notebook e/ou acessórios, para que esta adote as medidas pertinentes;
                    </Text>
                    <Text style={styles.text2}>
                        V. Comunicar, imediatamente, à COMODANTE os casos de extravio, furto ou roubo do Notebook e/ou acessórios,
                        além de apresentar Boletim de Ocorrência Policial, no prazo de 24 (vinte e quatro) horas, para que a COMODANTE
                        acione o seguro do equipamento;
                    </Text>
                    <Text style={styles.text2}>
                        VI. Devolver o Notebook e seus acessórios cedidos em comodato durante os períodos de férias e licenças, iguais ou superiores a
                        20 (vinte) dias, diretamente no setor de TI da COMODANTE;
                    </Text>
                </View>
                <Text style={styles.subtitulo}>CLÁUSULA QUARTA - OBRIGAÇÕES DA COMODANTE</Text>
                <Text>
                    Entregar ao(à) COMODATÁRIO(A) o Notebook, assim como o(s) acessório(s), em perfeito estado de uso e funcionamento.
                </Text>
                <Text style={styles.subtitulo}>CLÁUSULA QUINTA – DO RESSARCIMENTO EM CASO DE PERDA OU EXTRAVIO</Text>
                <Text>
                    O COMODATÁRIO (A) reconhece que a perda ou extravio do Notebook e seus acessórios ensejará o ressarcimento à
                    COMODANTE, de 100% do preço de compra do equipamento.
                </Text>
                <Text style={styles.subtitulo}>CLÁUSULA SEXTA - RESCISÃO</Text>
                <Text>
                    A inobservância ou inadimplemento de qualquer das cláusulas ou condições deste Contrato, por parte do(a)  COMODATÁRIO (A),
                    implicará em sua imediata rescisão, com a consequente devolução do Notebook, objeto do presente, sem prejuízo da cobrança de
                    eventuais perdas e danos, por parte da COMODANTE.
                </Text>
                <Text style={styles.subtitulo}>CLÁUSULA SÉTIIMA - NOVAÇÃO</Text>
                <Text>
                    A tolerância por parte da COMODANTE ao descumprimento das obrigações contratuais pelo (a) COMODATÁRIO (A), não importará renúncia
                    ou novação dos direitos e não afetará o subsequente exercício de tal direito.
                </Text>
                <Text style={styles.subtitulo}>CLÁUSULA OITAVA – DO USO ESPECÍFICO PARA O EXERCÍCIO DE SUAS FUNÇÕES</Text>
                <Text>
                    O (A) COMODATÁRIO (A) tem conhecimento que o Notebook ora cedido é para uso exclusivo no exercício de suas funções,
                    concordando que todas as despesas relativas aos danos causados ao equipamento, decorrentes da má utilização, poderão ser cobradas
                    em sua integralidade.
                </Text>
                <Text>
                    O (A) COMODATÁRIO (A) só deverá transportar o Notebook, para ambiente externo à Leve, quando demandado pelo seu gestor imediato,
                    mediante solicitação expressa;
                </Text>
                <Text>
                    Nas ocasiões em que o (a) COMODATÁRIO (A) desejar transportar o Notebook, para ambiente externo à Leve, sem demanda para a Leve,
                    assume total responsabilidade sobre o bem comodatado.
                </Text>
                <Text>
                    Parágrafo Único – O Notebook será de uso exclusivo do (a) COMODATÁRIO (A), não devendo ceder a qualquer outra
                    pessoa, ainda que familiar.
                </Text>
                <Text style={styles.subtitulo}>CLÁUSULA NONA - DISPOSIÇÕES GERAIS</Text>
                <Text>
                    O (A) COMODATÁRIO (A) reconhece e concorda que não se aplica o disposto no artigo 581 do Código Civil Brasileiro
                    (L10.406/2002), tendo a COMODANTE a discricionariedade de rescindir este Contrato a qualquer momento.
                </Text>
                <Text style={styles.subtitulo}>CLÁUSULA DÉCIMA - FORO</Text>
                <Text>
                    As partes contratantes elegem como competente para qualquer ação decorrente deste Contrato, o Foro da Comarca Central da Capital
                    do Estado do Rio de Janeiro, com exclusão de qualquer outro, por mais privilegiado que seja.
                </Text>
                <Text>
                    E, por estarem assim justas e acordadas, firmam o presente, em 02 (duas) vias de igual teor e forma, para um só efeito,
                    na presença de testemunhas abaixo assinaladas.
                </Text>
                <Text style={styles.data}>Rio de Janeiro, {date.getDate()} de {month} de {date.getFullYear()}.</Text>
                <View>
                    <Text style={styles.sign}>LEVE SAÚDE OPERADORA DE PLANOS DE SAÚDE S.A. </Text>
                    <Text style={styles.sign}> COMODANTE </Text>
                </View>
                <Text style={styles.sign2}>COMODATÁRIO (A)</Text>
            </View>
        </Page>
    </Document>
);


const Contratos = () => {
    const date = new Date();
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const month = months[date.getMonth()];
    const [nome, setNome] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [modelo, setModelo] = useState('')
    const [serie, setSerie] = useState('')
    const [patrimonio, setPatrimonio] = useState('')
    return (
        <>
            <PDFViewer>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text style={styles.titulo}>CONTRATO DE COMODATO</Text>
                            <Text>
                                Por este instrumento particular, as Partes, de um lado,LEVE SAÚDE OPERADORA DE PLANOS DE SAÚDE S.A. ,
                                inscrita no CNPJ sob o número 36.503.186/0001-49, com sede na Rua Engenheiro Enaldo Cravo Peixoto, n°. 215,
                                Loja B – Tijuca, Rio de Janeiro, RJ, doravante denominada COMODANTE, e do outro {nome},
                                portadora de identidade nº {rg} e CPF nº {cpf}, doravante denominado (a) COMODATÁRIO (A).
                            </Text>
                            <Text style={styles.text1}>
                                Considerando que o (a)  COMODATÁRIO (A) é colaborador (a) da empresa  COMODANTE;
                            </Text>
                            <Text style={styles.text1}>
                                Considerando que para viabilização do contrato acima referido a COMODANTE adquiriu Notebook e acessórios,
                                resolvem celebrar o presente contrato, mediante as seguintes cláusulas e condições, que deverá ser observada
                                e cumprida integralmente pelas partes.
                            </Text>
                            <Text>

                            </Text>
                            <Text style={styles.subtitulo}>CLÁUSULA PRIMEIRA - OBJETO</Text>
                            <Text>
                                Este Contrato tem como objetivo a cessão, em regime de comodato, por parte da COMODANTE ao(a) COMODATÁRIO(A),
                                do {modelo} e seus acessórios (“Notebook”), descrito abaixo, cuja entrega ocorre no ato de assinatura deste Contrato.
                            </Text>
                            <View>
                                <Text style={styles.specs}>Modelo: {modelo}</Text>
                                <Text style={styles.specs}>Nº SÉRIE: {serie}</Text>
                                <Text style={styles.specs}>Nº PATRIMÔNIO: {patrimonio}</Text>
                            </View>
                            <Text style={styles.subtitulo}>CLÁUSULA SEGUNDA - PRAZO</Text>
                            <Text>
                                Este Contrato vigorará por tempo indeterminado, contado de sua assinatura, enquanto o (a) COMODATÁRIO (A)
                                for colaborador (a) da COMODANTE, podendo ser denunciado, a qualquer tempo, por qualquer das partes, que deverá se manifestar por escrito,
                                com antecedência mínima de 02 (dois) dias.
                            </Text>
                            <Text>
                                Parágrafo Único – Uma vez comunicada a rescisão do Contrato, o (a) COMODATÁRIO (A) se obriga a cessar de imediato, a utilização do Notebook,
                                e na entrega, fazê-lo juntamente com seus acessórios.
                            </Text>
                        </View>
                    </Page>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text style={styles.subtitulo}>CLÁUSULA TERCEIRA - OBRIGAÇÕES DO COMODATÁRIO(A)</Text>
                            <View style={styles.text3}>
                                <Text style={styles.text2}>
                                    I. Devolver o Notebook e os acessórios nas mesmas condições em que os recebeu, ressalvado o desgaste natural,
                                    decorrente do uso normal e regular;
                                </Text>
                                <Text style={styles.text2}>
                                    II. Zelar pela integridade do Notebook e seus acessórios, identificados na cláusula primeira deste contrato,
                                    mantendo-os sob sua responsabilidade, e em perfeitas condições de funcionamento;
                                </Text>
                                <Text style={styles.text2}>
                                    III. Arcar com as despesas necessárias ao reparo do Notebook e/ou de seus acessórios, bem como eventuais reposições no caso de
                                    ocorrência de danos, provenientes do mau uso do Notebook, e/ou de seus acessórios, pelo (a) COMODATÁRIO (A);
                                </Text>
                                <Text style={styles.text2}>
                                    IV. Informar, imediatamente, à COMODANTE os casos de defeitos do Notebook e/ou acessórios, para que esta adote as medidas pertinentes;
                                </Text>
                                <Text style={styles.text2}>
                                    V. Comunicar, imediatamente, à COMODANTE os casos de extravio, furto ou roubo do Notebook e/ou acessórios,
                                    além de apresentar Boletim de Ocorrência Policial, no prazo de 24 (vinte e quatro) horas, para que a COMODANTE
                                    acione o seguro do equipamento;
                                </Text>
                                <Text style={styles.text2}>
                                    VI. Devolver o Notebook e seus acessórios cedidos em comodato durante os períodos de férias e licenças, iguais ou superiores a
                                    20 (vinte) dias, diretamente no setor de TI da COMODANTE;
                                </Text>
                            </View>
                            <Text style={styles.subtitulo}>CLÁUSULA QUARTA - OBRIGAÇÕES DA COMODANTE</Text>
                            <Text>
                                Entregar ao(à) COMODATÁRIO(A) o Notebook, assim como o(s) acessório(s), em perfeito estado de uso e funcionamento.
                            </Text>
                            <Text style={styles.subtitulo}>CLÁUSULA QUINTA – DO RESSARCIMENTO EM CASO DE PERDA OU EXTRAVIO</Text>
                            <Text>
                                O COMODATÁRIO (A) reconhece que a perda ou extravio do Notebook e seus acessórios ensejará o ressarcimento à
                                COMODANTE, de 100% do preço de compra do equipamento.
                            </Text>
                            <Text style={styles.subtitulo}>CLÁUSULA SEXTA - RESCISÃO</Text>
                            <Text>
                                A inobservância ou inadimplemento de qualquer das cláusulas ou condições deste Contrato, por parte do(a)  COMODATÁRIO (A),
                                implicará em sua imediata rescisão, com a consequente devolução do Notebook, objeto do presente, sem prejuízo da cobrança de
                                eventuais perdas e danos, por parte da COMODANTE.
                            </Text>
                        </View>
                    </Page>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text style={styles.subtitulo}>CLÁUSULA SÉTIIMA - NOVAÇÃO</Text>
                            <Text>
                                A tolerância por parte da COMODANTE ao descumprimento das obrigações contratuais pelo (a) COMODATÁRIO (A), não importará renúncia
                                ou novação dos direitos e não afetará o subsequente exercício de tal direito.
                            </Text>
                            <Text style={styles.subtitulo}>CLÁUSULA OITAVA – DO USO ESPECÍFICO PARA O EXERCÍCIO DE SUAS FUNÇÕES</Text>
                            <Text>
                                O (A) COMODATÁRIO (A) tem conhecimento que o Notebook ora cedido é para uso exclusivo no exercício de suas funções,
                                concordando que todas as despesas relativas aos danos causados ao equipamento, decorrentes da má utilização, poderão ser cobradas
                                em sua integralidade.
                            </Text>
                            <Text>
                                O (A) COMODATÁRIO (A) só deverá transportar o Notebook, para ambiente externo à Leve, quando demandado pelo seu gestor imediato,
                                mediante solicitação expressa;
                            </Text>
                            <Text>
                                Nas ocasiões em que o (a) COMODATÁRIO (A) desejar transportar o Notebook, para ambiente externo à Leve, sem demanda para a Leve,
                                assume total responsabilidade sobre o bem comodatado.
                            </Text>
                            <Text>
                                Parágrafo Único – O Notebook será de uso exclusivo do (a) COMODATÁRIO (A), não devendo ceder a qualquer outra
                                pessoa, ainda que familiar.
                            </Text>
                            <Text style={styles.subtitulo}>CLÁUSULA NONA - DISPOSIÇÕES GERAIS</Text>
                            <Text>
                                O (A) COMODATÁRIO (A) reconhece e concorda que não se aplica o disposto no artigo 581 do Código Civil Brasileiro
                                (L10.406/2002), tendo a COMODANTE a discricionariedade de rescindir este Contrato a qualquer momento.
                            </Text>
                            <Text style={styles.subtitulo}>CLÁUSULA DÉCIMA - FORO</Text>
                            <Text>
                                As partes contratantes elegem como competente para qualquer ação decorrente deste Contrato, o Foro da Comarca Central da Capital
                                do Estado do Rio de Janeiro, com exclusão de qualquer outro, por mais privilegiado que seja.
                            </Text>
                            <Text>
                                E, por estarem assim justas e acordadas, firmam o presente, em 02 (duas) vias de igual teor e forma, para um só efeito,
                                na presença de testemunhas abaixo assinaladas.
                            </Text>
                        </View>
                    </Page>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text style={styles.data}>Rio de Janeiro, {date.getDate()} de {month} de {date.getFullYear()}.</Text>
                            <View>
                                <Text style={styles.sign}>LEVE SAÚDE OPERADORA DE PLANOS DE SAÚDE S.A. </Text>
                                <Text style={styles.sign}> COMODANTE </Text>
                            </View>
                            <Text style={styles.sign2}>COMODATÁRIO (A)</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer >
            <div>
                <div>
                    <input placeholder='nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input placeholder='cpf'
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                    <input placeholder='rg'
                        value={rg}
                        onChange={(e) => setRg(e.target.value)}
                    />
                    <input placeholder='modelo'
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                    />
                    <input placeholder='serie'
                        value={serie}
                        onChange={(e) => setSerie(e.target.value)}
                    />
                    <input placeholder='patrimonio'
                        value={patrimonio}
                        onChange={(e) => setPatrimonio(e.target.value)}
                    />
                    <PDFDownloadLink document={<PDFDocument
                        cpf={cpf}
                        nome={nome}
                        rg={rg}
                        modelo={modelo}
                        serie={serie}
                        patrimonio={patrimonio}
                        date={date}
                        month={month}
                    />} fileName="meu_pdf.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Carregando documento...' : <button>Baixar PDF</button>
                        }
                    </PDFDownloadLink>
                </div>
            </div >
        </>
    )
}


export default Contratos