import { MigrationInterface, QueryRunner } from "typeorm";

export class default1688861732386 implements MigrationInterface {
    name = 'default1688861732386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ADD "text" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "text"`);
    }

}
