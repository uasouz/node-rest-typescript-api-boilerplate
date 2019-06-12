"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
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
const config = {
    "dialect": "sqlite",
};
const sequelize = new sequelize_1.Sequelize("test", "hadara", "under", config);
exports.default = sequelize;
//# sourceMappingURL=index.js.map