"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subcategoriasController_1 = require("../controllers/subcategoriasController");
class SubategoriasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', subcategoriasController_1.subcategoriasController.list);
        this.router.post('/', subcategoriasController_1.subcategoriasController.create);
        this.router.put('/:id', subcategoriasController_1.subcategoriasController.update);
        this.router.delete('/:id', subcategoriasController_1.subcategoriasController.delete);
        this.router.get('/:id', subcategoriasController_1.subcategoriasController.getOne);
    }
}
const subcategoriasRoutes = new SubategoriasRoutes();
exports.default = subcategoriasRoutes.router;
