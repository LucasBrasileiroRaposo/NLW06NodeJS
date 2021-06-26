import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624678065083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({name: "compliments",columns: [
            {
                name: "id",
                type: "uuid",
                isPrimary: true
            },
            {
                name: "user_envio",
                type: "uuid",
            },
            {
                name: "user_recebedor",
                type: "uuid",
            },
            {
                name: "tag_id",
                type: "uuid",
            },
            {
                name: "mensagem",
                type: "varchar",
            },
            {
                name: "created_ad",
                type: "timestamp",
                default: "now()"
            }
        ],
        foreignKeys: [
            {
                name: "FKUserRemetenteCompliments",
                referencedTableName:"users",
                referencedColumnNames: ["id"],
                columnNames: ["user_envio"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            },
            {
                name: "FKUserDestinatarioCompliments",
                referencedTableName:"users",
                referencedColumnNames: ["id"],
                columnNames: ["user_recebedor"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            },
            {
                name: "FKTagCompliments",
                referencedTableName:"tags",
                referencedColumnNames: ["id"],
                columnNames: ["tag_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            }
        ]
    }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
