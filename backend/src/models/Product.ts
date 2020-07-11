import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

//Informa o nome da tabela e inicia a classe
@Entity('Products')
class Product{
    //Informa os campos do modelo de Produto
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    image: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Product