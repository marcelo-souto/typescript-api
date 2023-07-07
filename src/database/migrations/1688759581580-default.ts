import { MigrationInterface, QueryRunner } from "typeorm";

export class default1688759581580 implements MigrationInterface {
    name = 'default1688759581580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quizzes_questions_questions" ("quizzesId" character varying NOT NULL, "questionsId" character varying NOT NULL, CONSTRAINT "PK_011329696f05e804a17eaef8be2" PRIMARY KEY ("quizzesId", "questionsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6effbc56841c548352f7a67059" ON "quizzes_questions_questions" ("quizzesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f9aa96c894ce46fa2cd799ffac" ON "quizzes_questions_questions" ("questionsId") `);
        await queryRunner.query(`ALTER TABLE "quizzes_questions_questions" ADD CONSTRAINT "FK_6effbc56841c548352f7a670594" FOREIGN KEY ("quizzesId") REFERENCES "quizzes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "quizzes_questions_questions" ADD CONSTRAINT "FK_f9aa96c894ce46fa2cd799ffac7" FOREIGN KEY ("questionsId") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quizzes_questions_questions" DROP CONSTRAINT "FK_f9aa96c894ce46fa2cd799ffac7"`);
        await queryRunner.query(`ALTER TABLE "quizzes_questions_questions" DROP CONSTRAINT "FK_6effbc56841c548352f7a670594"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f9aa96c894ce46fa2cd799ffac"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6effbc56841c548352f7a67059"`);
        await queryRunner.query(`DROP TABLE "quizzes_questions_questions"`);
    }

}
