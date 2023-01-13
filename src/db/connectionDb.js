const { Pool } = require("pg");
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER || "fabian",
    host: process.env.HOST || "localhost",
    password: process.env.PASS || "papaya",
    database: process.env.DATABASE || "registers",
    port: process.env.DB_PORT || 5432,
    allowExitOnIdle: true
});


module.exports = {pool}