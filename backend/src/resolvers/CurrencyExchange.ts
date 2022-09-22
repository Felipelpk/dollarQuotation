import { Arg, Query, Resolver } from "type-graphql";
import { AppDataSource } from "../data-source";
import { currencyDolar } from "../database/entities/currencyDolar";
import { DolarExchangeData } from "../models/DolarExchange";
import { bcApi } from "../services/bcApi";

@Resolver()
export class CurrencyExchange {
    currencyDolarRepository = AppDataSource.getRepository(currencyDolar);

    @Query(() => DolarExchangeData)
    async dolarExchange(
        @Arg('dataExchange') dataExchange: string
    ) {
        let value;

        let date = new Date(dataExchange);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getUTCDate();

        const dateExchangeFormatedd = `0${month}-${day}-${year}`;
        
        const valueFromDB = await this.currencyDolarRepository.findBy({ cotacaoData: dateExchangeFormatedd });
        
        if(valueFromDB[0]){
            value = valueFromDB[0]
        } else {
            const valueFromBcbApi = await bcApi.get(`CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${dateExchangeFormatedd}'&$top=100&$format=json`);

            value = valueFromBcbApi.data.value[0];

            const newExchange = this.currencyDolarRepository.create({
                cotacaoCompra: valueFromBcbApi.data.value[0].cotacaoCompra,
                cotacaoVenda: valueFromBcbApi.data.value[0].cotacaoVenda,
                dataHoraCotacao: valueFromBcbApi.data.value[0].dataHoraCotacao,
                cotacaoData: dateExchangeFormatedd,
                cotacaoRequestTimeStamp: Date.now()
            });

            this.currencyDolarRepository.save(newExchange);

        }

        return value;
    }
}