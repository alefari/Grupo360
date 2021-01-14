"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cargosController_1 = require("../controllers/cargosController");
class CargosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cargosController_1.cargosController.list);
        // this.router.post('/', categoriasController.create);
        // this.router.put('/:id', categoriasController.update);
        // this.router.delete('/:id', categoriasController.delete);
        // this.router.get('/:id', categoriasController.getOne);
    }
}
const cargosRoutes = new CargosRoutes();
exports.default = cargosRoutes.router;
