import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCoinTable1732483997630 implements MigrationInterface {
    name = 'CreateCoinTable1732483997630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query
        (
            `CREATE TABLE \`coin_market_entity\` (\`id\` uuid NOT NULL, \`created_at\` 
            timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT 
            CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, 
            \`symbol\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`coin_market_entity\``);
    }

}
