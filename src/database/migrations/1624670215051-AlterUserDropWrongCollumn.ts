import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterUserDropWrongCollumn1624670215051 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users","passwords");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
