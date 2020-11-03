"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unidadesController_1 = require("../controllers/unidadesController");
class UnidadesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', unidadesController_1.unidadesController.list);
        this.router.post('/', unidadesController_1.unidadesController.create);
        this.router.put('/:id', unidadesController_1.unidadesController.update);
        this.router.delete('/:id', unidadesController_1.unidadesController.delete);
        this.router.get('/:id', unidadesController_1.unidadesController.getOne);
    }
}
const unidadesRoutes = new UnidadesRoutes();
exports.default = unidadesRoutes.router;
