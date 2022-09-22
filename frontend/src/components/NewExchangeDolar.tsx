import { gql, useLazyQuery } from "@apollo/client";
import { FormEvent, useEffect, useState } from "react"
import '../App.css'

const GET_EXCHANGE = gql`
    query ($exchangeDate: String!){
        dolarExchange(dataExchange: $exchangeDate){
            cotacaoCompra,
            cotacaoVenda,
            dataHoraCotacao
        }
    }
`

export function NewExchangeDolar() {
    const [ exchangeDate, setExchangeDate ] = useState('');
    const [ dataHoraCotacaoFormatedd, setDataHoraCotacaoFormatedd ] = useState('');
    const [dolarExchange, { data, loading, error }] = useLazyQuery(GET_EXCHANGE);

    async function handleExchangeSubmit(event: FormEvent){
        event.preventDefault();

        await dolarExchange({
            variables: {
                exchangeDate
            }
        });
    }

    useEffect(() => {
        if(data?.dolarExchange.dataHoraCotacao){
            const dataHoraCt = new Date(data?.dolarExchange.dataHoraCotacao).toLocaleString('pt-BR');
            setDataHoraCotacaoFormatedd(dataHoraCt);
        }
    }, [data]);

    return (
        <div className="content">
            <form onSubmit={handleExchangeSubmit}>
                <div className="formContent">
                    <input 
                        className="inputDate" 
                        type="date" 
                        value={exchangeDate} 
                        onChange={e => setExchangeDate(e.target.value)} 
                    />
                    <button type="submit"> Enviar </button>
                </div>
            </form>
            <div className="responseData">
                {(loading && !error) && <p>Carregando...</p>}
                {error && <p>Ops... parece que tivemos problemas para verificar a cotação desse dia, verifique a data e tente novamente.</p>}
                {data && (
                    <>
                        <div className="responseDiv" >
                            <p className="responseTitle">Cotação de Compra:</p>
                            <p className="responseValue">{data?.dolarExchange.cotacaoCompra}</p>
                        </div>
                        <div className="responseDiv" >
                            <p className="responseTitle">Cotação de Venda:</p>
                            <p className="responseValue">{data?.dolarExchange.cotacaoVenda}</p>
                        </div>
                        <div className="responseDiv" >
                            <p className="responseTitle">Data e Hora da Cotação:</p>
                            <p className="responseValue">{dataHoraCotacaoFormatedd}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}