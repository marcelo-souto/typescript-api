import { MigrationInterface, QueryRunner } from "typeorm";

export class default1689265873635 implements MigrationInterface {
    name = 'default1689265873635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizzes" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizzes" DROP COLUMN "name"`);
    }

}
