"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoscontroller_1 = require("../controllers/empleadoscontroller");
class EmpleadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', empleadoscontroller_1.empleadosController.list);
        // this.router.post('/', empleadosController.create);
        this.router.put('/:id', empleadoscontroller_1.empleadosController.update);
        // this.router.delete('/:id', empleadosController.delete);
        this.router.get('/:id', empleadoscontroller_1.empleadosController.getOne);
    }
}
const empleadosRoutes = new EmpleadosRoutes();
exports.default = empleadosRoutes.router;
