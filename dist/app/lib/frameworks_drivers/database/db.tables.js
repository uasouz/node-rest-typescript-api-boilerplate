"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
const path = require("path");
exports.getModels = function (seq) {
    const tables = {
        minions: seq.import(path.join(__dirname, './minions')),
    };
    return tables;
};
//# sourceMappingURL=db.tables.js.map