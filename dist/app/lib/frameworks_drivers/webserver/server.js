"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const winston = require("winston");
// @ts-ignore
const expressWinston = require("express-winston");
const hello_1 = require("./hello");
class Server {
    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(expressWinston.logger({
            transports: [
                new winston.transports.Console()
            ],
            format: winston.format.combine(
            // winston.format.colorize(),
            winston.format.json()),
            level: 'info',
            meta: true,
            msg: "HTTP {{req.method}} {{req.url}}",
            expressFormat: true,
            colorize: false,
            ignoreRoute: function (req, res) {
                return false;
            } // optional: allows to skip some log messages based on request and/or response
        }));
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
            next();
        });
        this.registerRoutes();
    }
    registerRoutes() {
        this.express.use("/hello", hello_1.default);
    }
    listen(port) {
        const listener = this.express.listen(port);
        return listener.address();
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map