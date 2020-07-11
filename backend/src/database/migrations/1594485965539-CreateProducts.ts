import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1594485965539 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'Products',
                columns:[
                    {
                    name:'ID',
                    type:'varchar',
                    isPrimary:true,
                    generationStrategy:'uuid'
                },
                {
                    name:'name',
                    type:'varchar'
                },
                {
                    name:'description',
                    type:'varchar'
                },
                {
                    name:'price',
                    type:'decimal'
                },
                {
                    name:'image',
                    type:'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Products')
    }

}
