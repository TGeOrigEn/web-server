const Pool = require('pg').Pool;

const {
    PG_USER,
    PG_PASSWORD,
    PG_HOSTNAME,
    PG_PORT, 
    PG_DATABASE
} = process.env;

const pool = new Pool({
    user: PG_USER,
    password: PG_PASSWORD,
    host: PG_HOSTNAME,
    port: PG_PORT,
    database: PG_DATABASE
});

module.exports = pool;
