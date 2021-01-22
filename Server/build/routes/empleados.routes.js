"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoscontroller_1 = require("../controllers/empleadoscontroller");
const middlewares_1 = require("../middlewares");
class EmpleadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', [middlewares_1.authJwt.isAdmin], empleadoscontroller_1.empleadosController.list);
        // this.router.post('/', empleadosController.create);
        this.router.put('/:id', empleadoscontroller_1.empleadosController.update);
        // this.router.delete('/:id', empleadosController.delete);
        this.router.get('/:id', empleadoscontroller_1.empleadosController.getOne);
    }
}
const empleadosRoutes = new EmpleadosRoutes();
exports.default = empleadosRoutes.router;
