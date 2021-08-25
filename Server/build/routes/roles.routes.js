"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolesController_1 = require("../controllers/rolesController");
class RolesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rolesController_1.rolesController.list);
        // this.router.post('/', categoriasController.create);
        // this.router.put('/:id', categoriasController.update);
        // this.router.delete('/:id', categoriasController.delete);
        // this.router.get('/:id', categoriasController.getOne);
    }
}
const rolesRoutes = new RolesRoutes();
exports.default = rolesRoutes.router;
