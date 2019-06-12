"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TestController_1 = require("../../interface_adapters/controllers/TestController");
const hello = express_1.Router();
hello.get("/minion/:username?", TestController_1.minion);
exports.default = hello;
//# sourceMappingURL=hello.js.map