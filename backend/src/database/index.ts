import { createConnection, getConnectionOptions, Connection } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {

    //Cria a conexão com o banco de dados
    const defaultOptions = await getConnectionOptions();

    return createConnection();
};
