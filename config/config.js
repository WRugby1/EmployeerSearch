require('dotenv').config();

module.exports = {
    development: {
        username: process.env.JAWSUSERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        // use_env_variable: JAWSDB_URL,
        dialect: "mysql"
    },
    test: {
        username: process.env.JAWSUSERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        // use_env_variable: JAWSDB_URL,
        dialect: "mysql"
    },
    production: {
        username: process.env.JAWSUSERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        // use_env_variable: JAWSDB_URL,
        dialect: "mysql"
    }
}
