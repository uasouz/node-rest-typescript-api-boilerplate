import {Router} from "express";
import {minion} from "../../interface_adapters/controllers/TestController";
const hello = Router();

hello.get("/minion/:username?",minion);

export default hello;