# Dollar Quotation 

> Repositório destinado a `criação de um site` para as [PLPs](http://themis.org.br/fazemos/promotoras-legais-populares/) de Guaíba - Rio Grande do Sul.
>
> O objetivo é <ins>disponibilizar uma maneira de contato e divulgação mais rápida e eficaz</ins>.
>
> O site será desenvolvido utilizando ReactJS e o design será feito no Figma.

## Instalando Dependências

```bash
npm install
# or
yarn 
```

### Backend

```bash
docker-compose up -d
npm run migration:run ou yarn migration:run
```

## Iniciando LocalHost
Primeiro, inicie o servidor com os seguintes comandos em seu terminal:

```bash
npm run dev
# or
yarn dev
```
Abra [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

<h1 align="center">
  { Cotação do Dolar }
</h1>

![Screen Shot 2022-11-19 at 03 38 24](https://user-images.githubusercontent.com/44594611/202838189-c6fb7886-3b53-4d36-9e75-907fdad2f43a.png)


## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando:
- VITE
- TypeScript
- CHAKRA UI
- FRAME MOTION
- ApolloClient
- ApolloServer
- GraphQL
- ts-node
- TypeORM

## Projeto

Uma aplicação simples que informa a cotação do dólar de acordo com uma data, foi necessário utilizar uma API do Banco Central do Brasil para consultar datas que não estão salvas no nosso banco naquele momento, caso o usuário consulte por uma data que esteja salva no nosso banco postgres não precisamos fazer uma request para a API do BCB.




