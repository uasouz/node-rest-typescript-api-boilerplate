"use strict";

import {HelloMinon} from "../../application_business_rules/use_cases/SayHello";

export async function minion(req: any, res: any) {
    res.json(HelloMinon(req.params.username));
}