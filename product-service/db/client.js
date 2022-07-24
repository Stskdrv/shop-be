const  { Client } = require('pg');

const createClient = async () => {
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

        connectionTimeoutMillis: 5000
    };

    const client = new Client(dbOptions);

    await client.connect();

    return client;
};