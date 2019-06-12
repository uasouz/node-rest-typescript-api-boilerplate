import {Sequelize, DataTypes, Options} from "sequelize";
// import * as dotenv from "dotenv";

// dotenv.config({path: require.resolve("/etc/abaddon/env")});
const env = process.env.NODE_ENV || "development";
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ]
});
const config : Options = {
    "dialect": "sqlite",
    // "logging": logger.info,//(data, benchmark) => { console.log(JSON.stringify({ time: new Date().getTime(), query: data, executionTime: benchmark })) },
};

const sequelize = new Sequelize("test","hadara","under",config);

export default sequelize;