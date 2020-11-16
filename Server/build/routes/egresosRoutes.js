"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const egresosController_1 = require("../controllers/egresosController");
class EgresosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', egresosController_1.egresosController.list);
        this.router.post('/', egresosController_1.egresosController.create);
        // this.router.put('/:id', ingresosController.update);
        // this.router.delete('/:id', ingresosController.delete);
        this.router.get('/:id', egresosController_1.egresosController.getOne);
    }
}
const egresosRoutes = new EgresosRoutes();
exports.default = egresosRoutes.router;
