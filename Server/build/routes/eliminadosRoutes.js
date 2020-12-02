"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eliminadosController_1 = require("../controllers/eliminadosController");
class EliminadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', eliminadosController_1.eliminadosController.list);
        this.router.post('/', eliminadosController_1.eliminadosController.create);
        //this.router.put('/:id', eliminadosController.update);
        // this.router.delete('/:id', eliminadosController.delete);
        this.router.get('/:id', eliminadosController_1.eliminadosController.getOne);
    }
}
const eliminadosRoutes = new EliminadosRoutes();
exports.default = eliminadosRoutes.router;
