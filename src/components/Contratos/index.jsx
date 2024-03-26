import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useState } from 'react';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        display: 'flex',
        margin: 50,
        padding: 25,
        gap: 10
    },
    text1: {
        paddingLeft: 35
    },
    h1: {
        fontSize: 25,
        textAlign: 'center'
    },
    h2: {
        fontSize: 16,
        textDecoration: 'underline'
    },
    h3: {
        fontSize: 18,
        textAlign: 'center'
    },
    h31: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 150
    },
    h4: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 150
    },

});

const Contratos = () => {
    const [nome, setNome] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [modelo, setModelo] = useState('hfdhb')
    const [serie, setSerie] = useState('')
    const [patrimonio, setPatrimonio] = useState('')
    return (
        <>
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

            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            <h1 style={styles.h1}>CONTRATO DE COMODATO</h1>
                            <p>
                                Por este instrumento particular, as Partes, de um lado, <strong>LEVE SAÚDE OPERADORA DE PLANOS DE SAÚDE S.A.</strong> ,
                                inscrita no CNPJ sob o número 36.503.186/0001-49, com sede na Rua Engenheiro Enaldo Cravo Peixoto, n°. 215,
                                Loja B – Tijuca, Rio de Janeiro, RJ, doravante denominada <strong> COMODANTE</strong>, e do outro
                                <strong> {nome}</strong>, portadora de identidade nº {rg} e CPF nº {cpf}, doravante denominado (a) <strong>COMODATÁRIO (A)</strong>.
                            </p>
                            <p style={styles.text1}>
                                <p>
                                    ▪ Considerando que o (a) <strong> COMODATÁRIO (A) </strong> é colaborador (a) da empresa <strong> COMODANTE;</strong>
                                </p>
                                <p>
                                    ▪ Considerando que para viabilização do contrato acima referido a <strong>COMODANTE</strong> adquiriu Notebook e acessórios,
                                    resolvem celebrar o presente contrato, mediante as seguintes cláusulas e condições, que deverá ser observada
                                    e cumprida integralmente pelas partes.
                                </p>
                            </p>
                            <h2 style={styles.h2}>
                                CLÁUSULA PRIMEIRA - OBJETO
                            </h2>
                            <p>
                                Este Contrato tem como objetivo a cessão, em regime de comodato, por parte da <strong>COMODANTE</strong> ao(a) <strong>COMODATÁRIO(A)</strong>,
                                do <strong>{modelo}</strong> e seus acessórios (“Notebook”), descrito abaixo, cuja entrega ocorre no ato de assinatura deste Contrato.
                                <p>
                                    <strong>Modelo: {modelo}</strong> <br />
                                    <strong>Nº SÉRIE: {serie}</strong> <br />
                                    <strong>Nº PATRIMÔNIO: {patrimonio}</strong>
                                </p>
                            </p>
                            <h2 style={styles.h2}>
                                CLÁUSULA SEGUNDA - PRAZO
                            </h2>
                            <p>
                                Este Contrato vigorará por tempo indeterminado, contado de sua assinatura, enquanto o (a) <strong>COMODATÁRIO (A)</strong>
                                for colaborador (a) da<strong> COMODANTE</strong>, podendo ser denunciado, a qualquer tempo, por qualquer das partes, que deverá se manifestar por escrito,
                                com antecedência mínima de 02 (dois) dias. <br />
                                <p>
                                    Parágrafo Único – Uma vez comunicada a rescisão do Contrato, o (a) <strong>COMODATÁRIO (A)</strong> se obriga a cessar de imediato, a utilização do Notebook,
                                    e na entrega, fazê-lo juntamente com seus acessórios.
                                </p>
                                <h2 style={styles.h2}>
                                    CLÁUSULA TERCEIRA - OBRIGAÇÕES DO COMODATÁRIO(A)
                                </h2>
                                <p>
                                    I. Devolver o Notebook e os acessórios nas mesmas condições em que os recebeu, ressalvado o desgaste natural,
                                    decorrente do uso normal e regular;
                                </p>
                                <p>
                                    II. Zelar pela integridade do Notebook e seus acessórios, identificados na cláusula primeira deste contrato,
                                    mantendo-os sob sua responsabilidade, e em perfeitas condições de funcionamento;
                                </p>
                                <p>
                                    III. Arcar com as despesas necessárias ao reparo do Notebook e/ou de seus acessórios, bem como eventuais reposições no caso de
                                    ocorrência de danos, provenientes do mau uso do Notebook, e/ou de seus acessórios, pelo (a) <strong>COMODATÁRIO (A);</strong>
                                </p>
                                <p>
                                    IV. Informar, imediatamente, à <strong>COMODANTE</strong> os casos de defeitos do Notebook e/ou acessórios, para que esta adote as medidas pertinentes;
                                </p>
                                <p>
                                    V. Comunicar, imediatamente, à <strong>COMODANTE</strong> os casos de extravio, furto ou roubo do Notebook e/ou acessórios,
                                    além de apresentar Boletim de Ocorrência Policial, no prazo de 24 (vinte e quatro) horas, para que a <strong>COMODANTE</strong>
                                    acione o seguro do equipamento;
                                </p>
                                <p>
                                    VI. Devolver o Notebook e seus acessórios cedidos em comodato durante os períodos de férias e licenças, iguais ou superiores a
                                    20 (vinte) dias, diretamente no setor de TI da <strong>COMODANTE;</strong>
                                </p>
                                <h2 style={styles.h2}>
                                    CLÁUSULA QUARTA - OBRIGAÇÕES DA COMODANTE
                                </h2>
                                <p>
                                    Entregar ao(à) <strong>COMODATÁRIO(A)</strong> o Notebook, assim como o(s) acessório(s), em perfeito estado de uso e funcionamento.
                                </p>
                                <h2 style={styles.h2}>
                                    CLÁUSULA QUINTA – DO RESSARCIMENTO EM CASO DE PERDA OU EXTRAVIO
                                </h2>
                                <p>
                                    <strong>O COMODATÁRIO (A)</strong> reconhece que a perda ou extravio do Notebook e seus acessórios ensejará o ressarcimento à
                                    <strong> COMODANTE</strong>, de 100% do preço de compra do equipamento.
                                </p>
                                <h2 style={styles.h2}>
                                    CLÁUSULA SEXTA - RESCISÃO
                                </h2>
                                <p>
                                    A inobservância ou inadimplemento de qualquer das cláusulas ou condições deste Contrato, por parte do(a) <strong> COMODATÁRIO (A)</strong>,
                                    implicará em sua imediata rescisão, com a consequente devolução do Notebook, objeto do presente, sem prejuízo da cobrança de
                                    eventuais perdas e danos, por parte da <strong>COMODANTE.</strong>
                                </p>
                                <h2 style={styles.h2}>
                                    CLÁUSULA SÉTIIMA - NOVAÇÃO
                                </h2>
                                <p>
                                    A tolerância por parte da <strong>COMODANTE</strong> ao descumprimento das obrigações contratuais pelo (a) <strong>COMODATÁRIO (A)</strong>, não importará renúncia
                                    ou novação dos direitos e não afetará o subsequente exercício de tal direito.
                                </p>
                                <h2 style={styles.h2}>
                                    CLÁUSULA OITAVA – DO USO ESPECÍFICO PARA O EXERCÍCIO DE SUAS FUNÇÕES
                                </h2>
                                <p>
                                    <p>
                                        O (A) <strong>COMODATÁRIO (A)</strong> tem conhecimento que o Notebook ora cedido é para uso exclusivo no exercício de suas funções,
                                        concordando que todas as despesas relativas aos danos causados ao equipamento, decorrentes da má utilização, poderão ser cobradas
                                        em sua integralidade.
                                    </p>
                                    <p>
                                        O (A) <strong>COMODATÁRIO (A)</strong> só deverá transportar o Notebook, para ambiente externo à Leve, quando demandado pelo seu gestor imediato,
                                        mediante solicitação expressa;
                                    </p>
                                    <p>
                                        Nas ocasiões em que o (a) <strong>COMODATÁRIO (A)</strong> desejar transportar o Notebook, para ambiente externo à Leve, sem demanda para a Leve,
                                        assume total responsabilidade sobre o bem comodatado.
                                    </p>
                                    <p>
                                        Parágrafo Único – O Notebook será de uso exclusivo do (a) <strong>COMODATÁRIO (A)</strong>, não devendo ceder a qualquer outra
                                        pessoa, ainda que familiar.
                                    </p>
                                </p>
                                <h2 style={styles.h2}>
                                    CLÁUSULA NONA - DISPOSIÇÕES GERAIS
                                </h2>
                                <p>
                                    O (A) <strong>COMODATÁRIO (A)</strong> reconhece e concorda que não se aplica o disposto no artigo 581 do Código Civil Brasileiro
                                    (L10.406/2002), tendo a <strong>COMODANTE</strong> a discricionariedade de rescindir este Contrato a qualquer momento.
                                </p>
                                <h2 style={styles.h2}>
                                    CLÁUSULA DÉCIMA - FORO
                                </h2>
                                <p>
                                    As partes contratantes elegem como competente para qualquer ação decorrente deste Contrato, o Foro da Comarca Central da Capital
                                    do Estado do Rio de Janeiro, com exclusão de qualquer outro, por mais privilegiado que seja.
                                </p>
                                <p>
                                    E, por estarem assim justas e acordadas, firmam o presente, em 02 (duas) vias de igual teor e forma, para um só efeito,
                                    na presença de testemunhas abaixo assinaladas.
                                </p>
                            </p>
                            <h4 style={styles.h4}>Rio de Janeiro, 26 de Março de 2024.</h4>
                            <h3 style={styles.h3}>
                                LEVE SAÚDE OPERADORA DE PLANOS DE SAÚDE S.A. <br />
                                COMODANTE
                            </h3>
                            <h3 style={styles.h31}>COMODATÁRIO (A)</h3>
                        </Text>
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default Contratos