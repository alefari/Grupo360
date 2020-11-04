"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadosController_1 = require("../controllers/estadosController");
class EstadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', estadosController_1.estadosController.list);
        this.router.post('/', estadosController_1.estadosController.create);
        this.router.put('/:id', estadosController_1.estadosController.update);
        this.router.delete('/:id', estadosController_1.estadosController.delete);
        this.router.get('/:id', estadosController_1.estadosController.getOne);
    }
}
const estadosRoutes = new EstadosRoutes();
exports.default = estadosRoutes.router;
