import "reflect-metadata";
import { AppDataSource } from "./data-source";
import path from "path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from 'apollo-server';
import { CurrencyExchange } from "./resolvers/CurrencyExchange";

async function main() {

    const schema = await buildSchema({
        resolvers: [
            CurrencyExchange
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen();

    console.log(`Server running on ${url}`);
}

AppDataSource.initialize().then(() => {
    main();
})