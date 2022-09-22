import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DolarExchangeData {

    @Field()
    cotacaoCompra: number;

    @Field()
    cotacaoVenda: number;

    @Field()
    dataHoraCotacao: string;
}