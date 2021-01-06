"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const herramientasController_1 = require("../controllers/herramientasController");
const middlewares_1 = require("../middlewares");
class HerramientasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', middlewares_1.verifyToken, herramientasController_1.herramientasController.list);
        // this.router.get('/', herramientasController.list);
        this.router.post('/', herramientasController_1.herramientasController.create);
        this.router.put('/:id', herramientasController_1.herramientasController.update);
        this.router.delete('/:id', herramientasController_1.herramientasController.delete);
        this.router.get('/:id', herramientasController_1.herramientasController.getOne);
    }
}
const herramientasRoutes = new HerramientasRoutes();
exports.default = herramientasRoutes.router;
