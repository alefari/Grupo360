"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasController_1 = require("../controllers/categoriasController");
class CategoriasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriasController_1.categoriasController.list);
        this.router.post('/', categoriasController_1.categoriasController.create);
        this.router.put('/:id', categoriasController_1.categoriasController.update);
        this.router.delete('/:id', categoriasController_1.categoriasController.delete);
        this.router.get('/:id', categoriasController_1.categoriasController.getOne);
    }
}
const categoriasRoutes = new CategoriasRoutes();
exports.default = categoriasRoutes.router;
