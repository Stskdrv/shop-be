const  { Client } = require('pg');

export const createClient = async () => {
    const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

    const dbOptions = {
        host: PG_HOST,
        port: PG_PORT,
        database: PG_DATABASE,
        user: PG_USERNAME,
        password: PG_PASSWORD,
        ssl: {
            rejectUnautorized: false
        },

        connectionTimeoutMillis: 7000
    };

    const client = new Client(dbOptions);

    await client.connect();

    return client;
};