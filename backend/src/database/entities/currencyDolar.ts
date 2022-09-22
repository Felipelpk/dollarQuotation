import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('currencyDolar')
export class currencyDolar {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'decimal' })
    cotacaoCompra: number;

    @Column({ type: 'decimal' })
    cotacaoVenda: number;

    @Column({ type: 'text' })
    dataHoraCotacao: string;

    @Column({ type: 'text' })
    cotacaoData: string;
    
    @Column({ type: 'text' })
    cotacaoRequestTimeStamp: Date;

}