import { gql, useLazyQuery } from "@apollo/client";
import { FormEvent, useEffect, useState } from "react"
import { Button, HStack, Input, Flex, FormControl, Text, Heading, Stack, ScaleFade, Icon } from "@chakra-ui/react";
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from 'react-icons/all';

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

        if(exchangeDate === ''){
            return
        }

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
        <Flex marginTop="2rem" flexDir="column" justifyContent="center" alignItems="center">
            <form onSubmit={handleExchangeSubmit}>
                <HStack w="300px">
                    <Input 
                        className="inputCalendar"
                        color="white"
                        placeholder="aqui"
                        _placeholder={{
                            textTransform: 'uppercase'
                        }}
                        borderColor="whiteAlpha.400"
                        type="date"
                        value={exchangeDate} 
                        onChange={e => setExchangeDate(e.target.value)}
                        colorScheme="gray"
                        _hover={{
                            borderColor: 'whiteAlpha.600'
                        }}
                    />
                    <Button
                        type="submit"
                        bgGradient='linear(to-r, teal.500, green.500)'
                        fontWeight="extrabold"
                        w="fit-content"
                        paddingX="2rem"
                        _hover={{
                            bgGradient: 'linear(to-r, #019e9e, #00a200)'
                        }}
                        _active={{
                            bgGradient: 'linear(to-r, #007777, #006600)'
                        }}
                    >
                        Enviar
                    </Button>
                </HStack>
            </form>
                <Flex
                    marginTop="2rem"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="flex-start"
                    h="600px"
                >
                    <ScaleFade initialScale={0.3} in={data}>
                        {(loading && !error) && (
                            <Text fontSize="1rem" fontWeight="bold">
                                Carregando...
                            </Text>
                        )}
                        {error && (
                            <Text fontSize="1rem" fontWeight="bold">
                                Tivemos um problema em verificar a cotação desse dia, tente outra data.
                            </Text>
                        )}
                        <Stack
                            flexDir="column"
                            alignItems="center"
                            justifyContent="center"
                            spacing="1rem"
                        >
                            <Stack
                                className="card"
                                bgColor="#2d3748"
                                borderRadius="8px"
                                padding="1.5rem"
                                flexDir="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Heading 
                                    fontSize="1rem"
                                >
                                    Data e Hora da Cotação:
                                </Heading>
                                <Text>
                                    {dataHoraCotacaoFormatedd}
                                </Text>
                            </Stack>
                            <Stack
                                className="card"
                                bgColor="#2d3748"
                                borderRadius="8px"
                                padding="1.5rem"
                                flexDir="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Heading 
                                    fontSize="1rem"
                                >
                                    Cotação de Compra
                                </Heading>
                                <HStack>
                                    <Icon as={BsArrowUpCircleFill} color="green.300" />
                                    <Text>
                                        {data?.dolarExchange.cotacaoCompra}
                                    </Text>
                                </HStack>
                            </Stack>
                            <Stack
                                className="card"
                                bgColor="#2d3748"
                                borderRadius="8px"
                                padding="1.5rem"
                                flexDir="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Heading 
                                    fontSize="1rem"
                                >
                                    Cotação de Venda
                                </Heading>
                                <HStack>
                                    <Icon as={BsArrowDownCircleFill} color="red.300" />
                                    <Text>
                                        {data?.dolarExchange.cotacaoVenda}
                                    </Text>
                                </HStack>
                            </Stack>
                        </Stack>
                    </ScaleFade>
                </Flex>
        </Flex>
    )
}