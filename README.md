# Dollar Quotation 

>Repository destined to the creation of a Front-end and Back-end to inform the dollar quotation from a date selected by the user.

>The Front-end is developed using Vitejs + Typescript and the Back-end is made in Nodejs + Graphql.

![Screen Shot 2022-11-19 at 03 38 24](https://user-images.githubusercontent.com/44594611/202838189-c6fb7886-3b53-4d36-9e75-907fdad2f43a.png)

## Install dependencies

```bash
npm install
# or
yarn 
```

### Docker compose commands

```bash
docker-compose up -d
npm run migration:run ou yarn migration:run
```

## Run project

First all, start project using this commands:

```bash
npm run dev
# or
yarn dev
```
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

## 🚀 This project use

- Vitejs
- TypeScript
- Chakra UI + FramerMotion
- ApolloGraphql
- GraphQL
- Node.js
- TypeORM

## Idea

simple application with the intention of informing the dollar quotation from a date. this project uses an external API from the Central Bank of Brazil, all queried dates must be saved in the database to minimize the use of an external API.
