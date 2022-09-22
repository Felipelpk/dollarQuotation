import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1663821627973 implements MigrationInterface {
    name = 'migrations1663821627973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "currencyDolar" DROP COLUMN "cotacaoCompra"`);
        await queryRunner.query(`ALTER TABLE "currencyDolar" ADD "cotacaoCompra" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "currencyDolar" DROP COLUMN "cotacaoVenda"`);
        await queryRunner.query(`ALTER TABLE "currencyDolar" ADD "cotacaoVenda" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "currencyDolar" DROP COLUMN "cotacaoVenda"`);
        await queryRunner.query(`ALTER TABLE "currencyDolar" ADD "cotacaoVenda" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "currencyDolar" DROP COLUMN "cotacaoCompra"`);
        await queryRunner.query(`ALTER TABLE "currencyDolar" ADD "cotacaoCompra" integer DEFAULT '0'`);
    }

}
